<template>
  <div>
    <div class="leftDiv">
      <div style="margin: 30px 15px 30px 30px">
        <div id="map" class="map" :style="{height:mapHeight/8*5+'px'}">
          <device-map :map-height="mapHeight" v-on:listenToDeviceMap="receiveToDeviceMap"></device-map>
        </div>
        <div id="weather" class="weather">
          <iframe
            class="weatherIFrame"
            scrolling="no"
            frameborder="0"
            allowtransparency="true"
            :src="weatherSrc"
            v-show="flag"
            :style="{height:mapHeight/9*1.5+'px',center}"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="rightDiv">
      <div style="margin: 30px 30px 30px 15px">
        <line-chart-a
          class="chart"
          style="flot:'left'"
          :chartHeight="mapHeight/8*2.5"
          :chartWidth="mapWidth/4.5"
          :chartData="lineChartData"
        ></line-chart-a>
        <pie-chart-a
          class="chart"
          style="flot:'left'"
          :chartHeight="mapHeight/8*2.5"
          :chartWidth="mapWidth/4.5"
          :chartData="pieChartData"
        ></pie-chart-a>
      </div>
      <div style="float: left;margin: 10px 1%;width: 66%;display: inline-block;">
        <div class="runInfo" :style="{height:mapHeight/8*3.5+'px'}">
          <runinfo-show
            v-show="flag"
            class="runInfoShow"
            :controllerNo="this.controllerNo"
            :address="this.productAddress"
          ></runinfo-show>
        </div>
      </div>
      <div style="float: left;margin: 65px 1%;width: 30%;display: inline-block;text-align:center">
        <img class="pic" src="/static/common/wechat.jpg" alt="微信小程序">
        <p>扫码在手机上查看</p>
      </div>
    </div>
  </div>
</template>


<script>
import deviceMap from "@/components/deviceMap/index";
import {
  getCityCodeByLatAndLng,
  getWeatherByAdCode,
  ConvertPinyin
} from "@/api/device-map";
import checkPermission from "@/utils/permission";
import { productDataOnMap } from "@/api/product";
import runinfo from "@/components/controller-run-info/index";
import { config } from "@/config/index";
import { getDeviceByByteDataAndType } from "@/deviceAdapter";
import { getControllerByteData, getControllerType } from "@/api/controller";
import {
  getProductListByCondition,
  getProductUserListByProductCondition,
  insertManyProductUser,
  productTypeAmountByCondition
} from "@/api/product";
import lineChartA from "@/components/reportForms/runChart";
import pieChartA from "@/components/reportForms/pieChart";
export default {
  name: "device-run-info",
  components: {
    runinfoShow: runinfo,
    deviceMap,
    lineChartA,
    pieChartA
  },
  props: {
    mapHeight: {
      type: Number,
      default: document.documentElement.clientHeight - 30
    },
    mapWidth: {
      type: Number,
      default: document.documentElement.clientWidth
    }
  },
  data() {
    return {
      center: { lng: 105, lat: 34 },
      flag: false,
      src: "//i.tianqi.com/index.php?c=code&id=19&icon=1&temp=1&num=5&site=12",
      weatherSrc: "",
      controllerNo: "",
      listQuery: {
        total: 50,
        pageNum: 1,
        pageSize: 5,
        organizationType: null,
        organizationNo: null,
        boilerNo: "",
        saleDate: null,
        controllerNo: "",
        boilerModelNumber: null,
        tonnageNum: null,
        media: null,
        power: null,
        userId: null,
        isSell: null
      },
      productAddress: "",
      lineChartData: {
        time: "",
        title: "",
        value: "",
        unit: ""
      },
      pieChartData: {
        title: "",
        array: []
      }
    };
  },
  created() {
    this.getProductList();
  },
  methods: {
    receiveToDeviceMap(
      controllerNoAry,
      addressAry,
      address,
      controllerNo,
      flag
    ) {
      this.weatherSrc = this.src;
      this.flag = flag;
      let cityPinyin = ConvertPinyin(this.getArea(address).City);
      switch (cityPinyin) {
        case "beijing":
        case "taian":
          cityPinyin = cityPinyin + "1";
          break;
        default:
          break;
      }
      this.weatherSrc = this.src + "&py=" + cityPinyin;
      this.$store.state.user.deviceRunInfoNo = controllerNo;
      this.controllerNo = controllerNo;
      this.getLineChartDeviceFocus();
    },
    /**
     * 地址解析
     * @param address 地址字符串
     */
    getArea(address) {
      this.productAddress = address;
      //地址解析
      let area = {};
      let index11 = 0;
      let index1 = address.indexOf("省");
      if (index1 == -1) {
        index11 = address.indexOf("自治区");
        if (index11 != -1) {
          area.Province = address.substring(0, index11 + 3);
        } else {
          area.Province = address.substring(0, 0);
        }
      } else {
        area.Province = address.substring(0, index1 + 1);
      }

      let index2 = address.indexOf("市");
      if (index11 == -1) {
        area.City = address.substring(index11 + 1, index2);
      } else {
        if (index11 == 0) {
          area.City = address.substring(index1 + 1, index2);
        } else {
          area.City = address.substring(index11 + 3, index2);
        }
      }

      let index3 = address.lastIndexOf("区");
      if (index3 == -1) {
        index3 = address.indexOf("县");
        area.Country = address.substring(index2 + 1, index3 + 1);
      } else {
        area.Country = address.substring(index2 + 1, index3 + 1);
      }
      return area;
    },
    /**
     * 通过控制器编号获得设备类型和字节数据
     * @param controllerNo 控制器编号
     */
    getLineChartDeviceFocus() {
      Promise.all([
        getControllerByteData(this.controllerNo),
        getControllerType(this.controllerNo)
      ])
        .then(data => {
          console.log("数据报表页面正在请求数据");
          let controllerByteData = data[0].data;
          let controllerType = data[1].data.deviceType;
          if (controllerByteData.length > 0 && controllerType) {
            this.getDeviceByByteDataAndType(controllerByteData, controllerType);
          }
        })
        .catch(function(r) {
          console.log(r);
        });
    },
    /**
     * 通过字节数据和设备类型获得设备数据
     * @param byteData 字节数据
     * @param deviceType 设备类型
     */
    getDeviceByByteDataAndType(byteData, deviceType) {
      getDeviceByByteDataAndType(byteData, deviceType).then(data => {
        let map = data.getMockFields().map;
        for (let key in map) {
          if (map[key] != null && map[key].key == "mockInfo") {
            this.lineChartData.title = map[key].title;
            this.lineChartData.value = map[key].value;
            this.lineChartData.unit = map[key].unit;
            console.log(this.lineChartData);
            break;
          }
        }
      });
    },

    getProductList() {
      if (checkPermission(["3", "5"])) {
        this.listQuery.userId = this.$store.state.user.userId;
      }
      productTypeAmountByCondition(this.$store.state.user.userId).then(
        response => {
          let list = response.data.data;
          this.pieChartData.title = "设备型号统计";
          for (let i in list) {
            let typeName = list[i].fuelType + list[i].mediumType;
            this.pieChartData.array.push({
              value: list[i].amount,
              name: typeName
            });
          }
          console.log(this.pieChartData);
        }
      );
    }
  }
};
</script>
<style>
.leftDiv {
  width: 50%;
  float: left;
}
.rightDiv {
  width: 50%;
  float: right;
}
.weatherIFrame {
  width: 100%;
  margin: 0 auto;
}
.weather {
  margin: 15px auto;
}
.runInfo {
  position: relative;
  overflow: hidden;
}
.runInfoShow {
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;
}
.runInfoShow::-webkit-scrollbar {
  display: none;
}
.chart {
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 49%;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  display: inline-block;
}
.map {
  width: 100%;
  margin: 15px auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.runInfo {
  float: left;
  width: 95%;
  margin: 10px;
  background-color: #f5f5f5;
  border-radius: 10px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.pic {
  margin: auto, 15px;
  width: auto;
  height: 200px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
