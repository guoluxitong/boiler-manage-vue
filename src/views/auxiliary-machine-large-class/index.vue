<template>
  <div class="app-container auxiliaryMachineLargeClass-container">
    <el-row class="app-query">
      <el-input v-model="listQuery.name"  style="width: 150px;" placeholder="名称"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>
    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间"  @row-dblclick="handleAddAuxiliaryMachineSmallClassList" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column align="left" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
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
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[5,10,15,20]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listQuery.total">
      </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
      <el-form :rules="rules" ref="auxiliaryMachineLargeClassForm" :model="auxiliaryMachineLargeClassFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-form-item label="名称" prop="label">
          <el-input v-model="auxiliaryMachineLargeClassFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="auxiliaryMachineLargeClassFormData.sort"></el-input>
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
    import {getAuxiliaryMachineLargeClassListByConditionAndPage,editAuxiliaryMachineLargeClass,deleteAuxiliaryMachineLargeClassById} from '@/api/auxiliaryMachineLargeClass'
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
                auxiliaryMachineLargeClassFormData: {
                    id:'',
                    name:'',
                    sort:''
                },
                rules: {
                    name: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
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
                getAuxiliaryMachineLargeClassListByConditionAndPage(this.listQuery).then(response => {
                    const data=response.data.data
                    this.list=data.list
                    this.listQuery.total=data.total
                    this.listQuery.pageNum=data.pageNum
                    this.listQuery.pageSize=data.pageSize
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.auxiliaryMachineLargeClassFormData = {
                    id:'',
                    name:'',
                    sort:''
                }
            },
            handleCreate() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['auxiliaryMachineLargeClassForm'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.auxiliaryMachineLargeClassFormData = Object.assign({}, row)
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['auxiliaryMachineLargeClassForm'].clearValidate()
                })
            },
            handleReturn(){
                this.$router.push({ path: '/auxiliary-machine-large-class'})
            },
            editData(){
                this.$refs.auxiliaryMachineLargeClassForm.validate(valid => {
                    if (valid) {
                        editAuxiliaryMachineLargeClass(this.auxiliaryMachineLargeClassFormData).then(data=>{
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
                    deleteAuxiliaryMachineLargeClassById(row.id).then(data=>{
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
            handleAddAuxiliaryMachineSmallClassList(row){
                this.$router.push({ path: '/auxiliary-machine-small-class' ,query:{largeClassId:row.id}})
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