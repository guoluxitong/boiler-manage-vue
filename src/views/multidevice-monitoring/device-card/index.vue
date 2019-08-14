<template>
  <el-card class="deviceCard">
    <div slot="header" class="clearfix">
      <span>
        {{boilerNo}}
        <small>{{address}}</small>
      </span>
      <el-button style="float: right; padding: 3px 0" type="text" @click="sendDeleteCardToParent">X</el-button>
    </div>
    <div class="runInfo1">
      <device-run-info
        ref="deviceRunInfo"
        class="runInfoShow1"
        :controller-no="controllerNo"
        :visible="this.visible"
      ></device-run-info>
    </div>
  </el-card>
</template>

<script>
import deviceRunInfo from "@sdcsoft/components/components/device-run-info/index";
export default {
  name: "index",
  directives: {
    sdc: {
      bind: function(el) {
        //el.value = "this is sdc-bind";
      },
      unbind:function(el){
        console.log(el)
        el.parentElement.remove()
      }
    }
  },
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
      mapWidth: document.documentElement.clientWidth - 90+ "px",
      visible: false
    };
  },
  components: {
    deviceRunInfo: deviceRunInfo
  },
  mounted() {
   // this.$refs.deviceRunInfo.startTimer();
    this.visible = true
  },
  methods: {
    sendDeleteCardToParent() {
      //this.$refs.deviceRunInfo.stopTimer();
      this.visible = false
      this.$emit("onCardClosed", this.arrayIndex);
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
