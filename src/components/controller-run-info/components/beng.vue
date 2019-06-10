<template>
    <div :style="styleObject" class="beng-item">
        <div class="beng-item-img">
            <img class="user-avatar" v-if="src"  :src="'http://www.sdcsoft.com.cn/app/gl/animation/animation/beng/'+src+'.gif'" :width="width">
        </div>
        <div class="beng-item-name">{{title}}</div>
    </div>
</template>
<script>
    export default {
        name:'beng',
        props:{
            styleObject:{
                type:Object,
                default:function () {
                    return { 'margin-top': '30px' }
                }
            },
            src:{
                type:String,
                required:true
            },
            title:{
                type:String,
                required:true
            },
            width:{
                type:Number,
                default: 70
            },
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .beng-item{
        float: left;
        margin-right: 4px;
    }
    .beng-item-img{
        width: 100%;
        float: left;
        border: 1px solid #e4e7ed;
    }
    .beng-item-name{
        width: 100%;
        text-align: center;
        border: 1px solid #e4e7ed;
    }
</style>