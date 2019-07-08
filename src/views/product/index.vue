<template>
  <div class="app-container product-container">
    <div v-if="!PartCategory">
    <!--查询-->
    <el-row class="app-query">
      <el-autocomplete
        v-model="product.customerName"
        :fetch-suggestions="querySearchAsyncuser"
        placeholder="客户名称"
        @select="((item)=>{handleSelectuser(item)})"
      ></el-autocomplete>
      <el-input v-model="product.boilerNo" placeholder="锅炉编号" style="width: 150px;"></el-input>
      <el-select
        clearable
        style="width: 150px"
        v-model="product.productCategoryId"
        placeholder="锅炉型号"
      >
        <el-option
          v-for="item in boilerModelNumberArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="product.controllerNo" placeholder="控制器编号" style="width: 150px;"></el-input>
      <el-select clearable style="width: 150px" v-model="product.power" placeholder="燃料">
        <el-option
          v-for="item in fuelArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select clearable style="width: 150px" v-model="product.media" placeholder="介质">
        <el-option
          v-for="item in mediumArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-date-picker
        v-model="product.saleDate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="售出时间"
        style="width: 150px;"
      ></el-date-picker>
      <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button
        style="margin-left: 10px;"
        @click="handleCreate"
        icon="el-icon-plus" type="success"
      >新增</el-button>
      <!--<el-button style="margin-left: 10px;" @click="showMap" type="primary" icon="el-icon-location-outline">地图分布</el-button>-->
    </el-row>
    <!--数据展示-->
    <el-table
      :data="list.slice((currentPage1-1)*pageSize1,currentPage1*pageSize1)"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      border
      fit
      highlight-current-row
      style="width: 120%"
      @row-contextmenu="openTableMenu"
    >
      <el-table-column :show-overflow-tooltip="true" align="left" label="锅炉编号">
        <template slot-scope="scope">
          <span>{{scope.row.boilerNo}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="锅炉型号">
        <template slot-scope="scope">
          <span>{{scope.row.productCategoryId | dictionaryValueFieldFilter(boilerModelNumberArray)}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="控制器编号">
        <template slot-scope="scope">
          <span>{{scope.row.controllerNo}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="燃料">
        <template slot-scope="scope">
          <span>{{scope.row.power | dictionaryValueFieldFilter(fuelArray)}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="介质">
        <template slot-scope="scope">
          <span>{{scope.row.media | dictionaryValueFieldFilter(mediumArray)}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="吨位（T）">
        <template slot-scope="scope">
          <span>{{scope.row.tonnageNum}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="是否售出">
        <template slot-scope="scope">
          <span>{{scope.row.isSell | dictionaryValueFieldFilter(isSellArray)}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="客户">
        <template slot-scope="scope">
          <span v-if="scope.row.customerName">{{scope.row.customerName}}</span>
          <span v-if="scope.row.customerName==null">无</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="售出时间">
        <template slot-scope="scope">
          <span v-if="scope.row.saleDate">{{scope.row.saleDate}}</span>
          <span v-if="scope.row.saleDate==null">无</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="售出地址">
        <template slot-scope="scope">
          <span
            v-if="scope.row.province||scope.row.city||scope.row.district||scope.row.street"
          >{{scope.row.province}}{{scope.row.city}}{{scope.row.district}}{{scope.row.street}}</span>
          <span v-else>无</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item
        @click="handleUpdate"
        :width="100"
        :fontSize="14"
      >编辑</menu-context-item>
      <menu-context-item @click="handleCopy"  :width="100" :fontSize="14">复制</menu-context-item>
      <menu-context-item @click="sellProduct" :width="100" :fontSize="14">售出</menu-context-item>
      <menu-context-item @click="handleDownload" :width="100" :fontSize="14">导出</menu-context-item>
      <menu-context-item @click="showControllerData" :width="100" :fontSize="14">监控</menu-context-item>
      <menu-context-item @click="auxiliaryMachineInfo" :width="100" :fontSize="14">辅机信息</menu-context-item>
      <!--<menu-context-item @click="baseInfoInfo" :width="100" :fontSize="18">运行信息</menu-context-item>-->
      <menu-context-item
        @click="handleChoiceUser"
        :width="100"
        :fontSize="14"
      >分配</menu-context-item>
      <menu-context-item
        @click="handleDelete"
        :width="100"
        :fontSize="14"
      >删除</menu-context-item>
    </menu-context>
    <!--右键菜单-->
    <!--<contextmenu :visible="showcontextmenu" ref="cmenu"></contextmenu>-->

    <!--分页-->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange1"
        @current-change="handleCurrentChange1"
        :current-page="currentPage1"
        :page-sizes="[5]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listQuery.total"
      ></el-pagination>
    </div>
    <!--编辑-->
    <product-form-dialog
      :show.sync="productFromDialogVisible"
      :productFormData="productFormData"
      :title="titleName"
      @confirmEditDialog="confirmEditDialog"
      @productFormDialogClose="productFormDialogClose"
    ></product-form-dialog>
    <!--分配用户dialog-->
    <div class="user-select">
      <el-dialog title="分配用户" :visible.sync="dialogChoiceUserFormVisible" width="60%">
        <el-table
          :data="userlist"
          v-loading="listLoading"
          element-loading-text="给我一点时间"
          ref="docTable"
          border
          fit
          highlight-current-row
          style="width: 120% ;height: 100%"
          @row-contextmenu="openTableMenu"
        >
          <el-table-column type="selection" width="30"></el-table-column>
          <el-table-column align="left" :show-overflow-tooltip="true" label="序号">
            <template slot-scope="scope">
              <span>{{scope.row.id}}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" :show-overflow-tooltip="true" label="员工姓名">
            <template slot-scope="scope">
              <span>{{scope.row.userName}}</span>
            </template>
          </el-table-column>
          <el-table-column align="left" :show-overflow-tooltip="true" label="权限">
            <template slot-scope="scope">
              <span>{{scope.row.roleName}}</span>
            </template>
          </el-table-column>
        </el-table>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogChoiceUserFormVisible = false">取消</el-button>
          <el-button type="primary" @click="confirmSubmitChoiceUser()">确认</el-button>
        </div>
      </el-dialog>
    </div>
    <!--删除dialog-->
    <boiler-common-delete-validate-dialog
      @confirmDeleteValidate="confirmDeleteValidate"
      @confirmCancelValidate="confirmCancelValidate"
      :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible"
      :id="delId"
      :controllerNo="delCtlNo"
    ></boiler-common-delete-validate-dialog>
    <!--售出-->
    <product-map-dialog
      :show.sync="productMapDialogVisible"
      :productFormData="productFormData"
      @productMapDialogClose="productMapDialogClose"
      @confirmSellDialog="confirmSellDialog"
    ></product-map-dialog>
    <!--监控-->
    <el-dialog title="监控" :visible.sync="controllerRunInfoDialogVisible" width="40%">
      <controller-run-info-dialog
        :cleartimer="!controllerRunInfoDialogVisible"
        :controllerNo="this.controllerNo"
        :address="this.address"
      ></controller-run-info-dialog>
    </el-dialog>

    <!--运行信息-->
    <el-dialog title="运行信息报表" :visible.sync="showEchartDialog" height="100%" width="100%">
      <device-chart></device-chart>
    </el-dialog>
    </div>
    <div v-if="PartCategory">
      <el-form
        ref="productForm"
        :model="formData"
        label-position="right"
        label-width="100px"
        style="width: 96%; margin-left:15px;"
      >
        <div style="margin-top: 5px">
          <el-button style="margin-left: 85%" icon="el-icon-plus" type="success"  @click="handleAdd">添加</el-button>
          <el-button type="warning" icon="el-icon-back" @click="canelForm">取消</el-button>
        </div>
        <el-table
          :data="formData.productAuxiliaryMachineInfoList"
          element-loading-text="给我一点时间"
          border
          style="margin-top:10px"
          @row-contextmenu="openTableMenu"
        >
          <el-table-column :show-overflow-tooltip="true" align="left" label="大类">
            <template slot-scope="scope">
              <span>{{scope.row.partCategoryName}}</span>
            </template>
          </el-table-column>
          <el-table-column :show-overflow-tooltip="true" align="left" label="小类">
            <template slot-scope="scope">
              <span>{{scope.row.partSubCategoryName}}</span>
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
          <menu-context-item @click="handleUpdatePart">编辑</menu-context-item>
          <menu-context-item @click="handleCopyPart">复制</menu-context-item>
          <menu-context-item @click="handleDeletepart">删除</menu-context-item>
        </menu-context>
      </el-form>
      <auxiliary-machine-info-dialog
        :show.sync="auxiliaryMachineInfoDialogVisible"
        :title="titleName"
        :productAuxiliaryMachineInfo="productAuxiliaryMachineInfo"
        @confirmAuxiliaryMachineInfoDialog="confirmAuxiliaryMachineInfoDialog"
        @auxiliaryMachineInfoDialogClose="auxiliaryMachineInfoDialogClose"
      ></auxiliary-machine-info-dialog>
    </div>
  </div>
</template>

<script>
import { initMedium, initFuel, initIsSell } from "./product-dictionary";
import { getBoilerModelListByCondition } from "@/api/boilerModel";
import { getUserListByCondition ,
  getUserListByConditionAndPage} from "@/api/user";
import contextmenu from "@/components/ContextMenu";
import deviceChart from "@/components/deviceChart";
import {
  getProductListByCondition,
  deleteProductById,
  getProductUserListByProductCondition,
  insertManyProductUser,
  insertProduct,
  getUsers
} from "@/api/product";
import {getList} from "@/api/boilerCustomer";
import { getProductAuxiliaryMachineInfoListByProductId, createProductAuxiliaryMachineInfoList,
  editProductAuxiliaryMachineInfoList, removeProductAuxiliaryMachineInfoList} from "@/api/ProductAuxiliaryMachineInfo";
import { getAuxiliaryMachineLargeClassListByCondition } from "@/api/auxiliaryMachineLargeClass";
import { getAuxiliaryMachineSmallClassListByCondition } from "@/api/auxiliaryMachineSmallClass";
import { statusManage } from "@/views/common/statusManage";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
import { formatDateTime } from "@/utils/date";
import { validatePositiveAndSmallAndFloatNum } from "@/utils/validate";
import { editProduct } from "@/api/product";
import productMapDialog from "./product-map";
import productFormDialog from "./product-form";
import auxiliaryMachineDialog from "./auxiliary-machine-form";
import controllerRunInfoDialog from "@/components/controller-run-info/index";
import { updateProductSellAbout } from "@/api/product";
import { getControllerByteData, getControllerType } from "@/api/controller";
import auxiliaryMachineInfoDialog from "./product-auxiliary-machine-info-form";

function dictionaryValueFilter(dictionaryValue, value) {
  const dictionaryValueItem = dictionaryValue.filter(item => {
    return item.value == value;
  });
  return dictionaryValueItem[0];
}
export default {
  components: {
    "boiler-common-delete-validate-dialog": boilerCommonDeleteValidate,
    productFormDialog,
    productMapDialog,
    auxiliaryMachineDialog,
    controllerRunInfoDialog,
    contextmenu,
    deviceChart,
    auxiliaryMachineInfoDialog
  },
  data() {
    const validatePositiveAndSmallAndFloatNumFun = (rule, value, callback) => {
      if (!validatePositiveAndSmallAndFloatNum(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    const validateFuelFun = (rule, value, callback) => {
      if (value == null) {
        callback(new Error("请选择燃料"));
      } else {
        callback();
      }
    };
    const validateMediumFun = (rule, value, callback) => {
      if (value == null) {
        callback(new Error("请选择介质"));
      } else {
        callback();
      }
    };
    return {
      showEchartDialog: false,
      showcontextmenu: false,
      boilerModelNumberArray: [],
      mediumArray: [],
      fuelArray: [],
      isSellArray: [],
      largeClassArray: [],
      smallClassArray: [],
      productAuxiliaryMachineInfoList: [],
      list: [],
      userlist: null,
      user: null,
      listQuery3: {
        pageNum: 1,
        pageSize: 5,
        orgId: this.$store.state.user.orgId
      },
      productAuxiliaryMachineInfo: {
        id: '',
        partSubCategoryName: '',
        partCategoryName: '',
        partCategoryId: null,
        partSubCategoryId: null,
        brandName: '',
        modelName: '',
        amountOfUser: '',
        supplier: '',
        remarks: '',
        productId: ''
      },
      auxiliaryMachineInfoDialogVisible: false,
      formData: {
        id: "",
        roleIdArray: this.$store.state.user.role,
        userId: this.$store.state.user.userId,
        orgId: this.$store.state.user.orgId,
        orgType: this.$store.state.user.orgType,
        controllerNo: "",
        boilerNo: "",
        largeClassId: null,
        smallClassId: '',
        partSubCategoryName: '',
        partCategoryName: null,
        partCategoryId: null,
        partSubCategoryId: null,
        tonnageNum: null,
        media: null,
        power: null,
        createDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        editDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        isSell: 0,
        productAuxiliaryMachineInfoList: []
      },
      listQuery: {
        total: 50,
        pageNum: 1,
        pageSize: 5,
        organizationType: null,
        organizationNo: null,
        boilerNo: "",
        saleDate: null,
        controllerNo: "",
        customerName: null,
        boilerModelNumber: null,
        tonnageNum: null,
        media: null,
        power: null,
        userId: null
      },
      currentPage1:1,
      pageNum1: 1,
      pageSize1: 5,
      PartCategory: false,
      total: 50,
      pageNum: 1,
      pageSize: 5,
      product: {
        boilerNo: "",
        saleDate: null,
        controllerNo: "",
        customerName: null,
        productCategoryId:null,
        tonnageNum: null,
        media: null,
        power: null,
        userId: null,
        isSell: null,
        productCategoryName: ''
      },
      listQuery2: {
        total: 500,
        pageNum: 1,
        pageSize: 50,
        realName: "",
        mobile: null,
        orgType: this.$store.state.user.orgType,
        orgId: this.$store.state.user.orgId
      },
      dialogChoiceUserFormVisible: false,
      choiceUserFormData: {
        userOptions: [],
        userArray: [],
        productUserArray: [], //设备原始分布用户Id列表
        selectUserIdArray: [],
        productId: 0
      },
      productFormData: {},
      controllerNo: "",
      rules: {
        tonnageNum: [
          { trigger: "blur", validator: validatePositiveAndSmallAndFloatNumFun }
        ],
        boilerNo: [
          { required: true, trigger: "blur", message: "锅炉编号不能为空" }
        ],
        controllerNo: [
          { required: true, trigger: "blur", message: "设备编号不能为空" }
        ],
        power: [{ required: true, trigger: "blur", validator: validateFuelFun }],
        media: [
          { required: true, trigger: "blur", validator: validateMediumFun }
        ]
      },
      productId: '',
      productPartInfoId: '',
      largeClassOptions: [],
      smallClassOptions: [],
      customerList: [],
      listLoading: true,
      delId: -1,
      delCtlNo:null,
      updateId: -1,
      deleteValidateFormDialogVisible: false,
      productFromDialogVisible: false,
      productMapDialogVisible: false,
      auxiliaryMachineDialogVisible: false,
      controllerRunInfoDialogVisible: false,
      mapCompleteDialogVisible: false,
      titleName: "",
      address: ""
    };
  },
  filters: {
    dictionaryValueFieldFilter(value, dictionaryValueArray) {
      if (dictionaryValueFilter(dictionaryValueArray, value))
        return dictionaryValueFilter(dictionaryValueArray, value).label;
      return;
    }
  },
  created() {
    Promise.all([this.initSelect()]).then(() => {
      this.getList();
    });
  },
  methods: {
    // remove(tag) {
    //   console.log("remove-" + tag);
    // },
    confirmAuxiliaryMachineInfoDialog(obj) {
      var productPartInfos = [];
      if (obj.flag) {
        this.auxiliaryMachineInfoDialogVisible =
          obj.auxiliaryMachineInfoDialogVisible;
        if (obj.title === "新增"||obj.title === "复制") {
          obj.auxiliaryMachineInfoFormData.productId = this.productId;
          productPartInfos.push(obj.auxiliaryMachineInfoFormData);
          createProductAuxiliaryMachineInfoList(productPartInfos).then(data => {
            if(data.data.code==0){
            this.$message({
              message: "操作成功",
              type: "success"
            });
            this.getAuxiliaryList();
            } else {
              this.$message.error(data.data.msg);
              return;
            }
          });
        } else {
          obj.auxiliaryMachineInfoFormData.productId = this.productId;
          editProductAuxiliaryMachineInfoList(obj.auxiliaryMachineInfoFormData).then(data => {
            if(data.data.code==0){
            this.$message({
              message: "操作成功",
              type: "success"
            });
            this.getAuxiliaryList();
            } else {
              this.$message.error(data.data.msg);
              return;
            }
          });
        }
      }
    },
    auxiliaryMachineInfoDialogClose(obj) {
      this.auxiliaryMachineInfoDialogVisible =
        obj.auxiliaryMachineInfoDialogVisible;
      this.getList();
    },
    change(tag) {
      this.choiceUserFormData.selectUserIdArray = tag;
    },
    querySearchAsyncuser(queryString, callback) {
      getList(this.listQuery2).then(response => {
        this.customerList = [];
        var results = [];
        for (let i = 0, len = response.data.data.list.length; i < len; i++) {
          response.data.data.list[i].value = response.data.data.list[i].name;
        }
        this.customerList = response.data.data.list;
        results = queryString ? this.customerList.filter(this.createFilteruser(queryString)) : this.customerList;
        callback(results);
      });
    },

    createFilteruser(queryString, queryArr) {
      return (queryArr) => {
        return (queryArr.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelectuser(item) {
    },
    initSelect() {
      getBoilerModelListByCondition(this.$store.state.user.orgId).then(data => {
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
      initIsSell().then(data => {
        this.isSellArray = data;
      });
    },
    initAuxiliaryMachineAbout() {
      return new Promise((resolve, reject) => {
        getAuxiliaryMachineLargeClassListByCondition().then(response => {
          this.largeClassOptions = this.getAuxiliaryMachineAboutOptions(
            response.data.data
          );
          this.largeClassArray= response.data.data
        });
        resolve();
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
    handleAdd() {
      this.auxiliaryMachineInfoDialogVisible = true;
      this.titleName = "新增";
    },
    openTableMenu(row, event) {
      this.$refs.menuContext.openTableMenu(
        row,
        event,
        window.event.clientX,
        window.event.clientY
      );
      //this.$refs.cmenu.show()
    },
    handleFilter() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    getList() {
      this.listLoading = true;
      //3->锅炉厂管理员 5->锅炉厂普通用户
        this.product.userId = this.$store.state.user.userId;
      getProductListByCondition({
        product: this.product,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(response => {
        if(response.data.code==0){
        const data = response.data.data;
        this.list = data.list;
        this.listQuery.total = data.total;
        this.listLoading = false;
        } else {
          this.$message.error(response.data.msg);
          return;
        }
      });
    },
    //产品新增
    handleCreate() {
      this.productFromDialogVisible = true;
      this.titleName = "新增";
    },
    //产品编辑
    handleUpdate(row) {
      this.productFromDialogVisible = true;
      this.productFormData = row;
      this.titleName = "编辑";
    },
    //产品复制
    handleCopy(row) {
      this.productFromDialogVisible = true;
      this.productFormData = row;
      this.titleName = "复制";
    },
    //辅机编辑
    handleUpdatePart(row) {
      this.auxiliaryMachineInfoDialogVisible = true;
      this.titleName = "编辑";
      this.productAuxiliaryMachineInfo = row;
    },
    //辅机复制
    handleCopyPart(row) {
      this.auxiliaryMachineInfoDialogVisible = true;
      this.titleName = "复制";
      this.productAuxiliaryMachineInfo = row;
    },
    handleDeletepart(row){
      this.productPartInfoId=row.id;
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          removeProductAuxiliaryMachineInfoList({
            productId: this.productId,
            productPartInfoId: this.productPartInfoId
          }).then(response => {
            if (response.data.code == 0) {
              this.$message({
                message: "删除成功",
                type: "success"
              });
            }
            this.getAuxiliaryList();
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    /*showMap(){
                let width= Math.round(document.body.clientWidth/2)+175
                let height= Math.round(document.body.clientHeight/2)+175
                // let newWindow=openCommonWindow("/map-complete-page",{width: width, height: height})
                // newWindow.on('closed', () => {
                //     newWindow = null
                // })
            },*/
    //产品售出
    sellProduct(row) {
      this.productMapDialogVisible = true;
      this.productFormData = row;
    },
    //监控
    showControllerData(row) {
      this.controllerRunInfoDialogVisible = true;
      this.controllerNo = row.controllerNo;
      //console.log(row);
      row.province
        ? (this.address = row.province + row.city + row.district + row.street)
        : (this.address = "");
    },
    // 辅机信息
    auxiliaryMachineInfo(row) {
      this.PartCategory = true;
      this.productFormData = row;
      this.productId=row.id;
      this.titleName = "辅机信息";
      this.getAuxiliaryList()
      this.initAuxiliaryMachineAbout()
    },
    getAuxiliaryList(){
      getProductAuxiliaryMachineInfoListByProductId({
        productId: this.productFormData.id
      }).then(response => {
        if(response.data.code==0){
        let productAuxiliaryMachineInfoList = response.data.data;
        this.formData.productAuxiliaryMachineInfoList = productAuxiliaryMachineInfoList;
        } else {
          this.$message.error(response.data.msg)
          return;
        }
      });
    },
    canelForm(){
      this.PartCategory = false;
    },
    baseInfoInfo(row) {
      let width = Math.round(document.body.clientWidth) - 200;
      let height = Math.round(document.body.clientHeight) - 200;
      let newWindow = openCommonWindow(
        "/base-run-info-complete-page?controllerNo=" + row.controllerNo,
        { width: width, height: height }
      );
      newWindow.on("closed", () => {
        newWindow = null;
      });
    },
    handleChoiceUser(row) {
      this.dialogStatus = "update";
      this.dialogChoiceUserFormVisible = true;
      this.choiceUserFormData.productId = row.id;
      this.choiceUserFormData.userOptions = [];
      getUsers(this.choiceUserFormData.productId).then(response => {
        this.user = response.data.data;

      });
      getUserListByConditionAndPage(this.listQuery3).then(response => {
        const data = response.data.data;
        this.userlist = data.list;
        this.listQuery.total = data.total;
        this.listQuery.pageNum = data.pageNum;
        this.listQuery.pageSize = data.pageSize;
        this.listLoading = false;
      });
      let arr = []
      this.userlist.forEach(item => {
        this.user.forEach(val => {
          if (val.userId === item.id) {
            arr.push(item)
          }
        })
      })
      this.toggleSelection(arr)
      /*getUserListByCondition({
        status: statusManage.STATUS_ENABLE,
        orgId: this.$store.state.user.orgId,
        orgType: this.$store.state.user.orgType
      }).then(response => {
        let userArray = response.data.data;
        this.choiceUserFormData.userArray = userArray;
        userArray.forEach(item => {
          if (item.id != this.$store.state.user.userId)
            this.choiceUserFormData.userOptions.push({
              value: item.id,
              label: item.realName
            });
        });
      });

      getProductUserListByProductCondition({ productId: row.id }).then(data => {
        this.choiceUserFormData.productUserArray = [];
            this.choiceUserFormData.selectUserIdArray = []
        //let userIdArray = [];
        data.data.data.forEach(item => {
          if (item.userId != this.$store.state.user.userId){
            this.choiceUserFormData.productUserArray.push(item.userId);
            this.choiceUserFormData.selectUserIdArray.push(item.userId)
          }
        });
        //this.choiceUserFormData.deleteUserIdArray = userIdArray;
        //this.choiceUserFormData.selectUserIdArray = userIdArray;
      });
      this.dialogStatus = "update";
      this.dialogChoiceUserFormVisible = true;
      this.$nextTick(() => {
        this.$refs["choiceUserForm"].clearValidate();
      });*/
    },
    toggleSelection (rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.docTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.docTable.clearSelection()
      }
    },
    checkArrayContains(v, dataArray) {
      let flag = false;
      for (let i = 0; i < dataArray.length; i++) {
        if (v == dataArray[i]) {
          flag = true;
          break;
        }
      }
      return flag;
    },
    confirmSubmitChoiceUser() {
      let insertProductUserList = [];

     /* for (
        let i = 0;
        i < this.choiceUserFormData.productUserArray.length;
        i++
      ) {
        if (
          !this.checkArrayContains(
            this.choiceUserFormData.productUserArray[i],
            this.choiceUserFormData.selectUserIdArray
          )
        ) {
          deleteProductUserList.push({
            userId: this.choiceUserFormData.productUserArray[i],
            productId: this.choiceUserFormData.productId
          });
        }
      }
      let insertProductUserList = [];
      for (
        let i = 0;
        i < this.choiceUserFormData.selectUserIdArray.length;
        i++
      ) {
        if (
          !this.checkArrayContains(
            this.choiceUserFormData.selectUserIdArray[i],
            this.choiceUserFormData.productUserArray
          )
        ) {
          insertProductUserList.push({
            userId: this.choiceUserFormData.selectUserIdArray[i],
            productId: this.choiceUserFormData.productId
          });
        }
      }*/
      insertManyProductUser({
        productId: this.choiceUserFormData.productId,
        productUsers: insertProductUserList
      }).then(data => {
        this.dialogChoiceUserFormVisible = false;
        this.$message({
          message: "分配成功",
          type: "success"
        });
        //this.getList();
      });
    },
    handleDelete(row) {
      this.$confirm("确认删除?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.deleteValidateFormDialogVisible = true;
          this.delId = row.id;
          this.delCtlNo = row.controllerNo
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    confirmDeleteValidate(obj) {
      if (obj.flag) {
        this.deleteValidateFormDialogVisible =
          obj.deleteValidateFormDialogVisible;
        deleteProductById(obj.id,obj.controllerNo).then(response => {
          if (response.data.code==0){
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getList();
          } else {
            this.$message.error(response.data.msg)
            return;
          }
        });
      }
    },
    confirmEditDialog(obj) {
      if (obj.flag) {
        this.productFromDialogVisible = obj.productFromDialogVisible;
        if (obj.title === "编辑") {
          editProduct(obj.productFormData).then(response => {
            if (response.data.code==0){
            if (obj.title === "编辑") {
              this.$message({
                message: "编辑成功",
                type: "success"
              });
            };
            this.getList();
            } else {
              this.$message.error(response.data.msg)
              return;
            }
          });
        } else {
          insertProduct(obj.productFormData).then(response => {
            if (response.data.code==0){
            if (obj.title === "复制") {
              this.$message({
                message: "复制成功",
                type: "success"
              });
            } else {
              this.$message({
                message: "新增成功",
                type: "success"
              });
            }
            this.getList();
            } else {
              this.$message.error(response.data.msg)
              return;
            }
          })
        }
      }
    },
    confirmSellDialog(obj) {
      if (obj.flag) {
        this.productMapDialogVisible = obj.productMapDialogVisible;
        updateProductSellAbout(obj.productFormData).then(response => {
          if (response.data.code==0){
          this.$message({
            message: "出售成功",
            type: "success"
          });
          this.getList();
          } else {
            this.$message.error(response.data.msg)
            return;
          }
        });
      }
    },
    confirmAuxiliaryMachineDialog(obj) {
      if (obj.flag) {
        this.auxiliaryMachineDialogVisible = obj.auxiliaryMachineDialogVisible;
        editProduct(obj.productFormData).then(response => {
          if (response.data.code==0){
          this.$message({
            message: "操作成功",
            type: "success"
          });
          this.getList();
          } else {
            this.$message.error(response.data.msg)
            return;
          }
        });
      }
    },
    handleDownload(row) {
      this.initAuxiliaryMachineAbout()
        .then(() => {
          return getProductAuxiliaryMachineInfoListByProductId({
            productId: row.id
          });
        })
        .then(response => {
          this.productAuxiliaryMachineInfoList = response.data.data;
          return import("./exportToExcel");
        })
        .then(excel => {
          let excelObjArray = [];
          const boiler_header = [
            "锅炉编号",
            "锅炉型号",
            "控制器编号",
            "燃料",
            "介质",
            "吨位（T）",
            "是否售出",
            "客户名称",
            "出售日期",
            "出售地址"
          ];
          const boiler_filter_val = [
            "boilerNo",
            "boilerModelNumber",
            "controllerNo",
            "power",
            "media",
            "tonnageNum",
            "isSell",
            "customerName",
            "saleDate",
            "saleAddress"
          ];
          const boiler_data = {
            boilerNo: row.boilerNo,
            boilerModelNumber: (() => {
              let dictionary = dictionaryValueFilter(
                this.boilerModelNumberArray,
                row.productCategoryId
              );
              if (dictionary) return dictionary.label;
              return "";
            })(),
            controllerNo: row.controllerNo,
            tonnageNum: row.tonnageNum,
            media: (() => {
              let dictionary = dictionaryValueFilter(
                this.mediumArray,
                row.media
              );
              if (dictionary) return dictionary.label;
              return "";
            })(),
            power: (() => {
              let dictionary = dictionaryValueFilter(this.fuelArray, row.power);
              if (dictionary) return dictionary.label;
              return "";
            })(),
            isSell: (() => {
              let dictionary = dictionaryValueFilter(
                this.isSellArray,
                row.isSell
              );
              if (dictionary) return dictionary.label;
              return "";
            })(),
            customerName: (() => {
              if (row.customerName) return row.customerName;
              return "无";
            })(),
            saleDate: (() => {
              if (row.saleDate) return row.saleDate;
              return "无";
            })(),
            saleAddress: (() => {
              if (row.province || row.city || row.district || row.street) {
                return row.province + row.city + row.district + row.street;
              }

              return "无";
            })()
          };
          excelObjArray.push({
            title: "产品信息",
            header: boiler_header,
            data: this.formatJson(boiler_filter_val, [boiler_data])
          });

          if (this.productAuxiliaryMachineInfoList.length > 0) {
            const productAuxiliaryMachineInfo_header = [
              "大类",
              "小类",
              "品牌",
              "型号",
              "数量",
              "供货厂家",
              "备注"
            ];
            const productAuxiliaryMachineInfo_filter_val = [
              "largeClassName",
              "smallClassName",
              "brandName",
              "modelName",
              "amountOfUser",
              "supplier",
              "remarks"
            ];
            this.productAuxiliaryMachineInfoList.forEach(item => {
              item.largeClassName = (() => {
                let dictionary = dictionaryValueFilter(
                  this.largeClassArray,
                  item.largeClassId
                );
                if (dictionary) return dictionary.label;
                return "";
              })();
              item.smallClassName = (() => {
                let dictionary = dictionaryValueFilter(
                  this.smallClassArray,
                  item.smallClassId
                );
                if (dictionary) return dictionary.label;
                return "";
              })();
            });
            excelObjArray.push({
              title: "辅机信息",
              header: productAuxiliaryMachineInfo_header,
              data: this.formatJson(
                productAuxiliaryMachineInfo_filter_val,
                this.productAuxiliaryMachineInfoList
              )
            });
          }
          excel.export_json_to_excel(row.boilerNo, excelObjArray);
        });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]));
    },
    confirmCancelValidate(obj) {
      this.deleteValidateFormDialogVisible =
        obj.deleteValidateFormDialogVisible;
    },
    productFormDialogClose(obj) {
      this.productFromDialogVisible = obj.productFromDialogVisible;
      this.getList();
    },
    productMapDialogClose(obj) {
      this.productMapDialogVisible = obj.productMapDialogVisible;
      this.getList();
    },
    auxiliaryMachineDialogClose(obj) {
      this.auxiliaryMachineDialogVisible = obj.auxiliaryMachineDialogVisible;
      this.getList();
    },
    controllerRunInfoDialogClose(obj) {
      this.controllerRunInfoDialogVisible = obj.controllerRunInfoDialogVisible;
    },
    handleSizeChange1: function (pageSize) {
      this.pageSize1 = pageSize;
      this.handleCurrentChange1(this.currentPage);
    },
    handleCurrentChange1: function (currentPage) {//页码切换
      this.currentPage1 = currentPage;
    },
  }
};
</script>
