<template>
  <div style="float: left;margin: 10px 1%;width: 31%;display: inline-block;">
      <el-card class="box-card">
        <div slot="header" class="clearfix" style="padding-bottom: 0px">
          <span>{{controllerNoArray[index]}}</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="sendDeleteCardToParent">X</el-button>
        </div>
        <div class="runInfo1" :style="{height:mapHeight/8*2.5+'px'}">
          <device-run-info class="runInfoShow1"
            :controllerNo="controllerNoArray[index]"
          ></device-run-info>
        </div>
      </el-card>
  </div>
</template>

<script>
  import deviceRunInfo from '@/components/controller-run-info'
  export default {
    name: 'index',
    props:{
      controllerNoArray:{
        type:Array,
        default:function () {
          return []
        }
      },
      index: {
        type: Number,
        required: true
      },
      mapHeight: {
        type: Number,
        default: document.documentElement.clientHeight
      }
    },
    data(){
      return {
        controllerArray:this.controllerNoArray,
        mapWidth:document.documentElement.clientWidth-90,
        arrayIndex:this.index,
      }
    },
    watch:{
      controllerNoArray(){
        this.controllerArray = this.controllerNoArray
      },
      index(){
        this.arrayIndex = this.index
      }
    },
    components:{
      deviceRunInfo:deviceRunInfo
    },
    mounted(){
    },
    methods:{
      sendDeleteCardToParent(){
        this.$emit("listenToControllerRunInfo",this.arrayIndex)
      }
    }
  }
</script>

<style scoped>
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .runInfo1{
    position: relative;
    overflow: hidden;
  }
  .runInfoShow1 {
    height: 100%;
    position: absolute;
    overflow-x: hidden;
    overflow-y: scroll;
   }
  .runInfoShow1::-webkit-scrollbar {
    display: none;
  }
</style>
