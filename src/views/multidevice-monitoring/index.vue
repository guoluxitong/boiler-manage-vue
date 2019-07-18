<template>
  <el-row>
    <device-map :map-height="mapHeight" :showInfo="true" @onDeviceClicked="deviceClick"></device-map>
     <div :key="index" v-for="(item,index) in devices" class="deviceCard">
      <device-card
        :key="index"
        :array-index="index"
        :controller-no="item.controllerNo"
        :boiler-no="item.boilerNo"
        :address="item.address"
        @onCardClosed="cardClosed"
        :map-height="cardHeight"
      ></device-card>
    </div>
  </el-row>
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
      mapHeight: document.documentElement.clientHeight / 3,
      cardHeight: document.documentElement.clientHeight,
      devices: [],
      colCount: 3,
      visible:true
    };
  },
  mounted() {
    let self = this;
    window.onresize = function() {
      self.mapHeight = document.body.clientHeight;
    };
  },
  computed: {
    span: () => {
      return 24 / this.colCount;
    }
  },
  methods: {
    deviceClick(device) {
      if(this.devices.length==12){
        this.$message.error("已达到设备监控上限！")
        return
      }
      let f = true;
      for (let i = 0; i < this.devices.length; i++) {
        if (this.devices[i].controllerNo == device.controllerNo) {
          f = false;
          break;
        }
      }
      if (f) {
        this.devices.push(device);
      }
    },
    cardClosed(index) {
      //this.$set(this.devices[i],"visible",false)
      this.devices.splice(index,1);
    }
  }
};
</script>
<style scoped>
.deviceCard {
  position: relative;
  float: left;
  width: 420px;
  margin: 10px 10px;
}
</style>