<template>
  <div class="app-container">
    <el-row class="resource-query">
      <el-button @click="handleCreateFirstMenu" type="primary" icon="el-icon-edit">新增一级菜单</el-button>
    </el-row>
    <tree-table :data="data" :evalFunc="func" :evalArgs="args" :expandAll="expandAll" border :row-contextmenu="openTableMenu">
      <el-table-column label="菜单名称">
        <template slot-scope="scope">
          <span>{{scope.row.resName}}</span>
        </template>
      </el-table-column>
      <el-table-column label="路由地址">
        <template slot-scope="scope">
          <span>{{(scope.row.pId==0&&scope.row.url=='')?'无':scope.row.url}}</span>
        </template>
      </el-table-column>
      <el-table-column label="页面地址">
        <template slot-scope="scope">
          <span v-if="scope.row.pId==0">无</span>
          <span v-else>
            {{(scope.row.pageUrl==''||scope.row.pageUrl==null)?'/'+scope.row.url+'/'+'index':scope.row.pageUrl}}
          </span>
        </template>
      </el-table-column>
      <el-table-column label="是否隐藏">
        <template slot-scope="scope">
          <span v-for="item in hideStatusArray" v-if="item.value==scope.row.hidden">{{item.label}}</span>
        </template>
      </el-table-column>
      <el-table-column label="排序">
        <template slot-scope="scope">
          <span>{{scope.row.sort}}</span>
        </template>
      </el-table-column>
    </tree-table>
    <menu-context ref="menuContext">
      <span :style="{display:isShowAddChildMenu}"><menu-context-item @click="handleCreateChildMenu">新增子菜单</menu-context-item></span>
      <menu-context-item @click="handleUpdate">编辑</menu-context-item>
      <menu-context-item @click="handleDelete">删除</menu-context-item>
    </menu-context>
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="30%">
      <el-form  :rules="rules" ref="resourceForm" :model="resourceFormData" label-position="right" label-width="80px" style='width: 95%; margin-left:5px;'>
        <el-form-item label="父级菜单" v-if="pIdFlag">
          <el-input v-model="resourceFormData.pName" :readonly="true"></el-input>
        </el-form-item>
        <el-form-item label="菜单名称" prop="resName">
          <el-input v-model="resourceFormData.resName"></el-input>
        </el-form-item>
        <el-form-item label="路由地址" v-if="urlFlag">
          <el-input v-model="resourceFormData.url"></el-input>
        </el-form-item>
        <el-form-item label="页面地址" v-if="pageUrlFlag">
          <el-input v-model="resourceFormData.pageUrl"></el-input>
        </el-form-item>
        <el-form-item label="是否隐藏">
          <el-select clearable class="filter-item" v-model="resourceFormData.hidden"  style="width: 100%">
            <el-option v-for="item in hideStatusArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="resourceFormData.sort"></el-input>
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
    import checkPermission from '@/utils/permission'
    import treeTable from '@/components/TreeTable'
    import treeToArray from './customEval'
    import { getResourceListByCondition,editResource,deleteResourceById} from '@/api/resource'

    export default {
        name: 'customTreeTableDemo',
        components: { treeTable },
        data() {
            return {
                func: treeToArray,
                expandAll: false,
                data:{},
                isShowAddChildMenu:'inline',
                hideStatusArray:[
                    {value:0,label:'否'},
                    {value:1,label:'是'}
                ],
                args: [null, null, 'timeLine'],
                userId:'',
                textMap: {
                    update: '编辑',
                    create: '新增'
                },
                dialogStatus: '',
                dialogFormVisible: false,
                resourceFormData: {
                    id:'',
                    resId:'',
                    pId:'',
                    hidden:'',
                    sort:'',
                    resName:'',
                    url:'',
                    pageUrl:'',
                    hidden:0,
                    sort:'',
                },
                pIdFlag:true,
                urlFlag:true,
                pageUrlFlag:true,
                rules: {
                    resName: [
                        { required: true, message: '菜单名称不能为空', trigger: 'blur' }
                    ],
                    sort: [
                        { required: true, message: '排序不能为空', trigger: 'blur' }
                    ],
                },
            }
        },
        created() {
            this.getList()
        },
        methods: {
            openTableMenu(row, event) {
                if(row.pId===0){
                    this.isShowAddChildMenu='inline'
                }else{
                    this.isShowAddChildMenu='none'
                }
                this.$refs.menuContext.openTableMenu(row,event);
            },
            getList() {
                if(checkPermission(['3','5'])){
                    this.userId=this.$store.state.user.userId;
                }
                getResourceListByCondition({userId:this.userId}).then(response => {
                    const allMenus=response.data.data
                    const firstLevelMenus=this.filterFirstLevelMenus(allMenus, 0);
                    firstLevelMenus.forEach(item=>{
                        item.children=this.getChildMenus(item.resId,allMenus)
                    })
                    this.data=firstLevelMenus
                })
            },
            filterFirstLevelMenus(menus, menu_level){
                const accessedRouters = menus.filter(item => {
                    return item.pId==menu_level;
                })
                return accessedRouters;
            },
            getChildMenus(id,menus=[]){
                let childMenus=[]
                menus.forEach(item=>{
                    if(id==item.pId){
                        childMenus.push(item)
                    }
                })
                childMenus.forEach(item=>{
                    item.children=this.getChildMenus(item.resId,menus)
                })
                return childMenus
            },
            resetTemp() {
                this.resourceFormData = {
                    resId:'',
                    pId:0,
                    pName:'',
                    hidden:'',
                    sort:'',
                    resName:'',
                    url:'',
                    pageUrl:'',
                    hidden:0,
                    sort:''
                }
            },
            handleCreateFirstMenu(){
                this.resetTemp()
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.pIdFlag=false;
                this.urlFlag=false;
                this.pageUrlFlag=false;
                this.$nextTick(() => {
                    this.$refs['resourceForm'].clearValidate()
                })
            },
            handleCreateChildMenu(row){
                this.resetTemp()
                this.resourceFormData.pId=row.resId
                this.resourceFormData.pName=row.resName
                this.dialogStatus = 'create'
                this.dialogFormVisible = true
                this.pIdFlag=true;
                this.urlFlag=true;
                this.pageUrlFlag=true;
                this.$nextTick(() => {
                    this.$refs['resourceForm'].clearValidate()
                })
            },
            handleUpdate(row) {
                this.resourceFormData = Object.assign({}, row)
                this.dialogStatus = 'update'
                this.dialogFormVisible = true
                if(row.pId===0){
                    this.pIdFlag=false;
                    this.urlFlag=false;
                    this.pageUrlFlag=false;
                }else{
                    this.pIdFlag=false;
                    this.urlFlag=true;
                    this.pageUrlFlag=true;
                }
                this.$nextTick(() => {
                    this.$refs['resourceForm'].clearValidate()
                })
            },
            editData(){
                delete this.resourceFormData.children
                delete this.resourceFormData.parent
                this.$refs.resourceForm.validate(valid => {
                    if (valid) {
                        editResource(this.resourceFormData).then(data=>{
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
                    deleteResourceById(row.resId).then(data=>{
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getList()
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
  .resource-query{
    float: right;
    .el-input,.el-select,.el-button{
      margin-bottom: 10px;
    }
  }
</style>
