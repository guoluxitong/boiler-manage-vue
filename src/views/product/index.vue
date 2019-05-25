<template>
  <div class="app-container product-container">
    <!--查询-->
    <el-row class="app-query">
      <el-input v-model="listQuery.boilerNo" placeholder="锅炉编号" style="width: 150px;"></el-input>
      <el-select
        clearable
        style="width: 150px"
        v-model="listQuery.boilerModelNumber"
        placeholder="锅炉型号"
      >
        <el-option
          v-for="item in boilerModelNumberArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-input v-model="listQuery.controllerNo" placeholder="控制器编号" style="width: 150px;"></el-input>
      <el-select clearable style="width: 150px" v-model="listQuery.fuel" placeholder="燃料">
        <el-option
          v-for="item in fuelArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-select clearable style="width: 150px" v-model="listQuery.medium" placeholder="介质">
        <el-option
          v-for="item in mediumArray"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
      <el-date-picker
        v-model="listQuery.saleDate"
        type="date"
        value-format="yyyy-MM-dd"
        placeholder="售出时间"
        style="width: 150px;"
      ></el-date-picker>
      <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button
        style="margin-left: 10px;"
        @click="handleCreate"
        type="primary"
        icon="el-icon-edit"
        v-permission="['3','5']"
      >新增</el-button>
      <!--<el-button style="margin-left: 10px;" @click="showMap" type="primary" icon="el-icon-location-outline">地图分布</el-button>-->
    </el-row>
    <!--数据展示-->
    <el-table
      :data="list"
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
          <span>{{scope.row.boilerModelNumber | dictionaryValueFieldFilter(boilerModelNumberArray)}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="控制器编号">
        <template slot-scope="scope">
          <span>{{scope.row.controllerNo}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="燃料">
        <template slot-scope="scope">
          <span>{{scope.row.fuel | dictionaryValueFieldFilter(fuelArray)}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="介质">
        <template slot-scope="scope">
          <span>{{scope.row.medium | dictionaryValueFieldFilter(mediumArray)}}</span>
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
          <span v-if="scope.row.boilerCustomerName">{{scope.row.boilerCustomerName}}</span>
          <span v-if="scope.row.boilerCustomerName==null">无</span>
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
    <!--右键菜单-->
    <menu-context ref="menuContext">
      <menu-context-item
        @click="handleUpdate"
        v-permission="['3','5']"
        :width="100"
        :fontSize="18"
      >编辑</menu-context-item>
      <menu-context-item @click="handleCopy" v-permission="['3','5']" :width="100" :fontSize="18">复制</menu-context-item>
      <menu-context-item @click="sellProduct" :width="100" :fontSize="18">售出</menu-context-item>
      <menu-context-item @click="handleDownload" :width="100" :fontSize="18">导出</menu-context-item>
      <menu-context-item @click="showControllerData" :width="100" :fontSize="18">监控</menu-context-item>
      <menu-context-item @click="auxiliaryMachineInfo" :width="100" :fontSize="18">辅机信息</menu-context-item>
      <!--<menu-context-item @click="baseInfoInfo" :width="100" :fontSize="18">运行信息</menu-context-item>-->
      <menu-context-item
        @click="handleChoiceUser"
        v-permission="['3']"
        :width="100"
        :fontSize="18"
      >分配</menu-context-item>
      <menu-context-item
        @click="handleDelete"
        v-permission="['3','6']"
        :width="100"
        :fontSize="18"
      >删除</menu-context-item>
    </menu-context>
    <!--分页-->
    <div class="pagination-container">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="listQuery.pageNum"
        :page-sizes="[5,10,15,20]"
        :page-size="listQuery.pageSize"
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
      <el-dialog title="分配用户" :visible.sync="dialogChoiceUserFormVisible" width="30%">
        <el-form
          ref="choiceUserForm"
          :model="choiceUserFormData"
          label-position="right"
          label-width="80px"
          style="width: 90%; margin-left:15px;"
        >
          <el-select
            v-model="choiceUserFormData.selectUserIdArray"
            multiple
            style="width: 100%"
            placeholder="请选择"
          >
            <el-option
              v-for="item in choiceUserFormData.userOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form>
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
      <controller-run-info-dialog :cleartimer="!controllerRunInfoDialogVisible" :controllerNo="this.controllerNo" :address="this.address"></controller-run-info-dialog>
    </el-dialog>

    <!--辅机信息-->
    <auxiliary-machine-dialog
      :show.sync="auxiliaryMachineDialogVisible"
      :productFormData="productFormData"
      :title="titleName"
      @auxiliaryMachineDialogClose="auxiliaryMachineDialogClose"
      @confirmAuxiliaryMachineDialog="confirmAuxiliaryMachineDialog"
    ></auxiliary-machine-dialog>
    <!--运行信息-->
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js";
import checkPermission from "@/utils/permission";
import { initMedium, initFuel, initIsSell } from "./product-dictionary";
import { getBoilerModelListByCondition } from "@/api/boilerModel";
import { getUserListByCondition } from "@/api/user";
import {
  getProductListByCondition,
  deleteProductById,
  getProductUserListByProductCondition,
  insertManyProductUser
} from "@/api/product";
import { getProductAuxiliaryMachineInfoListByProductId } from "@/api/ProductAuxiliaryMachineInfo";
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
    controllerRunInfoDialog
  },
  directives: { permission },
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
      boilerModelNumberArray: [],
      mediumArray: [],
      fuelArray: [],
      isSellArray: [],
      largeClassArray: [],
      smallClassArray: [],
      productAuxiliaryMachineInfoList: [],
      list: null,
      listQuery: {
        total: 50,
        pageNum: 1,
        pageSize: 5,
        organizationType: null,
        organizationNo: null,
        boilerNo: "",
        saleDate: null,
        controllerNo: "",
        boilerModelNumber: null,
        tonnageNum: null,
        medium: null,
        fuel: null,
        userId: null
      },
      dialogChoiceUserFormVisible: false,
      choiceUserFormData: {
        userOptions: [],
        userArray: [],
        deleteUserIdArray: [],
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
        fuel: [{ required: true, trigger: "blur", validator: validateFuelFun }],
        medium: [
          { required: true, trigger: "blur", validator: validateMediumFun }
        ]
      },
      largeClassOptions: [],
      smallClassOptions: [],
      listLoading: true,
      delId: -1,
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
    initSelect() {
      getBoilerModelListByCondition({
        orgId: this.$store.state.user.orgId,
        orgType: this.$store.state.user.orgType
      }).then(data => {
        this.boilerModelNumberArray = data.data.data;
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
        getAuxiliaryMachineLargeClassListByCondition({}).then(response => {
          this.largeClassArray = this.getAuxiliaryMachineAboutOptions(
            response.data.data
          );
        });
        getAuxiliaryMachineSmallClassListByCondition({}).then(response => {
          this.smallClassArray = this.getAuxiliaryMachineAboutOptions(
            response.data.data
          );
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
      //3->锅炉厂管理员 5->锅炉厂普通用户
      if (checkPermission(["3", "5"])) {
        this.listQuery.userId = this.$store.state.user.userId;
      }
      getProductListByCondition(this.listQuery).then(response => {
        const data = response.data.data;
        this.list = data.list;
        this.listQuery.total = data.total;
        this.listQuery.pageNum = data.pageNum;
        this.listQuery.pageSize = data.pageSize;
        this.listLoading = false;
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
      console.log(row);
      row.province
        ? (this.address = row.province + row.city + row.district + row.street)
        : (this.address = "");
    },
    // 辅机信息
    auxiliaryMachineInfo(row) {
      /*let width= Math.round(document.body.clientWidth/2)
                let height= Math.round(document.body.clientHeight/2)+80
                let newWindow=openCommonWindow("/auxiliary-machine-form?title=auxiliaryMachineInfo&&productFormData="+JSON.stringify(row),{width: width, height: height})
                newWindow.on('closed', () => {newWindow = null})
                ipcMain.once('handleCloseProductForm', (event, arg) => {
                    newWindow.close()
                    newWindow = null
                    this.$message({
                        message: '成功',
                        type: 'success'
                    })
                    this.getList()
                })*/
      this.auxiliaryMachineDialogVisible = true;
      this.productFormData = row;
      this.titleName = "辅机信息";
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
      this.choiceUserFormData.productId = row.id;
      this.choiceUserFormData.userOptions = [];
      getUserListByCondition({
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
        let userIdArray = [];
        data.data.data.forEach(item => {
          if (item.userId != this.$store.state.user.userId)
            userIdArray.push(item.userId);
        });
        this.choiceUserFormData.deleteUserIdArray = userIdArray;
        this.choiceUserFormData.selectUserIdArray = userIdArray;
      });
      this.dialogStatus = "update";
      this.dialogChoiceUserFormVisible = true;
      this.$nextTick(() => {
        this.$refs["choiceUserForm"].clearValidate();
      });
    },
    confirmSubmitChoiceUser() {
      let deleteProductUserList = [];
      this.choiceUserFormData.deleteUserIdArray.forEach(userId => {
        deleteProductUserList.push({
          userId: userId,
          productId: this.choiceUserFormData.productId
        });
      });
      let selectProductUserList = [];
      this.choiceUserFormData.selectUserIdArray.forEach(userId => {
        selectProductUserList.push({
          userId: userId,
          productId: this.choiceUserFormData.productId
        });
      });
      insertManyProductUser({
        deleteProductUserList: deleteProductUserList,
        selectProductUserList: selectProductUserList
      }).then(data => {
        this.dialogChoiceUserFormVisible = false;
        this.$message({
          message: "分配成功",
          type: "success"
        });
        this.getList();
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
        deleteProductById(obj.id).then(response => {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getList();
        });
      }
    },
    confirmEditDialog(obj) {
      if (obj.flag) {
        this.productFromDialogVisible = obj.productFromDialogVisible;
        editProduct(obj.productFormData).then(response => {
          if (obj.title === "编辑") {
            this.$message({
              message: "编辑成功",
              type: "success"
            });
          } else if (obj.title === "复制") {
            this.$message({
              message: "复制成功",
              type: "success"
            });
          } else if (obj.title === "新增") {
            this.$message({
              message: "新增成功",
              type: "success"
            });
          }
          this.getList();
        });
      }
    },
    confirmSellDialog(obj) {
      if (obj.flag) {
        this.productMapDialogVisible = obj.productMapDialogVisible;
        updateProductSellAbout(obj.productFormData).then(response => {
          this.$message({
            message: "出售成功",
            type: "success"
          });
          this.getList();
        });
      }
    },
    confirmAuxiliaryMachineDialog(obj) {
      if (obj.flag) {
        this.auxiliaryMachineDialogVisible = obj.auxiliaryMachineDialogVisible;
        editProduct(obj.productFormData).then(() => {
          this.$message({
            message: "操作成功",
            type: "success"
          });
          this.getList();
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
            "fuel",
            "medium",
            "tonnageNum",
            "isSell",
            "boilerCustomerName",
            "saleDate",
            "saleAddress"
          ];
          const boiler_data = {
            boilerNo: row.boilerNo,
            boilerModelNumber: (() => {
              let dictionary = dictionaryValueFilter(
                this.boilerModelNumberArray,
                row.boilerModelNumber
              );
              if (dictionary) return dictionary.label;
              return "";
            })(),
            controllerNo: row.controllerNo,
            tonnageNum: row.tonnageNum,
            medium: (() => {
              let dictionary = dictionaryValueFilter(
                this.mediumArray,
                row.medium
              );
              if (dictionary) return dictionary.label;
              return "";
            })(),
            fuel: (() => {
              let dictionary = dictionaryValueFilter(this.fuelArray, row.fuel);
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
            boilerCustomerName: (() => {
              if (row.boilerCustomerName) return row.boilerCustomerName;
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
    handleSizeChange(val) {
      this.listQuery.pageSize = val;
      this.getList();
    },
    handleCurrentChange(val) {
      this.listQuery.pageNum = val;
      this.getList();
    }
  }
};
</script>
