<template>
  <div class="app-container">
    <el-row class="app-query">
      <el-input v-model="listQuery.enterpriseName" placeholder="企业名称"  style="width: 150px;"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column :show-overflow-tooltip="true" align="left" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.enterpriseName}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="是否可用">
        <template slot-scope="scope">
          <span v-for="item in statusArray" v-if="item.value==scope.row.status">{{item.label}}</span>
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
    <div class="el-dialog-enterprise">
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
        <el-form :rules="rules" ref="enterpriseForm" :model="enterpriseFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
          <el-form-item label="名称" prop="enterpriseName">
            <el-input v-model="enterpriseFormData.enterpriseName"></el-input>
          </el-form-item>
          <el-form-item label="是否可用">
            <el-select clearable class="filter-item" v-model="enterpriseFormData.status"  style="width: 100%">
              <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="editData">确认</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
    import {getEnterpriseListByConditionAndPage,editEnterprise,deleteEnterpriseById} from '@/api/enterprise'
    export default {
        data() {
            return {
                list: null,
                listQuery: {
                    total:50,
                    pageNum:1,
                    pageSize:5,
                    enterpriseName:null
                },
                statusArray:[
                    {value:0,label:'否'},
                    {value:1,label:'是'}
                ],
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                dialogStatus: '',
                dialogFormVisible: false,
                enterpriseFormData: {
                    id:'',
                    enterpriseName:'',
                    status:1
                },
                rules: {
                    enterpriseName: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ]
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
                getEnterpriseListByConditionAndPage(this.listQuery).then(response => {
                    const data=response.data.data
                    this.list=data.list
                    this.listQuery.total=data.total
                    this.listQuery.pageNum=data.pageNum
                    this.listQuery.pageSize=data.pageSize
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.enterpriseFormData = {
                    id:'',
                    enterpriseName:'',
                    status:1
                }
            },
            handleCreate() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['enterpriseForm'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.enterpriseFormData = Object.assign({}, row) // copy obj
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['enterpriseForm'].clearValidate()
                })
            },
            editData(){

                this.$refs.enterpriseForm.validate(valid => {
                    if (valid) {
                        editEnterprise(this.enterpriseFormData).then(data=>{
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
                    deleteEnterpriseById(row.id).then(data=>{
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
            }
        }
    }
</script>