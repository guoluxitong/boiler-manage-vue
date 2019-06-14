<template>
  <div>
    <el-row>
      <el-radio-group v-model="radio1" @change="change($event)">
        <el-radio-button label="周报数据"></el-radio-button>
        <el-radio-button label="月报数据"></el-radio-button>
        <el-radio-button label="半年报数据"></el-radio-button>
      </el-radio-group>
    </el-row>
  </div>
</template>
<script>
export default {
    data(){
        return {
            radio1:'月报数据'
        }
    },
    methods:{
        change(event){
            console.log(event)
        }
    }
}
</script>
