<template>
  <div class="app-container user-container">
    <el-table class="main-table"
      :data="list"
      v-loading="listLoading"
      element-loading-text="给我一点时间"
      border
      fit
      highlight-current-row
      @row-contextmenu="openTableMenu"
    >
      <el-table-column width="180" align="left" :show-overflow-tooltip="true" label="员工姓名">
        <template slot-scope="scope">
          <span>{{scope.row.userName}}</span>
        </template>
      </el-table-column>
      <el-table-column width="180" align="left" :show-overflow-tooltip="true" label="职务">
        <template slot-scope="scope">
          <span>{{scope.row.roleName}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="备注">
        <template slot-scope="scope">
          <span>{{scope.row.mark}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <span :style="{display:roleManageShow}">
        <menu-context-item @click="handleEditRole">职务管理</menu-context-item>
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
      <el-dialog title="编辑" :visible.sync="dialogFormVisible" width="40%">
        <el-form
          :rules="rules.userForm"
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
            <el-form-item label="备注">
              <el-input type="textarea" v-model="userFormData.mark"></el-input>
            </el-form-item>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button type="primary" @click="editData">确认</el-button>
          <el-button type="warning" icon="el-icon-back" @click="dialogFormVisible = false">取消</el-button>
        </div>
      </el-dialog>
    </div>
    <el-dialog title="职务管理" :visible.sync="dialogRoleFormVisible" width="30%">
      <el-form
        :rules="rules.userRoleForm"
        ref="userRoleForm"
        :model="roleFormData.postData"
        label-position="right"
        label-width="80px"
        style="width: 95%; margin-left:5px;"
      >
        <el-row>
          <el-col :span="24">
            <el-form-item label="员工">{{roleFormData.userName}}</el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="当前职务" prop="id">
            <el-select v-model="roleFormData.postData.id" placeholder="请选择" @change="selectChange">
              <el-option
                v-for="r in roleFormData.roles"
                :key="r.id"
                :label="r.roleName"
                :value="r.id"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editUserRole">确认</el-button>
        <el-button type="warning" icon="el-icon-back" @click="dialogRoleFormVisible = false">取消</el-button>
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
import {
  getUserList,
  editUser,
  getUserRole,
  changeUserRole,
  deleteUserById
} from "@/api/user";
import { getRoleList } from "@/api/role";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
export default {
  components: {
    "boiler-common-delete-validate-dialog": boilerCommonDeleteValidate
  },
  data() {
    return {
      userId: null,
      list: null,
      currentPage1: 1,
      pageNum1: 1,
      pageSize1: 5,
      listQuery: {
        pageNum: 1,
        pageSize: 5
      },
      size: '',
      roleManageShow: "inline",
      dialogFormVisible: false,
      userFormData: {
        id: null,
        userName: null,
        mark: null
      },
      rules: {
        userForm: {
          userName: [
            { required: true, message: "请输员工姓名", trigger: "blur" }
          ]
        },
        userRoleForm:{
            id:[
              { required: true, message: "职务不能为空", trigger: "blur" }
            ]
        }
      },
      dialogRoleFormVisible: false,
      roleFormData: {
        userName: null,
        roles: [],
        postData: {
          userId: null,
          id: null,
          roleName: null
        }
      },
      role: {
        id: "",
        roleName: "",
        roleDesc: ""
      },
      userList: [],
      listLoading: true,
      delId: -1,
      deleteValidateFormDialogVisible: false
    };
  },
  created() {
    this.getList();
  },
  methods: {
    handleSelectionChange(val) {
      this.role = val;
    },
    querySearchAsyncuser(queryString, callback) {
      getUserList(this.listQuery).then(response => {
        this.userList = [];
        var results = [];
        for (let i = 0, len = response.data.data.list.length; i < len; i++) {
          response.data.data.list[i].value =
            response.data.data.list[i].userName;
        }
        this.userList = response.data.data.list;
        results = queryString
          ? this.userList.filter(this.createFilteruser(queryString))
          : this.userList;
        callback(results);
      });
    },

    createFilteruser(queryString, queryArr) {
      return queryArr => {
        return (
          queryArr.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    dateForma: function(row, column) {
      var date = row[column.property];
      if (date == undefined) {
        return "";
      }
      return moment(date).format("YYYY-MM-DD HH:mm:ss");
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
    getList() {
      this.listLoading = true;
      getUserList(this.listQuery).then(response => {
        const data = response.data.data;
        this.list = data.list;
        this.listQuery.total = data.total;
        this.listQuery.pageNum = data.pageNum;
        this.listQuery.pageSize = data.pageSize;
        this.size=data.size;
        this.listLoading = false;
      });
    },
    handleUpdate(row) {
      this.userFormData = Object.assign({}, row); // copy obj
      this.dialogFormVisible = true;
    },
    handleEditRole(row) {
      this.roleFormData.userName = row.userName;
      this.roleFormData.postData.userId = row.id;
      getUserRole(this.roleFormData.postData.userId)
        .then(response => {
          let data = response.data;
          if (data.code) {
            throw data.msg;
          } else {
            this.roleFormData.postData.id = data.data.roleId;
            this.roleFormData.postData.roleName = data.data.roleName;
            return getRoleList(1, 10);
          }
        })
        .then(response => {
          let data = response.data;
          if (data.code) {
            throw data.msg;
          } else {
            this.roleFormData.roles = data.data.list;
            this.dialogRoleFormVisible = true;
            this.$nextTick(() => {
              this.$refs["userRoleForm"].clearValidate();
            });
          }
        })
        .catch(resion => {
          this.$message.error(resion);
        });
    },
    selectChange(item){
      for(let i = 0; i< this.roleFormData.roles.length;i++){
        if(this.roleFormData.roles[i].id == item){
          this.roleFormData.postData.roleName = this.roleFormData.roles[i].roleName
          break
        }
      }
    },
    editUserRole() {
      changeUserRole(
        this.roleFormData.postData.userId,
        this.roleFormData.postData
      )
        .then(response => {
          if (response.data.code) throw response.data.msg;

          this.dialogRoleFormVisible = false;
          this.$message({
            message: "修改成功",
            type: "success"
          });
          this.getList();
        })
        .catch(resion => {
          this.$message.error(resion);
        });
    },
    editData() {
      this.$refs.userForm.validate(valid => {
        if (valid) {
          editUser(this.userFormData).then(data => {
            if (data.data.code) {
              this.$message.error(data.data.msg);
              return;
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
      this.deleteValidateFormDialogVisible = true;
      this.delId = row.id;
    },
    confirmDeleteValidate(obj) {
      if (obj.flag) {
        this.deleteValidateFormDialogVisible =
          obj.deleteValidateFormDialogVisible;
        deleteUserById(obj.id)
          .then(response => {
            let data = response.data;
            if (data.code) {
              throw data.msg;
            }
            this.$message({
              message: "删除成功",
              type: "success"
            });
            if (this.size == 1) {
              this.listQuery.pageNum = this.pageNum > 1 ? this.pageNum - 1 : 1;
            }
            this.getList();
          })
          .catch(resion => {
            this.$message.error(resion);
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
