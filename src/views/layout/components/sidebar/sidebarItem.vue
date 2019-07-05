<template>
      <el-menu
    mode="horizontal"
    :show-timeout="200"
    :default-active="$route.path"
    background-color="#23262E"
    text-color="#fff"
    active-text-color="#409EFF"
  >
  <el-menu-item index="100000" class="menuitem">
    <router-link to="index">首页</router-link>
  </el-menu-item>
    <template v-for="(item,i) in menus">
      <el-submenu v-if="item.hasChilds" :key="'top'+i" :index="i+''">
        <template slot="title">{{item.title}}</template>
        <el-menu-item  class="menuitem" v-for="(sub,j) in item.childs" :key="'sub'+j" :index="i+'-'+j">
          <router-link :to="sub.url" style="text-decoration:none">{{sub.title}}</router-link>
        </el-menu-item>
      </el-submenu>
      <el-menu-item :key="'top'+i" :index="i+''" v-if="!item.hasChilds">
        <router-link :to="item.url" style="text-decoration:none">{{item.title}}</router-link>
      </el-menu-item>
    </template>
      <el-submenu index="200000">
      <template slot="title">帮助</template>
      <el-menu-item index="200000-1" class="menuitem">
        <a :href="helpDocumentHref">使用说明文档</a>
      </el-menu-item>
    </el-submenu>
    </el-menu>
  
    
</template>

<script>
import { config } from "@/config/index";
import { mapGetters } from "vuex";
export default {
  name: "SidebarItem",
  computed: {
    ...mapGetters(["menus"])
  },
  data() {
    return {
      helpDocumentHref: config.helpDocumentHref
    };
  },
  methods: {
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.menuitem{
  a{
    color:#fff;
    text-decoration:none
  }
}
.el-submenu__title{
  i{
    color:#fff
  }
} 

</style>

