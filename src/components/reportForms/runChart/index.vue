<template>
  <div class="chartSytle" id="lineChart" :style="{height:chartHeight+'px',width:chartWidth+'px'}"></div>
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
    chartHeight: {
      type: Number,
      default: document.documentElement.clientHeight - 30
    },
    chartWidth: {
      type: Number,
      default: document.documentElement.clientWidth
    },
    /**
     * chartData数据格式：{title:'标题',value:'值',unit:'单位'}
     */
    chartData: {
      type: Object,
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
    drawLine() {
      //绘制报表
      let that = this;
      var dom = document.getElementById("lineChart");
      var myChart = this.$echarts.init(dom);
      let optionLine = null;

      function randomData() {
        now = new Date();
        //value = Math.round(Math.random() * 20 + 120 + 1);
        value = that.lineChartData.value;

        return {
          name: now.toString(),
          //name: that.chartData.time.toString(),
          value: [
            [now.getTime()],
            //[that.chartData.time.getTime()],
            //Math.round(value)
            that.lineChartData.value
          ]
        };
      }

      var data = [];
      var now = null;
      now = new Date(new Date().getTime() - 2 * 60 * 1000);
      var oneDay = 1 * 1000;
      var value = "";
      for (var i = 0; i < 100; i++) {
        data.push(randomData());
      }
      optionLine = {
        title: {
          text: that.lineChartData.title
        },
        tooltip: {
          trigger: "axis",
          formatter: function(params) {
            params = params[0];
            var date = new Date(params.name);
            return (
              date.getHours() +
              ":" +
              (date.getMinutes() > 9
                ? date.getMinutes()
                : "0" + date.getMinutes()) +
              "=>" +
              (that.lineChartData.value
                ? that.lineChartData.value.toFixed(2) + that.lineChartData.unit
                : "无数据")
            );
          },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: "time",
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: "value",
          boundaryGap: [0, "100%"],
          splitLine: {
            show: false
          }
        },
        grid: {
          y: "15%",
          x2: "10%",
          y2: "15%",
          x: "10%"
        },
        series: [
          {
            name: "模拟数据",
            type: "line",
            showSymbol: false,
            hoverAnimation: false,
            data: data
          }
        ]
      };

      setInterval(function() {
        for (var i = 0; i < 10; i++) {
          data.shift();
          data.push(randomData());
        }

        myChart.setOption({
          title: {
            text: that.lineChartData.title
          },
          series: [
            {
              data: data
            }
          ]
        });
      }, 10000);

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
