<template>
  <div class="app-container user-container">
   <!-- <el-row class="app-query">
      <el-autocomplete
        v-model="userFormData.userName"
        :fetch-suggestions="querySearchAsyncuser"
        placeholder="员工姓名"
        @select="((item)=>{handleSelectuser(item)})"
      ></el-autocomplete>
      <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
    </el-row>-->

    <el-table
      :data="list"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      border
      fit
      highlight-current-row
      style="width: 120% ;height: 100%"
      @row-contextmenu="openTableMenu"
    >
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
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <span :style="{display:roleManageShow}">
        <menu-context-item @click="handleEditRole">职能管理</menu-context-item>
      </span>
      <menu-context-item @click="handleDelete">删除</menu-context-item>
    </menu-context>
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
    <div class="el-dialog-user">
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="40%">
        <el-form
          :rules="rules"
          ref="userForm"
          :model="userFormData"
          label-position="right"
          label-width="80px"
          style="width: 95%; margin-left:5px;"
        >
          <el-row>
            <el-col :span="24">
              <el-form-item label="员工姓名" prop="userName">
                <el-input v-model="userFormData.userName"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="备注" prop="title">
              <el-input type="textarea" v-model="userFormData.mark"></el-input>
            </el-form-item>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="editData">确认</el-button>
        </div>
      </el-dialog>
    </div>
    <el-dialog title="角色管理" :visible.sync="dialogRoleFormVisible" width="30%">
      <el-table
        :model="roleFormData"
        label-position="right"
        label-width="80px"
        style="width: 95%; margin-left:5px;"
        @selection-change="handleSelectionChange"
      >
        <el-table-column align="center" type="selection" width="55" fixed></el-table-column>
        <el-table-column align="left" :show-overflow-tooltip="true" label="权限">
          <template slot-scope="scope">
            <span>{{scope.row.roleName}}</span>
          </template>
        </el-table-column>
        <el-table-column align="left" :show-overflow-tooltip="true" label="权限序列">
          <template slot-scope="scope">
            <span>{{scope.row.roleDesc}}</span>
          </template>
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRoleFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editUserRole">确认</el-button>
      </div>
    </el-dialog>
    <boiler-common-delete-validate-dialog
      @confirmDeleteValidate="confirmDeleteValidate"
      @confirmCancelValidate="confirmCancelValidate"
      :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible"
      :id="delId"
      width="30%"
    ></boiler-common-delete-validate-dialog>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js";
import { getBoilerModelListByCondition } from "@/api/boilerModel";
import {getProductByboilerNo
} from '@/api/product';
import checkPermission from "@/utils/permission";
import {
  getUserListByConditionAndPage,
  editUser,
  editUserRole,
  deleteUserById
} from "@/api/user";
import { getCustomerListByCondition } from "@/api/customer";
import { getRoleListByUserId } from "@/api/role";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
export default {
  components: {
    "boiler-common-delete-validate-dialog": boilerCommonDeleteValidate
  },
  directives: { permission },
  data() {
    return {
      userId: null,
      list: null,
      loadAllList: [],
      devEuiArr: [],
      restaurants: [],
      repairList: [
      ],
      repairuserid:"",
      nameList:{},
      deleteId:-1,
      choiceRepairFormData: {
        insertRepairArray: [],
        deleteRepairArray: [],
      },
      insertRepairList:[],
      tempList: [],
      currentPage1:1,
      pageNum1: 1,
      pageSize1: 5,
      productRepairDialogVisible: false,
      newRepairDialogFlag: false,
      listQuery: {
        pageNum: 1,
        pageSize: 5,
        orgId: this.$store.state.user.orgId
      },
      repairUserFormData: {},
      customerOption: [],
      textMap: {
        update: "编辑",
        create: "新增"
      },
      roleManageShow: "inline",
      dialogStatus: "",
      dialogFormVisible: false,
      isAvailableArray: [
        { value: 1, label: "审核通过" },
        { value: 0, label: "待审核" }
      ],
      mobileIsShow: "inline",
      userFormData: {
        id: '',
        orgId: '',
        employeeId: '',
        userName: '',
        roleName: '',
        roleId: '',
        mark: ''
      },
      rules: {

      },
      dialogRoleFormVisible: false,
      roleFormData: {
        id: '',
        roleName: '',
        roleDesc: ''
      },
      role: {
        id: '',
        roleName: '',
        roleDesc: ''
      },
      employeeId: '',
      userList: [],
      listLoading: true,
      delId: -1,
      deleteValidateFormDialogVisible: false
    };
  },

  filters: {
    statusFilter(status) {
      const statusMap = {
        1: "success",
        0: "danger"
      };
      return statusMap[status];
    },
    statusFilterLabel(status, isAvailableArray) {
      return isAvailableArray.filter(item => {
        return item.value == status;
      });
    }
  },
  created() {
    this.getList();
   /* this.initCustomerList();*/
  },
  methods: {
    handleSelectionChange(val){
     this.role=val;
},
    querySearchAsyncuser(queryString, callback) {
      getUserListByConditionAndPage(this.listQuery).then(response => {
        this.userList = [];
        var results = [];
        for (let i = 0, len = response.data.data.list.length; i < len; i++) {
          response.data.data.list[i].value = response.data.data.list[i].userName;
        }
        this.userList = response.data.data.list;
        results = queryString ? this.userList.filter(this.createFilteruser(queryString)) : this.userList;
        callback(results);
      });
    },

    createFilteruser(queryString, queryArr) {
      return (queryArr) => {
        return (queryArr.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
      };
    },
    handleSelectuser(item) {
      this.employeeId = item.employeeId;
    },
    dateForma: function (row,column){
      var date = row[column.property];
      if (date == undefined){return ''};
      return  moment (date).format("YYYY-MM-DD HH:mm:ss")
    },
    openTableMenu(row, event) {
      this.$refs.menuContext.openTableMenu(
        row,
        event,
        window.event.clientX,
        window.event.clientY
      );
      if (row.id == this.$store.state.user.userId) {
        this.roleManageShow = "none";
      } else {
        this.roleManageShow = "inline";
      }
    },
    initCustomerList() {
      let customerOption = [];
      getCustomerListByCondition().then(data => {
        data.data.data.forEach(item => {
          customerOption.push({
            value: item.id + "",
            label: item.customerName
          });
        });
        this.customerOption = customerOption;
      });
    },
    handleFilter() {
      this.listQuery.pageNum = 1;
      this.getList();
    },
    getList() {
      this.listLoading = true;
      getUserListByConditionAndPage(this.listQuery).then(response => {
        const data = response.data.data;
        this.list = data.list;
        this.listQuery.total = data.total;
        this.listQuery.pageNum = data.pageNum;
        this.listQuery.pageSize = data.pageSize;
        this.listLoading = false;
      });
    },
    resetTemp() {
      this.userFormData = {
        mobile: "",
        orgType: "",
        orgId: "",
        email: "",
        weiXin: "",
        qQ: "",
        realName: "",
        password: "",
        status: 0,
        mark: ""
      };
    },
    handleCreate() {
      this.resetTemp();
      if (checkPermission(["3", "5"])) {
        this.userFormData.orgType = this.$store.state.user.orgType;
        this.userFormData.orgId = this.$store.state.user.orgId;
      }
      if (checkPermission(["6"])) {
        this.userFormData.orgType = "3";
        this.userFormData.orgId = "";
        this.userFormData.status = 1;
      }
      this.dialogStatus = "create";
      this.mobileIsShow = "inline";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["userForm"].clearValidate();
      });
    },
    handleUpdate(row) {
      this.userFormData = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["userFormData"].clearValidate();
      });
    },
    handleShenHe(row) {
      row.status = 1;
      editUser(row).then(data => {
        this.$message({
          message: "审核通过",
          type: "success"
        });
      });
    },
    handleEditRole(row) {
      this.roleFormData.userId = row.id;
      getRoleListByUserId(this.userId)
        .then(response => {
          let roleOptions = [];
          let roleList = response.data.data;
          roleList.forEach(role => {
            roleOptions.push({ value: role.roleId, label: role.roleName });
          });
          this.roleFormData.roleOptions = roleOptions;
          return getRoleListByUserId(row.id);
        })
        .then(response => {
          let roleIdArray = [];
          let roleList = response.data.data;
          roleList.forEach(role => {
            roleIdArray.push(role.roleId);
          });
          console.info(roleIdArray);
          this.roleFormData.roleIdArray = roleIdArray;
          this.dialogRoleFormVisible = true;
          this.$nextTick(() => {
            this.$refs["roleForm"].clearValidate();
          });
        });
    },
    editUserRole() {
      let userRoleList = [];
      this.roleFormData.roleIdArray.forEach(roleId => {
        userRoleList.push({ roleId: roleId, userId: this.roleFormData.userId });
      });
      editUserRole({
        id: this.roleFormData.userId,
        userRoleList: userRoleList
      }).then(response => {
        this.dialogRoleFormVisible = false;
        this.$message({
          message: "添加成功",
          type: "success"
        });
        this.getList();
      });
    },
    editData() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          editUser(this.userFormData).then(data => {
            if (data.data.code == 400) {
              this.$message({
                message: data.data.msg,
                type: "error"
              });
            } else {
              this.dialogFormVisible = false;
              let message = "成功";
              this.$message({
                message: message,
                type: "success"
              });
              this.getList();
            }
          });
        } else {
          return false;
        }
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
        deleteUserById(obj.id).then(data => {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getList();
        });
      }
    },
    confirmCancelValidate(obj) {
      this.deleteValidateFormDialogVisible =
        obj.deleteValidateFormDialogVisible;
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
