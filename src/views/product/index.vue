<template>
  <div class="app-container product-container">
    <div v-if="PartCategory==0">
      <!--查询-->
      <el-row class="app-query">
        <el-col :span="3">
          <el-select clearable v-model="product.customerName" placeholder="客户名称">
            <el-option
              style="width: 130px"
              v-for="item in customerList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="2.5">
          <el-input v-model="product.boilerNo" placeholder="锅炉编号" style="width: 130px"></el-input>
        </el-col>
        <el-col :span="3">
          <el-select clearable v-model="product.productCategoryId" placeholder="锅炉型号">
            <el-option
              style="width: 130px"
              v-for="item in boilerModelNumberArray"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="2.5">
          <el-input v-model="product.controllerNo" placeholder="控制器编号" style="width: 130px"></el-input>
        </el-col>
        <el-col :span="2.5">
          <el-select clearable style="width: 150px" v-model="product.power" placeholder="燃料">
            <el-option
              style="width: 130px"
              v-for="item in fuelArray"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="2.5">
          <el-select clearable style="width: 150px" v-model="product.media" placeholder="介质">
            <el-option
              style="width: 130px"
              v-for="item in mediumArray"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="3">
          <el-date-picker
            v-model="product.saleDate"
            style="width: 150px"
            type="date"
            value-format="yyyy-MM-dd"
            placeholder="售出时间"
          ></el-date-picker>
        </el-col>
        <el-col :span="2">
          <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        </el-col>
        <el-col :span="2">
          <el-button @click="handleCreate" icon="el-icon-plus" type="success">添加</el-button>
        </el-col>
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
            <span>{{scope.row.street}}</span>
          </template>
        </el-table-column>
      </el-table>
      <menu-context ref="menuContext">
        <menu-context-item @click="handleUpdate" :width="100" :fontSize="14">编辑</menu-context-item>
        <!--  <menu-context-item @click="handleCopy"  :width="100" :fontSize="14">复制</menu-context-item>-->
        <menu-context-item @click="sellProduct" :width="100" :fontSize="14">售出</menu-context-item>
        <!-- <menu-context-item @click="handleDownload" :width="100" :fontSize="14">导出</menu-context-item>-->
        <menu-context-item @click="showControllerData" :width="100" :fontSize="14">监控</menu-context-item>
        <menu-context-item @click="auxiliaryMachineInfo" :width="100" :fontSize="14">辅机信息</menu-context-item>
        <!--<menu-context-item @click="baseInfoInfo" :width="100" :fontSize="18">运行信息</menu-context-item>-->
        <menu-context-item @click="handleChoiceUser" :width="100" :fontSize="14">负责员工</menu-context-item>
        <menu-context-item @click="handleDelete" :width="100" :fontSize="14">删除</menu-context-item>
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
      <!--分配用户dialog-->
      <div class="user-select">
        <el-dialog title="负责员工" :visible.sync="dialogChoiceUserFormVisible" width="50%">
          <el-form
            ref="choiceUserForm"
            :model="choiceUserFormData"
            label-position="right"
            label-width="80px"
          >
            <el-transfer
              v-model="choiceUserFormData.checkedUsers"
              :data="choiceUserFormData.sourceUsers"
              :titles="['可分配', '已分配']"
            ></el-transfer>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="confirmSubmitChoiceUser()">确认</el-button>
            <el-button
              type="warning"
              icon="el-icon-back"
              @click="dialogChoiceUserFormVisible = false"
            >取消</el-button>
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
        ref="productMapDlg"
        :show.sync="productMapDialogVisible"
        :productData="productFormData"
        @onClosed="productMapDialogClose"
      ></product-map-dialog>
      <!--监控-->
      <el-dialog title="监控" :visible.sync="controllerRunInfoDialogVisible" width="40%" @close="close">
        <controller-run-info-dialog
          ref="deviceRunInfo"
          :boiler-no="this.boilerNo"
          :controller-no="this.controllerNo"
          :address="this.address"
          :visible="controllerRunInfoDialogVisible"
        ></controller-run-info-dialog>
      </el-dialog>

      <!--运行信息-->
      <el-dialog title="运行信息报表" :visible.sync="showEchartDialog" height="100%" width="100%">
        <device-chart></device-chart>
      </el-dialog>
    </div>
    <div v-if="PartCategory==1">
      <el-form
        ref="productForm"
        :model="formData"
        label-position="right"
        label-width="100px"
        style="width: 96%; margin-left:15px;"
      >
        <div style="margin-top: 5px">
          <el-row>
            <el-col :offset="20" :span="2">
              <el-button icon="el-icon-plus" type="success" @click="handleAdd">添加</el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="warning" icon="el-icon-back" @click="canelForm">取消</el-button>
            </el-col>
          </el-row>
        </div>
        <el-table
          :data="formData.productAuxiliaryMachineInfoList"
          v-loading="listLoading"
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

      <boiler-common-delete-validate-dialog
        @confirmDeleteValidate="confirmDeleteValidate"
        @confirmCancelValidate="confirmCancelValidate"
        :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible"
        :id="delId"
        :controllerNo="delCtlNo"
      ></boiler-common-delete-validate-dialog>
    </div>
    <div v-if="PartCategory==2">
      <el-row>
        <el-col :span="3" :offset="21">
          <el-button type="warning" icon="el-icon-back" @click="cenalForm">取消</el-button>
        </el-col>
      </el-row>
      <el-form
        :rules="rules"
        ref="productForm"
        :model="addFormData"
        label-position="right"
        label-width="100px"
        style="width: 50%; margin-left:25%;margin-top:15px"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="锅炉编号" prop="boilerNo">
              <el-input v-model="addFormData.boilerNo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="锅炉型号">
              <el-select
                clearable
                style="width: 140px"
                v-model="addFormData.productCategoryId"
                placeholder="锅炉型号"
              >
                <el-option
                  v-for="item in boilerModelNumberArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
              <el-button icon="el-icon-plus" type="success" @click="handleAddBoilerModel">添加</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row v-if="this.titleName=='添加'">
          <el-col :span="24">
            <el-alert
              title="控制器编号输入警告"
              type="warning"
              description="错误的控制器编号会引发数据混乱，修正要先删除锅炉信息，后再执行添加。请核实输入是否正确！"
              effect="dark"
              :closable="false"
              show-icon
            ></el-alert>
          </el-col>
        </el-row>
        <el-row>
          <el-col v-if="this.titleName=='添加'" :span="12">
            <el-form-item label="控制器编号" prop="controllerNo">
              <el-input v-model="addFormData.controllerNo" placeholder="控制器编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col v-if="this.titleName!='添加'" :span="12">
            <el-form-item label="控制器编号">
              <el-input v-model="addFormData.controllerNo" placeholder="控制器编号" disabled></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="吨位（T）" prop="tonnageNum">
              <el-input v-model="addFormData.tonnageNum"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="燃料" prop="power">
              <el-select
                clearable
                class="filter-item"
                v-model="addFormData.power"
                style="width: 100%"
              >
                <el-option
                  v-for="item in fuelArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="介质" prop="media">
              <el-select
                clearable
                class="filter-item"
                v-model="addFormData.media"
                style="width: 100%"
              >
                <el-option
                  v-for="item in mediumArray"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item>
              <el-button style="margin-left: 35%" type="primary" @click="addsubmitForm">确认</el-button>
              <el-button type="warning" icon="el-icon-back" @click="cenalForm">取消</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div v-if="PartCategory==3">
      <el-row class="app-query">
        <el-col :span="19">
          <el-button
            style="margin-left: 10px;"
            @click="handleCreateType"
            icon="el-icon-plus"
            type="success"
          >添加</el-button>
        </el-col>
        <el-col :span="3">
          <el-button
            style="margin-left: 85%;"
            @click="canealType"
            type="warning"
            icon="el-icon-back"
          >取消</el-button>
        </el-col>
      </el-row>

      <el-table
        :data="typeList"
        v-loading="listLoading"
        element-loading-text="给我一点时间"
        border
        fit
        highlight-current-row
        @row-contextmenu="openTableMenu"
      >
        <el-table-column align="left" :show-overflow-tooltip="true" label="名称">
          <template slot-scope="scope">
            <span>{{scope.row.name}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination-container">
        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="listQuery4.pageNum"
          :page-sizes="[5,10,15,20]"
          :page-size="listQuery4.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listQuery4.total"
        ></el-pagination>
      </div>
      <el-dialog :title="titleName" :visible.sync="dialogFormVisible">
        <el-form
          :rules="rules"
          ref="boilerModelForm"
          :model="boilerModelFormData"
          label-position="right"
          label-width="80px"
        >
          <el-form-item label="名称" prop="name">
            <el-input v-model="boilerModelFormData.name" size="small"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="createType">确认</el-button>
          <el-button type="warning" icon="el-icon-back" @click="dialogFormVisible = false">取消</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { initMedium, initFuel, initIsSell } from "./product-dictionary";
import { getProductCategoryList } from "@/api/productCategory";
import contextmenu from "@/components/ContextMenu";
import deviceChart from "@/components/deviceChart";
import {
  productSearch,
  deleteProductById,
  insertProduct,
  getProductUsers,
  modifyProductUser
} from "@/api/product";
import {
  getProductCategoryListAndPage,
  createBoilerModel
} from "@/api/productCategory";
import { getList } from "@/api/customer";
import { partlist, addPart, editPart, deletePart } from "@/api/productPartInfo";
import { partCategoryList } from "@/api/partCategory";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
import { formatDateTime } from "@/utils/date";
import { validatePositiveAndSmallAndFloatNum } from "@/utils/validate";
import { editProduct } from "@/api/product";
import productMapDialog from "./product-map";
import productFormDialog from "./product-form";
import auxiliaryMachineDialog from "./auxiliary-machine-form";
import controllerRunInfoDialog from "@/components/controller-run-info/index";
import auxiliaryMachineInfoDialog from "./product-auxiliary-machine-info-form";
import { getUserList } from "@/api/user";

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
      isEdit: false,
      productAuxiliaryMachineInfo: {
        id: "",
        partSubCategoryName: "",
        partCategoryName: "",
        partCategoryId: null,
        partSubCategoryId: null,
        brandName: "",
        modelName: "",
        amountOfUser: "",
        supplier: "",
        remarks: "",
        productId: ""
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
        smallClassId: "",
        partSubCategoryName: "",
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
      addFormData: {
        id: "",
        roleIdArray: this.$store.state.user.role,
        userId: this.$store.state.user.userId,
        orgId: this.$store.state.user.orgId,
        controllerNo: "",
        boilerNo: "",
        partSubCategoryName: "",
        partCategoryName: null,
        partCategoryId: null,
        partSubCategoryId: null,
        tonnageNum: null,
        media: null,
        power: null,
        createDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        editDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        isSell: 0
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
      boilerModelFormData: {
        id: "",
        name: "",
        orgId: this.$store.state.user.orgId,
        sort: 0
      },
      dialogFormVisible: false,
      listQuery4: {
        total: 50,
        pageNum: 1,
        pageSize: 5,
        name: null,
        orgId: null
      },
      currentPage1: 1,
      pageNum1: 1,
      pageSize1: 5,
      PartCategory: 0,
      total: 50,
      pageNum: 1,
      pageSize: 5,
      product: {
        boilerNo: "",
        saleDate: null,
        controllerNo: "",
        customerName: null,
        productCategoryId: null,
        tonnageNum: null,
        media: null,
        power: null,
        userId: null,
        isSell: null,
        productCategoryName: ""
      },
      delete: false,
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
        users: [],
        sourceUsers: [],
        checkedUsers: [], //设备原始分布用户Id列表
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
        power: [
          { required: true, trigger: "blur", validator: validateFuelFun }
        ],
        media: [
          { required: true, trigger: "blur", validator: validateMediumFun }
        ]
      },
      typeList: [],
      productId: "",
      productPartInfoId: "",
      largeClassOptions: [],
      smallClassOptions: [],
      customerList: [],
      listLoading: true,
      delId: -1,
      delCtlNo: null,
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
    getTypeList() {
      this.listLoading = true;
      this.listQuery.orgId = this.$store.state.user.orgId;
      getProductCategoryListAndPage(this.listQuery4).then(response => {
        const data = response.data.data;
        this.typeList = data.list;
        this.listQuery4.total = data.total;
        this.listQuery4.pageNum = data.pageNum;
        this.listQuery4.pageSize = data.pageSize;
        this.listLoading = false;
      });
    },
    confirmAuxiliaryMachineInfoDialog(obj) {
      var productPartInfos = [];
      if (obj.flag) {
        this.auxiliaryMachineInfoDialogVisible =
          obj.auxiliaryMachineInfoDialogVisible;
        if (obj.title === "添加" || obj.title === "复制") {
          obj.auxiliaryMachineInfoFormData.productId = this.productId;
          productPartInfos.push(obj.auxiliaryMachineInfoFormData);
          addPart(productPartInfos).then(data => {
            if (data.data.code == 0) {
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
          editPart(obj.auxiliaryMachineInfoFormData).then(data => {
            if (data.data.code == 0) {
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
    getcustomerListOptions(dataList) {
      let options = [];
      dataList.forEach(item => {
        let optionItem = {};
        optionItem.value = item.name;
        optionItem.label = item.name;
        options.push(optionItem);
      });
      return options;
    },
    initSelect() {
      getProductCategoryList().then(data => {
        this.boilerModelNumberArray = this.getAuxiliaryMachineAboutOptions(
          data.data.data
        );
      });
      getList(this.listQuery2).then(response => {
        this.customerList = this.getcustomerListOptions(
          response.data.data.list
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
        partCategoryList().then(response => {
          this.largeClassOptions = this.getAuxiliaryMachineAboutOptions(
            response.data.data
          );
          this.largeClassArray = response.data.data;
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
      this.titleName = "添加";
    },
    openTableMenu(row, event) {
      this.$refs.menuContext.openTableMenu(
        row,
        event,
        window.event.clientX,
        window.event.clientY
      );
    },
    handleFilter() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    getList() {
      this.listLoading = true;
      this.product.userId = this.$store.state.user.userId;
      productSearch({
        product: this.product,
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(response => {
        if (response.data.code == 0) {
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
    handleAddBoilerModel() {
      this.PartCategory = 3;
      this.getTypeList();
    },
    handleCreateType() {
      this.dialogFormVisible = true;
      this.titleName = "添加";
    },
    canealType() {
      this.PartCategory = 2;
      this.initSelect();
    },
    //产品新增
    handleCreate() {
      this.PartCategory = 2;
      this.titleName = "添加";
      this.addFormData = {
        id: "",
        roleIdArray: this.$store.state.user.role,
        userId: this.$store.state.user.userId,
        orgId: this.$store.state.user.orgId,
        controllerNo: "",
        boilerNo: "",
        partSubCategoryName: "",
        partCategoryName: null,
        partCategoryId: null,
        partSubCategoryId: null,
        tonnageNum: null,
        media: null,
        power: null,
        createDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        editDateTime: formatDateTime(new Date(), "yyyy-MM-dd hh:mm:ss"),
        isSell: 0
      };
    },
    //产品编辑
    handleUpdate(row) {
      this.PartCategory = 2;
      this.addFormData = row;
      this.titleName = "编辑";
    },
    //产品复制
    handleCopy(row) {
      this.PartCategory = 2;
      this.addFormData = row;
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
    handleDeletepart(row) {
      this.deleteValidateFormDialogVisible = true;
      this.productPartInfoId = row.id;
      this.delete = false;
    },
    //产品售出
    sellProduct(row) {
      this.productMapDialogVisible = true;
      this.productFormData = row;
    },
    onShowChange(val) {
      this.productMapDialogVisible = false;
    },
    //监控
    showControllerData(row) {
      this.controllerRunInfoDialogVisible = true;
      this.controllerNo = row.controllerNo;
      row.province
        ? (this.address = row.province + row.city + row.district + row.street)
        : (this.address = "");
    },
    // 辅机信息
    auxiliaryMachineInfo(row) {
      this.PartCategory = 1;
      this.productFormData = row;
      this.productId = row.id;
      this.titleName = "辅机信息";
      this.getAuxiliaryList();
      this.initAuxiliaryMachineAbout();
    },
    getAuxiliaryList() {
      this.listLoading = true;
      partlist({
        productId: this.productFormData.id
      }).then(response => {
        if (response.data.code == 0) {
          let productAuxiliaryMachineInfoList = response.data.data;
          this.formData.productAuxiliaryMachineInfoList = productAuxiliaryMachineInfoList;
          this.listLoading = false;
        } else {
          this.$message.error(response.data.msg);
          return;
        }
      });
    },
    canelForm() {
      this.PartCategory = 0;
      this.deleteValidateFormDialogVisible = false;
    },
    cenalForm() {
      this.PartCategory = 0;
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
    initTransfer() {
      let sourceUsers = [];
      this.choiceUserFormData.users.forEach(u => {
        sourceUsers.push({ key: u.key, label: u.label });
      });
      getProductUsers(this.choiceUserFormData.productId)
        .then(response => {
          let data = response.data;
          if (data.code) {
            this.$message.error(data.msg);
            return;
          } else {
            let users = [];
            data.data.forEach(d => {
              if (1 != d.roleId) {
                users.push(d.userId);
              }
            });
            //组建source target
            users.forEach(u => {
              for (let i = 0; i < sourceUsers.length; i++) {
                if (u.key == sourceUsers[i].key) {
                  u.label = sourceUsers[i].label;
                  sourceUsers.splice(i, 1);
                }
              }
            });

            this.choiceUserFormData.sourceUsers = sourceUsers;
            this.choiceUserFormData.checkedUsers = users;
            this.dialogChoiceUserFormVisible = true;
          }
        })
        .catch(resion => {
          this.$message.error(resion);
        });
    },
    handleChoiceUser(row) {
      this.dialogStatus = "update";
      this.dialogChoiceUserFormVisible = true;
      this.choiceUserFormData.productId = row.id;
      if (this.choiceUserFormData.users.length < 1) {
        getUserList().then(response => {
          let data = response.data;
          if (data.code) {
            this.$message.error(data.msg);
            return;
          } else {
            let users = [];
            data.data.forEach(d => {
              if (1 != d.roleId) {
                users.push({ key: d.id, label: d.userName });
              }
            });
            this.choiceUserFormData.users = users;
            this.initTransfer();
          }
        });
      } else {
        this.initTransfer();
      }
    },
    confirmSubmitChoiceUser() {
      let productId = this.choiceUserFormData.productId;
      let checkedUsers = this.choiceUserFormData.checkedUsers;
      let data = [];
      checkedUsers.forEach(u => {
        data.push({ productId: productId, userId: u });
      });
      modifyProductUser(productId, data)
        .then(response => {
          if (response.data.code) {
            this.$message.error(response.data.msg);
            return;
          }
          this.choiceUserFormData.sourceUsers = [];
          this.choiceUserFormData.checkedUsers = [];
          this.dialogChoiceUserFormVisible = false;
        })
        .catch(resion => {
          this.$message.error(resion);
        });
    },
    handleDelete(row) {
      this.deleteValidateFormDialogVisible = true;
      this.delete = true;
      this.delId = row.id;
      this.delCtlNo = row.controllerNo;
    },
    confirmDeleteValidate(obj) {
      if (obj.flag) {
        this.deleteValidateFormDialogVisible =
          obj.deleteValidateFormDialogVisible;
        if (this.delete == true) {
          deleteProductById(obj.id, obj.controllerNo).then(response => {
            if (response.data.code == 0) {
              this.currentPage1 = 1;
              this.$message({
                message: "删除成功",
                type: "success"
              });
              this.getList();
            } else {
              this.$message.error(response.data.msg);
              return;
            }
          });
        } else {
          deletePart({
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
        }
      } else {
        this.deleteValidateFormDialogVisible = false;
        this.delId = null;
        this.$message.error("输入密码错误，无法完成删除操作！");
      }
    },
    createType() {
      createBoilerModel(this.boilerModelFormData).then(data => {
        this.dialogFormVisible = false;
        this.$message({
          message: "成功",
          type: "success"
        });
        this.getTypeList();
      });
    },
    addsubmitForm() {
      if (this.titleName === "编辑") {
        editProduct(this.addFormData).then(response => {
          if (response.data.code == 0) {
            this.$message({
              message: "编辑成功",
              type: "success"
            });
            this.PartCategory = 0;
            this.getList();
          } else {
            this.$message.error(response.data.msg);
            return;
          }
        });
      } else {
        if (this.titleName === "复制") {
          this.addFormData.boilerNo = "";
          this.addFormData.controllerNo = "";
        }
        insertProduct(this.addFormData).then(response => {
          if (response.data.code == 0) {
            if (this.titleName === "复制") {
              this.$message({
                message: "复制成功",
                type: "success"
              });
              this.PartCategory = 0;
            } else {
              this.$message({
                message: "添加成功",
                type: "success"
              });
              this.PartCategory = 0;
            }
            this.getList();
          } else {
            this.$message.error(response.data.msg);
            return;
          }
        });
      }
    },
    confirmAuxiliaryMachineDialog(obj) {
      if (obj.flag) {
        this.auxiliaryMachineDialogVisible = obj.auxiliaryMachineDialogVisible;
        editProduct(obj.productFormData).then(response => {
          if (response.data.code == 0) {
            this.$message({
              message: "操作成功",
              type: "success"
            });
            this.getList();
          } else {
            this.$message.error(response.data.msg);
            return;
          }
        });
      }
    },
    handleDownload(row) {
      this.initAuxiliaryMachineAbout()
        .then(() => {
          return partlist({
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
    productMapDialogClose(isCancel) {
      if (!isCancel) {
        this.getList();
      }
    },
    auxiliaryMachineDialogClose(obj) {
      this.auxiliaryMachineDialogVisible = obj.auxiliaryMachineDialogVisible;
      this.getList();
    },
    controllerRunInfoDialogClose(obj) {
      this.controllerRunInfoDialogVisible = obj.controllerRunInfoDialogVisible;
    },
    handleSizeChange(val) {
      this.listQuery4.pageSize = val;
      this.getTypeList();
    },
    handleCurrentChange(val) {
      this.listQuery4.pageNum = val;
      this.getTypeList();
    },
    handleSizeChange1: function(pageSize) {
      this.pageSize1 = pageSize;
      this.handleCurrentChange1(this.currentPage);
    },
    handleCurrentChange1: function(currentPage) {
      //页码切换
      this.currentPage1 = currentPage;
    },
    close() {
      this.$refs.deviceRunInfo.stopTimer();
    }
  }
};
</script>
