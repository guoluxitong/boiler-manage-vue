<template>
  <div class="app-container auxiliaryMachineSmallClass-container">
    <el-row class="auxiliaryMachineSmallClass-select">
      <el-button style="float: right" @click="handleReturn" type="primary" icon="el-icon-back">返回</el-button>
      <el-button style="float: right;margin-right: 10px" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>
    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="auxiliaryMachineSmallClassForm" :model="auxiliaryMachineSmallClassFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-form-item label="名称" prop="label">
          <el-input v-model="auxiliaryMachineSmallClassFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="auxiliaryMachineSmallClassFormData.sort"></el-input>
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
    import {getAuxiliaryMachineSmallClassListByCondition,editAuxiliaryMachineSmallClass,deleteAuxiliaryMachineSmallClassById} from '@/api/auxiliaryMachineSmallClass'
    export default {
        data() {
            return {
                list: null,
                listQuery: {
                    largeClassId:'',
                },
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                dialogStatus: '',
                dialogFormVisible: false,
                auxiliaryMachineSmallClassFormData: {
                    id:'',
                    largeClassId:'',
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
            getList() {
                this.listLoading = true
                this.listQuery.largeClassId=this.$route.query.largeClassId
                getAuxiliaryMachineSmallClassListByCondition(this.listQuery).then(response => {
                    this.list=response.data.data
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.auxiliaryMachineSmallClassFormData = {
                    id:'',
                    largeClassId:this.listQuery.largeClassId,
                    name:'',
                    sort:''
                }
            },
            handleCreate() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['auxiliaryMachineSmallClassForm'].clearValidate()
                })
            },
            handleReturn(){
                this.$router.push({ path: '/auxiliary-machine-large-class'})
            },
            handleUpdate(row) {
                this.auxiliaryMachineSmallClassFormData = Object.assign({}, row)
                this.auxiliaryMachineSmallClassFormData.largeClassId=this.listQuery.largeClassId
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['auxiliaryMachineSmallClassForm'].clearValidate()
                })
            },
            editData(){
                this.$refs.auxiliaryMachineSmallClassForm.validate(valid => {
                    if (valid) {
                        editAuxiliaryMachineSmallClass(this.auxiliaryMachineSmallClassFormData).then(data=>{
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
                    deleteAuxiliaryMachineSmallClassById(row.id).then(data=>{
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
  .auxiliaryMachineSmallClass-container{
    .auxiliaryMachineSmallClass-select{
      .el-input,.el-select,.el-button{
        margin-bottom: 10px;
      }
    }
    .el-dialog {
      width: 30%;
    }
  }
</style>
