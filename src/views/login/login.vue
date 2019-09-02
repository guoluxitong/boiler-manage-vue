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
      <el-tabs v-model="activeName">
        <el-tab-pane label="账号登录" name="first">
          <div v-if="image">
            <el-row>
              <el-col :offset="2" :span="20">
                <span >请扫描下方小程序码进入小程序绑定微信号再点击下方按钮返回微信登录进行登录</span>
              </el-col>
            </el-row>
            <el-row>
              <el-col :offset="4" :span="5">
                <img  :src="applet">
              </el-col>
            </el-row>
            <el-row>
              <el-col :offset="7" :span="2">
                <el-button type="primary"  @click="back">返回登录界面</el-button>
              </el-col>
            </el-row>
          </div>

          <div v-if="!image">
            <div class="picBox">
              <img class="pic" :src="logoUrl" v-if="logoUrl!=''" />
            </div>
            <h3 class="title">锅炉远程监控平台</h3>
            <el-form-item prop="account">
              <el-input type="text" v-model="loginForm.account" auto-complete="off" placeholder="账号"></el-input>
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input type="password" v-model="loginForm.passWord" auto-complete="off" placeholder="密码"></el-input>
            </el-form-item>

            <el-button
              style="width: 100%"
              type="primary"
              @click.native.prevent="handleLogin"
              :loading="loading"
            >登录</el-button>
          </div ></el-tab-pane>
        <el-tab-pane>
          <span slot="label"><a :href='wechatUrl' style=" text-decoration: none; font-size: 15px;color: black" target="_self">微信登录</a></span>
        </el-tab-pane>
      </el-tabs>
      <p class="copyright" v-if="copyrightInfo1!=''">{{copyrightInfo1}} © 2000-2019</p>
      <p class="copyright" v-if="copyrightInfo2!=''">{{copyrightInfo2}} © 2000-2019</p>
    </el-form>
  </div>
</template>

<script>
  import { login, getUserInfo, a, b, c } from "@/api/login";
  export default {
    name: "login",
    props:{
      backgroundUrl: {
        type: String,
        default: null
      },
      logoUrl: {
        type: String,
        default: null
      },
      copyrightInfo1: {
        type: String,
        default: null
      },
      copyrightInfo2: {
        type: String,
        default: null
      },
      image: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        wechatUrl: '',
        applet:'/static/common/applet.jpg',
        loginInfo: null,
        activeName: 'first',
        loading: false,
        loginForm: {
          account: "",
          passWord: "",
          id: '',
        },
        obj:'',
        rules: {
          account: [{ required: true, message: "请输入账号", trigger: "blur" }],
          passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
        }
      };
    },
    created: function () {
      this.wechatUrl = 'https://apis.sdcsoft.com.cn/wechat/login?url=http://ui.boilermanage.sdcsoft.com.cn/#/login'
    },
    methods: {
      back(){
        this.$emit("back");
      },
      handleLogin() {
        this.$emit("handleLogin", this.loginForm);
      },
    }
  };
</script>

<style lang="scss" scoped>
  .login-container {
    width: 350px;
    height: 450px;
    margin: 100px auto auto auto;
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
    margin: 15px;
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
