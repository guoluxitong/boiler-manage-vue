<template>
  <div class="app-container boilerModel-container">
    <el-row class="app-query">
      <el-input v-model="listQuery.label" placeholder="名称"  style="width: 150px;"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit" v-permission="['3','5']">新增</el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column align="left" :show-overflow-tooltip="true" label="名称">
        <template slot-scope="scope">
          <span>{{scope.row.label}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate" v-permission="['3','5']">编辑</menu-context-item>
      <menu-context-item @click="handleDelete" v-permission="['3','5']">删除</menu-context-item>
    </menu-context>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[5,10,15,20]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listQuery.total">
      </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :width="width">
      <el-form :rules="rules" ref="boilerModelForm" :model="boilerModelFormData" label-position="right" label-width="80px" style='width: 90%; margin-left:15px;'>
        <el-row>
          <el-form-item label="名称"  prop="label">
            <el-input v-model="boilerModelFormData.label"  size="small"></el-input>
          </el-form-item>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editData">确认</el-button>
      </div>
    </el-dialog>
    <boiler-common-delete-validate-dialog :width="width"  @confirmDeleteValidate="confirmDeleteValidate" @confirmCancelValidate="confirmCancelValidate" :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible" :id="delId"></boiler-common-delete-validate-dialog>
  </div>
</template>

<script>
    import permission from '@/directive/permission/index.js' // 权限判断指令
    import checkPermission from '@/utils/permission'
    import {getBoilerModelListByConditionAndPage,editBoilerModel,deleteBoilerModelById} from '@/api/boilerModel'
    import boilerCommonDeleteValidate from '@/views/boiler-common-delete-validate'
    export default {
        name:'boiler-model',
        components:{
            'boiler-common-delete-validate-dialog':boilerCommonDeleteValidate
        },
        directives: { permission },
        props:{
          width:{
              type:String,
              default:'30%'
          }
        },
        data() {
            return {
                list: null,
                listQuery: {
                    total:50,
                    pageNum:1,
                    pageSize:5,
                    label:null,
                    orgType:null,
                    orgId:null
                },
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                dialogStatus: '',
                dialogFormVisible: false,
                boilerModelFormData: {
                    id:'',
                    label:'',
                    value:'',
                    orgType:this.$store.state.user.orgType,
                    orgId:this.$store.state.user.orgId,
                    sort:null
                },
                rules: {
                    label: [{ required: true,trigger: 'blur',message:'型号名称不能为空'}],
                    value: [{ required: true,trigger: 'blur',message:'型号值不能为空'}],
                    sort: [{ required: true,trigger: 'blur',message:'排序不能为空'}],
                },
                listLoading: true,
                delId:-1,
                deleteValidateFormDialogVisible:false
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
                if(checkPermission(['3','5'])){
                    this.listQuery.orgType=this.$store.state.user.orgType;
                    this.listQuery.orgId=this.$store.state.user.orgId;
                }
                getBoilerModelListByConditionAndPage(this.listQuery).then(response => {
                    const data=response.data.data
                    this.list=data.list
                    this.listQuery.total=data.total
                    this.listQuery.pageNum=data.pageNum
                    this.listQuery.pageSize=data.pageSize
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.boilerModelFormData = {
                    id:'',
                    label:'',
                    value:'',
                    orgType:this.$store.state.user.orgType,
                    orgId:this.$store.state.user.orgId,
                    sort:null
                }
            },
            handleCreate() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['boilerModelForm'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.boilerModelFormData = Object.assign({}, row) // copy obj
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['boilerModelForm'].clearValidate()
                })
            },
            editData(){
                this.$refs.boilerModelForm.validate(valid => {
                    if (valid) {
                        editBoilerModel(this.boilerModelFormData).then(data=>{
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
                    this.deleteValidateFormDialogVisible=true
                    this.delId=row.id
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            confirmDeleteValidate(obj){
                if(obj.flag){
                    this.deleteValidateFormDialogVisible=obj.deleteValidateFormDialogVisible
                    deleteBoilerModelById(obj.id).then(data=>{
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getList()
                    })
                }
            },
            confirmCancelValidate(obj){
                this.deleteValidateFormDialogVisible=obj.deleteValidateFormDialogVisible
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
