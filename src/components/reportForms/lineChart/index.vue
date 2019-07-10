<template>
  <div class="chartSytle" ref="lineChart" :style="{height:chartHeight+'px',width:chartWidth+'px'}"></div>
</template>

<script>
export default {
  name: "line-chart",
  data() {
    return {
      lineChartData: this.chartData
    };
  },
  props: {
    title: {
      type: String
    },
    chartHeight: {
      type: Number,
      default: document.documentElement.clientHeight - 30
    },
    chartWidth: {
      type: Number,
      default: document.documentElement.clientWidth
    },
    /**
     * x轴信息
     * 格式：{ name:'x轴名称', type:'x轴类型',data:[]//x轴数据数组}
     */
    xAxis: {
      type: Object,
      required: true
    },
    /**
     * Y轴信息
     * 格式：{ name:'y轴名称', type:'y轴类型'}
     */
    yAxis: {
      type: Object,
      required: true
    },
    /**
     * 数据格式：
     * [{ name:'数据系列名称',
     *    type:'line类型',
     *    data:[]数据数组
     * },....]
     */
    series: {
      type: Array,
      required: true
    }
  },
  watch: {
    chartData() {
      this.lineChartData = this.chartData;
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    draw() {},
    drawLine() {
      let legend = [];
      this.series.forEach(item => {
        console.log(item.name);
        legend.push(item.name);
      });
      var myChart = this.$echarts.init(this.$refs.lineChart);
      let option = {
        tooltip: { trigger: "axis" },
        xAxis: this.xAxis,
        yAxis: this.yAxis,
        series: this.series,
        legend: { icon: "rect", data: legend }
      };
      if (option && typeof option === "object") {
        myChart.clear();
        myChart.setOption(option, true);
      }
    },
    drawLine2() {
      //绘制报表
      let that = this;
      var myChart = that.$echarts.init(that.$refs.lineChart);
      let optionLine = null;
      optionLine = {
        title: {
          text: "测试" //that.lineChartData.title
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: "category",
          data: ["19/01", "19/02", "19/03"],
          name: "日期"
        },
        yAxis: {
          type: "value",
          name: "数量"
        },
        series: [
          {
            name: "模拟数据1",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: [120, 70, 210]
          },
          {
            name: "模拟数据2",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: [11, 220, 100]
          },
          {
            name: "模拟数据3",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: [180, 0, 10]
          }
        ]
      };

      if (optionLine && typeof optionLine === "object") {
        myChart.clear();
        myChart.setOption(optionLine, true);
      }
    }
  }
};
</script>

<style>
.chartSytle {
  background-color: #f5f5f5;
  border-radius: 10px;
  background-clip: padding-box;
  background: #fff;
  margin: 0, 1px;
}
</style>
