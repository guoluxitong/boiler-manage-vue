<template>
  <div class="app-container dictionary-container">
    <el-row class="app-query">
      <el-input v-model="listQuery.name" placeholder="名称"  style="width: 200px;"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" @row-dblclick="handleAddDictionaryValueList" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column :show-overflow-tooltip="true" align="left" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="类型">
        <template slot-scope="scope">
          <span>{{scope.row.type}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="排序">
        <template slot-scope="scope">
          <span>{{scope.row.sort}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <menu-context-item @click="handleDelete">删除</menu-context-item>
    </menu-context>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[5,10,15,20]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listQuery.total">
      </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dictionaryForm" :model="dictionaryFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-form-item label="名称" prop="name">
          <el-input v-model="dictionaryFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="类型" prop="type">
          <el-input v-model="dictionaryFormData.type"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="dictionaryFormData.sort"></el-input>
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
  import {getDictionaryListByCondition,editDictionary,deleteDictionaryById} from '@/api/dictionary'
  export default {
    data() {
      return {
        list: null,
        listQuery: {
          total:50,
          pageNum:1,
          pageSize:5,
          name:null
        },
        textMap: {
          update: '编辑',
          create: '新增'
        },
        dialogStatus: '',
        dialogFormVisible: false,
        dictionaryFormData: {
          id:'',
          name:'',
          type:'',
          sort:''
        },
        rules: {
          name: [
            { required: true, message: '名称不能为空', trigger: 'blur' }
          ],
          type: [
            { required: true, message: '类型不能为空', trigger: 'blur' }
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
      handleFilter() {
        this.listQuery.pageNum = 1
        this.getList()
      },
      getList() {
        this.listLoading = true
        getDictionaryListByCondition(this.listQuery).then(response => {
          const data=response.data.data
          this.list=data.list
          this.listQuery.total=data.total
          this.listQuery.pageNum=data.pageNum
          this.listQuery.pageSize=data.pageSize
          this.listLoading = false
        })
      },
      handleAddDictionaryValueList(row){
        this.$router.push({ path: '/dictionary-value' ,query:{type:row.type}})
      },
      resetTemp() {
        this.dictionaryFormData = {
          id:'',
          name:'',
          type:'',
          sort:''
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dictionaryForm'].clearValidate()
        })
      },
      handleUpdate(row) {
        this.dictionaryFormData = Object.assign({}, row) // copy obj
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dictionaryForm'].clearValidate()
        })
      },
      editData(){
        this.$refs.dictionaryForm.validate(valid => {
          if (valid) {
            editDictionary(this.dictionaryFormData).then(data=>{
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
          deleteDictionaryById(row.id).then(data=>{
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
      },
      handleSizeChange(val) {
        this.listQuery.pageSize = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.pageNum = val
        this.getList()
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .dictionary-container{
    .el-dialog {
      width: 30%;
    }
  }
</style>
