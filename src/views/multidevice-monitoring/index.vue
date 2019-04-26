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
        this.controllerNoArray = data
      },
      receiveToControllerRunInfo(index) {
        /*if (controllerNo !== '') {
          console.log(this.controllerNoArray,controllerNo)
          let index = this.controllerNoArray.indexOf(controllerNo)
          console.log(index)*/
        console.log(this.controllerNoArray, index)
        if (index > -1) {
          this.controllerNoArray.splice(index, 1)
        }
        console.log(this.controllerNoArray)
      }

    }
  }
</script>

<style scoped>
</style>
