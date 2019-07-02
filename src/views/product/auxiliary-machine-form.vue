<template>
  <el-dialog
    :title="title"
    :visible.sync="visible"
    @close="auxiliaryMachineClose"
    :show="show"
    @open="auxiliaryMachineOpen"
    :modal-append-to-body="false"
    top="10%"
  >
    <el-form
      ref="productForm"
      :model="formData"
      label-position="right"
      label-width="100px"
      style="width: 96%; margin-left:15px;"
    >
      <el-table
        :data="formData.productAuxiliaryMachineInfoList"
        element-loading-text="给我一点时间"
        border
        style="margin-top:10px"
        @row-contextmenu="openTableMenu"
      >
        <el-table-column :show-overflow-tooltip="true" align="left" label="大类">
          <template slot-scope="scope">
            <span>{{scope.row.largeClassId | dictionaryValueFieldFilter(largeClassOptions)}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="小类">
          <template slot-scope="scope">
            <span>{{scope.row.smallClassId | dictionaryValueFieldFilter(smallClassOptions)}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="品牌">
          <template slot-scope="scope">
            <span>{{scope.row.brandName}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="型号">
          <template slot-scope="scope">
            <span>{{scope.row.modelName}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="数量">
          <template slot-scope="scope">
            <span>{{scope.row.amountOfUser}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="供货厂家">
          <template slot-scope="scope">
            <span>{{scope.row.supplier}}</span>
          </template>
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" align="left" label="备注">
          <template slot-scope="scope">
            <span>{{scope.row.remarks}}</span>
          </template>
        </el-table-column>
      </el-table>
      <menu-context ref="menuContext">
        <menu-context-item @click="handleUpdate">编辑</menu-context-item>
        <menu-context-item @click="handleCopy">复制</menu-context-item>
        <menu-context-item @click="handleDelete">删除</menu-context-item>
      </menu-context>
      <div style="margin-top: 5px">
        <el-button type="primary" @click="handleAdd">添加</el-button>
        <el-button type="primary" @click="submitForm">确认</el-button>
      </div>
    </el-form>
    <auxiliary-machine-info-dialog
      :show.sync="auxiliaryMachineInfoDialogVisible"
      :title="titleName"
      :productAuxiliaryMachineInfo="productAuxiliaryMachineInfo"
      @confirmAuxiliaryMachineInfoDialog="confirmAuxiliaryMachineInfoDialog"
      @auxiliaryMachineInfoDialogClose="auxiliaryMachineInfoDialogClose"
    ></auxiliary-machine-info-dialog>
  </el-dialog>
</template>

<script>
import { formatDateTime } from "@/utils/date";
import permission from "@/directive/permission/index.js";
import { initMedium, initFuel, initIsSell } from "./product-dictionary";
import { getBoilerModelListByCondition } from "@/api/boilerModel";
import { getAuxiliaryMachineLargeClassListByCondition } from "@/api/auxiliaryMachineLargeClass";
import { getAuxiliaryMachineSmallClassListByCondition } from "@/api/auxiliaryMachineSmallClass";
import { getProductAuxiliaryMachineInfoListByProductId } from "@/api/ProductAuxiliaryMachineInfo";
import { editProduct } from "@/api/product";
import auxiliaryMachineInfoDialog from "./product-auxiliary-machine-info-form";

function dictionaryValueFilter(dictionaryValue, value) {
  const dictionaryValueItem = dictionaryValue.filter(item => {
    return item.value == value;
  });
  return dictionaryValueItem[0];
}

export default {
  directives: { permission },
  components: {
    auxiliaryMachineInfoDialog
  },
  name: "auxiliary-machine-form",
  data() {
    return {
      visible: this.show,
      boilerModelNumberArray: [],
      mediumArray: [],
      fuelArray: [],
      isSellArray: [],
      activeName: "second",
      formData: {
        id: "",
        roleIdArray: this.$store.state.user.role,
        userId: this.$store.state.user.userId,
        orgId: this.$store.state.user.orgId,
        orgType: this.$store.state.user.orgType,
        controllerNo: "",
        boilerNo: "",
        boilerModelNumber: null,
        tonnageNum: null,
        medium: null,
        fuel: null,
        createDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        editDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        isSell: 0,
        productAuxiliaryMachineInfoList: []
      },
      productAuxiliaryMachineInfo: {},
      titleName: "",
      auxiliaryMachineInfoDialogVisible: false,
      largeClassOptions: [],
      smallClassOptions: []
    };
  },
  filters: {
    dictionaryValueFieldFilter(value, dictionaryValueArray) {
      if (dictionaryValueFilter(dictionaryValueArray, value))
        return dictionaryValueFilter(dictionaryValueArray, value).label;
      return;
    }
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    productFormData: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
      default: ""
    }
  },
  watch: {
    show() {
      this.visible = this.show;
    }
  },
  mounted() {},
  methods: {
    auxiliaryMachineClose() {
      this.$emit("auxiliaryMachineDialogClose", {
        auxiliaryMachineDialogVisible: false
      });
    },
    auxiliaryMachineOpen() {
      Promise.all([this.initSelect(), this.initAuxiliaryMachineAbout()])
        .then(() => {
          this.initFormData();
        })
        .then(() => {
          this.getList();
        });
    },
    confirmAuxiliaryMachineInfoDialog(obj) {
      if (obj.flag) {
        this.auxiliaryMachineInfoDialogVisible =
          obj.auxiliaryMachineInfoDialogVisible;
        if (obj.title === "编辑") {
          this.handleDelete(obj.productAuxiliaryMachineInfo);
        }
        this.formData.productAuxiliaryMachineInfoList.push(
          obj.auxiliaryMachineInfoFormData
        );
        editProduct(this.formData).then(() => {
          this.$message({
            message: "操作成功",
            type: "success"
          });
          this.getList();
        });
      }
    },
    auxiliaryMachineInfoDialogClose(obj) {
      this.auxiliaryMachineInfoDialogVisible =
        obj.auxiliaryMachineInfoDialogVisible;
      this.getList();
    },
    initSelect() {
      this.initBoilerModel();
      initMedium().then(data => {
        this.mediumArray = data;
      });
      initFuel().then(data => {
        this.fuelArray = data;
      });
      initIsSell().then(data => {
        this.isSellArray = data;
      });
    },
    initBoilerModel() {
      getBoilerModelListByCondition({
        orgId: this.$store.state.user.orgId,
        orgType: this.$store.state.user.orgType
      }).then(data => {
        this.boilerModelNumberArray = data.data.data;
      });
    },
    initAuxiliaryMachineAbout() {
      getAuxiliaryMachineLargeClassListByCondition({}).then(response => {
        this.largeClassOptions = this.getAuxiliaryMachineAboutOptions(
          response.data.data
        );
      });
      getAuxiliaryMachineSmallClassListByCondition({}).then(response => {
        this.smallClassOptions = this.getAuxiliaryMachineAboutOptions(
          response.data.data
        );
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
    openTableMenu(row, event) {
      this.$refs.menuContext.openTableMenu(
        row,
        event,
        window.event.clientX - document.documentElement.clientWidth / 4,
        window.event.clientY - document.documentElement.clientHeight / 5
      );
    },
    initFormData() {
      if (this.title === "复制") {
        this.formData = this.productFormData;
        this.formData.roleIdArray = this.$store.state.user.role;
        this.formData.userId = this.$store.state.user.userId;
        this.formData.orgId = this.$store.state.user.orgId;
        this.formData.orgType = this.$store.state.user.orgType;
        this.formData.createDateTime = formatDateTime(
          new Date(),
          "yyyy-MM-dd hh:mm:ss"
        );
      } else if (this.title === "辅机信息") {
        this.formData = this.productFormData;
      }
    },
    getList() {
      getProductAuxiliaryMachineInfoListByProductId({
        productId: this.productFormData.id
      }).then(response => {
        let productAuxiliaryMachineInfoList = response.data.data;
        if (this.title === "编辑") {
        } else if (this.title === "新增") {
        } else if (this.title === "复制") {
          let newProductAuxiliaryMachineInfoList = [];
          productAuxiliaryMachineInfoList.forEach(item => {
            item.productId = "";
            newProductAuxiliaryMachineInfoList.push(item);
          });
          productAuxiliaryMachineInfoList = newProductAuxiliaryMachineInfoList;
        }
        this.formData.productAuxiliaryMachineInfoList = productAuxiliaryMachineInfoList;
      });
    },
    /*handleOpenElectronWindow(title,paramData){
        let width= Math.round(document.body.clientWidth/2)+100
        let height= Math.round(document.body.clientHeight/2)+200
        let url="/product-auxiliary-machine-info-form"
        url=url+"?title="+title
        if(title!='create') url=url+"&&productAuxiliaryMachineInfo="+JSON.stringify(paramData)
        let routerData = this.$route.srfs
        // let newWindow=openElectronWindow(url,{width: width, height: height})
        // newWindow.once('closed', () => {
        //     newWindow = null
        //     ipcMain.removeAllListeners(['productAuxiliaryMachineInfo'])
        // })
        // ipcMain.once('productAuxiliaryMachineInfo', (event, arg) => {
        //     if(title=='edit') this.handleDelete(paramData)
        //     this.productFormData.productAuxiliaryMachineInfoList.push(arg)
        //     newWindow.close()
        //     newWindow = null
        // })
      },*/
    handleAdd() {
      this.auxiliaryMachineInfoDialogVisible = true;
      this.titleName = "新增";
    },
    handleUpdate(row) {
      this.auxiliaryMachineInfoDialogVisible = true;

      this.titleName = "编辑";
      this.productAuxiliaryMachineInfo = row;
    },
    handleCopy(row) {
      this.auxiliaryMachineInfoDialogVisible = true;
      this.titleName = "复制";
      this.productAuxiliaryMachineInfo = row;
    },
    submitForm() {
      this.$refs.productForm.validate(valid => {
        if (valid) {
          if (this.titleName === "编辑") {
          } else if (this.titleName === "辅机信息") {
          } else if (this.titleName === "复制") {
            this.productFormData.id = "";
          }
          this.$emit("confirmAuxiliaryMachineDialog", {
            auxiliaryMachineDialogVisible: false,
            flag: true,
            productFormData: this.formData
          });
        } else {
          return false;
        }
      });
    },
    handleDelete(row) {
      const index = this.productFormData.productAuxiliaryMachineInfoList.indexOf(
        row
      );
      this.productFormData.productAuxiliaryMachineInfoList.splice(index, 1);
    }
  }
};
</script>

<style scoped>
</style>
