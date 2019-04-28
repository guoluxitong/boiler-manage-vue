<template>
  <div class="map-container">
    <div id="map" class="map" :style="{height:mapHeight/3+'px'}"> </div>
  </div>
</template>
<script>
  import checkPermission from '@/utils/permission'
  import {productDataOnMap} from "@/api/product"
  export default {
    name: 'devicemap',
    components: {},
    props: {
      mapHeight: {
        type: Number,
        default: document.documentElement.clientHeight - 88
      }
    },
    data () {
      return {
        center: {lng: 105, lat: 34},
        mapPoints: [],
        userId: '',
        controllerNoArray: [],
      }
    },
    mounted () {
      let map = new BMap.Map('map');
      let point = new BMap.Point(this.center.lng, this.center.lat);
      map.centerAndZoom(point, 6);
      map.enableScrollWheelZoom(true);
      map.enableDoubleClickZoom(true);
      this.loadMapData(map)
    },
    methods: {
      loadMapData (map) {
        //3->锅炉厂管理员 5->锅炉厂普通用户
        if (checkPermission(['3', '5'])) this.userId = this.$store.state.user.userId;
        productDataOnMap({userId: this.userId}).then((res) => {
          this.showMapData(map, res.data.data)
        })
      },
      showMapData (map, data) {
        this.mapPoints = data
        let markers = [];
        let self = this
        for (let i = 0; i < this.mapPoints.length; i++) {
          if (this.mapPoints[i].longitude == null || this.mapPoints[i].latitude == null) {
            continue;
          }
          let points = new BMap.Point(this.mapPoints[i].longitude, this.mapPoints[i].latitude);
          let mk = new BMap.Marker(points);
          markers.push(mk);
          //点击气泡添加需要监控的设备数据
          mk.addEventListener("click", () => {
            if (this.controllerNoArray.indexOf(this.mapPoints[i].controllerNo) == -1){
              this.controllerNoArray.push({name:this.mapPoints[i].controllerNo,value:this.mapPoints[i].province + this.mapPoints[i].city + this.mapPoints[i].district})
              this.sendControllerNoArrayToParent()
            }
          })
        }
        new BMapLib.MarkerClusterer(map, {markers: markers});
      },
      sendControllerNoArrayToParent () {
        this.$emit("listenToDeviceMap", this.controllerNoArray)
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .map-container{
    .map {
      width: 98% !important;
      margin: 5px auto;
      border-radius:10px;
    }
  }
</style>
