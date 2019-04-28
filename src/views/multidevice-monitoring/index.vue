<template>
  <div>
    <div>
      <device-map :map-height="mapHeight" v-on:listenToDeviceMap="receiveToDeviceMap"></device-map>
    </div>
    <div>
          <device-card
            :key="index"
            :index="index"
            :controller-no-array="controllerNoArray"
            :map-height="mapHeight"
            :address-array="addressArray"
            v-for="(item,index) in controllerNoArray"
            @listenToControllerRunInfo="receiveToControllerRunInfo">
          </device-card>
    </div>
  </div>
</template>

<script>
  import deviceMap from '@/views/components/device-map'
  import deviceCard from './device-card'
  export default {
    name: 'index',
    components:{
      deviceMap,
      deviceCard
    },
    data(){
      return {
        mapHeight:document.documentElement.clientHeight,
        controllerNoArray:[],
        device:{},
        controllerNo:"",
        addressArray:[],
      }
    },
    mounted (){
      let self=this
      window.onresize = function(){
        self.mapHeight=document.body.clientHeight
      }
    },
    methods:{
      receiveToDeviceMap(data){
        let array1 = []
        let array2 = []
        for(let no in data){

          array1.push(data[no].name)
          array2.push(data[no].value)
        }
        this.controllerNoArray=array1
        this.addressArray=array2
        array1 = []
        array2 = []
        console.log("添加后"+this.controllerNoArray,this.addressArray)
      },
      receiveToControllerRunInfo(index) {
        if (index > -1) {
          this.controllerNoArray.splice(index, 1)
          this.addressArray.splice(index,1)
          
        console.log("删除后"+this.controllerNoArray,this.addressArray)
        }
      }

    }
  }
</script>

<style scoped>
</style>
