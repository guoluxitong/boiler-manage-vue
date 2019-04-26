<template>
    <div class="map-container">
        <div id="map" class="map" :style="{height:mapHeight+'px'}"> </div>
      <controller-run-info-dialog
        :show.sync="controllerRunInfoDialogVisible"
        :controllerNo="controllerNo"
        :address="this.address"
        @controllerRunInfoDialogClose="controllerRunInfoDialogClose">
      </controller-run-info-dialog>
    </div>
</template>
<script>
    //import {openElectronWindow} from '@/utils/windowsOperate'
    import checkPermission from '@/utils/permission'
    import {productDataOnMap} from "@/api/product"
    import controllerRunInfoDialog from '../../controller-run-info/index'
    export default {
        name:'map-component',
      components:{
        controllerRunInfoDialog
      },
        props:{
            mapHeight:{
                type:Number,
                default:document.documentElement.clientHeight-88
            }
        },
        data() {
            return {
                center: {lng: 105, lat: 34},
                mapPoints:[],
                userId:'',
              controllerRunInfoDialogVisible:false,
              address:"",
            }
        },
        mounted() {
            let map = new BMap.Map('map');
            let point = new BMap.Point(this.center.lng, this.center.lat);
            map.centerAndZoom(point, 6);
            map.enableScrollWheelZoom(true);
            map.enableDoubleClickZoom(true);
            this.loadMapData(map)
        },
        methods: {
            loadMapData(map) {
                //3->锅炉厂管理员 5->锅炉厂普通用户
                if(checkPermission(['3','5']))this.userId=this.$store.state.user.userId;
                productDataOnMap({userId:this.userId}).then((res)=>{
                    this.showMapData(map,res.data.data)
                })
            },
            showMapData(map,data){
                this.mapPoints = data
                let markers = [];
                for (let i=0;i<this.mapPoints.length;i++) {
                    if (this.mapPoints[i].longitude==null||this.mapPoints[i].latitude==null) {
                        continue;
                    }
                    let points = new BMap.Point(this.mapPoints[i].longitude,this.mapPoints[i].latitude);
                    let mk = new BMap.Marker(points);
                    markers.push(mk);
                    mk.addEventListener("click",()=>{
                        let point = this.mapPoints[i]
                        this.address = point.province + point.city + point.district
                      this.controllerRunInfoDialogVisible = true
                      this.controllerNo = this.mapPoints[i].controllerNo
                    })
                }
                new BMapLib.MarkerClusterer(map, {markers:markers});
            },
          controllerRunInfoDialogClose(obj){
            this.controllerRunInfoDialogVisible = obj.controllerRunInfoDialogVisible
          },
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss">
    .map-container{
        .map{
            width: 100%;
        }
    }
</style>
