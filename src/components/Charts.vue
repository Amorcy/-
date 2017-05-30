<template>
	<div id="cs">
             		
    </div>
</template>

<script>
var colors=['#5793f3', '#d14a61', '#675bba'];
var echarts = require('echarts');
require('echarts/lib/chart/line');
require('echarts/lib/component/title');
export default {
	name:'charts',
	data(){
		 return {
		 	 options:{
		 	 	    color:colors,
                    title:{text:'概览数据'},
				    tooltip: {
				        trigger: 'none',
				        axisPointer: {
				            type: 'cross'
				        }
				    },
				    legend: {
				        data:['2015 降水量', '2016 降水量']
				    },
				    grid: {
				        top: 70,
				        bottom: 50
				    },
				    xAxis: [
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            axisLine: {
				                onZero: false,
				                lineStyle: {
				                    color: colors[1]
				                }
				            },
				            axisPointer: {
				                label: {
				                    formatter: function (params) {
				                        return '概览量  ' + params.value
				                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				                    }
				                }
				            },
				            data: ["2016-1", "2016-2", "2016-3", "2016-4", "2016-5", "2016-6", "2016-7", "2016-8", "2016-9", "2016-10", "2016-11", "2016-12"]
				        },
				        {
				            type: 'category',
				            axisTick: {
				                alignWithLabel: true
				            },
				            axisLine: {
				                onZero: false,
				                lineStyle: {
				                    color: colors[0]
				                }
				            },
				            axisPointer: {
				                label: {
				                    formatter: function (params) {
				                        return '概览量  ' + params.value
				                            + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
				                    }
				                }
				            },
				            data: ["2015-1", "2015-2", "2015-3", "2015-4", "2015-5", "2015-6", "2015-7", "2015-8", "2015-9", "2015-10", "2015-11", "2015-12"]
				        }
				    ],
				    yAxis: [
				        {
				            type: 'value'
				        }
				    ],
				    series: [
				        {
				            name:'2017',
				            type:'line',
				            xAxisIndex: 1,
				            smooth: true,
				            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
				        },
				    ]
		 	 }
		 }
	},
	methods:{
		initialEcharts:function(){
			var nodes=document.getElementById('cs');
			var myapp=echarts.init(nodes);
			myapp.setOption(this.options);
		}
	},
	mounted:function(){
		console.log('init charts');
		setTimeout(()=>{
			this.initialEcharts();
		},300); 
	}
}

	
</script>

<style>
	#cs{
		width:100%;
		height: 100%;
		z-index: 999;
	}
</style>