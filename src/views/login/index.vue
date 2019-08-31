<template>
  <div v-if="wechatlogin">
    <login-dialog
      :backgroundUrl="backgroundUrl"
      :logoUrl="logoUrl"
      :image="image"
      :copyrightInfo1="copyrightInfo1"
      :copyrightInfo2="copyrightInfo2"
      @handleLogin="handleLogin"
      @back="back"
    >
    </login-dialog>
  </div>
</template>
<script>
  import { login, getUserInfo,wechatLogin, a, b, c } from "@/api/login";
  import loginDialog from "./login";

  export default {
    name: "login",
    components: {
      loginDialog
    },
    data() {
      return {
        image: false,
        wechatlogin: true,
        loading: false,
        copyrightInfo1: "",
        copyrightInfo2: "",
        logoUrl: "/static/common/defaultLogo.png",
        backgroundUrl: "/static/common/loginBackground.jpg",

        loading: false,

        loginForm: {
          account: null,
          passWord: null
        },
        rules: {
          account: [{ required: true, message: "请输入账号", trigger: "blur" }],
          passWord: [{ required: true, message: "请输入密码", trigger: "blur" }]
        }
      };
    },
    created() {
      this.loginForm.account = this.getUrlKey('mobile')
      this.loginForm.passWord = this.getUrlKey('token')
      if(this.loginForm.account!=null){
        if(this.loginForm.account == 0){
          window.history.pushState({status: 0} ,'' ,'http://ui.boilermanage.sdcsoft.com.cn/#/login')
          this.image=true
        } else {
          window.history.pushState({status: 0} ,'' ,'http://ui.boilermanage.sdcsoft.com.cn/#/login')
          this.wechatlogin=false;
          this.wechatLogin()
        }
      }else{
        this.initCopyrightInfoAndLogoUrl();
      }
    },

    methods: {
      getUrlKey (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.href) || [, ""])[1].replace(/\+/g, '%20')) || null
      },
      back(){
        this.image=false;
      },
      wechatLogin(){
        let org = 0
        this.loading = true;
        let baseInfo,resources;
        login(this.loginForm.account.trim(), this.loginForm.passWord)
          .then(response => {
            let data = response.data;
            baseInfo = data.data;
            if (data.code == 0) {
              org = baseInfo.orgId
              return getUserInfo(baseInfo.id);
            } else {
              return Promise.reject(data.msg);
            }
          })
          .then(response => {
            let data = response.data
            if (data.code == 0) {
              return this.$store.dispatch("saveUserState", {
                "baseInfo": baseInfo,
                "sysInfo": data.data,
                "router": this.$router
              });
            }
          })
          .then(() => {
            //记录orgid
            window.localStorage["logoUrl"] = '/files/' + org + '/logo.jpg'
            this.loading = false
            this.$router.push({ path: this.redirect || "/index" });
          })
          .catch(reason => {
            this.loading = false
            this.$message.error(reason);
          });
      },
      handleLogin(loginForm) {
        let org = 0
        this.loading = true;
        let baseInfo,resources;
        login(loginForm.account.trim(), loginForm.passWord)
          .then(response => {
            let data = response.data;
            baseInfo = data.data;
            console.log(baseInfo);
            if (data.code == 0) {
              org = baseInfo.orgId
              return getUserInfo(baseInfo.id);
            } else {
              return Promise.reject(data.msg);
            }
          })
          .then(response => {
            let data = response.data
            if (data.code == 0) {
              return this.$store.dispatch("saveUserState", {
                "baseInfo": baseInfo,
                "sysInfo": data.data,
                "router": this.$router
              });
            }
          })
          .then(() => {
            //记录orgid
            window.localStorage["logoUrl"] = '/files/' + org + '/logo.jpg'
            this.loading = false
            this.$router.push({ path: this.redirect || "/index" });
          })
          .catch(reason => {
            this.loading = false
            this.$message.error(reason);
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

        let logoUrl = window.localStorage["logoUrl"];
        let bgUrl = window.localStorage["bgUrl"];
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
    height: 400px;
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
