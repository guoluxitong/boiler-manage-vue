<template>
  <div class="chartSytle" id="barChart" ref="barChart" :style="{height:chartHeight+'px',width:chartWidth+'px'}"></div>
</template>
<script>
export default {
  name: "bar-chart",
  data() {
    return {
      barChartData: this.chartData
    };
  },
  props: {
    chartHeight: {
      type: Number,
      default: document.documentElement.clientHeight - 30
    },
    chartWidth: {
      type: Number,
      default: document.documentElement.clientWidth
    },
    /**
     * chartData数据格式：{title:'标题',value:[{legend:'图例',data[数据]},...],xAxis:[x轴坐标]}
     */
    chartData: {
      type: Object,
      required: true
    }
  },
  watch: {
    chartData() {
      this.barChartData = this.chartData;
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      let that = this;
      var dom = document.getElementById("barChart");
      var myChart = that.$echarts.init(that.$refs.barChart);
      let optionBar = null;
      let legendArray = [];
      let seriesArray = [];
      if (that.barChartData.value.length) {
        for (let i = 0; i < that.barChartData.value.length; i++) {
          legendArray.push(that.barChartData.value[i].legend.toString());
          let seriesObj = {};
          seriesObj.name = that.barChartData.value[i].legend;
          seriesObj.type = "bar";
          seriesObj.data = that.barChartData.value[i].data;
          seriesArray.push(seriesObj);
          seriesObj = {};
        }
      }
      optionBar = {
        title: {
          text: that.barChartData.title
        },
        tooltip: { formatter: '{a}:{c}'},
        legend: {
          data: legendArray
        },
        xAxis: {
          data: that.barChartData.xAxis
        },
        yAxis: {},
        series: seriesArray
      };
      setInterval(function() {
        myChart.setOption({
          title: {
            text: that.barChartData.title
          },
          legend: {
            data: legendArray
          },
          xAxis: {
            data: that.barChartData.xAxis
          },
          series: seriesArray
        });
      }, 1000);
      if (optionBar && typeof optionBar === "object") {
        myChart.clear();
        myChart.setOption(optionBar, true);
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