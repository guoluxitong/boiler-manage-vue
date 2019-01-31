<template>
    <div class="breadcrumb" v-if="levelList&&levelList[0]&&levelList[0].name!='home'">
        <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
                <el-breadcrumb-item v-for="(item)  in levelList" :key="item.path" v-if='item.meta.title'>
                    <span  style="font-weight: 600;">{{item.meta.title}}</span>
                </el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
</template>

<script>

    export default {
        created() {
            this.getBreadcrumb()
        },
        data() {
            return {
                levelList: null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        methods: {
            getBreadcrumb() {
                let matched = this.$route.matched.filter((item,index, arr) => {
                    return item.path
                })
                this.levelList = matched
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .breadcrumb{
        width: 100%;
        border-bottom: solid 1px #e6e6e6;
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
