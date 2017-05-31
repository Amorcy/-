<!--
描述:登录成功左侧菜单导航
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
			v-on:click="navigatorApi" title="summery">
				<div class="cxticon">
					<i class="iconfont icon-interest-active"></i>
					<span>概况</span>
				</div>
				<div class="dropicon"></div>
			</div>
			<div class="list-item" 
			      :style="css.business" 
			      v-on:click="navigatorApi"
			      title="business">

				<div class="cxticon">
					<i class="iconfont icon-lladdresshome"></i>
					<span>商户</span>
				</div>
				<div class="dropicon"></div>
			</div>
            
            <div class="list-item" 
			      :style="css.sales" 
			      v-on:click="navigatorApi"
			      title="sales">

				<div class="cxticon" >
					<i class="iconfont icon-sandiantu"></i>
					<span>分销商</span>
				</div>
				<div class="dropicon"></div>
			</div>

			<div class="list-item" 
			      :style="css.check" 
			      v-on:click="navigatorApi"
			      title="check">

				<div class="cxticon" >
					<i class="iconfont icon-renminbi"></i>
					<span>核销</span>
				</div>
				<div class="dropicon"></div>
			</div>
			<div class="list-item-children">
					<div class="list-item-children-items" v-on:click="navigatorApiChild" title="vendorCheck">

						<div class="child-items">
							<i class="iconfont icon-lladdresshome"></i>
							<span>商户核销单</span>
						</div>
					</div>
					<div class="list-item-children-items" v-on:click="navigatorApiChild" title="businessCheck">

						<div class="child-items">
							<i class="iconfont icon-lladdresshome"></i>
							<span>分销核销单</span>
						</div>
					</div>
			</div>
            
            <div>
				<div class="list-item" 
				     :style="css.setting"
				     v-on:click="navigatorApi" 
				     title="setting">

							<div class="cxticon">
								<i class="iconfont icon-set"></i>
								<span>设置</span>
							</div>
							<div class="dropicon"></div>
				</div>
				<div class="list-item-children">
					<div class="list-item-children-items" v-on:click="navigatorApiChild" title="manageStores">

						<div class="child-items">
							<i class="iconfont icon-lladdresshome"></i>
							<span>门店管理</span>
						</div>
					</div>
                    <div class="list-item-children-items" v-on:click="navigatorApiChild" title="manageDishes">
						<div class="child-items">
							<i class="iconfont icon-caipinfenleizhankai"></i>
							<span>菜品管理</span>
						</div>
					</div>

					<div class="list-item-children-items" v-on:click="navigatorApiChild" title="rightRoles">
						<div class="child-items">
							<i class="iconfont icon-wodequanyi"></i>
							<span>权益规则</span>
						</div>
					</div>
                    <div class="list-item-children-items" v-on:click="navigatorApiChild" title="agreementTemplates">
						<div class="child-items">
							<i class="iconfont icon-dingdan1"></i>
							<span>协议模板</span>
						</div>
					</div>
					<div class="list-item-children-items" v-on:click="navigatorApiChild" title="discountUsers">
						<div class="child-items">
							<i class="iconfont icon-hui"></i>
							<span>商户优惠</span>
						</div>
					</div>
					<div class="list-item-children-items" v-on:click="navigatorApiChild" title="manageUsers">
						<div class="child-items">
							<i class="iconfont icon-admin"></i>
							<span>用户管理</span>
						</div>
					</div>
                    <div class="list-item-children-items" v-on:click="navigatorApiChild" title="manageRoles">
						<div class="child-items">
							<i class="iconfont icon-admin"></i>
							<span>角色管理</span>
						</div>
					</div>
				</div>

             </div>
		</div>
	</div>
</template>
<script>
	export default {
		name:'AppMenu',
		data(){
			return {
				css:{
					            summery:{backgroundColor:'rgb(51,135,255)',color:'#ffffff'},
					            business:{backgroundColor:'rgb(48,57,69)',color:'rgb(161,169,179)'},
					            sales:{backgroundColor:'rgb(48,57,69)',color:'rgb(161,169,179)'},
								check:{backgroundColor:'rgb(48,57,69)',color:'rgb(161,169,179)'},
								setting:{backgroundColor:'rgb(48,57,69)',color:'rgb(161,169,179)'},
							}
			    }
		},
		methods:{
			eventProxy:function(e){
				
                 var tagName=e.target.tagName;
                 var className=e.target.className;
                 
                 if(tagName=="LI"||tagName=="SPAN"){
                    e=e.target.parentElement.parentElement;
                 }else if(className=="cxticon"||className=="dropicon"||className=="child-items"){
                    e=e.target.parentElement;
                 }else if(className=="list-item"){
                 	e=e.target;
                 }else{
                 	e=e.target;
                 }
                 return e;
			},
			routerProxy:function(_routerName){
				_routerName=_routerName.title;
				var _css=this.css;
                for(var key in this.css){
                   if(key==_routerName){
                   	 _css[key].backgroundColor="rgb(51,135,255)";
                   	 _css[key].color="#ffffff";
                   }else{
                   	 _css[key].backgroundColor="rgb(48,57,69)";
                   	 _css[key].color="rgb(161,169,179)";
                   }
                   this.$router.push({name:_routerName});
                 
                }
			},
			navigatorApi:function(e){
				 var _css=this.css;
                 var _routerName=this.eventProxy(e);
                 this.routerProxy(_routerName);
			},
			navigatorApiChild:function(e){
               var _rn=this.eventProxy(e);
               var _title=_rn.title;
               console.log(_title);
               this.$router.push({name:_title});
			}
		}
	}

</script>
<style>
	.menu{
		width: 100%;
		height: 100%;
		overflow-y: scroll;
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
	.list-item-children{
		width:100%;
		min-height:0.9rem;
		overflow:hidden;
		transition: height 1s linear;
	}
	.list-item-children-items{
		width:100%;
		height: 0.45rem;
		background-color: rgb(28,33,40);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.child-items{
		width:1.42rem;height: 0.45rem;
		color: #ffffff;
		 font-size:0.16rem;
		 display: flex;
		 justify-content: space-around;
		 align-items: center;
	}
	

</style>