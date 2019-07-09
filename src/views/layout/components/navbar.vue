<template>
  <div style="background-color:#23262E">
    <el-row>
      <el-col :span="17">
      <sidebar-item></sidebar-item>
      </el-col>
      <el-col :span="7">
       <el-row class="right-menu">
         <el-col :span="19">
           <p class="user-info">
          <span>山东简洁软件有限公司</span>
          </p>
          <p class="user-info">
          <span v-if="organizationName">组织：{{organizationName}}</span>
          <span v-if="realName">{{realName}}</span>
          </p>
         </el-col>
         <el-col :span="5">
          <el-dropdown class="avatar-container right-menu-item" trigger="click">
            <div class="avatar-wrapper">
              <img class="user-avatar" src="static/common/avator.png">
              <i class="el-icon-caret-bottom"></i>
            </div>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item divided>
                <span @click="dialogHomeFormVisible = true" style="display:block;">软件设置</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span @click="dialogFormVisible = true" style="display:block;">修改密码</span>
              </el-dropdown-item>
              <el-dropdown-item divided>
                <span @click="logout" style="display:block;">退出</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
         </el-col>
      </el-row>
    </el-col>
    </el-row>
    <el-dialog title="修改密码" :visible.sync="dialogFormVisible" width="30%">
      <el-form
        :model="passWordChangeFormData"
        :rules="rules"
        ref="passWordChangeForm"
        label-width="90px"
        style="width: 90%; margin-left:15px;"
        label-position="right"
      >
        <el-form-item label="原密码" prop="oldPassWord">
          <el-input
            type="password"
            v-model="passWordChangeFormData.oldPassWord"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码" prop="newPassWord">
          <el-input
            type="password"
            v-model="passWordChangeFormData.newPassWord"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="新密码确认" prop="checkNewPassWord">
          <el-input
            type="password"
            v-model="passWordChangeFormData.checkNewPassWord"
            auto-complete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="软件设置" :visible.sync="dialogHomeFormVisible" width="40%">
      <el-form
        :model="homeFormData"
        :rules="homeRules"
        ref="homeForm"
        label-width="90px"
        style="width: 90%; margin-left:15px;"
        label-position="right"
      >
        <el-form-item label="版权信息1" prop="copyrightInfo1">
          <el-input
            v-model="homeFormData.copyrightInfo1"
            auto-complete="off"
            placeholder="说明：请填写企业名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="版权信息2" prop="copyrightInfo2">
          <el-input
            v-model="homeFormData.copyrightInfo2"
            auto-complete="off"
            placeholder="说明：请填写企业名称"
          ></el-input>
        </el-form-item>
        <el-form-item label="首页地址" prop="homeUrl">
          <el-input
            v-model="homeFormData.homeUrl"
            auto-complete="off"
            placeholder="说明：以http或者https开头"
          ></el-input>
        </el-form-item>
        <el-form-item label="企业logo" prop>
          <el-upload
            ref="upload"
            :action="logoUploadPath"
            name="picture"
            list-type="picture-card"
            :limit="1"
            :file-list="logoFile"
            :on-exceed="onExceed"
            :before-upload="beforeUpload"
            :on-success="handleLogoSuccess"
            :on-remove="handleLogoRemove"
          >
            <i class="el-icon-plus" style="font-size: 15px">上传图片必须是JPG/PNG/ 格式，上传图片大小不能超过 2MB!</i>
          </el-upload>
        </el-form-item>
        <el-form-item label="登陆背景" prop>
          <!--              <el-input  v-model="homeFormData.bgPic" auto-complete="off" placeholder="说明：以http或者https开头"></el-input>-->
          <el-upload
            ref="upload"
            :action="bgUploadPath"
            name="picture"
            list-type="picture-card"
            :limit="1"
            :file-list="backgroundFile"
            :on-exceed="onExceed"
            :before-upload="beforeUpload"
            :on-success="handleBgSuccess"
            :on-remove="handleBgRemove"
          >
            <i class="el-icon-plus" style="font-size: 15px">上传图片必须是JPG/PNG/ 格式，上传图片大小不能超过 2MB!</i>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitHomeForm">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { validateURL } from "@/utils/validate";
import sidebarItem from "./sidebar/sidebarItem";
import { editUserPass } from "@/api/user";
import { deleteFile } from "@/api/upload";
import { loginout } from "@/api/loginout";

import axios from "axios";
import { config } from "@/config/index";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://" +
      config.development_base_ip +
      ":" +
      config.development_base_port
    : "http://" + config.product_base_ip + ":" + config.product_base_port;
export default {
  components: { sidebarItem },
  data() {
    let validateOldPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入原始密码"));
      } else {
        if (value != this.$store.state.user.password) {
          callback(new Error("原始密码输入不正确"));
        }
        callback();
      }
    };
    let validateNewPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入新密码"));
      } else {
        if (this.passWordChangeFormData.checkNewPassWord !== "") {
          this.$refs.passWordChangeForm.validateField("checkNewPassWord");
        }
        callback();
      }
    };
    let validateCheckNewPassWord = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.passWordChangeFormData.newPassWord) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    let validateHomeUrl = (rule, value, callback) => {
      if (!validateURL(value)) {
        callback(new Error("地址输入格式不正确"));
      } else {
        callback();
      }
    };
    return {
      realName: this.$store.state.user.realName,
      organizationName: this.$store.state.user.organizationName,
      dialogFormVisible: false,
      passWordChangeFormData: {
        oldPassWord: "",
        newPassWord: "",
        checkNewPassWord: ""
      },
      rules: {
        oldPassWord: [{ trigger: "blur", validator: validateOldPassWord }],
        newPassWord: [{ trigger: "blur", validator: validateNewPassWord }],
        checkNewPassWord: [
          { trigger: "blur", validator: validateCheckNewPassWord }
        ]
      },
      dialogHomeFormVisible: false,
      homeFormData: {
        homeUrl: "",
        copyrightInfo1: "",
        copyrightInfo2: "",
        logoUrl: "",
        bgUrl: ""
      },
      homeRules: {
        homeUrl: [{ trigger: "blur", validator: validateHomeUrl }]
      },
      //文件上传路径
      logoUploadPath:
        baseURL +
        "/upload/uploadFile?orgId=" +
        this.$store.state.user.orgId +
        "&type=logo",
      bgUploadPath:
        baseURL +
        "/upload/uploadFile?orgId=" +
        this.$store.state.user.orgId +
        "&type=background",
      //图片列表（用于在上传组件中回显图片）
      logoFile: [{ name: "logo", url: "/static/common/defaultLogo.png" }],
      backgroundFile: [
        { name: "background", url: "/static/common/loginBackground.jpg" }
      ]
    };
  },
  created() {
    let homeUrl = window.localStorage["homeUrl"];
    let copyrightInfo1 = window.localStorage["copyrightInfo1"];
    let copyrightInfo2 = window.localStorage["copyrightInfo2"];
    if (homeUrl) this.homeFormData.homeUrl = window.localStorage["homeUrl"];
    if (copyrightInfo1)
      this.homeFormData.copyrightInfo1 = window.localStorage["copyrightInfo1"];
    if (copyrightInfo2)
      this.homeFormData.copyrightInfo2 = window.localStorage["copyrightInfo2"];
    let logoUrl = window.localStorage["logoUrl"];
    if (logoUrl) {
      this.homeFormData.logoUrl = window.localStorage["logoUrl"];
      this.logoFile = [{ name: "logo", url: this.homeFormData.logoUrl }];
    }
    let bgUrl = window.localStorage["bgUrl"];
    if (bgUrl) {
      this.homeFormData.bgUrl = window.localStorage["bgUrl"];
      this.backgroundFile = [
        { name: "background", url: this.homeFormData.bgUrl }
      ];
    }
  },
  methods: {
    handleSubmit() {
      editUserPass({
        password: this.passWordChangeFormData.newPassWord
      })
        .then(() => {
          this.dialogFormVisible = false;
          this.$message({
            message: "修改成功",
            type: "success"
          });
        })
        .catch(() => {
          this.$message({
            message: "修改失败",
            type: "error"
          });
        });
    },
    submitForm() {
      this.$refs["passWordChangeForm"].validate(valid => {
        if (valid) {
          this.handleSubmit();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    submitHomeForm() {
      this.$refs["homeForm"].validate(valid => {
        if (valid) {
          window.localStorage["homeUrl"] = this.homeFormData.homeUrl;
          window.localStorage[
            "copyrightInfo1"
          ] = this.homeFormData.copyrightInfo1;
          window.localStorage[
            "copyrightInfo2"
          ] = this.homeFormData.copyrightInfo2;
          this.dialogHomeFormVisible = false;
          this.$message({
            message: "成功",
            type: "success"
          });
        } else {
          return false;
        }
      });
    },
    logout() {
      this.$confirm("确认退出?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          window.close()
        })
        .catch(err => {
          this.$message({
            type: "info",
            message: "退出取消"
          });
          console.log(err);
        });
    },
    //文件上传成功的钩子函数
    handleLogoSuccess(res, file) {
      this.$message({
        type: "info",
        message: "图片上传成功",
        duration: 6000
      });
      if (file.response.code == 200) {
        //this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
        window.localStorage["logoUrl"] = baseURL + res.data;
        window.localStorage["logoPath"] = res.data;
      }
    },
    handleBgSuccess(res, file) {
      this.$message({
        type: "info",
        message: "图片上传成功",
        duration: 6000
      });
      if (file.response.code == 200) {
        //this.editor.picture = file.response.message; //将返回的文件储存路径赋值picture字段
        window.localStorage["bgUrl"] = baseURL + res.data;
        window.localStorage["bgPath"] = res.data;
      }
    },
    //删除文件之前的钩子函数
    handleLogoRemove(file, fileList) {
      let path = window.localStorage["logoPath"];
      if (path) {
        deleteFile(path)
          .then(() => {
            this.$message({
              type: "info",
              message: "已删除原有图片",
              duration: 6000
            });
            window.localStorage.removeItem("logoPath");
            window.localStorage.removeItem("logoUrl");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "删除失败",
              duration: 6000
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "已删除原有图片",
          duration: 6000
        });
      }
    },
    handleBgRemove(file, fileList) {
      let path = window.localStorage["bgPath"];
      if (path) {
        deleteFile(path)
          .then(() => {
            this.$message({
              type: "info",
              message: "已删除原有图片",
              duration: 6000
            });
            window.localStorage.removeItem("bgPath");
            window.localStorage.removeItem("bgUrl");
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "删除失败",
              duration: 6000
            });
          });
      } else {
        this.$message({
          type: "info",
          message: "已删除原有图片",
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
        type: "info",
        message: "最多只能上传一个图片",
        duration: 6000
      });
    },
    //文件上传前的前的钩子函数
    //参数是上传的文件，若返回false，或返回Primary且被reject，则停止上传
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isPNG = file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG && !isPNG) {
        this.$message.error("上传图片必须是JPG/PNG/ 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传图片大小不能超过 2MB!");
      }
      return (isJPG || isPNG) && isLt2M;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu.el-menu--horizontal{ border-bottom: none}
.right-menu {
  font-size:14px;
  height: 100%;
  line-height: 100%;
  .user-info {
    color: white;
    text-align:right;
    margin: 10px 0px;
  }
  &:focus {
    outline: none;
  }
  .right-menu-item {
    display: inline-block;
    color:#fff;
    margin: 0 8px;
  }
  .screenfull {
    height: 20px;
  }
  .international {
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
