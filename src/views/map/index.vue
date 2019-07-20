<template>
  <div>
    <div class="map-container">
      <div>
        <device-map :map-height="mapHeight" @onDeviceClicked="deviceClick" :show-full-btn="true"></device-map>
      </div>
      <device-dialog
        ref="deviceRunInfoDialog"
        :boiler-no="this.boilerNo"
        :controller-no="this.controllerNo"
        :address="this.address"
        :show.sync="deviceDialogVisible"
      ></device-dialog>
    </div>
  </div>
</template>
<script>
import deviceMap from "@/components/deviceMap/index";
import deviceDialog from "./device-dialog/index";

export default {
  name: "map-index",
  components: {
    deviceMap,
    deviceDialog
  },
  data() {
    return {
      deviceDialogVisible: false,
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
      this.deviceDialogVisible = true;
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
