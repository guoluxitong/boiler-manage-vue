<template>
  <el-dialog :title="title" :visible="deleteValidateFormDialogVisible" :width="width" :before-close="confirmCancel">
    <el-form :model="deleteValidateFormData"  ref="deleteValidateForm" label-width="0px"  style='width: 90%; margin-left:15px;' label-position="right">
     <el-row>
            <el-alert
              title="确定要删除吗？"
              type="warning"
              description="确认请输入密码并点击确定，否则请点击取消！"
              effect="dark" :closable="false"
              show-icon></el-alert>
          </el-row>
      <el-form-item prop="passWord">
        <el-input type="password" v-model="deleteValidateFormData.passWord" placeholder="请输入密码" auto-complete="new-password" autocomplete="new-password"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirmSubmit">确 定</el-button>
        <el-button  type="warning" icon="el-icon-back" @click="confirmCancel">取 消</el-button>
    </span>
  </el-dialog>
</template>

<script>
    export default {
        name:'boiler-common-delete-validate',
        props:{
            id:{
                type:Number,
                default:-1
            },
            controllerNo:{
                type:String,
                default: null
            },
            deleteValidateFormDialogVisible:{
                type:Boolean,
                default:false
            },
            width:{
                type: String,
                default: '30%'
            },
            title:{
                type:String,
                default:'删除确认'
            },
            eventHub:{
                type:Object
            }
        },
        data() {
            return {
                deleteValidateFormData:{
                    passWord:'',
                }
            }
        },
        watch:{
            deleteValidateFormDialogVisible(){
                this.clearDeleteValidateForm()
            }
        },
        methods: {
            confirmSubmit(){
                let flag = true
                if('' === this.deleteValidateFormData.passWord){
                    flag = false
                }
                else{
                    if(this.$store.state.user.password != this.deleteValidateFormData.passWord){
                        flag = false
                    }
                }
                if (flag) {
                        this.$emit('confirmDeleteValidate', {deleteValidateFormDialogVisible:false,flag:true,id:this.id,controllerNo:this.controllerNo})
                    } else {
                        this.$emit('confirmDeleteValidate', {deleteValidateFormDialogVisible:true,flag:false})
                    }
            },
            confirmCancel(){
                this.$emit('confirmCancelValidate', {deleteValidateFormDialogVisible:false})
            },
            clearDeleteValidateForm(){
                this.deleteValidateFormData.passWord="";
            }
        }
    };
</script>
