<template>
  <div class="loginBox">
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
      <!--<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>-->
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
          :loading="loading"
        >登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>

export default {
  name: "login",
  data() {
    return {
      loading: false,
      loginForm: {
        account: "",
        passWord: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
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
