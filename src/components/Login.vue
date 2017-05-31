<!--
描述:用户登录界面
作者:dong.xie
-->
<template>
	<div class="login">
        <div class="box">
        	<div class="logo">
        		<img src="../assets/logo.png">
        	</div>
        	<div class="loginBox">
        		<div class="loginUserName">
        			      <label class="labelUser">账户</label><input type="text" v-model="username"/>
        		</div>
        		<div class="loginPassWord">
        			      <label class="labelPwd">密码</label><input type="password" v-model="password"/>
        		</div>
        		<div class="loginForget">
        			<md-checkbox id="my-test2" name="my-test2"   class="md-primary">  记住此账号</md-checkbox>
        		</div>
        		<div class="loginSubmit">
        			 <md-button  class="md-raised md-primary" :style="styles" @click.native="navigatorApi">登录</md-button>
        		</div>
        		<div class="findPwd">忘记密码?</div>
        	</div>
        </div>
        <div class="copyright">
        		紫光美食云(北京)信息服务有限公司
        </div>
	</div>
</template>
<script>
  
  import Api from '../api/api';
	export default {
		name:'Login',
    data(){
      return {
        msg:'xxxx',
        username:'',
        password:'',
        styles:{width:'2.4rem'},
        baseToken:'Basic eW1zLWFwaTpSVUtUVEpFSk84SFRSQlhIS09MUA==',
        newestToken:'',
        LoginService:'http://101.200.79.3:8765/uaa/oauth/token'
        
      }
    },
    methods: {
        navigatorApi: function (event) {
           var _body={};
           _body.username=this.username;
           _body.password=this.password;
           _body.grant_type="password";
           console.log(Api.formFormat(_body));
           var options={
                 headers:{ 
                                   'Content-Type':'application/x-www-form-urlencoded',
                                   'Authorization':this.baseToken
                                 }
                };
           this.$http.post(this.LoginService,Api.formFormat(_body),options).then((res)=>{
                console.log(res);
           });
           //this.$router.push({name:'Index'});
        }
    
    }
	}

</script>
<style>
  .login{
  	 width: 100%;height: 100%;
  	 background-color:rgb(223,239,245);
  	 background: url('../assets/login.png');
  	 background-size: 100% 100%;
  	 overflow:hidden;
  }
  .box{
  	 width:3.84rem;
  	 height:8.32rem;
  	 margin:0.93rem auto;
     overflow:hidden;
  }
  .logo{
  	width:100%;height:1.66rem;
  }
  .logo>img{
  	width:100%;
  	height: 100%;
  }
  .loginBox{
  	width: 100%;
  	height: 2.66rem;
  	border-radius:4px;
  	border: 1px solid #dddddd;
  	background-color: #ffffff;
  	overflow:hidden;
  }
  .copyright{
  	width:100%;
  	height: 0.7rem;
  	text-align: center;
  	position: absolute;
    bottom: 0px;
    font-size: 0.16rem;
    line-height: 0.7rem;
    font-family: '微软雅黑'
  }
  .loginUserName{
  	width:3.42rem;
  	height:0.38rem;
  	border-radius:4px;
  	border: 1px solid #dddddd;
  	margin: 0.3rem auto;
  	display: flex;
    align-items: center;
  }
  .loginPassWord{
  	width:3.42rem;
  	height:0.38rem;
  	border-radius:4px;
  	border: 1px solid #dddddd;
  	margin: 0rem auto;display: flex;
    align-items: center;

  }
  .loginForget{
  	width:3.42rem;
  	height:0.3rem;
  	border-radius:4px;
  	margin: 0.1rem auto;
    
    display: flex;
    align-items: center;
  }
  .md-checkbox {
   
    margin: 8px 8px 8px 0;
    
}
  .loginSubmit{
    width:3.42rem;
    height:0.36rem;
    margin:0.1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.16rem;
    letter-spacing: 0.1rem;
    
  }
  .md-button{
  	margin:0px;
  	width:2.4rem;
  	height:0.38rem;
  	font-size: 0.14rem;
  }
  .labelUser,.labelPwd{
  	 font-size: 0.12rem;
  	 width:0.46rem;
  	 height: 100%;
  	 line-height: 0.38rem;
  	 text-align: right;
  }
  .loginBox input{
    padding-left: 0.05rem;
  	font-size: 0.16rem;
  	width:2.9rem;height:0.32rem;
  	line-height: 0.33rem;
    border: 0px;
  	outline: none;

  	
  }
  .findPwd{
  	font-size: 0.12rem;
  	width: 3.42rem;
  	height: 0.22rem;
  	line-height:0.22rem;
  	text-align: center;
    margin: 0 auto;
   	
  }
  .md-checkbox .md-checkbox-container {
    border: 1px solid #dddddd;
  }
</style>