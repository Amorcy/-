<!--
描述:登录成功首页
作者:dong.xie
-->
<template>
	<div class="menu">
		<div class="menu-icon">
			<img src="../assets/logoIndex.png">
		</div>
		<div class="menu-fonts">
		   美食云分销平台
		</div>
		<div class="menu-person">
			 <img src="../assets/person.png">
		</div>
		<div class="menu-username">
			 <span>dong.xie@zgms.com  <img class="menu-img" src="../assets/down.png"/></span>
		</div>
		<div class="menu-list">
			<div class="list-item" :style="css.summery" 
			v-on:click="navigatorApi" title="dashboard">
				<div class="cxticon">
					<i class="iconfont icon-interest-active"></i>
					<span>概况</span>
				</div>
				<div class="dropicon"></div>
			</div>
			<div class="list-item" 
			      :style="css.check" 
			      v-on:click="navigatorApi"
			      title="checksale">

				<div class="cxticon" >
					<i class="iconfont icon-renminbi"></i>
					<span>核销</span>
				</div>
				<div class="dropicon"></div>
			</div>
			
			<div class="list-item" 
			     :style="css.setting"
			     v-on:click="navigatorApi" 
			     title="setting">
				<div class="cxticon">
					<i class="iconfont icon-interest-active"></i>
					<span>设置</span>
				</div>
				<div class="dropicon"></div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'AppMenu',
		data(){
			return {
				css:{summery:{backgroundColor:'rgb(51,135,255)',color:'#ffffff'},
								check:{backgroundColor:'rgb(48,57,69)',color:'rgb(161,169,179)'},
								setting:{backgroundColor:'rgb(48,57,69)',color:'rgb(161,169,179)'}}
			}
		},
		methods:{
			eventProxy:function(e){
				
                 var tagName=e.target.tagName;
                 var className=e.target.className;
                 
                 if(tagName=="LI"||tagName=="SPAN"){
                    e=e.target.parentElement.parentElement;
                 }else if(className=="cxticon"||className=="dropicon"){
                    e=e.target.parentElement;
                 }else if(className=="list-item"){
                 	e=e.target;
                 }else{
                 	e=e.target;
                 }
                 return e.title;
			},
			navigatorApi:function(e){
				 var _css=this.css;
                 var _routerName=this.eventProxy(e);
                 console.log(_routerName);
                 switch(_routerName){
                       case "dashboard":
                        _css.summery.backgroundColor="rgb(51,135,255)";
                        _css.summery.color="#ffffff";
                        
                        _css.check.backgroundColor="rgb(48,57,69)";
                        _css.check.color="rgb(161,169,179)";
                        _css.setting.backgroundColor="rgb(48,57,69)";
                        _css.setting.color="rgb(161,169,179)";
                        this.$router.push({name:'dashboard'});
                       break;
                       case "checksale":
                        _css.summery.backgroundColor="rgb(48,57,69)";
                        _css.summery.color="rgb(161,169,179)";
                        
                        _css.check.backgroundColor="rgb(51,135,255)";
                        _css.check.color="#ffffff";
                        _css.setting.backgroundColor="rgb(48,57,69)";
                        _css.setting.color="rgb(161,169,179)";
                        this.$router.push({name:'checksale'});
                       break;
                       case "setting":
                         
                         _css.summery.backgroundColor="rgb(48,57,69)";
                        _css.summery.color="rgb(161,169,179)";
                        
                        _css.check.backgroundColor="rgb(48,57,69)";
                        _css.check.color="rgb(161,169,179)";
                        _css.setting.backgroundColor="rgb(51,135,255)";
                        _css.setting.color="#ffffff";
                        this.$router.push({name:'setting'});
                       break;
                 }  
			}
		}
	}
</script>
<style>
	.menu{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.menu-icon{
		width:100%;
		height: 0.40rem;
		overflow:hidden;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.menu-icon>img{
        width:1.42rem;
        height:0.21rem;
	}
	.menu-fonts{
		width:100%;
		height: 0.24rem;
		font-size:0.145rem;
		text-align: center;
		line-height: 0.24rem;
		color: #ffffff;
		letter-spacing:0.05rem;
	}
	.menu-person{
		width:100%;
		height: 1.06rem;
		display: flex;
		justify-content: center;
		align-items: flex-end;
	}
	.menu-person>img{
		
		width:0.64rem;
		height: 0.64rem;
		border-radius: 0.64rem;
		background-color: #ffffff;
		border: none;
		outline: none;
	}
	.menu-username{
		width: 100%;
		height: 0.65rem;
		display: flex;
		justify-content: center;
		align-items: flex-start;	
		text-align: center;
	}
	.menu-username>span{
		width:100%;
		height: 0.44rem;
		line-height: 0.44rem;
		font-size: 0.14rem;
		color: #ffffff;
	}
	.menu-img{
         width:0.06rem;
         height:0.05rem;
	}
	.list-item{
		width: 100%;height: 0.45rem;
		display: flex;
		justify-content:space-between;
		align-items: center;
		z-index: 999;
	}
	.cxticon{
		width:1.18rem;
		height:100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 0.16rem;
		color: #ffffff;
	}
	.dropicon{
		width:0.38rem;
		height: 100%;
	}
</style>
