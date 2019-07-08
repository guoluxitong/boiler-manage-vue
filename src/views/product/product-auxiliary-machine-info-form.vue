<template>
    <el-dialog
      :title="title"
      :visible.sync="visible"
      @close="auxiliaryMachineInfoClose"
      :show="show"
      @open="auxiliaryMachineInfoOpen"
      :modal-append-to-body='false'>
      <div class="product-auxiliary-machine-info-form">
        <el-form  ref=" productAuxiliaryMachineInfoForm" :model=" productAuxiliaryMachineInfoFormData" label-position="right" label-width="70px" style='width: 96%; margin-left:5px;'>
          <el-row>
            <el-col :span="12">
              <el-form-item label="大类" >
                <el-select clearable class="filter-item" v-model="productAuxiliaryMachineInfoFormData.partCategoryId" style="width: 100%" @change="largeClassChange">
                  <el-option v-for="item in largeClassOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item clearable label="小类" >
                <el-select clearable class="filter-item" v-model="productAuxiliaryMachineInfoFormData.partSubCategoryId" style="width: 100%" @change="smallClassChange">
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
                <el-button type="warning" icon="el-icon-back" @click="visible=false">取消</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </div>
    </el-dialog>
</template>

<script>
  import {getAuxiliaryMachineLargeClassListByCondition} from '@/api/auxiliaryMachineLargeClass'
  import {getAuxiliaryMachineSmallClassListByCondition} from '@/api/auxiliaryMachineSmallClass'

  export default {
    name: 'product-auxiliary-machine-info-form',
    data() {
      return {
        visible: this.show,
        largeClassArray:[],
        partCategoryId: '',
        smallClassArray:[],
        largeClassOptions:[],
        smallClassOptions:[],
        productAuxiliaryMachineInfoFormData:{
          id: '',
          partCategoryId: null,
          partSubCategoryId: null,
          brandName: '',
          modelName: '',
          amountOfUser: '',
          supplier: '',
          remarks: '',
          productId: ''
        }
      }
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
      productAuxiliaryMachineInfo:{
        type: Object,
        default:()=>{}
      },
      title:{
        type:String,
        default:''
      },
      paramData:{
        type:Object,
        default:()=>{}
      }
    },
    watch: {
      show () {
        this.visible = this.show;
      },
    },
    methods:{
      auxiliaryMachineInfoClose(){
        this.$emit('auxiliaryMachineInfoDialogClose',{auxiliaryMachineInfoDialogVisible:false})
      },
      auxiliaryMachineInfoOpen(){
        Promise.all([this.initAuxiliaryMachineAbout()]).then(()=>{this.initFormData()})
      },
      initAuxiliaryMachineAbout(){
        getAuxiliaryMachineLargeClassListByCondition({}).then(response=>{
          this.largeClassOptions=this.getAuxiliaryMachineAboutOptions(response.data.data)
          this.largeClassArray=response.data.data
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
        if(this.title==='编辑'||this.title==='复制'){
          this.productAuxiliaryMachineInfoFormData=this.productAuxiliaryMachineInfo
        }
      },
      largeClassChange(val){
        this.partCategoryId=val;
        getAuxiliaryMachineSmallClassListByCondition(this.partCategoryId).then(response=>{
          this.smallClassOptions=this.getAuxiliaryMachineAboutOptions(response.data.data)
          this.smallClassArray=response.data.data
        })
        let smallClassArray=this.smallClassArray.filter(item=>{
          return item.partCategoryId===val
        })
        this.smallClassOptions=this.getAuxiliaryMachineAboutOptions(smallClassArray)
        this.productAuxiliaryMachineInfoFormData.partSubCategoryId=null
      },
      smallClassChange(val){
       /* this.smallClassArray.forEach(smallClass=>{
          if(val===smallClass.id){
            this.productAuxiliaryMachineInfoFormData.largeClassId=smallClass.largeClassId
          }
        })*/
      },
      submitForm() {
        this.$emit('confirmAuxiliaryMachineInfoDialog', {auxiliaryMachineInfoDialogVisible: false,flag:true,auxiliaryMachineInfoFormData:this.productAuxiliaryMachineInfoFormData,title:this.title,paramData:this.productAuxiliaryMachineInfo})
        this.productAuxiliaryMachineInfoFormData = {}
        }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .product-auxiliary-machine-info-form{
    padding-top:10px;
  }
</style>
