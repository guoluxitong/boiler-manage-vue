<template>
    <div :style="styleObject" class="fan-item">
        <div class="fan-item-img">
            <img class="user-avatar" v-if="src"  :src="'http://www.sdcsoft.com.cn/app/gl/animation/animation/fan/'+src+'.gif'" :width="width">
        </div>
        <div class="fan-item-name">{{title}}</div>
    </div>
</template>
<script>
    export default {
        name:'fan',
        props:{
            styleObject:{
                type:Object,
                default:function () {
                    return { 'margin-top': '44px' }
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
    .fan-item{
        float: left;
        margin-right: 10px;
    }
    .fan-item-img{
        width: 100%;
        float: left;
        border: 1px solid #e4e7ed;
    }
    .fan-item-name{
        width: 100%;
        text-align: center;
        border: 1px solid #e4e7ed;
    }
</style>