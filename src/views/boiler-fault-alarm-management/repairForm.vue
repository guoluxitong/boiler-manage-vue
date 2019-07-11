<template>
  <el-dialog :visible.sync="repairDialogFlag" width="50%" title="维修记录">
    <el-button type="primary" style="float:right" @click="newRepairSubmit">添加维修记录</el-button>
    <el-table :data="tableData" style="width: 100%" max-height="400">
      <el-table-column prop="date" label="日期" width="150"></el-table-column>
      <el-table-column prop="name" label="设备编号" width="120"></el-table-column>
      <el-table-column prop="province" label="维修内容" width="200"></el-table-column>
      <el-table-column prop="city" label="维修结果" width="100"></el-table-column>
      <el-table-column label="操作" width="150">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, tableData4)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :visible.sync="newRepairDialogFlag">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="设备编号">
          <el-input v-model="form.number"></el-input>
        </el-form-item>
        <el-form-item label="负责人">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="维修时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="维修内容">
          <el-input type="textarea" v-model="form.content"></el-input>
        </el-form-item>
        <el-form-item label="维修结果">
          <el-switch
            active-text="已修复"
            inactive-text="未修复"
            active-color="#13ce66"
            inactive-color="#ff4949"
            v-model="form.results"
          ></el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" >立即创建</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-dialog>
</template>
<script>
export default {
  name: "reparit-form",
  props: {
    repairDialogFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      newRepairDialogFlag: false,
      form: {
        number: "",
        name: "",
        date: "",
        content: "",
        results: false
      }
    };
  },
  methods: {
    handleDelete(index, rows) {
      rows.splice(index, 1);
    },
    newRepairSubmit() {
      this.newRepairDialogFlag = true;
    }
  }
};
</script>
<style>
</style>

