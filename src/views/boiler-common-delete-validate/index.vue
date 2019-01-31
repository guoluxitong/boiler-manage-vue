<template>
  <el-dialog :title="title" :visible="deleteValidateFormDialogVisible" :width="width" :before-close="confirmCancel">
    <el-form :model="deleteValidateFormData" :rules="rules" ref="deleteValidateForm" label-width="90px"  style='width: 90%; margin-left:15px;' label-position="right">
      <el-form-item label="密码" prop="passWord">
        <el-input type="password" v-model="deleteValidateFormData.passWord" auto-complete="off"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="confirmCancel">取 消</el-button>
      <el-button type="primary" @click="confirmSubmit">确 定</el-button>
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
                default:'验证'
            },
            eventHub:{
                type:Object
            }
        },
        data() {
            let validatePassWord = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (value!=this.$store.state.user.password) {
                        callback(new Error('密码输入不正确'));
                    }
                    callback();
                }
            }
            return {
                deleteValidateFormData:{
                    passWord:'',
                },
                rules:{
                    passWord: [{ trigger: 'blur',validator: validatePassWord}],
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
                this.$refs['deleteValidateForm'].validate((valid) => {
                    if (valid) {
                        this.$emit('confirmDeleteValidate', {deleteValidateFormDialogVisible:false,flag:true,id:this.id})
                    } else {
                        this.$emit('confirmDeleteValidate', {deleteValidateFormDialogVisible:true,flag:false})
                    }
                });
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
