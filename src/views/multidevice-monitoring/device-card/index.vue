<template>
  <el-card>
    <div slot="header" class="clearfix" style="padding-bottom: 0px">
      <el-button style="float: right; padding: 3px 0" type="text" @click="sendDeleteCardToParent">X</el-button>
    </div>
    <div class="runInfo1" :style="{height:mapHeight/8*2.5+'px'}">
      <device-run-info
        ref="deviceRunInfo"
        class="runInfoShow1"
        :boiler-no="boilerNo"
        :controller-no="controllerNo"
        :address="address"
      ></device-run-info>
    </div>
  </el-card>
</template>

<script>
import deviceRunInfo from "@/components/controller-run-info/index";
export default {
  name: "index",
  props: {
    boilerNo: {
      type: String,
      default: null
    },
    controllerNo: {
      type: String,
      default: null
    },
    address: {
      type: String,
      default: null
    },
    arrayIndex: {
      type: Number,
      default: -1
    },
    mapHeight: {
      type: Number,
      default: document.documentElement.clientHeight
    }
  },
  data() {
    return {
      mapWidth: document.documentElement.clientWidth - 90,
      visible: false
    };
  },
  components: {
    deviceRunInfo: deviceRunInfo
  },
  mounted() {
    this.$refs.deviceRunInfo.startTimer()
  },
  methods: {
    sendDeleteCardToParent() {
      this.$refs.deviceRunInfo.stopTimer();
      this.$emit("onCardClosed", this.arrayIndex);
    }
  }
};
</script>

<style scoped>
.text {
  font-size: 14px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.runInfo1 {
  position: relative;
  overflow: hidden;
}
.runInfoShow1 {
  height: 100%;
  position: absolute;
  overflow-x: hidden;
  overflow-y: scroll;
}
.runInfoShow1::-webkit-scrollbar {
  display: none;
}
</style>
