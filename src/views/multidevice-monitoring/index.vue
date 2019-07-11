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
        :map-height="cardHeight"
        :address-array="addressArray"
        v-for="(item,index) in controllerNoArray"
        @listenToControllerRunInfo="receiveToControllerRunInfo"
      ></device-card>
    </div>
  </div>
</template>

<script>
import deviceMap from "@/components/deviceMap/index";
import deviceCard from "./device-card";
export default {
  name: "index",
  components: {
    deviceMap,
    deviceCard
  },
  data() {
    return {
      mapHeight: document.documentElement.clientHeight-140,
      cardHeight: document.documentElement.clientHeight,
      controllerNoArray: [],
      device: {},
      controllerNo: "",
      addressArray: []
    };
  },
  mounted() {
    let self = this;
    window.onresize = function() {
      self.mapHeight = document.body.clientHeight;
    };
  },
  methods: {
    receiveToDeviceMap(controllerNoAry, addressAry, address, controller, flag) {
      this.controllerNoArray = controllerNoAry;
      this.addressArray = addressAry;
      console.log("添加后" + this.controllerNoArray, this.addressArray);
    },
    receiveToControllerRunInfo(index) {
      if (index > -1) {
        this.controllerNoArray.splice(index, 1);
        this.addressArray.splice(index, 1);

        console.log("删除后" + this.controllerNoArray, this.addressArray);
      }
    }
  }
};
</script>

<style scoped>
</style>
