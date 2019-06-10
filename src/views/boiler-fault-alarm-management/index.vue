<template>
  <div class="body">
    <div class="box">
      <el-row>
        <el-col :span="6">
          <el-button class="btn" type="info" @click="msgSubmit">
            <span>系统消息</span>
          </el-button>
        </el-col>
        <el-col :span="6">
          <el-button class="btn" type="primary">
            <span>在线设备</span>
          </el-button>
        </el-col>
        <el-col :span="6">
          <el-button class="btn" type="danger">
            <span>报警设备</span>
          </el-button>
        </el-col>
        <el-col :span="6">
          <el-button class="btn" type="success" @click="repairSubmit">
            <span>维修记录</span>
          </el-button>
        </el-col>
      </el-row>
    </div>
    <div class="chartBox">
      <pie-chart
        class="chartSytle"
        style="flot:'left'"
        :chartHeight="mapHeight-320"
        :chartWidth="mapWidth/3"
        :chartData="pieChartData"
      ></pie-chart>
      <bar-chart
        class="chartSytle"
        style="flot:'left'"
        :chartHeight="mapHeight-320"
        :chartWidth="mapWidth/3"
        :chartData="barChartData"
      ></bar-chart>
    </div>
    <el-dialog :visible.sync="msgDialogFlag" width="50%" title="系统消息">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:large">0222222222设备报警</span>
            <i class="header-icon el-icon-warning" style="color:#F56C6C;"></i>
          </template>
          <div>2019年5月20日15点37分 0222222222 设备报警发生排烟温度高报警，请及时处理！</div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:large">0233333333设备已恢复正常运行</span>
            <i class="header-icon el-icon-success" style="color:#67C23A;"></i>
          </template>
          <div>2019年5月20日15点30分 0233333333 设备故障已修复，现已正常运行！</div>
        </el-collapse-item>
        <el-collapse-item>
          <template slot="title">
            <span style="font-size:large">0233333333设备报警</span>
            <i class="header-icon el-icon-warning" style="color:#F56C6C;"></i>
          </template>
          <div>2019年5月20日14点37分 0233333333 设备发生出水温度传感器故障报警，请及时处理！</div>
        </el-collapse-item>
      </el-collapse>
    </el-dialog>
    <repair-form :repairDialogFlag="repairDialogFlag"></repair-form>
  </div>
</template>

<script>
import barChart from "@/components/reportForms/barChart";
import pieChart from "@/components/reportForms/pieChart";
import repairForm from "./repairForm";
export default {
  name: "boiler-fault-alarm",
  components: { barChart, pieChart, repairForm },
  data() {
    return {
      mapHeight: document.documentElement.clientHeight - 30,
      mapWidth: document.documentElement.clientWidth,
      activeName: "1",
      msgDialogFlag: false,
      repairDialogFlag: false,
      barChartData: {},
      pieChartData: {},
      tableData4: [
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
      ]
    };
  },
  created() {
    this.initBarTestData();
    this.initPieTestData();
  },
  mounted() {},
  methods: {
    //生成测试数据
    initBarTestData() {
      //柱状图模拟数据
      let title1 = "柱状图测试报表";
      let value1 = [];
      let x = ["山东", "简洁", "软件"];
      let obj = {};
      for (let i = 0; i < 3; i++) {
        obj.legend = i;
        obj.data = [i, i + 1, i + 2];
        value1.push(obj);
        obj = {};
      }
      this.barChartData.title = title1;
      this.barChartData.value = value1;
      this.barChartData.xAxis = x;
    },
    initPieTestData() {
      //饼状图模拟数据
      let title2 = "饼状图测试报表";
      let value2 = [
        { value: "12", name: "山东" },
        { name: "简洁", value: "16" },
        { name: "软件", value: "10" }
      ];
      this.pieChartData.title = title2;
      this.pieChartData.array = value2;
    },
    msgSubmit() {
      this.msgDialogFlag = true;
    },
    repairSubmit() {
      this.repairDialogFlag = true;
    }
  }
};
</script>

<style>
.body {
  text-align: center;
}
.box {
  width: 70%;
  margin: 80px auto;
}
.btn {
  width: 100%;
  height: 80px;
}
.chartBox {
  display: inline-block;
  width: 100%;
}
.chartSytle {
  background-color: #f5f5f5;
  border-radius: 10px;
  width: 33%;
  background-clip: padding-box;
  background: #fff;
  margin: 0, 1px;
  display: inline-block;
}
</style>