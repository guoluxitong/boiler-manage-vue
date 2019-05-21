<template>
  <div class="chartSytle" id="pieChart" :style="{height:chartHeight+'px',width:chartWidth+'px'}"></div>
</template>
<script>
export default {
  name: "pie-chart",
  data() {
    return {
      pieChartData: this.chartData
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
     * chartData数据格式：{title:'标题',array:[{value:'',name:''},...]}
     */
    chartData: {
      type: Object,
      required: true
    }
  },
  watch: {
    chartData() {
      this.pieChartData = this.chartData;
    }
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      var self = this;
      var dom = document.getElementById("pieChart");
      var myChart = this.$echarts.init(dom);
      let optionPie = null;
      optionPie = {
        title: {
          text: this.pieChartData.title
        },
        tooltip: {},
        series: [
          {
            name: "数量统计",
            type: "pie",
            data: this.pieChartData.array,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      };
      console.log(this.pieChartData.array);
      setInterval(function() {
        myChart.setOption({
          title: {
            text: self.pieChartData.title
          },
          series: [
            {
              data: self.pieChartData.array
            }
          ]
        });
      }, 1000);
      if (optionPie && typeof optionPie === "object") {
        myChart.clear();
        myChart.setOption(optionPie, true);
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