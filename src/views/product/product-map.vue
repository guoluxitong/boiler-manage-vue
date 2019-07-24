<template>
  <el-dialog title="售出" :visible.sync="visible" @close="close">
    <el-form :rules="rules" ref="productMap" :model="mapData">
      <el-row>
        <el-col :span="6">
          <el-form-item prop="customerId">
            <el-select
              clearable
              class="filter-item"
              v-model="mapData.customerId"
              style="width: 100%"
              @change="changeBoilerCustomerGetLabel"
              placeholder="客户"
            >
              <el-option
                v-for="item in boilerCustomerArray"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item clearable prop="saleDate">
            <el-date-picker
              placeholder="售出时间"
              v-model="mapData.saleDate"
              type="date"
              value-format="yyyy-MM-dd"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="street">
            <el-input
              id="suggestId"
              placeholder="售出地址"
              v-model="mapData.street"
              class="input-with-select"
            >
              <el-button slot="append" icon="el-icon-search" @click="mapSearch"></el-button>
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <el-row>
      <baidu-map
        v-if="visible"
        class="bm-view"
        ak="eqPZV35edaZZGefOIopjLNqTSj4qI89Y"
        :center="center"
        :zoom="zoom"
        :scroll-wheel-zoom="true"
        @ready="handler"
        @click="mapClick"
      >
        <bm-marker
          v-for="marker of markers"
          :key="marker.lat"
          :position="{lng: marker.lng, lat: marker.lat}"
          animation="BMAP_ANIMATION_BOUNCE"
        ></bm-marker>
      </baidu-map>
    </el-row>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="submit">确 定</el-button>
      <el-button type="warning" icon="el-icon-back" @click="cancel">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
import { formatDateTime } from "@/utils/date";
import { getList } from "@/api/customer";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import {productSell} from '@/api/product'


export default {
  name: "product-map",
  components: {
    BaiduMap,
    BmMarker
  },
  data() {
    const validateCustomerId = (rule, value, callback) => {
      if (value == null) {
        callback(new Error("请选择客户"));
      } else {
        callback();
      }
    };
    return {
      boilerCustomerArray: [],
      mapData: {
        id: 0,
        customerId: null,
        customerName: null,
        saleDate: "",
        province: "",
        city: "",
        district: "",
        street: "",
        isSell: 1,
        longitude: "",
        latitude: "",
        editDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss")
      },
      rules: {
        customerId: [{ required: true, validator: validateCustomerId }],
        saleDate: [
          { required: true, trigger: ["blur"], message: "售出时间不能为空" }
        ],
        street: [
          { required: true, trigger: ["blur"], message: "售出地址不能为空" }
        ]
      },
      center: { lng: 0, lat: 0 },
      zoom: 3,
      markers: [],
      isCancel: true
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    productData: {
      type: Object,
      default: () => null
    }
  },
  watch: {
    show(val) {
      this.visible = val
      if(val){
        this.isCancel = true
      }
    }
  },
  computed: {
    visible: {
      get() {
        return this.show;
      },
      set(v) {
        this.$emit("update:show", v);
      }
    }
  },
  mounted() {
    getList({ pageNum: 1, pageSize: 1000 })
      .then(response => {
        let data = response.data;
        if (data.code) {
          this.$message.error(data.msg);
        } else {
          data.data.list.forEach(item => {
            this.boilerCustomerArray.push({ label: item.name, value: item.id });
          });
        }
      })
      .catch(reason => {
        this.$message.error(reason);
      });
  },
  methods: {
    addMark(point, isSearch = false) {
      this.markers = [];
      this.markers.push(point);
      this.mapData.longitude = point.lng;
        this.mapData.latitude = point.lat;
      if (isSearch) {
        this.center = point;
      }
      let geoc = new BMap.Geocoder();
      geoc.getLocation(point, res => {
        if (res) {
          this.mapData.province = res.addressComponents.province;
          this.mapData.city = res.addressComponents.city;
          this.mapData.district = res.addressComponents.district;
          if (!isSearch) {
            this.mapData.street = res.address;
          }
        }
      });
    },
    handler() {
      if (this.productData) {
        this.mapData.id = this.productData.id;
        this.mapData.customerId = this.productData.customerId;
        this.mapData.customerName = this.productData.customerName;
        this.mapData.saleDate = this.productData.saleDate;
        this.mapData.province = this.productData.province;
        this.mapData.city = this.productData.city;
        this.mapData.district = this.productData.district;
        this.mapData.street = this.productData.street;
        this.mapData.longitude = parseFloat(this.productData.longitude);
        this.mapData.latitude = parseFloat(this.productData.latitude);
        if (
          this.productData.isSell &&
          this.mapData.longitude &&
          this.mapData.latitude
        ) {
          this.addMark(
            { lng: this.mapData.longitude, lat: this.mapData.latitude },
            true
          );
          this.zoom = 15;
          return;
        }
      }
      this.center.lng = 120;
      this.center.lat = 38;
      this.zoom = 4;
    },
    mapClick({ type, target, point, pixel, overlay }) {
      this.addMark(point);
    },
    mapSearch() {
      var myGeo = new BMap.Geocoder();
      myGeo.getPoint(this.mapData.street, point => {
        if (point) {
          this.addMark(point, true);
          this.zoom = 12;
        }
      });
      return false;
    },
    changeBoilerCustomerGetLabel(value) {
      let boilerCustomerItem = this.boilerCustomerArray.find(item => {
        return item.value == value;
      });
      this.mapData.customerName = boilerCustomerItem.label;
    },
    close() {
      this.$refs.productMap.resetFields();
      this.markers = [];
      this.$emit("onClosed",this.isCancel)
    },
    cancel() {
      this.visible = false
    },
    submit() {
      //售出锅炉
      productSell(this.mapData).then(response=>{
        let data = response.data
        if(data.code){
          this.$message.error(data.msg)
          return
        }
        else{
          this.$message({
            message: "出售成功",
            type: "success"
          });
          this.isCancel = false
          this.visible = false
        }
      }).catch(reason=>{
        this.$message.error(data.msg)
      })
    },
  }
};
</script>
<style>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>