<template>
  <data-mock-report :devices="devices"></data-mock-report>
</template>
<script>
import { findSoldProduct } from "@/api/product";
import dataMockReport from "@sdcsoft/components/components/data-report/device/mock/days";

export default {
  name: "mock-view",
  components: {
    "data-mock-report": dataMockReport
  },
  data() {
    return {
      devices: []
    };
  },
  mounted() {
    findSoldProduct().then(response => {
        if(response.data.code){
            this.$message.error(response.data.msg)
            return
        }
        let data = response.data.data
        console.log(response)
        //this.devices = data
    }).catch(reason=>{
        this.$message.error(reason)
    })
  }
};
</script>

