<template>
  <div class="product-runInfo" style="overflow-y:auto">
    <p v-if="this.boilerNo" style="margin:0">
      <strong>{{this.boilerNo}}</strong>
      &nbsp;{{this.address}}
    </p>
    <animation
      :stove-animation="controllerFormData.stoveAnimation"
      :fan-animation-list="controllerFormData.fanAnimationList"
      :beng-animation-list="controllerFormData.bengAnimationList"
    ></animation>
    <el-row class="run-tab">
      <el-tabs
        type="border-card"
        v-model="controllerFormData.activeName"
        :style="{'float':'left','width':'100%'}"
      >
        <el-tab-pane label="基本" name="first">
          <el-row v-for="item in controllerFormData.baseInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="报警" name="second">
          <el-row v-for="item in controllerFormData.exceptionInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}</span>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="模拟量" name="third">
          <el-row v-for="item in controllerFormData.mockInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="设置" name="fourth">
          <el-row v-for="item in controllerFormData.settingInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="设备" name="five">
          <el-row v-for="item in controllerFormData.deviceInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-row>
  </div>
</template>
<script>
import { getControllerByteData, getControllerType } from "@/api/controller";
import { Web_DeviceAdapter as DeviceAdapter } from '@tomcat008/devices-lib'
import animation from "./components/animation";
let deviceAdapter = DeviceAdapter.setLang("zh-cn")

export default {
  name: "controller-run-info",
  components: {
    animation
  },
  data() {
    return {
      timer: null,
      deviceType: null,
      subType: "",
      runTabHeight: document.body.clientHeight - 125,
      timeInterVal: 10,
      controllerFormData: {
        activeName: "first",
        stoveAnimation: "",
        deviceFocusInfoMap: {},
        fanAnimationList: [],
        bengAnimationList: [],
        exceptionInfoMap: {},
        baseInfoMap: {},
        mockInfoMap: {},
        settingInfoMap: {},
        deviceInfoMap: {}
      }
    };
  },
  props: {
    boilerNo: {
      type: String,
      default: null
    },
    address: {
      type: String,
      default: "未出售"
    },
    visible: {
      type: Boolean,
      default: false
    },
    controllerNo: {
      type: String,
      default: null
    },
  },
  watch: {
    visible(val) {
      if (val) {
        this.startTimer();
      } else {
        this.stopTimer();
      }
    }
  },
  computed:{
    keyStrings(){
      return Math.random().toString()
    }
  },
  mounted(){
    console.log('mounted......')
  },
  beforeDestroy() {
    console.log("clearTimer")
    clearInterval(this.timer);
    this.timer = null;
  },
  methods: {
    initControllerInfo() {
      this.controllerFormData.bengAnimationList = [];
      this.controllerFormData.fanAnimationList = [];
      this.controllerFormData.stoveAnimation = "";
      this.controllerFormData.exceptionInfoMap = {};
      this.controllerFormData.baseInfoMap = {};
      this.controllerFormData.mockInfoMap = {};
      this.controllerFormData.settingInfoMap = {};
      this.controllerFormData.deviceInfoMap = {};
    },
    stopTimer() {
      console.log("stopTimer");
      this.deviceType = null;
      this.subType = "";
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.timer = null;
      this.initControllerInfo()
    },
    startTimer() {
      console.log("startTimer");
      this.deviceType = null;
      this.subType = "";
      this.setTimeInterval();
      this.showControllerData();
    },
    setTimeInterval() {
      this.timer = setInterval(() => {
        console.log("work..............");
        this.showControllerData();
      }, 1000 * this.timeInterVal);
    },
    getDeviceByByteArray() {
      if (this.controllerNo) {
        console.log(this.controllerNo);
        getControllerByteData(this.controllerNo).then(data => {
          this.initControllerInfo();
          let controllerByteData = data.data;
          if (controllerByteData.length > 0 && this.deviceType) {
            this.getDevice(controllerByteData);
          }
        });
      }
    },
    showControllerData() {
      if (!this.deviceType) {
        getControllerType(this.controllerNo).then(data => {
          this.deviceType = data.data.deviceType;
          this.getDeviceByByteArray();
        });
      } else {
        this.getDeviceByByteArray();
      }
    },
    getDevice(byteData) {
      deviceAdapter.getSdcSoftDevice(this.deviceType,byteData).then(device=>{
        //console.log(device)
        this.controllerFormData.deviceFocusInfoMap = device.getDeviceFocusFields().map;
        this.controllerFormData.bengAnimationList = device.getBeng();
        this.controllerFormData.fanAnimationList = device.getFan();
        this.controllerFormData.stoveAnimation = device
          .getStoveElement()
          .getElementPrefixAndValuesString();
         // console.log('--------------1-2----------------')
        this.controllerFormData.exceptionInfoMap = device.getExceptionFields().map;
        this.controllerFormData.baseInfoMap = device.getBaseInfoFields().map;

        this.controllerFormData.mockInfoMap = device.getMockFields().map;

        this.controllerFormData.settingInfoMap = device.getSettingFields().map;
        this.controllerFormData.deviceInfoMap = device.getDeviceFields().map;
      }).catch(reason=>{
          this.$message.error(reason)
      })
    },

  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.product-runInfo {
  padding-left: 5px;
  padding-right: 5px;
  .deviceImg {
    float: left;
  }
  .deviceShuiBeng {
    margin-top: 71.3px;
    margin-left: 5%;
  }
  .run-tab {
    font-size: 14px;
    font-weight: 500;
    color: #303133;
  }
}
</style>
