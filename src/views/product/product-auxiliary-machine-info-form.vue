<template>
    <div class="product-auxiliary-machine-info-form">
        <el-form  ref=" productAuxiliaryMachineInfoForm" :model=" productAuxiliaryMachineInfoFormData" label-position="right" label-width="70px" style='width: 96%; margin-left:5px;'>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="大类" >
                        <el-select clearable class="filter-item" v-model="productAuxiliaryMachineInfoFormData.largeClassId" style="width: 100%" @change="largeClassChange">
                            <el-option v-for="item in largeClassOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item clearable label="小类" >
                        <el-select clearable class="filter-item" v-model="productAuxiliaryMachineInfoFormData.smallClassId" style="width: 100%" @change="smallClassChange">
                            <el-option v-for="item in smallClassOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="品牌">
                        <el-input v-model="productAuxiliaryMachineInfoFormData.brandName"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="型号">
                        <el-input v-model="productAuxiliaryMachineInfoFormData.modelName"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="12">
                    <el-form-item label="数量" >
                        <el-input v-model="productAuxiliaryMachineInfoFormData.amountOfUser"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="12">
                    <el-form-item label="供货厂家" >
                        <el-input v-model="productAuxiliaryMachineInfoFormData.supplier"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item label="备注" >
                        <el-input type="textarea" v-model="productAuxiliaryMachineInfoFormData.remarks" style="width:100%"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row>
                <el-col :span="24">
                    <el-form-item>
                        <el-button type="primary" @click="submitForm">确认</el-button>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>

    </div>
</template>
<script>
    import {getAuxiliaryMachineLargeClassListByCondition} from '@/api/auxiliaryMachineLargeClass'
    import {getAuxiliaryMachineSmallClassListByCondition} from '@/api/auxiliaryMachineSmallClass'
    //const {ipcRenderer} = require('electron')
    export default {
        data() {
            return {
                largeClassArray:[],
                smallClassArray:[],
                largeClassOptions:[],
                smallClassOptions:[],
                productAuxiliaryMachineInfoFormData:{
                    id:'',
                    largeClassId:null,
                    smallClassId:null,
                    brandName:'',
                    modelName:'',
                    amountOfUser:'',
                    supplier:'',
                    remarks:'',
                }
            }
        },
        mounted() {
            document.title="辅机信息添加"
            Promise.all([this.initAuxiliaryMachineAbout()]).then(()=>{this.initFormData()})
        },
        methods: {
            initAuxiliaryMachineAbout(){
                getAuxiliaryMachineLargeClassListByCondition({}).then(response=>{
                    this.largeClassOptions=this.getAuxiliaryMachineAboutOptions(response.data.data)
                    this.largeClassArray=response.data.data
                })
                getAuxiliaryMachineSmallClassListByCondition({}).then(response=>{
                    this.smallClassOptions=this.getAuxiliaryMachineAboutOptions(response.data.data)
                    this.smallClassArray=response.data.data
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
            initFormData(){
                if(this.$route.query.title=='edit'){
                    document.title = '辅机信息编辑';
                    this.productAuxiliaryMachineInfoFormData=JSON.parse(this.$route.query.productAuxiliaryMachineInfo)
                }else if(this.$route.query.title=='create'){
                    document.title = '辅机信息新增';
                }else if(this.$route.query.title=='copy'){
                    document.title = '辅机信息复制';
                    this.productAuxiliaryMachineInfoFormData=JSON.parse(this.$route.query.productAuxiliaryMachineInfo)
                }
            },
            largeClassChange(val){
                let smallClassArray=this.smallClassArray.filter(item=>{
                    return item.largeClassId==val
                })
                this.smallClassOptions=this.getAuxiliaryMachineAboutOptions(smallClassArray)
                this.productAuxiliaryMachineInfoFormData.smallClassId=null
            },
            smallClassChange(val){
                this.smallClassArray.forEach(smallClass=>{
                    if(val==smallClass.id){
                        this.productAuxiliaryMachineInfoFormData.largeClassId=smallClass.largeClassId
                    }
                })
            },
            submitForm() {
                ipcRenderer.send('productAuxiliaryMachineInfo',this.productAuxiliaryMachineInfoFormData)
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .product-auxiliary-machine-info-form{
        padding-top:10px;
    }
</style>