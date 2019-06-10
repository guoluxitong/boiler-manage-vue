<template>
  <div class="loginBox" :style="{backgroundImage: 'url(' + backgroundUrl + ')'}">
    <el-form
      :model="loginForm"
      :rules="rules"
      ref="loginForm"
      label-position="left"
      label-width="0px"
      class="login-container"
    >
      <div class="picBox">
        <img class="pic" :src="logoUrl" v-if="logoUrl!=''">
      </div>
      <h3 class="title">锅炉远程监控平台</h3>
      <el-form-item prop="account">
        <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input type="password" v-model="loginForm.passWord" auto-complete="off" placeholder="密码"></el-input>
      </el-form-item>
      <!--      &lt;!&ndash;<el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>&ndash;&gt;-->
      <el-form-item style="width:100%;">
        <el-button
          type="primary"
          style="width:100%;"
          @click.native.prevent="handleLogin"
          :loading="loading"
        >登录</el-button>
      </el-form-item>
      <p class="copyright" v-if="copyrightInfo1!=''">{{copyrightInfo1}} © 2000-2019</p>
      <p class="copyright" v-if="copyrightInfo2!=''">{{copyrightInfo2}} © 2000-2019</p>
    </el-form>
  </div>
</template>
<script>
import request from "@/utils/request";
export default {
  name: "login",
  data() {
    return {
      loading: false,
      copyrightInfo1: "",
      copyrightInfo2: "",
      logoUrl: "/static/common/defaultLogo.png",
      backgroundUrl: "/static/common/loginBackground.jpg",

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
  created() {
    this.initCopyrightInfoAndLogoUrl();
    request({
      url: "/data/index",
      method: "post"
    }).then(function(res) {
      console.log(res.data.msg);
    });
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log(this.$store);
          this.$store
            .dispatch("LoginByUsername", this.loginForm)
            .then(data => {
              this.loading = false;
              this.$store.dispatch("setUserToken", data);
              this.$router.push({ path: this.redirect || "/home/index" });
            })
            .catch(msg => {
              this.$message.error(msg);
              this.loading = false;
            });
        } else {
          return false;
        }
      });
    },
    initCopyrightInfoAndLogoUrl() {
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
        this.backgroundUrl = window.localStorage["bgUrl"];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -175px;
  margin-top: -280px;
  padding: 35px 35px 15px 35px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 20px auto 20px auto;
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
  /*background-image: url("../../../static/common/loginBackground.jpg");*/
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.copyright {
  margin: 0px auto;
  text-align: center;
  color: #505458;
  font-size: small;
}
.picBox {
  text-align: center;
}
.pic {
  margin: auto, 15px;
  width: auto;
  height: 100px;
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
