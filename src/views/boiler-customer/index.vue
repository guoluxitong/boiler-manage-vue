<template>
  <div class="app-container boilerCustomer-container">
    <el-row class="app-query">
      <el-col :span="4">
      <el-input v-model="listQuery.name" placeholder="客户名称" ></el-input>
      </el-col>
      <el-col :span="2">
      <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      </el-col>
      <el-col :span="3">
      <el-button
        @click="handleCreate"
        type="success"
        icon="el-icon-plus"
      >添加</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="list"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      border
      fit
      highlight-current-row
      @row-contextmenu="openTableMenu"
    >
      <el-table-column align="left" :show-overflow-tooltip="true" label="客户名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="电话">
        <template slot-scope="scope">
          <span>{{scope.row.phone}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="省">
        <template slot-scope="scope">
          <span>{{scope.row.province}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="市">
        <template slot-scope="scope">
          <span>{{scope.row.city}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="区">
        <template slot-scope="scope">
          <span>{{scope.row.district}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="详细地址">
        <template slot-scope="scope">
          <span>{{scope.row.address}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
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
        :total="total"
      ></el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form
        :rules="rules"
        ref="boilerCustomerForm"
        :model="boilerCustomerFormData"
        label-position="right"
        label-width="80px"
        style="width: 90%; margin-left:15px;"
      >
        <el-row>
          <el-col :span="12">
            <el-form-item label="客户名称" prop="name">
              <el-input v-model="boilerCustomerFormData.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="boilerCustomerFormData.phone"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="省">
              <el-input v-model="boilerCustomerFormData.province"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="市">
              <el-input v-model="boilerCustomerFormData.city"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="区">
              <el-input v-model="boilerCustomerFormData.district"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-form-item label="详细地址" prop="weiXin">
              <el-input v-model="boilerCustomerFormData.address"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editData">确认</el-button>
        <el-button type="warning" icon="el-icon-back" @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <boiler-common-delete-validate-dialog
      @confirmDeleteValidate="confirmDeleteValidate"
      @confirmCancelValidate="confirmCancelValidate"
      :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible"
      :id="delId"
    ></boiler-common-delete-validate-dialog>
  </div>
</template>

<script>
import {
  getList,
  editCustomer,
  deleteCustomer,
  createCustomer,
  customerSearch
} from "@/api/customer";
import { validateRealName, validatePhone } from "@/utils/validate";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
export default {
  components: {
    "boiler-common-delete-validate-dialog": boilerCommonDeleteValidate
  },
  data() {
    const validateRealNameFun = (rule, value, callback) => {
      if (!validateRealName(value)) {
        callback(new Error("姓名必须为汉字"));
      } else {
        callback();
      }
    };
    const validatePhoneFun = (rule, value, callback) => {
      if (value.length <= 0) {
        callback(new Error("手机号码不能为空"));
      } else if (!validatePhone(value)) {
        callback(new Error("手机号码格式有误"));
      } else {
        callback();
      }
    };
    return {
      list: [],
      listQuery: {
        pageNum: 1,
        pageSize: 5
      },
      currentPage1: 1,
      pageNum1: 1,
      pageSize1: 5,
      total: 50,
      textMap: {
        update: "编辑",
        create: "添加"
      },
      dialogStatus: "",
      dialogFormVisible: false,
      boilerCustomerFormData: {
        id: "",
        customerNo: "",
        name: "",
        phone: "",
        address: "",
        province: "",
        city: "",
        district: "",
        orgId: this.$store.state.user.orgId
      },
      rules: {
        customerNo: [
          { required: true, trigger: "blur", message: "客户编号不能为空" }
        ],
        name: [
          { required: true, trigger: "blur", validator: validateRealNameFun }
        ],
        phone: [
          { required: true, trigger: "blur", validator: validatePhoneFun }
        ]
      },
      listLoading: true,
      delId: -1,
      deleteValidateFormDialogVisible: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    openTableMenu(row, event) {
      this.$refs.menuContext.openTableMenu(
        row,
        event,
        window.event.clientX,
        window.event.clientY
      );
    },
    handleFilter() {
      this.getListByName();
    },
    getListByName() {
      this.listLoading = true;
      customerSearch(this.listQuery.name).then(response => {
        const data = response.data.data;
        this.list = data;
        this.total = 1;
        this.listQuery.pageNum = 1;
        this.listQuery.pageSize = 1;
        this.listLoading = false;
      });
    },
    getList() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        if (response.data.code == 0) {
          const data = response.data.data;
          this.list = data.list;
          this.total = data.total;
          this.listQuery.pageNum = data.pageNum;
          this.listQuery.pageSize = data.pageSize;
          this.listLoading = false;
        } else {
          this.$message.error(response.data.msg);
          return;
        }
      });
    },
    resetTemp() {
      this.boilerCustomerFormData = {
        id: "",
        customerNo: "",
        name: "",
        phone: "",
        address: "",
        province: "",
        city: "",
        district: "",
        orgId: this.$store.state.user.orgId
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["boilerCustomerForm"].clearValidate();
      });
    },
    handleUpdate(row) {
      this.boilerCustomerFormData = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["boilerCustomerForm"].clearValidate();
      });
    },
    editData() {
      this.$refs.boilerCustomerForm.validate(valid => {
        if (valid) {
          if (this.dialogStatus == "create") {
            createCustomer(this.boilerCustomerFormData).then(data => {
              if (data.data.code) {
                this.$message.error(data.data.msg);
                return;
              }
              this.dialogFormVisible = false;
              this.$message({
                message: "成功",
                type: "success"
              });
              this.getList();
            });
          } else {
            editCustomer(this.boilerCustomerFormData).then(data => {
              if (data.data.code) {
                this.$message.error(data.data.msg);
                return;
              }
              this.dialogFormVisible = false;
              this.$message({
                message: "成功",
                type: "success"
              });
              this.getList();
            });
          }
        } else {
          return false;
        }
      });
    },
    handleDelete(row) {
      this.deleteValidateFormDialogVisible = true;
      this.delId = row.id;
    },
    confirmDeleteValidate(obj) {
      if (obj.flag) {
        this.deleteValidateFormDialogVisible =
          obj.deleteValidateFormDialogVisible;
        deleteCustomer(obj.id).then(data => {
          if (data.data.code) {
            this.$message.error(data.data.msg);
            return;
          }
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.listQuery.pageNum = 1;
          this.getList();
        });
      }
      else{
        this.deleteValidateFormDialogVisible = false
        this.delId = null
        this.$message.error("输入密码错误，无法完成删除操作！")
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
<style rel="stylesheet/scss" lang="scss">
.boilerCustomer-container {
  .el-dialog {
    width: 40%;
  }
}
</style>
