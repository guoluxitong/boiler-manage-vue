<template>
  <div>
    <el-row class="app-query">
      <el-input v-model="listQuery.boilerNo" placeholder="锅炉编号" style="width: 150px;"></el-input>
      <el-select
        clearable
        style="width: 150px"
        v-model="listQuery.boilerModelNumber"
        placeholder="锅炉型号"
      >
        <el-option
          v-for="item in boilerModelNumberArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="listQuery.controllerNo" placeholder="控制器编号" style="width: 150px;"></el-input>
      <el-select clearable style="width: 150px" v-model="listQuery.fuel" placeholder="燃料">
        <el-option
          v-for="item in fuelArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select clearable style="width: 150px" v-model="listQuery.medium" placeholder="介质">
        <el-option
          v-for="item in mediumArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <!--<el-button style="margin-left: 10px;" @click="showMap" type="primary" icon="el-icon-location-outline">地图分布</el-button>-->
    </el-row>
  <div class="map-container">
    <div id="map" class="map" :style="{height:mapHeight+'px'}"></div>
  </div>
  </div>
</template>
<script>
import checkPermission from "@/utils/permission";
import { productDataOnMap } from "@/api/product";
import { initMedium, initFuel, initIsSell } from "./product-dictionary";
import { getBoilerModelListByCondition } from "@/api/boilerModel";
import { validatePositiveAndSmallAndFloatNum } from "@/utils/validate";
function dictionaryValueFilter(dictionaryValue, value) {
  const dictionaryValueItem = dictionaryValue.filter(item => {
    return item.value == value;
  });
  return dictionaryValueItem[0];
}
export default {
  name: "devicemap",
  components: {},
  props: {
    mapHeight: {
      type: Number,
      default: document.documentElement.clientHeight-140
    }
  },
  data() {
    const validatePositiveAndSmallAndFloatNumFun = (rule, value, callback) => {
      if (!validatePositiveAndSmallAndFloatNum(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    const validateFuelFun = (rule, value, callback) => {
      if (value == null) {
        callback(new Error("请选择燃料"));
      } else {
        callback();
      }
    };
    const validateMediumFun = (rule, value, callback) => {
      if (value == null) {
        callback(new Error("请选择介质"));
      } else {
        callback();
      }
    };
    return {
      listQuery: {
        organizationType: null,
        organizationNo: null,
        boilerNo: "",
        saleDate: null,
        controllerNo: "",
        boilerCustomerName: null,
        boilerModelNumber: null,
        tonnageNum: null,
        medium: null,
        fuel: null,
        userId: null
      },
      boilerModelNumberArray: [],
      mediumArray: [],
      fuelArray: [],
      isSellArray: [],
      rules: {
        tonnageNum: [
          { trigger: "blur", validator: validatePositiveAndSmallAndFloatNumFun }
        ],
        boilerNo: [
          { required: true, trigger: "blur", message: "锅炉编号不能为空" }
        ],
        controllerNo: [
          { required: true, trigger: "blur", message: "设备编号不能为空" }
        ],
        fuel: [{ required: true, trigger: "blur", validator: validateFuelFun }],
        medium: [
          { required: true, trigger: "blur", validator: validateMediumFun }
        ]
      },
      center: { lng: 105, lat: 34 },
      mapPoints: [],
      userId: "",
      controllerNoArray: [],
      addressArray: [],
      address: "",
      controllerNo: "",
      controllerRunInfoDialogVisible: false
    };
  },
  filters: {
    dictionaryValueFieldFilter(value, dictionaryValueArray) {
      if (dictionaryValueFilter(dictionaryValueArray, value))
        return dictionaryValueFilter(dictionaryValueArray, value).label;
      return;
    }
  },
  created() {
    Promise.all([this.initSelect()]).then(() => {
      this.loadMapData();
    });
  },
  mounted() {
  },
  methods: {
    initSelect() {
      getBoilerModelListByCondition({
        orgId: this.$store.state.user.orgId,
        orgType: this.$store.state.user.orgType
      }).then(data => {
        this.boilerModelNumberArray = data.data.data;
      });
      initMedium().then(data => {
        this.mediumArray = data;
      });
      initFuel().then(data => {
        this.fuelArray = data;
      });
      initIsSell().then(data => {
        this.isSellArray = data;
      });
    },
    handleFilter() {
      this.listQuery.pageNum = 1;
      this.loadMapData();
    },
    loadMapData() {
      let map = new BMap.Map("map");
      let point = new BMap.Point(this.center.lng, this.center.lat);
      map.centerAndZoom(point, 6);
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      map.clearOverlays();
      //3->锅炉厂管理员 5->锅炉厂普通用户
      if (checkPermission(["3", "5"]))
        this.userId = this.$store.state.user.userId;
      productDataOnMap(this.listQuery).then(res => {
        this.showMapData(map, res.data.data);
      });
    },
    showMapData(map, data) {
      this.mapPoints = data;
      let markers = [];
      let self = this;
      for (let i = 0; i < this.mapPoints.length; i++) {
        if (
          this.mapPoints[i].longitude == null ||
          this.mapPoints[i].latitude == null
        ) {
          continue;
        }
        let points = new BMap.Point(
          this.mapPoints[i].longitude,
          this.mapPoints[i].latitude
        );
        let mk = new BMap.Marker(points);
        markers.push(mk);
        //点击气泡添加需要监控的设备数据
        mk.addEventListener("click", () => {
          let point = this.mapPoints[i];
          if (this.controllerNoArray.indexOf(point.controllerNo) == -1) {
            this.controllerNoArray.push(point.controllerNo);
            this.addressArray.push(
              point.province + point.city + point.district
            );
          }
          this.address = point.province + point.city + point.district;
          this.controllerRunInfoDialogVisible = true;
          this.controllerNo = this.mapPoints[i].controllerNo;
          this.sendControllerNoArrayToParent();
        });
      }
      new BMapLib.MarkerClusterer(map, { markers: markers });
    },
    sendControllerNoArrayToParent() {
      this.$emit(
        "listenToDeviceMap",
        this.controllerNoArray,
        this.addressArray,
        this.address,
        this.controllerNo,
        this.controllerRunInfoDialogVisible
      );
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.map-container {
  .map {
    width: 98% !important;
    margin: 5px auto;
    border-radius: 10px;
  }
}
</style>
