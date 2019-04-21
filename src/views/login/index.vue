<template>
<<<<<<< HEAD
  <!--<div class="loginBox" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}">
=======
  <div class="loginBox">
>>>>>>> parent of 101bbec... 修复npm包版本不兼容bug
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="login-container"
    >
      <h3 class="title">锅炉远程监控平台</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input type="password" v-model="loginForm.passWord" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      &lt;!&ndash;<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>&ndash;&gt;
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
          :loading="loading"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>-->
</template>
<script>
import axios from 'axios'
export default {
  name: "login",
  data() {
    return {
<<<<<<< HEAD
      /*loading: false,
      copyrightInfo1:'',
      copyrightInfo2:'',
      logoUrl:'/static/common/defaultLogo.png',
      backgroundUrl:'/static/common/loginBackground.jpg',
=======
      loading: false,
>>>>>>> parent of 101bbec... 修复npm包版本不兼容bug
      loginForm: {
        account: "",
        passWord: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }*/
    };
  },
<<<<<<< HEAD
  created(){
      this.gotoLogin()
    //this.initCopyrightInfoAndLogoUrl()
  },
  methods: {
      /*handleLogin () {
          this.$refs.loginForm.validate(valid => {
              if (valid) {
                  this.loading = true
                  this.$store.dispatch('LoginByUsername', this.loginForm).then((data) => {
                      this.loading = false
                      this.$store.dispatch('setUserToken', data)
                      this.$router.push({path: this.redirect || '/home/index'})
                  }).catch((msg) => {
                      this.$message.error(msg);
                      this.loading = false
                  })
              } else {
                  return false
              }
          })
      },
      initCopyrightInfoAndLogoUrl () {
          let copyrightInfo1 = window.localStorage["copyrightInfo1"];
          let copyrightInfo2 = window.localStorage["copyrightInfo2"];
          if (copyrightInfo1) {
              this.copyrightInfo1 = window.localStorage["copyrightInfo1"];
          }
          if (copyrightInfo2) {
              this.copyrightInfo2 = window.localStorage["copyrightInfo2"];
          }
          let bgUrl = window.localStorage["bgUrl"];
          let logoUrl = window.localStorage["logoUrl"];
          if (logoUrl) {
              this.logoUrl = window.localStorage["logoUrl"];
          }
          if (bgUrl) {
              this.backgroundUrl = window.localStorage["bgUrl"]
          }
      },*/

      gotoLogin () {
          console.log("token===>" + this.$store.getters.token)
          this.$store.dispatch('LoginByUsername').then((data) => {
              console.log("登录成功")
              this.loading = false
              this.$store.dispatch('setUserToken', data)
              this.$router.push({path: this.redirect || '/home/index'})
          }).catch((msg) => {
              this.$message.error(msg)
          })
      }

      /*loginByCAS().then((res) => {
              let data = res.data
              if(data.code!=0){
                  this.dispatch('initWebSock',data.data.id)
                  resolve(userName)
              }else{
                  reject(data.msg)
              }
              this.$store.dispatch('setUserToken', data)
              this.$router.push({path: this.redirect || '/home/index'})
          }).catch((msg) => {
              this.$message.error(msg);
              this.loading = false
          })*/
=======
  methods: {
    handleLogin() {

      // let self=this
      // this.loading = true
      // this.$store.dispatch('LoginByUsername',this.loginForm).then((data) => {
      //   this.loading = false
      //   this.$store.state.user.websock.onmessage=function (e) {
      //     if(e.data=="false"){
      //       self.$message.error("当前账号已经在其它地方登陆，不可再登陆");
      //     }else{
      //       self.$store.dispatch('setUserToken',data)
      //       this.$router.push({ path: this.redirect || "/home/index" })
      //     }
      //   }
      // }).catch((msg) => {
      //   this.$message.error(msg);
      //   this.loading = false
      // })
      this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('LoginByUsername', this.loginForm).then((data) => {
              this.loading = false
              this.$store.dispatch('setUserToken',data)
              this.$router.push({ path: this.redirect || '/home/index' })
            }).catch((msg) => {
              this.$message.error(msg);
              this.loading = false
            })
          } else {
            return false
          }
        })
    }
>>>>>>> parent of 101bbec... 修复npm包版本不兼容bug
  }
};
</script>

<style lang="scss" scoped>
  .login-container {
    width: 350px;
    position: absolute;
    left:50%;
    top:50%;
    margin-left:-175px;
    margin-top:-280px;
    padding: 35px 35px 15px 35px;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
  .remember {
    margin: 0px 0px 35px 0px;
  }
  }
  .loginBox {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    background-image: url("../../../static/common/loginBackground.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size:cover;
  }
</style>
