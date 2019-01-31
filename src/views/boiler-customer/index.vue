<template>
  <div class="app-container boilerCustomer-container">
    <el-row class="app-query">
      <el-input v-model="listQuery.name" placeholder="客户名称"  style="width: 150px;"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit" v-permission="['3','5']">新增</el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column align="left" :show-overflow-tooltip="true" label="客户编号">
        <template slot-scope="scope">
          <span>{{scope.row.customerNo}}</span>
        </template>
      </el-table-column>
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
      <el-table-column align="left" :show-overflow-tooltip="true" label="微信">
        <template slot-scope="scope">
          <span>{{scope.row.weiXin}}</span>
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
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate" v-permission="['3','5']">编辑</menu-context-item>
      <menu-context-item @click="handleDelete" v-permission="['3','5']">删除</menu-context-item>
    </menu-context>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[5,10,15,20]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listQuery.total">
      </el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="boilerCustomerForm" :model="boilerCustomerFormData" label-position="right" label-width="80px" style='width: 90%; margin-left:15px;'>
        <el-row>
          <el-col :span="12">
            <el-form-item label="客户编号"  prop="customerNo">
              <el-input v-model="boilerCustomerFormData.customerNo"  size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="客户名称" prop="name">
              <el-input v-model="boilerCustomerFormData.name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12">
            <el-form-item label="电话" prop="phone">
              <el-input v-model="boilerCustomerFormData.phone"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="微信" prop="weiXin">
              <el-input v-model="boilerCustomerFormData.weiXin"></el-input>
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
          <el-col :span="12">
            <el-form-item label="区">
              <el-input v-model="boilerCustomerFormData.district"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editData">确认</el-button>
      </div>
    </el-dialog>
    <boiler-common-delete-validate-dialog  @confirmDeleteValidate="confirmDeleteValidate" @confirmCancelValidate="confirmCancelValidate" :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible" :id="delId"></boiler-common-delete-validate-dialog>
  </div>
</template>

<script>
    import permission from '@/directive/permission/index.js' // 权限判断指令
    import checkPermission from '@/utils/permission'
    import {getBoilerCustomerListByConditionAndPage,editBoilerCustomer,deleteBoilerCustomerById} from '@/api/boilerCustomer'
    import { validateRealName,validatePhone,validateWeiXin} from '@/utils/validate'
    import boilerCommonDeleteValidate from '@/views/boiler-common-delete-validate'
    export default {
        components:{
            'boiler-common-delete-validate-dialog':boilerCommonDeleteValidate
        },
        directives: { permission },
        data() {
            const validateRealNameFun = (rule, value, callback) => {
                if (!validateRealName(value)) {
                    callback(new Error('姓名必须为汉字'))
                } else {
                    callback()
                }
            }
            const validatePhoneFun = (rule, value, callback) => {
                if(value.length<=0){
                    callback(new Error('手机号码不能为空'))
                }else if (!validatePhone(value)) {
                    callback(new Error('手机号码格式有误'))
                } else {
                    callback()
                }
            }
            const validateWeiXinFun = (rule, value, callback) => {
                if (!validateWeiXin(value)) {
                    callback(new Error('微信格式有误'))
                } else {
                    callback()
                }
            }
            return {
                list: null,
                listQuery: {
                    total:50,
                    pageNum:1,
                    pageSize:5,
                    name:null,
                    orgType:null,
                    orgId:null,
                    userId:null
                },
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                dialogStatus: '',
                dialogFormVisible: false,
                boilerCustomerFormData: {
                    id:'',
                    customerNo:'',
                    name:'',
                    phone:'',
                    weiXin:'',
                    province:'',
                    city:'',
                    district:'',
                    orgType:this.$store.state.user.orgType,
                    orgId:this.$store.state.user.orgId
                },
                rules: {
                    customerNo: [{ required: true,trigger: 'blur',message:'客户编号不能为空'}],
                    name: [{ required: true,trigger: 'blur', validator: validateRealNameFun }],
                    phone: [{ required: true,trigger: 'blur', validator: validatePhoneFun }],
                    weiXin: [{ trigger: 'blur', validator: validateWeiXinFun }]
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
                getBoilerCustomerListByConditionAndPage(this.listQuery).then(response => {
                    const data=response.data.data
                    this.list=data.list
                    this.listQuery.total=data.total
                    this.listQuery.pageNum=data.pageNum
                    this.listQuery.pageSize=data.pageSize
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.boilerCustomerFormData = {
                    id:'',
                    customerNo:'',
                    name:'',
                    phone:'',
                    weiXin:'',
                    province:'',
                    city:'',
                    district:'',
                    orgType:this.$store.state.user.orgType,
                    orgId:this.$store.state.user.orgId
                }
            },
            handleCreate() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['boilerCustomerForm'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.boilerCustomerFormData = Object.assign({}, row) // copy obj
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['boilerCustomerForm'].clearValidate()
                })
            },
            editData(){
                this.$refs.boilerCustomerForm.validate(valid => {
                    if (valid) {
                        editBoilerCustomer(this.boilerCustomerFormData).then(data=>{
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
                    deleteBoilerCustomerById(obj.id).then(data=>{
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
<style rel="stylesheet/scss" lang="scss">
  .boilerCustomer-container{
    .el-dialog {
      width: 40%;
    }
  }
</style>
