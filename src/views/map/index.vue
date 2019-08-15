<template>
  <div>
    <div class="map-container">
      <div>
        <device-map :map-height="mapHeight" :medias="medias" :powers="powers" :products="products" :customers="customers" :categories="categories" ak="eqPZV35edaZZGefOIopjLNqTSj4qI89Y" @search="search" @onDeviceClicked="deviceClick" :show-full-btn="true"></device-map>
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
  import { initMedium, initFuel } from "./product-dictionary";
  import { getProductCategoryList } from "@/api/productCategory";
  import {productSearch} from "@/api/product";
  import { getList } from "@/api/customer";
import deviceMap from "@sdcsoft/components/components/map/device-map/index";
import deviceDialog from "./device-dialog/index";

export default {
  name: "map-index",
  components: {
    'device-map':deviceMap,
    deviceDialog
  },
  data() {
    return {
      deviceDialogVisible: false,
      address: "",
      controllerNo: "",
      boilerNo: null,
      product: {
        boilerNo: "",
        customerName: null,
        productCategoryId: null,
        tonnageNum: null,
        media: null,
        power: null
      },
      products: [],
      customers: [],
      categories: [],
      powers: [],
      medias: [],
      mapHeight: document.documentElement.clientHeight - 100+ "px"
    };
  },
  computed: {
    fullMap() {
      return this.$store.state.app.fullMap;
    }
  },
  mounted() {
    this.initSearchOptions()
  },
  watch: {
    fullMap(val) {
      if (val) {
        this.mapHeight = document.documentElement.clientHeight - 10 + "px";
      } else {
        this.mapHeight = document.documentElement.clientHeight - 100 + "px";
      }
    }
  },
  methods: {
    search(searchOption) {
      this.product.boilerNo=searchOption.boilerNo;
      this.product.controllerNo=searchOption.controllerNo;
      this.product.media=searchOption.media;
      this.product.power=searchOption.power;
      this.product.customerName=searchOption.customer;
      this.product.productCategoryId=searchOption.category
      productSearch({
        product: this.product,
        pageNum: 1,
        pageSize: 1000
      }).then(res => {
        let data = res.data;
        if (data.code) {
          this.$message.error(data.msg);
          return;
        } else {
          this.products = [];
          data.data.list.forEach(item => {
            if (item.isSell) {
              this.products.push({
                lng: item.longitude,
                lat: item.latitude,
                boilerNo: item.boilerNo,
                controllerNo: item.controllerNo,
                address: item.street
              });
            }
          });
        }
      });
    },
    initSearchOptions() {
      getProductCategoryList().then(data => {
        this.categories = [];
        data.data.data.forEach(item => {
          let optionItem = {};
          optionItem.value = item.id;
          optionItem.label = item.name;
          this.categories.push(optionItem);
        });
      });
      getList({ pageNum: 1, pageSize: 1000 }).then(response => {
        this.customers = [];
        response.data.data.list.forEach(item => {
          let optionItem = {};
          optionItem.value = item.name;
          optionItem.label = item.name;
          this.customers.push(optionItem);
        });
      });
      initMedium().then(data => {
        this.medias = data;
      });
      initFuel().then(data => {
        this.powers = data;
      });
    },
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
