<!--
模板组件加载列表的组件 用于展示信息
-->
<template>
	<div class="templates">
		<div class="templates-items" v-for="(row,index) in 3">
			<div class="templates-header">
				<span class="header-title">基础分销商模块</span>
				<span class="header-id">ID:NO1009</span>

			</div>
			<div class="header-line"></div>
			<div class="templates-cxt">
				<div>商户优惠:<span>消费满100减40</span></div>
                <div>商户优惠:<span>消费满100减40</span></div>
			</div>
            <div class="templates-footer">
            	<div class="footer-desc">
            		<span>状态: 启用</span>
            		<span>创建时间: 2017/05/02</span>
            	</div>
            	<div class="footer-btns">
            		<span>开启<i class="iconfont icon-tubiao10"></i></span>
            		<span>编辑</span>
            	</div>
            </div>
		</div>

		
	</div>
</template>

<script>
	export default {
		 name:'templatesdashboard',
		 data(){
		 	return {

		 	}
		 }
	}
</script>

<style>
	.templates{
		width:12rem;
		height: 6.2rem;
		position: relative;
		margin:0.3rem auto;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.templates-items{
		width:3.88rem;
		height: 1.88rem;
		background-color: #ffffff;
		border-radius: 4px;
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;

	}
	
	.templates-header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width:3.6rem;
		height: 0.5rem;
		line-height:  0.5rem;
        border-bottom: 1px dashed #dddddd;
	}
	.header-title{
		width:1.56rem;
		height:100%;
		font-size: 0.2rem;
		text-align: center;

	}
	.header-id{
        width:0.95rem;
		height:100%;
		text-align: center;
		font-size: 0.12rem;
	}
	.templates-cxt{
		width:3.6rem;
		height: 0.9rem;
	}
	.templates-cxt>div{
		width:3.6rem;
		height:0.3rem;
		line-height:0.3rem;
		font-size: 0.12rem;
	}
	.templates-footer{
		 width: 3.6rem;
		 height: 0.47rem;
		 display: flex;
		 justify-content: space-between;
		 align-items: center;
	}
	.footer-desc{
		width: 2.3rem;
		height:0.47rem;
		line-height:0.47rem;
		font-size: 0.12rem;
	}
	.footer-btns{
		width:1.2rem;
		height: 0.47rem;
		line-height: 0.47rem;
		text-align: right;
	}
</style>