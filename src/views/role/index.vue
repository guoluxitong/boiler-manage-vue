<template>
  <div class="app-container role-container">
    <el-row class="app-query">
      <el-button
        style="margin-left: 10px"
        @click="handleCreate"
        type="success"
        icon="el-icon-plus"
      >添加</el-button>
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
      <el-table-column :show-overflow-tooltip="true" align="left" label="职务名称">
        <template slot-scope="scope">
          <span>{{scope.row.roleName}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="职务描述">
        <template slot-scope="scope">
          <span>{{scope.row.roleDesc}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <menu-context-item @click="handleEditResource">分配权限</menu-context-item>
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
    <el-dialog :title="dialogIsCreate?'添加':'编辑'" :visible.sync="dialogFormVisible" width="30%">
      <el-form
        :rules="rules"
        ref="roleForm"
        :model="roleFormData"
        label-position="right"
        label-width="80px"
        style="width: 95% margin-left:5px"
      >
        <el-form-item label="职务名称">
          <el-input v-model="roleFormData.roleName"></el-input>
        </el-form-item>
        <el-form-item label="职务描述">
          <el-input type="textarea" :rows="2" v-model="roleFormData.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createOrEditRole">确认</el-button>
        <el-button type="warning" icon="el-icon-back" @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <el-dialog title="分配权限" :visible.sync="dialogResourceFormVisible" width="20%">
      <el-form
        :rules="rules"
        ref="resourceForm"
        :model="resourceFormData"
        label-position="right"
        label-width="80px"
        style="width: 95% margin-left:2px"
      >
        <el-tree
          :data="resourceFormData.resourceList"
          show-checkbox
          default-expand-all
          node-key="id"
          ref="tree"
          highlight-current
          :props="resourceFormData.defaultProps"
          :default-checked-keys="resourceFormData.resIdArray"
        ></el-tree>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editResource">确认</el-button>
        <el-button type="warning" icon="el-icon-back" @click="dialogResourceFormVisible = false">取消</el-button>
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
  getRoleList,
  createRole,
  editRole,
  editRoleResources,
  deleteRole
} from "@/api/role";
import { getUserResources, getRoleResources } from "@/api/resource";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
import { fail } from "assert";
import { truncate } from "fs";
export default {
  components: {
    "boiler-common-delete-validate-dialog": boilerCommonDeleteValidate
  },
  data() {
    return {
      list: null,
      listQuery: {
        total: 50,
        pageNum: 1,
        pageSize: 5,
        roleName: null,
        userId: ""
      },
      dialogIsCreate: true,
      dialogFormVisible: false,
      roleFormData: {
        id: "",
        roleName: "",
        roleDesc: ""
      },
      size: '',
      deleteValidateFormDialogVisible: false,
      delId: -1,
      rules: {},
      dialogResourceFormVisible: false,
      resourceFormData: {
        resIdArray: [],
        userId: "",
        roleId: null,
        resourceList: [],
        defaultProps: {
          children: "children",
          label: "label"
        }
      },
      listLoading: true
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
      this.listQuery.pageNum = 1;
      this.getList();
    },
    getList() {
      this.listLoading = true;
      getRoleList(this.listQuery.pageNum, this.listQuery.pageSize).then(
        response => {
          this.listLoading = false;
          let data = response.data.data;
          if (data.code) {
            throw response.data.msg
          } else {
            this.list = data.list;
            this.listQuery.total = data.total;
            this.listQuery.pageNum = data.pageNum;
            this.listQuery.pageSize = data.pageSize;
            this.size=data.size;
          }
        }
      ).catch(resion=>{
        this.$message.error(resion)
      });
    },
    resetTemp() {
      this.roleFormData = {
        id: "",
        roleName: "",
        roleDesc: ""
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogIsCreate = true;
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["roleForm"].clearValidate();
      });
    },
    handleUpdate(row) {
      this.roleFormData = Object.assign({}, row); // copy obj
      this.dialogIsCreate = false;
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["roleForm"].clearValidate();
      });
    },
    handleEditResource(row) {
      let menus = this.$store.state.user.menus;
      let resources = [];
      menus.forEach(m => {
        let resource = {};
        resource.id = m.id;
        resource.label = m.title;
        resource.children = [];
        m.childs.forEach(c => {
          let subResource = {};
          subResource.id = c.id;
          subResource.label = c.title;
          resource.children.push(subResource);
        });
        resources.push(resource);
      });
      this.$set(this.resourceFormData, "resourceList", resources);
      getRoleResources(row.id)
        .then(response => {
          let checkIds = [];
          let data = response.data;
          if (data.code) {
            throw data.msg;
          } else {
            data.data.forEach(r => {
              if (r.pId) {
                checkIds.push(r.id);
              } else {
                if (null != r.url && "" != r.url) {
                  checkIds.push(r.id);
                }
              }
            });
            this.$set(this.resourceFormData, "resIdArray", checkIds);
            this.resourceFormData.roleId = row.id;
            this.dialogResourceFormVisible = true;
            if (this.$refs["tree"]) {
              this.$refs["tree"].setCheckedKeys(
                this.resourceFormData.resIdArray
              );
            }
          }
        })
        .catch(resion => {
          this.$message.error(resion);
        });
    },
    checkContains(array, item) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] == item) return true;
      }
      return false;
    },
    editResource(row) {
      let map = [];
      let checkIds = [];
      this.$refs.tree.getCheckedNodes().forEach(node => {
        checkIds.push(node.id);
      });
      this.resourceFormData.resourceList.forEach(m => {
        if (m.children.length > 0) {
          let ids = [];
          m.children.forEach(s => {
            if (this.checkContains(checkIds, s.id)) {
              ids.push(s.id);
            }
          });
          if (ids.length) {
            map.push({ roleId: this.resourceFormData.roleId, resId: m.id });
            ids.forEach(i => {
              map.push({ roleId: this.resourceFormData.roleId, resId: i });
            });
          }
        } else {
          if (this.checkContains(checkIds, m.id)) {
            map.push({ roleId: this.resourceFormData.roleId, resId: m.id });
          }
        }
      });
      editRoleResources(this.resourceFormData.roleId, map)
        .then(response => {
          if (response.data.code) {
            this.resourceFormData.roleId = null;
            throw response.data.msg;
          } else {
            this.$message({
              message: "设置成功",
              type: "success"
            });
            this.dialogResourceFormVisible = false;
          }
        })
        .catch(resion => {
          this.$message.error(resion);
        });
    },
    createOrEditRole() {
      if (this.dialogIsCreate) {
        createRole(this.roleFormData)
          .then(data => {
            this.dialogFormVisible = false;
            if (data.data.code) {
              throw data.data.msg;
            } else {
              this.$message({
                message: "成功",
                type: "success"
              });
              this.getList();
            }
          })
          .catch(resion => {
            this.$message.error(resion);
          });
      } else {
        editRole(this.roleFormData).then(data => {
          this.dialogFormVisible = false;
          if (data.data.code) {
            throw data.data.msg
          } else {
            this.$message({
              message: "成功",
              type: "success"
            });
            this.getList();
          }
        }).catch(resion => {
            this.$message.error(resion);
          });
      }
    },
    handleDelete(row) {
      this.deleteValidateFormDialogVisible = true;
      this.delId = row.id;
    },
    confirmDeleteValidate(obj) {
      if (obj.flag) {
        this.deleteValidateFormDialogVisible =
          obj.deleteValidateFormDialogVisible;
        deleteRole(obj.id).then(data => {
          if (data.data.code) {
            this.$message.error(data.data.msg);
            return;
          }
          this.$message({
            message: "删除成功",
            type: "success"
          });
          if (this.size == 1) {
            this.listQuery.pageNum = this.pageNum > 1 ? this.pageNum - 1 : 1;
          }
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
