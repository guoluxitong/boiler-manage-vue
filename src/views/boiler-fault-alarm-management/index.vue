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
      <line-chart
        class="chartSytle"
        style="flot:'left'"
        title="测试001"
        :xAxis="xAxis"
        :yAxis="yAxis"
        :series="series"
      ></line-chart>
    </div>
  </div>
</template>

<script>
const Mock = require("mockjs");
import barChart from "@/components/reportForms/barChart";
import pieChart from "@/components/reportForms/pieChart";
import lineChart from "@/components/reportForms/lineChart";

let map = ["超温", "超压", "AAA"];

export default {
  name: "boiler-fault-alarm",
  components: { lineChart, barChart, pieChart },
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
      ],
      xAxis: {
        name: "日期",
        type: "category",
        data: [
          "19/06/01",
          "19/06/02",
          "19/06/03",
          "19/06/04",
          "19/06/05",
          "19/06/06",
          "19/06/07"
        ]
      },
      yAxis: {
        name: "数量",
        type: "value"
      },
      series: []
    };
  },
  created() {
    this.initBarTestData();
    this.initPieTestData();
    this.initBarTestDataSeries()
  },
  methods: {
    //
    initBarTestDataSeries() {
      let data = Mock.mock({
        "data|8": [
          {
            'name|+1': ['测试1','测试2','测试3','测试4','测试5','测试6','测试7','测试8'],
            'type': 'line',
            'data': function(){
              let d=[]
              for(let i =0;i <7;i++){
                d.push(Mock.Random.integer(-40,300))
              }
              return d;
            }
          }
        ]
      })
      this.series = data.data;
    },
    //生成测试数据
    initBarTestData() {
      //柱状图模拟数据
      let title1 = "柱状图测试报表";
      let value1 = [];
      let x = ["19/02", "19/03", "19/04"];
      let obj = {};
      for (let i = 0; i < 3; i++) {
        obj.legend = map[i];
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