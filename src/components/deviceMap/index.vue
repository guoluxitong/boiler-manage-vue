<template>
  <el-row>
    <baidu-map
      class="bm-view"
      :style="{height:mapHeight+'px'}"
      ak="eqPZV35edaZZGefOIopjLNqTSj4qI89Y"
      :center="center"
      :zoom="zoom"
      :scroll-wheel-zoom="true"
      @ready="handler"
    >
      <bm-control anchor="BMAP_ANCHOR_TOP_RIGHT">
        <el-button icon="el-icon-search" type="primary" @click="query = !query">搜索</el-button>
        <el-button v-if="showFullBtn" icon="el-icon-view" type="primary" @click="tlg()">{{fullText}}</el-button>
      </bm-control>
      <bm-marker
        v-for="marker in markers"
        :key="marker.device.controllerNo"
        :position="{lng: marker.lng, lat: marker.lat}"
        @click="markerClick(marker.device)"
      >
        <!-- <bm-info-window
          :show="marker.device.show"
          @close="infoWindowClose(marker)"
          @open="infoWindowOpen(marker)"
        >{{marker.device.boilerNo}}<br/>{{marker.device.address}}</bm-info-window>-->
      </bm-marker>
    </baidu-map>
    <!-- <div class="search">
      <el-button type="primary" @click="query = !query" v-if="!query" icon="el-icon-search" circle></el-button>
    </div>-->
    <transition name="slide-fade" mode="in-out">
      <el-card class="box-card" v-if="query">
        <div slot="header" class="clearfix">
          <span>锅炉搜索</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="query=!query">X</el-button>
        </div>
        <el-row>
          <el-form ref="form" :model="product">
            <el-form-item>
              <el-select v-model="product.customerName" placeholder="客户">
                <el-option
                  v-for="item in customerList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="product.productCategoryId" placeholder="锅炉型号">
                <el-option
                  v-for="item in productCategory"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="product.power" placeholder="燃料">
                <el-option
                  v-for="item in fuelArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-select v-model="product.media" placeholder="介质">
                <el-option
                  v-for="item in mediumArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="product.boilerNo" placeholder="锅炉编号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-col :span="9">&nbsp;</el-col>
              <el-col :span="6">
                <el-button icon="el-icon-search" @click="searchProduct">搜索</el-button>
              </el-col>
              <el-col :span="9">&nbsp;</el-col>
            </el-form-item>
          </el-form>
        </el-row>
      </el-card>
    </transition>
  </el-row>
</template>
<script>
import { productSearch } from "@/api/product";
import { getList } from "@/api/customer";
import { initMedium, initFuel, initIsSell } from "./product-dictionary";
import { getProductCategoryList } from "@/api/productCategory";
import { validatePositiveAndSmallAndFloatNum } from "@/utils/validate";
import BaiduMap from "vue-baidu-map/components/map/Map.vue";
import BmlMarkerClusterer from "vue-baidu-map/components/extra/MarkerClusterer";
import BmMarker from "vue-baidu-map/components/overlays/Marker";
import BmInfoWindow from "vue-baidu-map/components/overlays/InfoWindow";
import BmControl from "vue-baidu-map/components/controls/Control";

function dictionaryValueFilter(dictionaryValue, value) {
  const dictionaryValueItem = dictionaryValue.filter(item => {
    return item.value == value;
  });
  return dictionaryValueItem[0];
}
export default {
  name: "devicemap",
  components: {
    BaiduMap,
    BmlMarkerClusterer,
    BmMarker,
    BmInfoWindow,
    BmControl
  },
  props: {
    mapHeight: {
      type: Number,
      default: document.documentElement.clientHeight - 140
    },
    showInfo: {
      type: Boolean,
      default: false
    },
    showFullBtn:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      query: false,
      product: {
        boilerNo: "",
        customerId: null,
        productCategoryId: null,
        tonnageNum: null,
        media: null,
        power: null
      },
      productCategory: [],
      mediumArray: [],
      fuelArray: [],
      center: { lng: 105, lat: 34 },
      customerList: [],
      controllerRunInfoDialogVisible: false,
      center: { lng: 0, lat: 0 },
      zoom: 3,
      markers: [],
      fullText:'全屏'
    };
  },
  mounted() {
    this.initSearchOptions();
  },
  methods: {
    tlg() {
      let f = this.$store.state.app.fullMap
      if(f){
        this.fullText='全屏'
      }
      else{
        this.fullText='返回'
      }
      this.$store.dispatch("changeMapState", !this.$store.state.app.fullMap);
    },
    infoWindowClose(marker) {
      marker.device.show = false;
    },
    infoWindowOpen() {
      marker.device.show = true;
    },
    handler() {
      this.center.lng = 110;
      this.center.lat = 38;
      this.zoom = 5;
    },
    markerClick(device) {
      // if (this.showInfo) {
      //   device.show = true;
      // }
      this.$emit("onDeviceClicked", device);
    },
    searchProduct() {
      productSearch({
        product: this.product,
        pageNum: 1,
        pageSize: 1000
      }).then(res => {
        let data = res.data;
        if (data.code) {
          this.$message.error(data.msg);
          return;
        } else {
          this.markers = [];
          data.data.list.forEach(item => {
            if (item.isSell) {
              this.markers.push({
                lng: item.longitude,
                lat: item.latitude,
                device: {
                  show: false,
                  boilerNo: item.boilerNo,
                  controllerNo: item.controllerNo,
                  address: item.street
                }
              });
            }
          });
        }
      });
    },
    initSearchOptions() {
      getProductCategoryList().then(data => {
        this.productCategory = [];
        data.data.data.forEach(item => {
          let optionItem = {};
          optionItem.value = item.id;
          optionItem.label = item.name;
          this.productCategory.push(optionItem);
        });
      });
      getList({ pageNum: 1, pageSize: 1000 }).then(response => {
        this.customerList = [];
        response.data.data.list.forEach(item => {
          let optionItem = {};
          optionItem.value = item.name;
          optionItem.label = item.name;
          this.customerList.push(optionItem);
        });
      });
      initMedium().then(data => {
        this.mediumArray = data;
      });
      initFuel().then(data => {
        this.fuelArray = data;
      });
    }
  }
};
</script>
<style>
.bm-view {
  width: 100%;
}
.search {
  position: fixed;
  top: 45%;
  right: 20px;
}
.box-card {
  position: fixed;
  bottom: 0%;
  right: 0px;
  width: 260px;
  background-color: floralwhite;
  border: gainsboro 1px solid;
  padding: 15px 10px;
}
</style>
