<template>
    <el-dialog
      title="锅炉型号管理"
      :visible.sync="visible"
      @close="boilerModelCompleteClose"
      :show="show">
      <boiler-model-manage width="50%"></boiler-model-manage>
    </el-dialog>
</template>

<script>
  import boilerModelManage from '../boiler-model/components/index'
  export default {
    name: 'boiler-model-complete-page',
    components:{
      boilerModelManage
    },
    data(){
      return {
        visible:this.show
      };
    },
    props: {
      show: {
        type: Boolean,
        default: false
      },
    },
    watch: {
      show () {
        this.visible = this.show;
      }
    },
    methods:{
      boilerModelCompleteClose(){
        this.$emit('boilerModelCompleteDialogClose',{boilerModelCompleteDialogVisible:false})
      },
    }
  }
</script>

<style scoped>

</style>
