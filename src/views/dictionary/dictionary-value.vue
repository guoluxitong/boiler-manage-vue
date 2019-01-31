<template>
  <div class="app-container dictionaryValue-container">
    <el-row class="dictionaryValue-select">
      <el-button style="float: right" @click="handleReturn" type="primary" icon="el-icon-back">返回</el-button>
      <el-button style="float: right;margin-right: 10px" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>
    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column align="left" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.label}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="值">
        <template slot-scope="scope">
          <span>{{scope.row.value}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" label="排序">
        <template slot-scope="scope">
          <span>{{scope.row.sort}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <menu-context-item @click="handleDelete">删除</menu-context-item>
    </menu-context>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dictionaryValueForm" :model="dictionaryValueFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-form-item label="名称" prop="label">
          <el-input v-model="dictionaryValueFormData.label"></el-input>
        </el-form-item>
        <el-form-item label="值" prop="value">
          <el-input v-model="dictionaryValueFormData.value"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="dictionaryValueFormData.sort"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editData">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import {getDictionaryValueListByType,editDictionaryValue,deleteDictionaryValueById} from '@/api/dictionaryValue'
  export default {
    data() {
      return {
        list: null,
        listQuery: {
          type:'',
        },
        textMap: {
          update: '编辑',
          create: '新增'
        },
        dialogStatus: '',
        dialogFormVisible: false,
        dictionaryValueFormData: {
          id:'',
          type:'',
          label:'',
          value:'',
          sort:''
        },
        rules: {
          label: [
            { required: true, message: '名称不能为空', trigger: 'blur' }
          ],
          value: [
            { required: true, message: '值不能为空', trigger: 'blur' }
          ],
          sort: [
            { required: true, message: '排序不能为空', trigger: 'blur' }
          ],
        },
        listLoading: true,
      }
    },
    created() {
      this.getList()
    },
    methods: {
      openTableMenu(row, event) {
        this.$refs.menuContext.openTableMenu(row,event);
      },
      getList() {
        this.listLoading = true
        this.listQuery.type=this.$route.query.type
        getDictionaryValueListByType(this.listQuery.type).then(response => {
          this.list=response.data.data
          this.listLoading = false
        })
      },
      resetTemp() {
        this.dictionaryValueFormData = {
          id:'',
          type:this.listQuery.type,
          label:'',
          value:'',
          sort:''
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dictionaryValueForm'].clearValidate()
        })
      },
      handleUpdate(row) {
        this.dictionaryValueFormData = Object.assign({}, row)
        this.dictionaryValueFormData.type=this.listQuery.type
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dictionaryValueForm'].clearValidate()
        })
      },
        handleReturn(){
            this.$router.push({ path: '/dictionary'})
        },
      editData(){
        this.$refs.dictionaryValueForm.validate(valid => {
          if (valid) {
            editDictionaryValue(this.dictionaryValueFormData).then(data=>{
              this.dialogFormVisible = false
              this.$message({
                message: '成功',
                type: 'success'
              });
              this.getList()
            })
          } else {
            return false
          }
        })

      },
      handleDelete(row) {
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          deleteDictionaryValueById(row.id).then(data=>{
            this.$message({
              message: '删除成功',
              type: 'success'
            });
            this.list.splice(this.list.indexOf(row), 1)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .dictionaryValue-container{
    .dictionaryValue-select{
      .el-input,.el-select,.el-button{
        margin-bottom: 10px;
      }
    }
    .el-dialog {
      width: 30%;
    }
  }
</style>
