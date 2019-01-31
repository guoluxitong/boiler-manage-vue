<template>
  <div class="app-container user-container">
    <el-row class="app-query">
      <el-input clearable v-model="listQuery.realName" placeholder="用户姓名"  style="width: 150px;"></el-input>
      <el-input clearable v-model="listQuery.mobile" placeholder="电话"  style="width: 150px;"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column align="left" :show-overflow-tooltip="true" label="真实姓名">
        <template slot-scope="scope">
          <span>{{scope.row.realName}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true"  label="手机号">
        <template slot-scope="scope">
          <span>{{scope.row.mobile}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true" label="邮箱">
        <template slot-scope="scope">
          <span>{{scope.row.email}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true"  label="微信">
        <template slot-scope="scope">
          <span>{{scope.row.weiXin}}</span>
        </template>
      </el-table-column>
      <el-table-column align="left" :show-overflow-tooltip="true"  label="QQ">
        <template slot-scope="scope">
          <span>{{scope.row.qQ}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :show-overflow-tooltip="true"  label="状态">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status | statusFilterLabel(isAvailableArray)[0].label}}</el-tag>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <menu-context-item v-permission="['6']" @click="handleShenHe">审核通过</menu-context-item>
      <span :style="{display:roleManageShow}"><menu-context-item @click="handleEditRole">角色管理</menu-context-item></span>
      <menu-context-item @click="handleDelete">删除</menu-context-item>
    </menu-context>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[5,10,15,20]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listQuery.total">
      </el-pagination>
    </div>
    <div class="el-dialog-user">
      <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="40%">
        <el-form :rules="rules" ref="userFormData" :model="userFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
          <el-row v-permission="['6']">
            <el-col :span="12">
              <el-form-item label="组织" prop="orgId">
                <el-select clearable class="filter-item" v-model="userFormData.orgId"  style="width: 100%">
                  <el-option v-for="item in customerOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="真实姓名" prop="realName">
                <el-input v-model="userFormData.realName"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12" :style="{'display':mobileIsShow}">
              <el-form-item label="电话" prop="mobile">
                <el-input v-model="userFormData.mobile"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12" :style="{'display':mobileIsShow}">
              <el-form-item label="邮箱" prop="email" >
                <el-input v-model="userFormData.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="微信" prop="weiXin">
                <el-input v-model="userFormData.weiXin"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="QQ" prop="qQ">
                <el-input v-model="userFormData.qQ"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="userFormData.password"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-form-item label="备注" prop="title">
              <el-input type="textarea" v-model="userFormData.mark"></el-input>
            </el-form-item>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="editData">确认</el-button>
        </div>
      </el-dialog>
    </div>
    <el-dialog title="角色管理" :visible.sync="dialogRoleFormVisible" width="30%">
      <el-form  ref="roleForm" :model="roleFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-select v-model="roleFormData.roleIdArray" multiple style="width: 100%" placeholder="请选择">
          <el-option v-for="item in roleFormData.roleOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRoleFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editUserRole">确认</el-button>
      </div>
    </el-dialog>
    <boiler-common-delete-validate-dialog  @confirmDeleteValidate="confirmDeleteValidate" @confirmCancelValidate="confirmCancelValidate" :deleteValidateFormDialogVisible="deleteValidateFormDialogVisible" :id="delId" width="30%"></boiler-common-delete-validate-dialog>
  </div>
</template>

<script>
    import permission from '@/directive/permission/index.js'
    import checkPermission from '@/utils/permission'
    import {validateRealName,validatePassWord,validatePhone,validateWeiXin,validateQQ,validateEmail} from '@/utils/validate'
    import {getUserListByConditionAndPage,editUser,editUserRole,deleteUserById} from '@/api/user'
    import {getCustomerListByCondition} from '@/api/customer'
    import {getRoleListByUserId} from '@/api/role'
    import boilerCommonDeleteValidate from '@/views/boiler-common-delete-validate'
    export default {
        components:{
            'boiler-common-delete-validate-dialog':boilerCommonDeleteValidate
        },
        directives: { permission },
        data() {
            const validateCustomerFun = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('客户不能为空'))
                } else {
                    callback()
                }
            }
            const validateRealNameFun = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('真实姓名不能为空'))
                }else if(!validateRealName(value)){
                    callback(new Error('真实姓名必须为汉字'))
                } else {
                    callback()
                }
            }
            const validatePassWordFun = (rule, value, callback) => {
                if (!validatePassWord(value)) {
                    callback(new Error('密码至少为6位'))
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
                if (value&&!validateWeiXin(value)) {
                    callback(new Error('微信格式有误'))
                } else {
                    callback()
                }
            }
            const validateQQFun = (rule, value, callback) => {
                if (value&&!validateQQ(value)) {
                    callback(new Error('QQ格式有误'))
                } else {
                    callback()
                }
            }
            const validateEmailFun = (rule, value, callback) => {
                if (value&&!validateEmail(value)) {
                    callback(new Error('邮箱格式有误'))
                } else {
                    callback()
                }
            }
            return {
                userId:null,
                list: null,
                listQuery: {
                    total:50,
                    pageNum:1,
                    pageSize:5,
                    realName:'',
                    mobile:null,
                    orgType:this.$store.state.user.orgType,
                    orgId:null
                },
                customerOption:[],
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                roleManageShow:'inline',
                dialogStatus: '',
                dialogFormVisible: false,
                isAvailableArray:[
                    {value:1,label:'审核通过'},
                    {value:0,label:'待审核'}
                ],
                mobileIsShow:'inline',
                userFormData: {
                    mobile:'',
                    orgType:'3',
                    orgId:'',
                    email:'',
                    weiXin:'',
                    qQ:'',
                    realName:'',
                    password:'',
                    status:0,
                    mark:''
                },
                rules: {
                    orgId: [{required: true, validator: validateCustomerFun }],
                    realName: [{ trigger: 'blur',required: true, validator: validateRealNameFun }],
                    mobile: [{ required: true,trigger: 'blur',required: true, validator: validatePhoneFun }],
                    email: [{ trigger: 'blur', validator: validateEmailFun }],
                    weiXin: [{ trigger: 'blur', validator: validateWeiXinFun }],
                    qQ: [{ trigger: 'blur', validator: validateQQFun }],
                    password:[{ trigger: 'blur',required: true, validator: validatePassWordFun }]
                },
                dialogRoleFormVisible: false,
                roleFormData:{
                    userId:'',
                    roleIdArray:[],
                    roleOptions:[],
                },
                listLoading: true,
                delId:-1,
                deleteValidateFormDialogVisible:false
            }
        },
        filters: {
            statusFilter(status) {
                const statusMap = {
                    1: 'success',
                    0: 'danger'
                }
                return statusMap[status]
            },
            statusFilterLabel(status,isAvailableArray){
                return isAvailableArray.filter(item => {
                    return item.value==status
                })
            }
        },
        created() {
            this.getList()
            this.initCustomerList()
        },
        methods: {
            openTableMenu(row, event) {
                this.$refs.menuContext.openTableMenu(row,event);
                if(row.id==this.$store.state.user.userId){
                    this.roleManageShow='none';
                }else{
                    this.roleManageShow='inline';
                }
            },
            initCustomerList(){
                let customerOption=[]
                getCustomerListByCondition().then(data=>{
                    data.data.data.forEach(item=>{
                        customerOption.push({value:item.id+"",label:item.customerName})
                    })
                    this.customerOption=customerOption
                })
            },
            handleFilter() {
                this.listQuery.pageNum = 1
                this.getList()
            },
            getList() {
                this.listLoading = true
                getUserListByConditionAndPage(this.listQuery).then(response => {
                    const data=response.data.data
                    this.list=data.list
                    this.listQuery.total=data.total
                    this.listQuery.pageNum=data.pageNum
                    this.listQuery.pageSize=data.pageSize
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.userFormData = {
                    mobile:'',
                    orgType:'',
                    orgId:'',
                    email:'',
                    weiXin:'',
                    qQ:'',
                    realName:'',
                    password:'',
                    status:0,
                    mark:''
                }
            },
            handleCreate() {
                this.resetTemp()
                if(checkPermission(['3','5'])){
                    this.userFormData.orgType=this.$store.state.user.orgType
                    this.userFormData.orgId=this.$store.state.user.orgId
                }
                if(checkPermission(['6'])){
                    this.userFormData.orgType='3'
                    this.userFormData.orgId=''
                    this.userFormData.status=1
                }
                this.dialogStatus = 'create'
                this.mobileIsShow='inline'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['userFormData'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.userFormData = Object.assign({}, row) // copy obj
                if(checkPermission(['3','5'])){
                    this.mobileIsShow='none'
                }
                if(checkPermission(['6'])){
                    this.mobileIsShow='inline'
                }
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['userFormData'].clearValidate()
                })
            },
            handleShenHe(row) {
                row.status=1
                editUser(row).then(data=>{
                    this.$message({
                        message: "审核通过",
                        type: 'success'
                    });
                })
            },
            handleEditRole(row){
                if(checkPermission(['3','5'])){
                    this.userId=this.$store.state.user.userId;
                }
                this.roleFormData.userId=row.id
                getRoleListByUserId(this.userId).then(response => {
                    let roleOptions=[]
                    let roleList=response.data.data;
                    roleList.forEach(role=>{
                        roleOptions.push({value:role.roleId,label:role.roleName})
                    })
                    this.roleFormData.roleOptions=roleOptions
                    return getRoleListByUserId(row.id)
                }).then(response=>{
                    let roleIdArray=[]
                    let roleList=response.data.data;
                    roleList.forEach(role=>{
                        roleIdArray.push(role.roleId)
                    })
                    console.info(roleIdArray)
                    this.roleFormData.roleIdArray=roleIdArray
                    this.dialogRoleFormVisible = true
                    this.$nextTick(() => {
                        this.$refs['roleForm'].clearValidate()
                    })
                })
            },
            editUserRole(){
                let userRoleList=[]
                this.roleFormData.roleIdArray.forEach(roleId=>{
                    userRoleList.push({roleId:roleId,userId:this.roleFormData.userId})
                })
                editUserRole({id:this.roleFormData.userId,userRoleList:userRoleList}).then(response=>{
                    this.dialogRoleFormVisible = false
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    })
                    this.getList()
                })
            },
            editData(){
                this.$refs.userFormData.validate(valid => {
                    if (valid) {
                        editUser(this.userFormData).then(data=>{
                            if(data.data.code==400){
                                this.$message({
                                    message: data.data.msg,
                                    type: 'error'
                                });
                            }else{
                                this.dialogFormVisible = false
                                let message="成功"
                                if(this.userFormData.status==0) message="成功，当前用户不可用，请联系相关工作人员进行开通"
                                this.$message({
                                    message: message,
                                    type: 'success'
                                });
                                this.getList()
                            }
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
                    deleteUserById(obj.id).then(data=>{
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
            }
        }
    }
</script>
