<template>
    <img class="user-avatar" :style="styleObject"  v-if="src" :src="'http://www.sdcsoft.com.cn/app/gl/animation/animation/stove/'+src+'.gif'" :width="width">
</template>
<script>
    export default {
        name:'stove',
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
            width:{
                type:Number,
                default:170
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>