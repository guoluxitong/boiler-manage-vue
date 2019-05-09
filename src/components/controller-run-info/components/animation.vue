<template>
    <div class="product-animation" >
        <el-row class="animation">
            <div v-if="stoveAnimation.search('a-2')>-1">
                <stove :src="stoveAnimation" :width="150" :styleObject="{'margin-top':'0px'}"></stove>
            </div>
            <div v-else-if="stoveAnimation.search('a-0-3')>-1">
                <stove :src="stoveAnimation" :width="220" :styleObject="{'margin-top':'8px'}"></stove>
            </div>
            <div v-else>
                <stove :src="stoveAnimation"></stove>
            </div>
        </el-row>
        <el-row  class="animation beng">
            <div class="beng-item" v-for="item in bengAnimationList" v-if="bengAnimationList&&bengAnimationList.length>0">
                <div v-if="item.getElementPrefixAndValuesString().search('b-1')>-1">
                    <beng :src="item.getElementPrefixAndValuesString()" :title="item.title" :width="40" :styleObject="{'margin-top':'31px'}"></beng>
                </div>
                <div v-if="item.getElementPrefixAndValuesString().search('b-2')>-1">
                    <beng :src="item.getElementPrefixAndValuesString()" :title="item.title" :styleObject="{'margin-top':'40px'}"></beng>
                </div >
                <div v-if="item.getElementPrefixAndValuesString().search('b-3')>-1">
                    <beng :src="item.getElementPrefixAndValuesString()" :title="item.title" :width="150"></beng>
                </div>
            </div>
        </el-row>
        <el-row  class="animation">
            <div  v-for="item in fanAnimationList" v-if="fanAnimationList&&fanAnimationList.length>0" style="float: left">
                <div v-if="item.getElementPrefixAndValuesString().search('c-1')>-1" class="fan">
                    <fan :src="item.getElementPrefixAndValuesString()" :title="item.title" :width="32"  :styleObject="{'margin-top':'56px'}"></fan>
                </div>
                <div v-if="item.getElementPrefixAndValuesString().search('c-2')>-1" class="fan">
                    <fan :src="item.getElementPrefixAndValuesString()" :title="item.title" :width="70"  :styleObject="{'margin-top':'56px'}"></fan>
                </div>
            </div>
        </el-row>
    </div>
</template>
<script>
    import beng from './beng'
    import stove from './stove'
    import fan from './fan'
    export default {
        name:'controller-run-info',
        components:{
            beng,
            stove,
            fan
        },
        props:{
            stoveAnimation:{
                type:String,
                default:'',
                required:true
            },
            fanAnimationList:{
                default: [],
                required: true
            },
            bengAnimationList:{
                default:[],
                required:true
            },
        },
        data(){
            return{
                width:document.body.clientWidth
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss">
    .product-animation {
        width: 100%;
        font-size: 14px;
        font-weight: 500;
        color: #303133;
        height: 120px;
        .animation{
            float: left;
        }
        .fan{
            float: left;
        }
    }
</style>