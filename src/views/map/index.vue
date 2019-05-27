<template>
  <div>
    <div class="map-container">
      <div>
        <device-map :map-height="mapHeight" v-on:listenToDeviceMap="receiveToDeviceMap"></device-map>
      </div>
      <el-dialog title="监控" :visible.sync="controllerRunInfoDialogVisible" width="40%">
        <controller-run-info-dialog :cleartimer="!controllerRunInfoDialogVisible" :controllerNo="this.controllerNo" :address="this.address"></controller-run-info-dialog>
      </el-dialog>
    </div>
  </div>
</template>
<script>
import deviceMap from "@/components/deviceMap/index";
import controllerRunInfoDialog from "@/components/controller-run-info/index";
export default {
  name: "map-index",
  components: {
    controllerRunInfoDialog,
    deviceMap
  },
  props: {
    mapHeight: {
      type: Number,
      default: document.documentElement.clientHeight - 100
    }
  },
  data() {
    return {
      controllerRunInfoDialogVisible: false,
      address: "",
      controllerNo: ""
    };
  },
  mounted() {},
  methods: {
    receiveToDeviceMap(
      controllerNoAry,
      addressAry,
      address,
      controllerNo,
      flag
    ) {
      this.address = address;
      this.controllerRunInfoDialogVisible = flag;
      this.controllerNo = controllerNo;
      console.log(this.controllerRunInfoDialogVisible);
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.map-container {
  .map {
    width: 100%;
  }
}
</style>