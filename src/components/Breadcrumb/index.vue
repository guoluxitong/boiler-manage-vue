<template>
  <div class="breadcrumb" v-if="levelList.length>0">
    <el-breadcrumb class="app-breadcrumb" separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item v-for="(item)  in levelList" :key="item">
          <span v-if="item" style="font-weight: 600;">{{item}}</span>
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb();
  },
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  methods: {
    getBreadcrumb() {
      let path = []
      let menus = this.$store.state.user.menus
      for(let i = 0; i< menus.length;i++){
        path.push(menus[i].title)
        if(menus[i].title == this.$route.meta.title){
          break;
        }
        else{
          for(let j = 0 ;j < menus[i].childs.length; j++){
            if(menus[i].childs[j].title == this.$route.meta.title)
            {
              path.push(menus[i].childs[j].title)
              break
            }
          }
          if(path.length > 1){
            break
          }
        }
        path = []
      }
      this.levelList = path;
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.breadcrumb {
  width: 100%;
  height: 30px;
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
  }
}
</style>
