<template>
  <div>
    <div class="map-container">
      <div>
        <device-map :map-height="mapHeight" @onDeviceClicked="deviceClick" 
          :show-full-btn="true"></device-map>
      </div>
      <el-dialog
        title="监控"
        :visible.sync="controllerRunInfoDialogVisible"
        width="40%"
        @close="close"
      >
        <controller-run-info-dialog
          ref="deviceRunInfo"
          :boiler-no="this.boilerNo"
          :controller-no="this.controllerNo"
          :address="this.address"
          :visible="controllerRunInfoDialogVisible"
        ></controller-run-info-dialog>
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
  data() {
    return {
      controllerRunInfoDialogVisible: false,
      address: "",
      controllerNo: "",
      boilerNo: null,
      mapHeight: document.documentElement.clientHeight - 100
    };
  },
  computed: {
    fullMap() {
      return this.$store.state.app.fullMap;
    }
  },
  mounted() {},
  watch: {
    fullMap(val) {
      if (val) {
        this.mapHeight = document.documentElement.clientHeight - 10;
      } else {
        this.mapHeight = document.documentElement.clientHeight - 100;
      }
    }
  },
  methods: {
    deviceClick(device) {
      this.address = device.address;
      this.controllerNo = device.controllerNo;
      this.boilerNo = device.boilerNo;
      this.controllerRunInfoDialogVisible = true;
    },
    close() {
      console.log("dlg close.......");
      this.$refs.deviceRunInfo.stopTimer();
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
