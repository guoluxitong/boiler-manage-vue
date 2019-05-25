<template>
    <div class="app-container product-container" id="'1.23452384164.123412415'">
        <el-row class="app-query">
            <span :style="{'display':deviceNoIsShow}"><el-input clearable v-model="reportQuery.deviceNoArray" placeholder="编号" style="width: 180px;" :style="{width:'180px'}"></el-input></span>
            <el-date-picker type="datetime" v-model="reportQuery.beginDate" :default-value="new Date()" default-time="00:00:00" style="width: 200px;" ></el-date-picker>
            <el-date-picker type="datetime" v-model="reportQuery.endDate" :default-value="new Date()" default-time="23:59:59" style="width: 200px;" ></el-date-picker>
            <el-button  type="primary" icon="el-icon-search" @click="handleGlobalFilter">查询</el-button>
        </el-row>
        <div class="e-block"><div class="e-echarts" id="temperature"></div> </div>
        <div class="e-block" style="border-left: 0px"><div class="e-echarts" id="pressure"></div></div>
        <div class="e-block" style="border-top: 0px"><div class="e-echarts" id="flow"></div></div>
    </div>
</template>
<script>
    import {countDeviceReportBaseData} from '@/api/reportData'
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/line');
    require('echarts/lib/chart/bar')
    require('echarts/lib/component/tooltip')
    require("echarts/lib/component/toolbox");
    require('echarts/lib/component/title')
    require("echarts/lib/component/dataZoom");
    require('echarts/lib/component/legend')
    
    export default {
        name:'exception-run-info',
        data() {
            return {
                deviceNoIsShow:'inline',
                reportQuery: {
                    enterpriseId:null,
                    deviceNoArray:'0100000014',
                    //beginDate:new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 0, 0,0),
                    //endDate:new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 23, 59,59),
                    beginDate:new Date('2018',0,1),
                    endDate:new Date('2018',11,12),
                },
                countTypeObject:{
                    temperature:'temperature',
                    pressure:'pressure',
                    flow:'flow'
                }
            }
        },
        mounted() {
            this.$message({
                message: '当前功能正在快速完善当中，数据为演示数据',
                type: 'warning'
            });
            if(this.$route.query.controllerNo){
                document.title = '基本运行信息'
                this.reportQuery.deviceNoArray=this.$route.query.controllerNo
                this.deviceNoIsShow='none'
            }
            this.cdReportBaseData();
        },
        methods: {
            handleGlobalFilter() {
                if(!this.reportQuery.deviceNoArray){
                    this.$message({
                        message: '编号不能为空',
                        type: 'warning'
                    });
                    return
                }
                this.cdReportBaseData();
            },
            cdReportBaseData() {
                let temperatureEcharts=echarts.init(document.getElementById(this.countTypeObject.temperature))
                let pressureEcharts=echarts.init(document.getElementById(this.countTypeObject.pressure))
                let flowEcharts=echarts.init(document.getElementById(this.countTypeObject.flow))
                if(this.reportQuery.deviceNoArray) {
                    temperatureEcharts.showLoading()
                    pressureEcharts.showLoading()
                    flowEcharts.showLoading()
                    countDeviceReportBaseData(this.reportQuery).then(response=>{
                        let data={}
                        if(response.data&&response.data.data&&response.data.data){
                            data=response.data.data
                        }
                        this.cdReportTemperatureBaseData(temperatureEcharts,data,this.countTypeObject.temperature,'统计锅炉的温度数据',"℃")
                        this.cdReportTemperatureBaseData(pressureEcharts,data,this.countTypeObject.pressure,"统计锅炉的压力数据","")
                        this.cdReportTemperatureBaseData(flowEcharts,data,this.countTypeObject.flow,"统计锅炉的流量数据","")
                    })
                }else{
                    this.cdReportTemperatureBaseData(temperatureEcharts,{},this.countTypeObject.temperature,'统计锅炉的温度数据',"℃")
                    this.cdReportTemperatureBaseData(pressureEcharts,{},this.countTypeObject.pressure,"统计锅炉的压力数据","")
                    this.cdReportTemperatureBaseData(flowEcharts,{},this.countTypeObject.flow,"统计锅炉的流量数据","")
                }
            },
            cdReportTemperatureBaseData(myEcharts={},data={},echartType,title,unit){
                let typeArray=[]
                let yAxis=[]
                if(data.yAxisObject&&data.yAxisObject[this.reportQuery.deviceNoArray]){
                    let yAxisObject=data.yAxisObject[this.reportQuery.deviceNoArray]
                    for (let key in yAxisObject){
                        if(yAxisObject[key].countType==echartType){
                            let yAxisData=Object.values(yAxisObject[key].yAxisMap)
                            if(yAxisData.length>0){
                                typeArray.push(yAxisObject[key].name)
                            }
                            yAxis.push({
                                name: yAxisObject[key].name,
                                type: 'line',
                                data: yAxisData
                            })
                        }
                    }
                }
                myEcharts.clear()
                myEcharts.setOption({
                    title: {
                        text: title,
                        left:'center'
                    },
                    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                    tooltip: {
                        trigger: 'axis'
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            dataView: {show: true, readOnly: false},
                            saveAsImage: {show: true}
                        }
                    },
                    calculable: true,
                    legend: {
                        data: typeArray,
                        top:30
                    },
                    grid: {
                        x: 50,
                        y: 60,
                        containLabel: true
                    },
                    xAxis: {
                        name:'时间',
                        boundaryGap: false,
                        data:  (function(){
                            if(data.xAxisArray&&data.xAxisArray.length>0){
                                return data.xAxisArray
                            }
                            return []
                        })()
                    },
                    yAxis: {
                        name:unit,
                        type: 'value',
                        boundaryGap: [0, '100%']
                    },
                    series: yAxis,
                    dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 100
                    }, {
                        start: 0,
                        end: '10',
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
                    }]
                });
                myEcharts.hideLoading()
            }
        }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
    .e-block{
        float:left;
        width: 49.8%;
        height: 410px;
        border: 1px solid #e6e6e6;
        .e-echarts{
            height: 360px;
        }
    }
</style>