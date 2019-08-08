<template>
      <data-expection-report :orgName="orgName" :orgId="orgId"  :boilers="boilers" server="http://192.168.0.113:8080"></data-expection-report>
</template>
<script>
  import {findSoldProduct} from "@/api/product";
  import { StringHashMap } from "@sdcsoft/comms";
import {getProductCategoryList} from "@/api/productCategory";
import {initMedium, initFuel} from "./device-dictionary";
import dataExpectionReport from "@sdcsoft/components/components/data-report/devices/exception/days";
function dictionaryValueFilter(dictionaryValue, value) {
  const dictionaryValueItem = dictionaryValue.filter(item =>  item.value == value);
  if (dictionaryValueItem[0])
    return dictionaryValueItem[0].label;
  return '';
  }
  export default {
    name: "mock-view",
    components: {
      "data-expection-report": dataExpectionReport
    },
    data() {
      return {
        list: [],
        boilers: null,
        orgName: 'Customer',
        orgId: this.$store.state.user.orgId,
        boilerModelNumberArray: [],
        mediumArray: [],
        fuelArray: [],
        product: {
          total: 50,
          pageNum: 1,
          pageSize: 5,
          boilerNo: '',
          saleDate: null,
          controllerNo: '',
          customerId: null,
          boilerModelNumber: null,
          categoryId: null,
          media: null,
          power: null,
          userId: null,
          isSell: null,
          productCategoryName: ''
        }
      };
    },
    filters: {
    },
    created() {
      Promise.all([this.init()]).then(() => {
        this.getDeviceList();
      });
    },
    methods: {
      getDeviceList() {
        findSoldProduct(this.product).then(response => {
          if (response.data.code) {
            this.$message.error(response.data.msg)
            return
          }
          this.list = response.data.data;
          this.inintSelect()
        }).catch(reason => {
          this.$message.error(reason)
        })
      },
      init() {
        getProductCategoryList().then(data => {
          this.boilerModelNumberArray = this.getAuxiliaryMachineAboutOptions(
            data.data.data
          );
        });
        initMedium().then(data => {
          this.mediumArray = data;
        });
        initFuel().then(data => {
          this.fuelArray = data;
        });
      },
      getAuxiliaryMachineAboutOptions(dataList) {
        let options = [];
        dataList.forEach(item => {
          let optionItem = {};
          optionItem.value = item.id;
          optionItem.label = item.name;
          options.push(optionItem);
        });
        return options;
      },
      inintSelect(){
        this.boilers = new StringHashMap();
        for (var i = 0; i<this.list.length;  i++){
          var boiler ={
            categoryName: '',
            boilerNo: '',
            controllerNo: '',
            power: '',
            media: '',
            customerName: ''
          };
            boiler.categoryName = dictionaryValueFilter(this.boilerModelNumberArray, this.list[i].productCategoryId);
            boiler.boilerNo = this.list[i].boilerNo;
            boiler.controllerNo = this.list[i].controllerNo;
            boiler.power = dictionaryValueFilter(this.fuelArray, this.list[i].power);
            boiler.media = dictionaryValueFilter(this.mediumArray, this.list[i].media);
            boiler.customerName = this.list[i].customerName;
          this.boilers.addItem(this.list[i].controllerNo, boiler);
        }
      },
    }
  };
</script>

