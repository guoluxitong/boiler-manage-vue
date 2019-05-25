<template>
  <div class="product-runInfo" style="overflow-y:auto">
    <h4 style="margin:0">{{this.controllerNumber}}</h4>
    <p style="margin:0">{{this.sellAddress}}</p>
    <animation
      :stove-animation="controllerFormData.stoveAnimation"
      :fan-animation-list="controllerFormData.fanAnimationList"
      :beng-animation-list="controllerFormData.bengAnimationList"
    ></animation>
    <el-row class="run-tab">
      <el-tabs
        type="card"
        v-model="controllerFormData.activeName"
        :style="{'float':'left','width':'100%','overflow-y':'auto'}"
      >
        <el-tab-pane
          label="异常信息"
          name="first"
          v-if="controllerFormData.exceptionInfoMap&&Object.keys(controllerFormData.exceptionInfoMap).length>0"
        >
          <el-row v-for="item in controllerFormData.exceptionInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}</span>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="基本信息" name="second">
          <el-row v-for="item in controllerFormData.baseInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="当前模拟量" name="third">
          <el-row v-for="item in controllerFormData.mockInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="设定参数" name="fourth">
          <el-row v-for="item in controllerFormData.settingInfoMap" :key="item.name">
            <span class="dataTitle">{{item.title}}：</span>
            {{item.valueString}}
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="设备信息" name="five">
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
import { getDeviceByByteDataAndType, getCmdMapByDevice } from "@/deviceAdapter";
import animation from "./components/animation";
import { constants } from "fs";
export default {
  name: "controller-run-info",
  components: {
    animation
  },
  data() {
    return {
      timer: null,
      //visible: this.show,
      dialogDeviceFormVisible: false,
      runTabHeight: document.body.clientHeight - 125,
      timeInterVal: 3,
      controllerFormData: {
        activeName: "second",
        stoveAnimation: "",
        deviceFocusInfoMap: {},
        fanAnimationList: [],
        bengAnimationList: [],
        exceptionInfoMap: {},
        baseInfoMap: {},
        mockInfoMap: {},
        settingInfoMap: {},
        deviceInfoMap: {}
      },
      sellAddress: this.address,
      controllerNumber: this.controllerNo
    };
  },
  props: {
    controllerNo: {
      type: String,
      default: ""
    },
    address: {
      type: String,
      default: "未出售"
    },
    cleartimer: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    address() {
      this.sellAddress = this.address;
    },
    controllerNo() {
      this.controllerNumber = this.controllerNo;
    },
    cleartimer(val, oldval) {
      console.log("val=" + val+' old='+oldval);
      if (val && this.timer) {
        console.log("close..............");
        clearInterval(this.timer);
        this.timer = null;
      }
      else if(!val){
        console.log("start..............");
        this.setTimeInterval();
        this.showControllerData();
      }
    }
  },

  mounted(){
    this.setTimeInterval();
    this.showControllerData();
    console.log('mounted..........')
  },
  created() {
    console.log('created..........')
  },
  methods: {
    setTimeInterval() {
      let timeInterVal = window.localStorage["timeInterVal"];
      if (timeInterVal) this.timeInterVal = timeInterVal;

      this.timer = setInterval(() => {
        console.log("work..............");
        this.showControllerData();
      }, 1000 * this.timeInterVal);

      // 通过$once来监听定时器，在beforeDestroy钩子可以被清除。
      // this.$once("hook:beforeDestroy", () => {
      //   clearInterval(timer);
      // });
    },
    showControllerData() {
      Promise.all([
        getControllerByteData(this.controllerNo),
        getControllerType(this.controllerNo)
      ])
        .then(data => {
          this.initControllerInfo();
          let controllerByteData = data[0].data;
          let controllerType = data[1].data.deviceType;
          if (controllerByteData.length > 0 && controllerType) {
            this.getDevice(controllerByteData, controllerType);
          } else {
            this.initControllerInfo();
          }
        })
        .catch(function(r) {
          console.log(r);
        });
    },
    getDevice(byteData, deviceType) {
      //console.log(DeviceAdapterUtil.getSdcSoftDevice(deviceType,byteData,0,0))
      getDeviceByByteDataAndType(new Uint8Array(byteData), deviceType).then(
        data => {
          this.controllerFormData.deviceFocusInfoMap = data.getDeviceFocusFields().map;
          this.controllerFormData.bengAnimationList = data.getBeng();
          this.controllerFormData.fanAnimationList = data.getFan();
          this.controllerFormData.stoveAnimation = data
            .getStoveElement()
            .getElementPrefixAndValuesString();
          this.controllerFormData.exceptionInfoMap = data.getExceptionFields().map;
          this.controllerFormData.baseInfoMap = data.getBaseInfoFields().map;
          this.controllerFormData.mockInfoMap = data.getMockFields().map;
          this.controllerFormData.settingInfoMap = data.getSettingFields().map;
          this.controllerFormData.deviceInfoMap = data.getDeviceFields().map;
          //console.log(this.controllerFormData.baseInfoMap)
          /* for(let item in this.controllerFormData.baseInfoMap.map){
              console.log(item.name+"==="+item.title+"==="+item.valueString)
            } */
          /* getCmdMapByDevice(data).then(cmds => {
              for (let key in cmds) {
                if (key == '设置参数') {
                  let cmd = cmds[key]
                  if (cmd.length == 0) {
                    break
                  }
                  let str = cmd[0].getCommandString()
                  //console.log("value修改前==>" + cmd[0].value + "CommandString修改前==>" + str)
                  cmd[0].setValue(12)
                  str = cmd[0].getCommandString()
                  //console.log("value修改后==>" + cmd[0].value + "CommandString修改后==>" + str)
                }

              }
            }) */
        }
      );
    },
    initControllerInfo() {
      this.controllerFormData.bengAnimationList = [];
      this.controllerFormData.fanAnimationList = [];
      this.controllerFormData.stoveAnimation = "";
      this.controllerFormData.exceptionInfoMap = {};
      this.controllerFormData.baseInfoMap = {};
      this.controllerFormData.mockInfoMap = {};
      this.controllerFormData.settingInfoMap = {};
      this.controllerFormData.deviceInfoMap = {};
    }
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
