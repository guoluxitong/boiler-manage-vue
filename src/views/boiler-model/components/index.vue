<template>
  <div class="app-container boilerModel-container">
    <el-row class="app-query">
      <el-button
        style="margin-left: 10px;"
        @click="handleCreate"
        icon="el-icon-plus"
        type="success"
      >新增</el-button>
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
      <el-table-column align="left" :show-overflow-tooltip="true" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate" >编辑</menu-context-item>
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :width="width">
      <el-form
        :rules="rules"
        ref="boilerModelForm"
        :model="boilerModelFormData"
        label-position="right"
        label-width="80px"
        style="width: 90%; margin-left:15px;"
      >
          <el-form-item label="名称" prop="name">
            <el-input v-model="boilerModelFormData.name" size="small"></el-input>
          </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="editData">确认</el-button>
        <el-button type="warning" icon="el-icon-back" @click="dialogFormVisible = false">取消</el-button>
      </div>
    </el-dialog>
    <boiler-common-delete-validate-dialog
      :width="width"
      @confirmDeleteValidate="confirmDeleteValidate"
      @confirmCancelValidate="confirmCancelValidate"
      :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible"
      :id="delId"
    ></boiler-common-delete-validate-dialog>
  </div>
</template>

<script>
import {
  getBoilerModelListByConditionAndPage,
  editBoilerModel,
  createBoilerModel,
  deleteBoilerModelById
} from "@/api/boilerModel";
import boilerCommonDeleteValidate from "@/views/boiler-common-delete-validate";
export default {
  name: "boiler-model",
  components: {
    "boiler-common-delete-validate-dialog": boilerCommonDeleteValidate
  },
  props: {
    width: {
      type: String,
      default: "30%"
    }
  },
  data() {
    return {
      list: null,
      listQuery: {
        total: 50,
        pageNum: 1,
        pageSize: 5,
        name: null,
        orgId: null
      },
      textMap: {
        update: "编辑",
        create: "新增"
      },
      dialogStatus: "",
      dialogFormVisible: false,
      boilerModelFormData: {
        id: "",
        name: "",
        orgId: this.$store.state.user.orgId,
        sort: 0
      },
      rules: {
        name: [
          { required: true, trigger: "blur", message: "型号名称不能为空" }
        ],
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
      this.listQuery.pageNum = 1;
      this.getList();
    },
    getList() {
      this.listLoading = true;
        this.listQuery.orgId = this.$store.state.user.orgId;
      getBoilerModelListByConditionAndPage(this.listQuery).then(response => {
        if ( response.data.code==0){
        const data = response.data.data;
        this.list = data.list;
        this.listQuery.total = data.total;
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
      this.boilerModelFormData = {
        id: "",
        label: "",
        value: "",
        orgId: this.$store.state.user.orgId,
        sort: 0
      };
    },
    handleCreate() {
      this.resetTemp();
      this.dialogStatus = "create";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["boilerModelForm"].clearValidate();
      });
    },
    handleUpdate(row) {
      this.boilerModelFormData = Object.assign({}, row); // copy obj
      this.dialogStatus = "update";
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        this.$refs["boilerModelForm"].clearValidate();
      });
    },
    editData() {
      this.$refs.boilerModelForm.validate(valid => {
        if (valid) {
          if (this.dialogStatus =="create"){
            createBoilerModel(this.boilerModelFormData).then(data => {
              if (data.data.code == 0) {
              this.dialogFormVisible = false;
              this.$message({
                message: "成功",
                type: "success"
              });
              this.getList();
            } else {
                this.$message.error(data.data.msg);
                return;
              }
            });
          } else {
            editBoilerModel(this.boilerModelFormData).then(data => {
              if (data.data.code == 0) {
              this.dialogFormVisible = false;
              this.$message({
                message: "成功",
                type: "success"
              });
              this.getList();
              } else {
                this.$message.error(data.data.msg);
                return;
              }
            });
          }

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
        deleteBoilerModelById(obj.id).then(data => {
          if (data.data.code == 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.getList();
          } else {
            this.$message.error(data.data.msg);
            return;
          }
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
