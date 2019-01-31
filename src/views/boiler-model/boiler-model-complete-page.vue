<template>
  <el-dialog
    title="编辑"
    :visible.sync="visible"
    @close="$emit('update:isShow', false)"
    :show="isShow">
   <boiler-model-manage width="50%"></boiler-model-manage>
  </el-dialog>
</template>

<script>
    import boilerModelManage from './components/index'

    export default {
        name:'boiler-model',
        components:{
            boilerModelManage
        },
      data(){
          return{
            visible: this.isShow,
        }
      },
      props:{
        isShow: {
          type: Boolean,
          default: false
        },
      },
      watch: {
        isShow () {
          this.visible = this.isShow;
        }
      },
    }
</script>
