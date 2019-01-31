<template>  
    <div class="product-form" style="overflow-y:auto">
        <el-form ref="productForm" :model="productFormData" label-position="right" label-width="100px" style='width: 96%; margin-left:15px;'>       
            <el-table :data="productFormData.productAuxiliaryMachineInfoList" element-loading-text="给我一点时间" border style="margin-top:10px" @row-contextmenu="openTableMenu">
                <el-table-column :show-overflow-tooltip="true" align="left" label="大类">
                    <template slot-scope="scope">
                        <span>{{scope.row.largeClassId | dictionaryValueFieldFilter(largeClassOptions)}}</span>
                    </template>
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true" align="left" label="小类">
                    <template slot-scope="scope">
                        <span>{{scope.row.smallClassId | dictionaryValueFieldFilter(smallClassOptions)}}</span>
                    </template>
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true" align="left" label="品牌">
                    <template slot-scope="scope">
                        <span>{{scope.row.brandName}}</span>
                    </template>
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true" align="left" label="型号">
                    <template slot-scope="scope">
                        <span>{{scope.row.modelName}}</span>
                    </template>
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true" align="left" label="数量">
                    <template slot-scope="scope">
                        <span>{{scope.row.amountOfUser}}</span>
                    </template>
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true" align="left" label="供货厂家">
                    <template slot-scope="scope">
                        <span>{{scope.row.supplier}}</span>
                    </template>
                </el-table-column>
                <el-table-column :show-overflow-tooltip="true" align="left" label="备注">
                    <template slot-scope="scope">
                        <span>{{scope.row.remarks}}</span>
                    </template>
                </el-table-column>
            </el-table>
            <menu-context ref="menuContext">
                <menu-context-item @click="handleUpdate">编辑</menu-context-item>
                <menu-context-item @click="handleCopy">复制</menu-context-item>
                <menu-context-item @click="handleDelete">删除</menu-context-item>
            </menu-context>
            <div class="product-footer">
                <el-button  type="primary" @click="handleAdd">添加</el-button>
                <el-button type="primary" style="margin-left: 10px;margin-top: 10px" @click="submitForm">确认</el-button>
            </div>
        </el-form>
        
    </div>
</template>
<script>
    import {formatDateTime} from '@/utils/date'
    //import {openElectronWindow} from '@/utils/windowsOperate'
    import permission from '@/directive/permission/index.js'
    import {initMedium,initFuel,initIsSell} from './product-dictionary'
    import {getBoilerModelListByCondition} from '@/api/boilerModel'
    import {getAuxiliaryMachineLargeClassListByCondition} from '@/api/auxiliaryMachineLargeClass'
    import {getAuxiliaryMachineSmallClassListByCondition} from '@/api/auxiliaryMachineSmallClass'
    import {getProductAuxiliaryMachineInfoListByProductId} from '@/api/ProductAuxiliaryMachineInfo'
    import {editProduct} from '@/api/product'
    //const {ipcRenderer} = require('electron')
    //const {ipcMain} = require('electron').remote
    function dictionaryValueFilter(dictionaryValue,value) {
        const dictionaryValueItem = dictionaryValue.filter(item => {
            return item.value==value
        })
        return dictionaryValueItem[0]
    }
    export default {
        directives: { permission },
        data() {
            return {
                boilerModelNumberArray:[],
                mediumArray:[],
                fuelArray:[],
                isSellArray:[],
                activeName:'second',
                productFormData:{
                    id:'',
                    roleIdArray:this.$store.state.user.roleIdArray,
                    userId:this.$store.state.user.userId,
                    orgId:this.$store.state.user.orgId,
                    orgType:this.$store.state.user.orgType,
                    controllerNo:'',
                    boilerNo:'',
                    boilerModelNumber:null,
                    tonnageNum:null,
                    medium:null,
                    fuel:null,
                    createDateTime:formatDateTime(new Date(),"yyyy-MM-dd hh:mm:ss"),
                    editDateTime:formatDateTime(new Date(),"yyyy-MM-dd hh:mm:ss"),
                    isSell:0,
                    productAuxiliaryMachineInfoList:[]
                },
                largeClassOptions:[],
                smallClassOptions:[],
            }
        },
        filters: {
            dictionaryValueFieldFilter(value,dictionaryValueArray) {
                if(dictionaryValueFilter(dictionaryValueArray,value))
                    return dictionaryValueFilter(dictionaryValueArray,value).label
                return
            }
        },
        mounted() {
            Promise.all([this.initSelect(),this.initAuxiliaryMachineAbout()]).then(()=>{this.initFormData()}).then(()=>{this.getList()});
        },
        methods: {
            initSelect(){
                this.initBoilerModel()
                initMedium().then(data=>{this.mediumArray=data})
                initFuel().then(data=>{this.fuelArray=data})
                initIsSell().then(data=>{this.isSellArray=data})
            },
            initBoilerModel(){
                getBoilerModelListByCondition({orgId:this.$store.state.user.orgId,orgType:this.$store.state.user.orgType}).then(data=>{
                    this.boilerModelNumberArray=data.data.data
                })
            },
            initAuxiliaryMachineAbout(){
                getAuxiliaryMachineLargeClassListByCondition({}).then(response=>{
                    this.largeClassOptions=this.getAuxiliaryMachineAboutOptions(response.data.data)
                })
                getAuxiliaryMachineSmallClassListByCondition({}).then(response=>{
                    this.smallClassOptions=this.getAuxiliaryMachineAboutOptions(response.data.data)
                })
            },
            getAuxiliaryMachineAboutOptions(dataList){
                let options=[]
                dataList.forEach(item=>{
                    let optionItem={}
                    optionItem.value=item.id
                    optionItem.label=item.name
                    options.push(optionItem)
                })
                return options
            },
            openTableMenu(row, event) {
                this.$refs.menuContext.openTableMenu(row,event);
            },
            initFormData(){
                if(this.$route.query.title=='auxiliaryMachineInfo'){
                    document.title = '辅机信息';
                    this.productFormData=JSON.parse(this.$route.query.productFormData)
                }else if(this.$route.query.title=='create'){
                    document.title = '新增';
                }else if(this.$route.query.title=='copy'){
                    document.title = '复制';
                    this.productFormData=JSON.parse(this.$route.query.productFormData)
                    this.productFormData.roleIdArray=this.$store.state.user.roleIdArray
                    this.productFormData.userId=this.$store.state.user.userId
                    this.productFormData.orgId=this.$store.state.user.orgId
                    this.productFormData.orgType=this.$store.state.user.orgType
                    this.productFormData.createDateTime=formatDateTime(new Date(),"yyyy-MM-dd hh:mm:ss")
                }
            },
			getList(){
				getProductAuxiliaryMachineInfoListByProductId({productId:this.productFormData.id}).then(response=>{
					let productAuxiliaryMachineInfoList=response.data.data
					if(this.$route.query.title=='edit'){
					}else if(this.$route.query.title=='create'){
					}else if(this.$route.query.title=='copy'){
						let newProductAuxiliaryMachineInfoList=[]
						productAuxiliaryMachineInfoList.forEach(item=>{
							item.productId=''
							newProductAuxiliaryMachineInfoList.push(item)
						})
						productAuxiliaryMachineInfoList=newProductAuxiliaryMachineInfoList
					}
					this.productFormData.productAuxiliaryMachineInfoList=productAuxiliaryMachineInfoList
				})
			},
            handleOpenElectronWindow(title,paramData){
                let width= Math.round(document.body.clientWidth/2)+100
                let height= Math.round(document.body.clientHeight/2)+200
                let url="/product-auxiliary-machine-info-form"
                url=url+"?title="+title
                if(title!='create') url=url+"&&productAuxiliaryMachineInfo="+JSON.stringify(paramData)
                let routerData = this.$route.srfs
                // let newWindow=openElectronWindow(url,{width: width, height: height})
                // newWindow.once('closed', () => {
                //     newWindow = null
                //     ipcMain.removeAllListeners(['productAuxiliaryMachineInfo'])
                // })
                // ipcMain.once('productAuxiliaryMachineInfo', (event, arg) => {
                //     if(title=='edit') this.handleDelete(paramData)
                //     this.productFormData.productAuxiliaryMachineInfoList.push(arg)
                //     newWindow.close()
                //     newWindow = null
                // })
            },
            handleAdd(){
               this.handleOpenElectronWindow("create")
            },
            handleUpdate(row){
                this.handleOpenElectronWindow("edit",row)
            },
            handleCopy(row){
                this.handleOpenElectronWindow("copy",row)
            },
            submitForm() {
                this.$refs.productForm.validate(valid => {
                    if (valid) {
                        if(this.$route.query.title=='edit'){
                        }else if(this.$route.query.title=='create'){
                        }else if(this.$route.query.title=='copy'){
                            this.productFormData.id=''
                        }
                        editProduct(this.productFormData).then(() => {
                            ipcRenderer.send('handleCloseProductForm')
                        })
                    } else {
                        return false
                    }
                })
            },
            handleDelete(row) {
                const index = this.productFormData.productAuxiliaryMachineInfoList.indexOf(row)
                this.productFormData.productAuxiliaryMachineInfoList.splice(index, 1)
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
.product-footer {
  float: right;
}
</style>