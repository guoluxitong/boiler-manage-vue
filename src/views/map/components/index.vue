<template>
    <div class="map-container">
        <div id="map" class="map" :style="{height:mapHeight+'px'}"> </div>
    </div>
</template>
<script>
    //import {openElectronWindow} from '@/utils/windowsOperate'
    import checkPermission from '@/utils/permission'
    import {productDataOnMap} from "@/api/product";
    export default {
        name:'map-component',
        props:{
            mapHeight:{
                type:Number,
                default:document.body.clientHeight-88
            }
        },
        data() {
            return {
                center: {lng: 105, lat: 34},
                mapPoints:[],
                userId:''
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
                        // let newWindow=openElectronWindow("/controller-run-info?controllerNo="+this.mapPoints[i].controllerNo,{width: 600, height: 500,title:"运行信息"})
                        // newWindow.on('closed', () => {
                        //     newWindow = null
                        // })
                        // newWindow.setTitle("运行信息")
                    })
                }
                new BMapLib.MarkerClusterer(map, {markers:markers});
            }
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
