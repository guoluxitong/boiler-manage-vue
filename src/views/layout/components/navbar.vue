<template>
    <el-menu mode="horizontal"
             :show-timeout="200"
             :default-active="$route.path"
             background-color="#23262E"
             text-color="#bfcbd9"
             active-text-color="#409EFF">
        <sidebar-item :routes="permission_routers"></sidebar-item>
        <div class="right-menu">
            <span class="user-info"><span v-if="organizationName">组织：{{organizationName}}</span>&nbsp;&nbsp;<span v-if="realName">姓名：{{realName}}</span>&nbsp;&nbsp;</span>
            <el-dropdown class="avatar-container right-menu-item" trigger="click">
                <div class="avatar-wrapper">
                    <img class="user-avatar" src="static/common/avator.png">
                    <i class="el-icon-caret-bottom"></i>
                </div>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item divided>
                        <span  @click="dialogHomeFormVisible = true"  style="display:block;">首页设置</span>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <span  @click="dialogFormVisible = true"  style="display:block;">修改密码</span>
                    </el-dropdown-item>
                    <el-dropdown-item divided>
                        <span @click="logout" style="display:block;">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="passWordChangeFormData" :rules="rules" ref="passWordChangeForm" label-width="90px"  style='width: 90%; margin-left:15px;' label-position="right">
                <el-form-item label="原密码" prop="oldPassWord">
                    <el-input type="password"  v-model="passWordChangeFormData.oldPassWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码" prop="newPassWord">
                    <el-input type="password" v-model="passWordChangeFormData.newPassWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="新密码确认" prop="checkNewPassWord">
                    <el-input type="password" v-model="passWordChangeFormData.checkNewPassWord" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
        <el-dialog title="首页设置" :visible.sync="dialogHomeFormVisible" width="30%">
            <el-form :model="homeFormData" :rules="homeRules" ref="homeForm" label-width="90px"  style='width: 90%; margin-left:15px;' label-position="right">
                <el-form-item label="首页地址" prop="homeUrl">
                    <el-input  v-model="homeFormData.homeUrl" auto-complete="off" placeholder="说明：以http或者https开头"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitHomeForm">提交</el-button>
                </el-form-item>
            </el-form>
        </el-dialog>
    </el-menu>
</template>

<script>
    import { validateURL} from '@/utils/validate'
    import { mapGetters } from 'vuex'
    import sidebarItem from './sidebar/sidebarItem'
    import {editUserPass} from '@/api/user'
<<<<<<< HEAD
    import {deleteFile} from '@/api/upload'
    import axios from 'axios'
    import { config } from '@/config/index'
    import { logoutByCAS } from '@/api/login'

    const baseURL = process.env.NODE_ENV === 'development'
      ? 'http://' + config.development_base_ip + ':' + config.development_base_port
      : 'http://' + config.product_base_ip + ':' + config.product_base_port
=======
>>>>>>> parent of 101bbec... 修复npm包版本不兼容bug
    export default {
        components: { sidebarItem },
        computed: {
            ...mapGetters([
                'permission_routers',
            ])
        },
        data(){
            let validateOldPassWord = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入原始密码'));
                } else {
                    if (value!=this.$store.state.user.password) {
                        callback(new Error('原始密码输入不正确'));
                    }
                    callback();
                }
            }
            let validateNewPassWord = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.passWordChangeFormData.checkNewPassWord !== '') {
                        this.$refs.passWordChangeForm.validateField('checkNewPassWord');
                    }
                    callback();
                }
            }
            let validateCheckNewPassWord = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.passWordChangeFormData.newPassWord) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            }
            let validateHomeUrl=(rule, value, callback)=>{
                if (!validateURL(value)) {
                    callback(new Error('地址输入格式不正确'));
                }  else {
                    callback();
                }
            }
            return{
                realName: this.$store.state.user.realName,
                organizationName:this.$store.state.user.organizationName,
                dialogFormVisible:false,
                passWordChangeFormData: {
                    oldPassWord:'',
                    newPassWord: '',
                    checkNewPassWord: ''
                },
                rules: {
                    oldPassWord: [{trigger: 'blur',validator: validateOldPassWord}],
                    newPassWord: [{ trigger: 'blur',validator: validateNewPassWord}],
                    checkNewPassWord: [{trigger: 'blur',validator: validateCheckNewPassWord}],

                },
                dialogHomeFormVisible:false,
                homeFormData:{
                    homeUrl:'',
                },
                homeRules:{
                    homeUrl: [{trigger: 'blur',validator: validateHomeUrl}],
                }
            }
        },
        created(){
            let homeUrl= window.localStorage['homeUrl']
            if(homeUrl) this.homeFormData.homeUrl=window.localStorage['homeUrl']
        },
        methods: {
            handleSubmit(){
                editUserPass({id:this.$store.state.user.userId,password:this.passWordChangeFormData.newPassWord}).then(()=>{
                    this.dialogFormVisible = false
                    this.$message( {
                        message: '修改成功',
                        type: 'success'
                    });
                }).catch(()=>{
                    this.$message( {
                        message: '修改失败',
                        type: 'error'
                    });
                })
            },
            submitForm() {
                this.$refs['passWordChangeForm'].validate((valid) => {
                    if (valid) {
                        this.handleSubmit();
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submitHomeForm(){
                this.$refs['homeForm'].validate((valid) => {
                    if (valid) {
                        window.localStorage['homeUrl']=this.homeFormData.homeUrl
                        this.dialogHomeFormVisible = false
                        this.$message( {
                            message: '成功',
                            type: 'success'
                        });
                    } else {
                        return false;
                    }
                });
            },
            logout() {
                this.$confirm('确认退出?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    logoutByCAS()
                    this.$message({
                        type: 'info',
                        message: '退出成功'
                    });
                    window.close()
                }).catch(err => {
                    this.$message({
                        type: 'info',
                        message: '退出取消'
                    });
<<<<<<< HEAD
                    console.log(err)
                })

            },
          //文件上传成功的钩子函数
          handleLogoSuccess(res, file) {
            this.$message({
              type: 'info',
              message: '图片上传成功',
              duration: 6000
            });
            if (file.response.code == 200) {
              //this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
              window.localStorage['logoUrl'] = baseURL + res.data
              window.localStorage['logoPath'] = res.data
            }
          },
          handleBgSuccess(res, file){
            this.$message({
              type: 'info',
              message: '图片上传成功',
              duration: 6000
            });
            if (file.response.code == 200) {
              //this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
              window.localStorage['bgUrl'] = baseURL + res.data
              window.localStorage['bgPath'] = res.data
            }
          },
          //删除文件之前的钩子函数
          handleLogoRemove(file, fileList) {
              let path = window.localStorage['logoPath']
              if (path) {
                deleteFile(path).then(()=>{
                  this.$message({
                    type: 'info',
                    message: '已删除原有图片',
                    duration: 6000
                  });
                  window.localStorage.removeItem("logoPath")
                  window.localStorage.removeItem("logoUrl")
                }).catch(()=> {
                  this.$message({
                    type: 'info',
                    message: '删除失败',
                    duration: 6000
                  });
                })
              }else {
                this.$message({
                  type: 'info',
                  message: '已删除原有图片',
                  duration: 6000
                });
              }


          },
          handleBgRemove(file, fileList) {
            let path = window.localStorage['bgPath']
            if (path) {
              deleteFile(path).then(()=>{
                this.$message({
                  type: 'info',
                  message: '已删除原有图片',
                  duration: 6000
                });
                window.localStorage.removeItem("bgPath")
                window.localStorage.removeItem("bgUrl")
              }).catch(()=> {
                this.$message({
                  type: 'info',
                  message: '删除失败',
                  duration: 6000
                });
              })
            }else {
              this.$message({
                type: 'info',
                message: '已删除原有图片',
                duration: 6000
              });
            }


          },
          //点击列表中已上传的文件事的钩子函数
          /*handlePreview(file) {
          },*/
          //上传的文件个数超出设定时触发的函数
          onExceed(files, fileList) {
            this.$message({
              type: 'info',
              message: '最多只能上传一个图片',
              duration: 6000
            });
          },
          //文件上传前的前的钩子函数
          //参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
          beforeUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isPNG = file.type === 'image/png';
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG && !isPNG) {
              this.$message.error('上传图片必须是JPG/PNG/ 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传图片大小不能超过 2MB!');
=======
                });
>>>>>>> parent of 101bbec... 修复npm包版本不兼容bug
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .el-menu--horizontal {
        border-bottom: solid 0px #e6e6e6;
    }
    .right-menu {
        float: right;
        height: 100%;
        line-height:100%;
        .user-info{
            color: white;
        }
        &:focus{
            outline: none;
        }
        .right-menu-item {
            display: inline-block;
            margin: 0 8px;
        }
        .screenfull {
            height: 20px;
        }
        .international{
            vertical-align: top;
        }
        .theme-switch {
            vertical-align: 15px;
        }
        .avatar-container {
            height: 50px;
            margin-right: 30px;
            .avatar-wrapper {
                cursor: pointer;
                margin-top: 10px;
                position: relative;
                .user-avatar {
                    width: 40px;
                    height: 40px;
                    border-radius: 10px;
                }
                .el-icon-caret-bottom {
                    position: absolute;
                    right: -20px;
                    top: 25px;
                    font-size: 12px;
                }
            }
        }
        .el-dropdown {
            display: inline-block;
            position: relative;
            color: white;
            font-size: 14px;
        }

    }
</style>
