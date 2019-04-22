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
           <div
            class="chart"
            id="lineChart"
            :style="{height:mapHeight/8*2.5+'px',float:'left'}"
           ></div>
           <div
            class="chart"
            id="barChart"
            :style="{height:mapHeight/8*2.5+'px',float:'right'}"

           ></div>
          </div>
           <div v-show="flag" class="runInfo" :style="{height:mapHeight/8*4+'px'}">
            <runinfo-show class="runInfoShow"></runinfo-show>
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
    import checkPermission from '@/utils/permission'
    import {productDataOnMap} from "@/api/product"
    import runinfo from "@/views/run-info/controller-run-info";
    import { config } from "@/config/index";
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
     data () {
      return {
       center: {lng: 105, lat: 34},
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
       weatherSrc: ""
      };
     },
     mounted () {
      let map = new BMap.Map("map");
      let point = new BMap.Point(this.center.lng, this.center.lat);
      map.centerAndZoom(point, 6);
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      this.loadMapData(map);
      this.drawLine();
     },
     methods: {
      getlocation () {
       //定位方法
       var map = new BMap.Map("weather");
       var point = new BMap.Point(116.331398, 39.897445);
       map.centerAndZoom(point, 12);
       var geolocation = new BMap.Geolocation();
       geolocation.getCurrentPosition(function (r) {
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
      loadMapData (map) {
       //加载地图
       if (checkPermission(['3', '5'])) this.userId = this.$store.state.user.userId;
       productDataOnMap({userId: this.userId}).then((res) => {
        this.showMapData(map, res.data.data)
       })
      },
      /**
       * 显示地图标点的设备相关信息
       */
      showMapData (map, data) {
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
        let address = this.mapPoints[i].province + this.mapPoints[i].city + this.mapPoints[i].district
        mk.addEventListener("click", () => {
         this.weatherSrc = this.src;
         this.flag = true;
         let cityPinyin = ConvertPinyin(
          this.getArea(address).City
         );
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
        });
       }
       new BMapLib.MarkerClusterer(map, {markers: markers});
      },
      /**
       * 绘制报表
       */
      drawLine () {
       //绘制报表
       var dom = document.getElementById("lineChart");
       let dom2 = document.getElementById("barChart");
       var myChart = this.$echarts.init(dom);
       let myChart2 = this.$echarts.init(dom2);
       let optionLine = null;
       let optionBar = null;

       function randomData () {
        now = new Date(+now + oneDay);
        value = Math.round(Math.random() * 20 + 120 + 1);
        return {
         name: now.toString(),
         value: [
          [now.getTime()],
          Math.round(value)
         ]
        };
       }

       var data = [];
       var now = new Date(new Date().getTime() - 2 * 60 * 1000)
       var oneDay = 1 * 1000;
       var value = Math.random() * 98;
       for (var i = 0; i < 100; i++) {
        data.push(randomData());
       }

       optionLine = {
        title: {
         text: "出口温度实时曲线"
        },
        tooltip: {
         trigger: "axis",
         formatter: function (params) {
          params = params[0];
          var date = new Date(params.name);
          return (
           date.getMinutes() +
           " : " +
           params.value[1]
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

       setInterval(function () {
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
       optionBar = {
        title: {
         text: "报警统计"
        },
        color: ["#3398DB"],
        tooltip: {
         trigger: "axis",
         axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
         }
        },
        grid: {
         left: "3%",
         right: "4%",
         bottom: "3%",
         containLabel: true
        },
        xAxis: [
         {
          type: "category",
          data: [
           "燃烧器故障",
           "超压",
           "排烟温度高",
           "燃气泄漏",
           "极限低水位"
          ],
          axisTick: {
           alignWithLabel: true
          }
         }
        ],
        yAxis: [
         {
          type: "value"
         }
        ],
        series: [
         {
          name: "累计次数",
          type: "bar",
          barWidth: "60%",
          data: [5, 3, 7, 6, 9]
         }
        ]
       };
       if (
        optionLine &&
        typeof optionLine === "object" &&
        (optionBar && typeof optionBar === "object")
       ) {
        myChart.setOption(optionLine, true);
        myChart2.setOption(optionBar, true);
       }
      },
      /**
       * 地址解析
       * @param address 地址字符串
       */
      getArea (address) {
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
    .run_info_div {
    }
    .runInfoShow {
     height: 100%;
        background-color: #f5f5f5;
     border-radius:10px;
        overflow-x: hidden;
        overflow-y: scroll;
    }
    .runInfoShow::-webkit-scrollbar {
        display: none;
    }
    .chart {
        background-color: #f5f5f5;
     border-radius:10px;
        width: 49%;
    }
   .map {
    width: 100%;
    margin: 15 auto;
    background-color: #f5f5f5;
    border-radius:10px;
   }
 .runInfo {
  width: 95%;
  float: left;
  margin: 20px 10px;
  background-color: #f5f5f5;
  border-radius:10px;
 }
</style>

