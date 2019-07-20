<template>
  <el-row>
    <device-map :map-height="mapHeight" :showInfo="true" @onDeviceClicked="deviceClick"></device-map>
    <el-row>
      <template  v-for="(item,index) in devices">
      <device-card
        :key="index"
        v-if="item.show"
        :array-index="index"
        :controller-no="item.device.controllerNo"
        :boiler-no="item.device.boilerNo"
        :address="item.device.address"
        @onCardClosed="cardClosed"
        :map-height="cardHeight"
      ></device-card>
      </template>
    </el-row>
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
      visible: true
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
      if (this.devices.length == 12) {
        this.$message.error("已达到设备监控上限！");
        return;
      }
      let f = true;
      for (let i = 0; i < this.devices.length; i++) {
        if (this.devices[i].device.controllerNo == device.controllerNo && this.devices[i].show) {
          f = false;
          break;
        }
      }
      if (f) {
        this.devices.push({"device":device,"show":true});
      }
    },
    cardClosed(index) {
      this.$set(this.devices[index],"show",false)
      //this.devices.splice(index, 1)
    }
  }
};
</script>