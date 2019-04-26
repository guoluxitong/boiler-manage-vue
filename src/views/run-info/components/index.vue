<template>
  <div>
    <div class="leftDiv">
      <div style="margin: 30px 15px 30px 30px">
        <div id="map" class="map" :style="{height:mapHeight/8*5+'px'}"></div>
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
        <div style="width: 50%;float: left">
          <span style="font-size: large;font-weight: bold">{{this.mockInfoMap.title}}实时曲线</span>
        </div>
        <div style="width: 50%;float: right">
          <span style="font-size: large;font-weight: bold">锅炉设备数量统计</span>
        </div>
        <div>
          <div class="chart" id="lineChart" :style="{height:mapHeight/8*2.5+'px',float:'left'}"></div>
          <div class="chart" id="barChart" :style="{height:mapHeight/8*2.5+'px',float:'right'}"></div>
        </div>
      </div>
      <div style="float: left;margin: 10px 1%;width: 66%;display: inline-block;">
        <h3 style="margin:0 10px">控制器编号：{{this.controllerNo}}</h3>
        <p style="margin:0 10px">{{this. productAddress}}</p>
        <div class="runInfo" :style="{height:mapHeight/8*3.5+'px'}">
          <runinfo-show v-show="flag" class="runInfoShow" :controllerNo="this.controllerNo"></runinfo-show>
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
import {
  getDeviceMapListByCondition,
  getCityCodeByLatAndLng,
  getWeatherByAdCode,
  ConvertPinyin
} from "@/api/device-map";
import checkPermission from "@/utils/permission";
import { productDataOnMap } from "@/api/product";
import runinfo from "@/components/controller-run-info";
import { config } from "@/config/index";
import {
  getDeviceByByteDataAndType,
  getCmdMapByDevice
} from "@/dataparse/model/deviceAdapter";
import { getControllerByteData, getControllerType } from "@/api/controller";
import {
  getProductListByCondition,
  getProductUserListByProductCondition,
  insertManyProductUser,
  productTypeAmountByCondition
} from "@/api/product";
export default {
  name: "map-component",
  components: {
    runinfoShow: runinfo
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
      mapPoints: [],
      enterpriseId: "",
      weatherShow: false,
      flag: false,
      weatherLives: null,
      lives: {
        province: "",
        city: "",
        weather: "", //天气
        temperature: "", //气温
        winddirection: "", //风向
        windpower: "", //风力
        humidity: "", //空气湿度
        reporttime: "" //数据发布时间
      },
      src: "//i.tianqi.com/index.php?c=code&id=19&icon=1&temp=1&num=5&site=12",
      weatherSrc: "",
      chartDeviceInfo: {
        chartName: ""
      },
      chartNameArray: [],
      mockInfoMap: {
        title: "",
        value: "",
        unit: ""
      },
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
        medium: null,
        fuel: null,
        userId: null,
        isSell: null
      },
      productTypeArray: [],
      productAddress:"",
    };
  },
  mounted() {
    let map = new BMap.Map("map");
    let point = new BMap.Point(this.center.lng, this.center.lat);
    map.centerAndZoom(point, 6);
    map.enableScrollWheelZoom(true);
    map.enableDoubleClickZoom(true);
    this.loadMapData(map);
    this.getProductList();
  },
  methods: {
    getlocation() {
      //定位方法
      var map = new BMap.Map("weather");
      var point = new BMap.Point(116.331398, 39.897445);
      map.centerAndZoom(point, 12);
      var geolocation = new BMap.Geolocation();
      geolocation.getCurrentPosition(function(r) {
        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          alert("您的位置：" + r.point.lng + "," + r.point.lat);
        } else {
          alert("failed" + this.getStatus());
        }
      });
    },
    loadMapData(map) {
      //加载地图
      if (checkPermission(["3", "5"]))
        this.userId = this.$store.state.user.userId;
      productDataOnMap({ userId: this.userId }).then(res => {
        this.showMapData(map, res.data.data);
      });
    },
    /**
     * 显示地图标点的设备相关信息
     */
    showMapData(map, data) {
      this.mapPoints = data;
      let markers = [];
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
        let address =
          this.mapPoints[i].province +
          this.mapPoints[i].city +
          this.mapPoints[i].district;
        mk.addEventListener("click", () => {
          this.weatherSrc = this.src;
          this.flag = true;
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
          this.$store.state.user.deviceRunInfoNo = this.mapPoints[i].controllerNo;
          this.controllerNo = this.mapPoints[i].controllerNo;
          this.getLineChartDeviceFocus();
          this.drawLine();
        });
      }
      new BMapLib.MarkerClusterer(map, { markers: markers });
    },
    /**
     * 绘制报表
     */
    drawLine() {
      //绘制报表
      let that = this;
      var dom = document.getElementById("lineChart");
      let dom2 = document.getElementById("barChart");
      var myChart = this.$echarts.init(dom);
      let myChart2 = this.$echarts.init(dom2);
      let optionLine = null;
      let optionPie = null;
      function randomData() {
        now = new Date(+now + oneDay);
        //value = Math.round(Math.random() * 20 + 120 + 1);
        value = that.mockInfoMap.value;
        return {
          name: now.toString(),
          value: [
            [now.getTime()],
            //Math.round(value)
            value
          ]
        };
      }

      var data = [];
      var now = null;
      now = new Date(new Date().getTime() - 2 * 60 * 1000);
      var oneDay = 1 * 1000;
      var value = "";
      for (var i = 0; i < 100; i++) {
        data.push(randomData());
      }
      var title = that.mockInfoMap.title;
      console.log(optionLine);
      optionLine = {
        title: {},
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getHours() +
              ":" +
              (date.getMinutes() > 9
                ? date.getMinutes()
                : "0" + date.getMinutes()) +
              "=>" +
              params.value[1] +
              (params.value[1] ? that.mockInfoMap.unit : "无数据")
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false
          }
        },
        grid: {
          y: "10%",
          x2: "10%",
          y2: "10%",
          x: "10%"
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }
        ]
      };

      setInterval(function() {
        for (var i = 0; i < 10; i++) {
          data.shift();
          data.push(randomData());
        }

        myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 10000);
      optionPie = {
        title: {},
        tooltip: {},
        series: [
          {
            name: "数量统计",
            type: "pie",
            data: this.productTypeArray,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      if (
        optionLine &&
        typeof optionLine === "object" &&
        (optionPie && typeof optionPie === "object")
      ) {
        myChart.clear();
        myChart2.clear();
        myChart.setOption(optionLine, true);
        myChart2.setOption(optionPie, true);
      }
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
      Promise.all([getControllerByteData(this.controllerNo), getControllerType(this.controllerNo)]).then((data) => {
            console.log("数据报表页面正在请求数据")
            let controllerByteData = data[0].data
            let controllerType = data[1].data.deviceType
            if (controllerByteData.length > 0 && controllerType) {
              this.getDeviceByByteDataAndType(controllerByteData, controllerType)
            }
          }).catch(function (r) {
            console.log(r);
          })
    },
    /**
     * 通过字节数据和设备类型获得设备数据
     * @param byteData 字节数据
     * @param deviceType 设备类型
     */
    getDeviceByByteDataAndType (byteData, deviceType) {
          getDeviceByByteDataAndType(byteData, deviceType).then(data => {
          let map = data.getMockFields();
        for (let key in map) {
          if (map[key] != null && map[key].key == "mockInfo") {
            this.mockInfoMap.title = map[key].title;
            this.mockInfoMap.value = map[key].value;
            this.mockInfoMap.unit = map[key].unit;
            break;
          }
        }
      });
    },
    getProductList() {
      if (checkPermission(["3", "5"])) {
        this.listQuery.userId = this.$store.state.user.userId;
      }
      //console.log(this.listQuery.userId)
      productTypeAmountByCondition(this.$store.state.user.userId).then(
        response => {
          let list = response.data.data;
          for (let i in list) {
            let typeName = list[i].fuelType + list[i].mediumType;
            this.productTypeArray.push({
              value: list[i].amount,
              name: typeName
            });
          }
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

