<template>
   <div class="app-container product-container">
      <el-row class="app-query">
         <el-input clearable v-model="reportQuery.deviceNoArray" placeholder="编号" style="width: 180px;"></el-input>
         <el-date-picker type="datetime" v-model="reportQuery.beginDate" :default-value="new Date()" default-time="00:00:00" style="width: 200px;" ></el-date-picker>
         <el-date-picker type="datetime" v-model="reportQuery.endDate" :default-value="new Date()" default-time="23:59:59" style="width: 200px;" ></el-date-picker>
         <el-button  type="primary" icon="el-icon-search" @click="handleGlobalFilter">查询</el-button>
      </el-row>
      <div class="e-block"><div class="e-echarts" id="myChart1"></div></div>
      <div class="e-block" style="border-left: 0px">
         <el-row class="exception-query">
            <el-select clearable filterable   v-model="reportQuery.exceptionKeyArray" placeholder="异常名称">
               <el-option v-for="item in ExceptionClassFieldArray" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
            <el-button  type="primary" icon="el-icon-search" @click="handleExceptionNameFilter">查询</el-button>
         </el-row>
         <div class="e-echarts" id="myChart2"></div>
      </div>
   </div>
</template>
<script>
    import {countDeviceReportExceptionNumByExceptionName,getExceptionClassFieldList,countDeviceReportExceptionNumByBoilerType} from '@/api/reportData'
    // 引入基本模板
    let echarts = require('echarts/lib/echarts')
    require('echarts/lib/chart/line');
    require('echarts/lib/chart/bar')
    require('echarts/lib/component/tooltip')
    require("echarts/lib/component/toolbox");
    require('echarts/lib/component/title')
    require('echarts/lib/component/legend')
    export default {
        name:'exception-run-info',
        data() {
            return {
                reportQuery: {
                    enterpriseId:null,
                    deviceNoArray:null,
                    //beginDate:new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 0, 0,0),
                    //endDate:new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 23, 59,59),
                    beginDate:new Date('2018',0,1),
                    endDate:new Date('2018',11,12),
                    exceptionKeyArray:null
                },
                ExceptionClassFieldArray:[]
            }
        },
        mounted() {
            this.$message({
                message: '当前功能正在快速完善当中，数据为演示数据',
                type: 'warning'
            });
            this.cdReportENumByExceptionName();
            this.cdReportENumByBoilerType()
            this.initExceptionExceptionClassFieldSelect()
        },
        methods: {
            initExceptionExceptionClassFieldSelect(){
                getExceptionClassFieldList().then(response=>{
                    this.ExceptionClassFieldArray=response.data.data
                })
            },
            handleGlobalFilter() {
                this.cdReportENumByExceptionName()
                this.cdReportENumByBoilerType()
            },
            handleExceptionNameFilter() {
                this.cdReportENumByBoilerType()
            },
            cdReportENumByExceptionName() {
                let myEcharts=echarts.init(document.getElementById('myChart1'));
                myEcharts.showLoading()
                countDeviceReportExceptionNumByExceptionName(this.reportQuery).then(response=>{
                    myEcharts.clear()
                    myEcharts.setOption({
                        title : {
                            text: '统计某异常的异常次数',
                            left:'center',
                            top:'13%'
                        },
                        tooltip: {},
                        toolbox: {
                            feature: {
                                dataView: {show: true, readOnly: false},
                                saveAsImage: {show: true}
                            }
                        },
                        xAxis: {
                            name:'异常名称',
                            data: (function(){
                                if(response.data&&response.data.data&&response.data.data.xAxisArray){
                                    return response.data.data.xAxisArray
                                }
                                return []
                            })()
                        },
                        yAxis : [
                            {
                                type:'value',
                                name:'次数',
                            }
                        ],
                        grid: {
                            top:'25%'
                        },
                        series: [
                            {
                                name: '次数',
                                type: 'bar',
                                data: (function () {
                                    if(response.data&&response.data.data&&response.data.data.yAxisObject){
                                        return response.data.data.yAxisObject
                                    }
                                    return []
                                })(),
                                itemStyle: {
                                    normal: {
                                        label : {
                                            show: true, position: 'insideTop'
                                        }
                                    }
                                }
                            }
                        ]
                    });
                    myEcharts.hideLoading()
                })
            },
            cdReportENumByBoilerType(){
                let myEcharts=echarts.init(document.getElementById('myChart2'));
                myEcharts.showLoading()
                countDeviceReportExceptionNumByBoilerType(this.reportQuery).then(response=>{
                    myEcharts.clear()
                    myEcharts.setOption({
                        title : {
                            text: '统计某锅炉的异常次数',
                            left:'center',
                            top:'2%'
                        },
                        tooltip: {},
                        toolbox: {
                            feature: {
                                dataView: {show: true, readOnly: false},
                                saveAsImage: {show: true}
                            }
                        },
                        legend: {
                            show:false,
                            data: (function () {
                                if(response.data&&response.data.data&&response.data.data.typeArray&&response.data.data.typeArray.length>0){
                                    return response.data.data.typeArray
                                }
                                return []
                            })()
                        },
                        grid: {
                            top:'13%',
                            bottom: '27%'
                        },
                        xAxis: {
                            name: '锅炉类型',
                            axisTick: {show: false},
                            data: (function(){
                                if(response.data&&response.data.data&&response.data.data.xAxisArray&&response.data.data.xAxisArray.length>0){
                                    return response.data.data.xAxisArray
                                }
                                return []
                            })()
                        },
                        yAxis: {name:'次数',type: 'value'},
                        series:(function () {
                            let yAxisObject={}
                            if(response.data&&response.data.data&&response.data.data.yAxisObject){
                                yAxisObject=response.data.data.yAxisObject
                            }
                            let yAxis = [];
                            for (let key in yAxisObject) {
                                yAxis.push({
                                    name: yAxisObject[key].name,
                                    type: 'bar',
                                    data:  yAxisObject[key].yAxisArray
                                })
                            }
                            return yAxis
                        })()
                    });
                    myEcharts.hideLoading()
                })
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
      .exception-query{
         margin-left: 5px;
         margin-top: 5px;
      }
      .e-echarts{
         height: 400px;
      }
   }
</style>