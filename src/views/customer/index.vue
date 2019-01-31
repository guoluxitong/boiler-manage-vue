<template>
  <div class="app-container">
    <el-row class="app-query">
      <el-input v-model="listQuery.customerName" placeholder="客户名称"  style="width: 150px;"></el-input>
      <el-button  type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </el-row>
    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 120%" @row-contextmenu="openTableMenu">
      <el-table-column :show-overflow-tooltip="true" align="left" label="客户名称">
        <template slot-scope="scope">
          <span>{{scope.row.customerName}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="所属企业">
        <template slot-scope="scope">
          <span v-for="item in enterpriseOption" v-if="item.value==scope.row.enterpriseId">{{item.label}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="是否可用">
        <template slot-scope="scope">
          <span v-for="item in statusArray" v-if="item.value==scope.row.status">{{item.label}}</span>
        </template>
      </el-table-column>
      <el-table-column :show-overflow-tooltip="true" align="left" label="编码">
        <template slot-scope="scope">
          <span>{{scope.row.customerNo}}</span>
        </template>
      </el-table-column>
    </el-table>
    <menu-context ref="menuContext">
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <menu-context-item @click="handleEditResource">分配权限</menu-context-item>
      <menu-context-item @click="handleEditCustomerUser">权限分配用户</menu-context-item>
      <menu-context-item @click="handleDelete">删除</menu-context-item>
    </menu-context>
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.pageNum" :page-sizes="[5,10,15,20]" :page-size="listQuery.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="listQuery.total">
      </el-pagination>
    </div>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
      <el-form :rules="rules" ref="customerForm" :model="customerFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-form-item label="所属企业" prop="enterpriseId">
          <el-select clearable class="filter-item" v-model="customerFormData.enterpriseId"  style="width: 100%">
            <el-option v-for="item in enterpriseOption" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称" prop="customerName">
          <el-input v-model="customerFormData.customerName"></el-input>
        </el-form-item>
        <el-form-item label="是否可用">
          <el-select clearable class="filter-item" v-model="customerFormData.status"  style="width: 100%">
            <el-option v-for="item in statusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="编码">
          <el-input v-model="customerFormData.customerNo"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editData">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog title="分配权限" :visible.sync="dialogResourceFormVisible" width="15%">
      <el-form :rules="rules" ref="resourceForm" :model="resourceFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:2px;'>
        <el-tree :data="resourceFormData.resourceList" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="resourceFormData.defaultProps" :default-checked-keys="resourceFormData.resIdArray">
        </el-tree>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogResourceFormVisible = false">取消</el-button>
        <el-button type="primary" @click="editCustomerResource">确认</el-button>
      </div>
    </el-dialog>
    <el-dialog title="权限分配用户" :visible.sync="dialogCustomerUserFormVisible" width="30%">
      <el-form  ref="customerUserForm" :model="customerUserFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-select v-model="customerUserFormData.userIdArray" multiple style="width: 100%" placeholder="请选择">
          <el-option v-for="item in customerUserFormData.userOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
        </el-select>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogCustomerUserFormVisible = false">取消</el-button>
        <el-button type="primary"  @click="editCustomerUser">确认</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import {getCustomerListByConditionAndPage,editCustomer,insertManyCustomerResource,insertManyCustomerUser,deleteCustomerById} from '@/api/customer'
    import {getUserListByOrganizationTypeAndId} from'@/api/user'
    import {getUserIdListByCustomerId} from'@/api/customerUser'
    import {getResourceIdListByCustomerId} from'@/api/customerResource'
    import {getEnterpriseListByCondition} from '@/api/enterprise'
    import { getResourceListByCondition} from '@/api/resource'
    export default {
        data() {
            const validateEnterpriseFun = (rule, value, callback) => {
                if (!value) {
                    callback(new Error('所属企业不能为空'))
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
                    customerName:""
                },
                statusArray:[
                    {value:0,label:'否'},
                    {value:1,label:'是'}
                ],
                enterpriseOption:[],
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                dialogStatus: '',
                dialogFormVisible: false,
                customerFormData: {
                    id:'',
                    enterpriseId:'',
                    customerName:'',
                    status:1,
                    customerNo:''
                },
                rules: {
                    enterpriseId: [
                        { required: true, trigger: 'blur', validator: validateEnterpriseFun}
                    ],
                    customerName: [
                        { required: true, message: '名称不能为空', trigger: 'blur' }
                    ],
                },
                dialogResourceFormVisible:false,
                resourceFormData:{
                    resIdArray:[],
                    customerId:'',
                    resourceList: [],
                    defaultProps: {
                        children: 'children',
                        label: 'label'
                    }
                },
                dialogCustomerUserFormVisible: false,
                customerUserFormData:{
                    customerId:'',
                    userIdArray:[],
                    userOptions:[],
                },
                listLoading: true,
            }
        },
        created() {
            Promise.all([this.initEnterpriseList()]).then(()=>{this.getList()})
        },
        methods: {
            openTableMenu(row, event) {
                this.$refs.menuContext.openTableMenu(row,event);
            },
            initEnterpriseList(){
                let enterpriseOption=[]
                getEnterpriseListByCondition().then(data=>{
                    data.data.data.forEach(item=>{
                        enterpriseOption.push({value:item.id,label:item.enterpriseName})
                    })
                    this.enterpriseOption=enterpriseOption
                })
            },
            handleFilter() {
                this.listQuery.pageNum = 1
                this.getList()
            },
            getList() {
                this.listLoading = true
                getCustomerListByConditionAndPage(this.listQuery).then(response => {
                    const data=response.data.data
                    this.list=data.list
                    this.listQuery.total=data.total
                    this.listQuery.pageNum=data.pageNum
                    this.listQuery.pageSize=data.pageSize
                    this.listLoading = false
                })
            },
            resetTemp() {
                this.customerFormData = {
                    id:'',
                    enterpriseId:'',
                    customerName:'',
                    status:1,
                    customerNo:''
                }
            },
            handleCreate() {
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['customerForm'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.customerFormData = Object.assign({}, row) // copy obj
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                this.$nextTick(() => {
                    this.$refs['customerForm'].clearValidate()
                })
            },
            handleEditCustomerUser(row){
                getUserListByOrganizationTypeAndId({orgType:3,orgId:row.id}).then(response => {
                    this.customerUserFormData.userOptions=response.data.data.map(user=>{
                        return {value:user.id.toString(),label:user.realName}
                    })
                    return getUserIdListByCustomerId({customerId:row.id})
                }).then(response=>{
                    this.customerUserFormData.userIdArray=response.data.data
                    this.customerUserFormData.customerId=row.id
                    this.dialogCustomerUserFormVisible = true
                    this.$nextTick(() => {
                        this.$refs['customerUserForm'].clearValidate()
                    })
                })
            },
            handleEditResource(row){
                this.resourceFormData.resIdArray=[]
                getResourceListByCondition().then(response => {
                    const allResourceList=response.data.data
                    const resourceList=this.filterFirstLevelResource(allResourceList, 0);
                    resourceList.forEach(item=>{
                        item.children=this.getChildResourceList(item.id,allResourceList)
                    })
                    this.resourceFormData.resourceList=resourceList
                    return getResourceIdListByCustomerId({customerId:row.id});
                }).then(response=>{
                    console.info(response.data.data)
                    this.resourceFormData.customerId=row.id
                    this.resourceFormData.resIdArray=response.data.data
                    this.dialogResourceFormVisible = true
                    this.$nextTick(() => {
                        this.$refs['resourceForm'].clearValidate()
                    })
                })
            },
            editData(){
                this.$refs.customerForm.validate(valid => {
                    if (valid) {
                        editCustomer(this.customerFormData).then(data=>{
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
            editCustomerUser(){
                let customerUserList=this.customerUserFormData.userIdArray.map(userId=>{
                    return {userId:userId,customerId: this.customerUserFormData.customerId}
                })
                insertManyCustomerUser({id:this.customerUserFormData.customerId,customerUserList:customerUserList}).then(response=>{
                    this.dialogCustomerUserFormVisible = false
                    this.$message({
                        message: '添加成功',
                        type: 'success'
                    })
                    this.getList()
                })
            },
            editCustomerResource(){
                let parentResIdArray=[];
                let childResIdArray=[];
                this.$refs.tree.getCheckedNodes().forEach(node=>{
                    if(parentResIdArray.indexOf(node.pId)==-1){
                        parentResIdArray.push(node.pId)
                    }
                    childResIdArray.push(node.id)
                })
                let resIdArray=[]
                parentResIdArray.concat(childResIdArray).forEach(resId=>{
                    if(resIdArray.indexOf(resId)==-1&&resId!=0){
                        resIdArray.push(resId)
                    }
                })
                let customerResourceList=[]
                resIdArray.forEach(resId=>{
                    customerResourceList.push({customerId:this.resourceFormData.customerId,resourceId:resId})
                })
                insertManyCustomerResource({id:this.resourceFormData.customerId,customerResourceList:customerResourceList}).then(response=>{
                    this.dialogResourceFormVisible = false
                    this.$message({
                        message: '分配成功',
                        type: 'success'
                    })
                    this.getList()
                })
            },
            handleDelete(row) {
                this.$confirm('确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    deleteCustomerById(row.id).then(data=>{
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
            filterFirstLevelResource(menus, menu_level){
                const firstLevelResourceList = menus.filter(item => {
                    return item.pId==menu_level;
                })
                return this.reGenerateResourceTreeData(firstLevelResourceList);
            },
            getChildResourceList(id,resoruceList=[]){
                let childResourceList=resoruceList.filter(item=>{
                    return id==item.pId
                })
                childResourceList=this.reGenerateResourceTreeData(childResourceList)
                childResourceList.forEach(item=>{
                    item.children=this.getChildResourceList(item.id,resoruceList)
                })
                return childResourceList
            },
            reGenerateResourceTreeData(resourceList){
                return resourceList.map(item=>{
                    return {id:item.resId,pId:item.pId,label:item.resName}
                })
            }
        }
    }
</script>