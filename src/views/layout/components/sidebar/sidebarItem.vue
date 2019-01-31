<template>
  <div>
    <template v-for="item in routes" v-if="!item.hidden">
      <router-link v-if="hasOneShowingChildren(item.children) " :to="item.path+'/'+item.children[0].path" :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path">
          <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
        </el-menu-item>

      </router-link>
      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>
        <template v-for="child in item.children" v-if="!child.hidden">
          <sidebar-item class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>
    </template>
    <el-menu-item index="4"><a :href="helpDocumentHref">帮助</a></el-menu-item>
  </div>
</template>

<script>
    import { config } from '@/config/index'
    export default {
        name: 'SidebarItem',
        props: {
            routes: {
                type: Array
            }
        },
        data(){
            return{
                helpDocumentHref:config.helpDocumentHref,
            }
        },
        methods: {
            hasOneShowingChildren(children) {
                const showingChildren = children.filter(item => {
                    return !item.hidden
                })
                if (showingChildren.length === 1) {
                    return true
                }
                return false
            },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
  .el-menu-item,.el-submenu {
    float: left;
  }
  .el-submenu .el-submenu__icon-arrow {
    position: static;
    margin-left: 8px;
    margin-top: -3px;
  }
</style>

