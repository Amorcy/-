<!--
添加菜品组件
-->
<template>
	<div class="add-business">
		<div class="add-cxt">
			<div class="add-brands-menu">
      <form action="" class="form">
        <div class="store-list">
          <span class="store-left">品牌编号:</span><span class="store-right">
            <input type="text" name="store-num" placeholder="输入门店编号">
          </span>
        </div>
        <div class="input-tip"></div>
        <div class="store-list">
          <span class="store-left">品牌名称:</span><span class="store-right">
            <input type="text" name="store-name" placeholder="输入门店名称">
          </span>
        </div>
        <div class="input-tip"></div>
        <div class="store-list">
          <span class="store-left">菜品缩写:</span><span class="store-right">
            <input type="text" name="store-name" placeholder="输入门店名称">
          </span>
        </div>
        <div class="input-tip"></div>
        <div class="store-list store-pic">
          <span class="store-left">菜品图片:</span><span class="store-right">
            <span class="upload-pic">
              <p>+</p>
              <p>上传照片</p>
            </span>
            <span class="upload-explain">
              <p>图片需1M以内</p>
              <p>最佳尺寸: 300*400px</p>
              <p>最多可添加5张</p>
            </span>
          </span>
        </div>
        
        <div class="input-tip"></div>
        <div class="store-list">
          <span class="store-left">&nbsp</span><span class="store-right vertify">
              <button>保存</button>
              <button>重置</button>
          </span>
        </div>
      </form>
    </div>
		
		</div>
		<div class="add-tables">
			<div class="add-tables-cxt">
				<Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
              :isCheckBox="isCheckBox"
            ></Tables>
			</div>
		</div>
	</div>
</template>

<script>
 import Tables from './Tables';
 import Api from '../api/api';
 export default {
 	 name:'addbusiness',
 	 components:{Tables},
 	 data(){
        var _this=this;
        return {
        	   bodyName:["菜品编号","菜品名称","菜品缩写","图片"],
        actionName:[
        {"txt":"审核",actions:function(){
                      alert('审核');
        }},
        {"txt":"停用",actions:function(){
                      alert('停用');
        }}
        ],
		 		resultSet:4,
		 		isCheckBox:false,
		 		orgForm:false,
                //orgForm类型  1连锁 2 单店
                //orgName商户名称
                //
                orgName:'',
                accountName:'',
                accountPassword:'',
                ADD_SERVICE:'http://172.16.38.191:8093/api/merchant',
                isStoreName:true,

        }
 	 },
 	 methods:{
 	 	addBusiness:function(){
 	 		 var options={
                 headers:{
                                   'Content-Type':'application/x-www-form-urlencoded',
                                   'Authorization':Api.getToken()
                                 }
                };
                console.log(options);
              var body ={
              	   orgName:this.orgName,
              	   accountName:this.accountName,
              	   accountPassword:this.accountPassword,
                   orgForm:this.orgForm
              };
 	 		this.$http.post(this.ADD_SERVICE,Api.formFormat(body),options).then((res)=>res.json()).then((res)=>{
 	 			  console.log(res);
 	 		});
 	 	},
        changes:function(e){
           this.isStoreName=true;
        },
        removeName:function(){
            this.isStoreName=false;
        }
 	 }
 }

</script>

<style>
	.add-business{
		width:100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.add-cxt{
		width:3rem;
		height: 100%;
		background-color: #ffffff;
		overflow:hidden;
	}
	.add-tables{
		width:9.66rem;
		height: 100%;
		overflow-x: scroll;
	}
    .add-tables-cxt{
    	padding: 0.2rem;
    }
    .add-cxt-form{
    	width:2.4rem;
    	margin:0.25rem auto;
    	height: 4.6rem;
    }
    .cxt-form-items{
    	width:100%;
    	height: 0.46rem;
    	display: flex;
    	justify-content: space-between;
    	align-items: center;
    }
    .form-label{
    	width:0.8rem;
    	text-align: left;
    	font-size: 0.14rem;
    }
    .form-input{
        width:1.6rem;
        height: 0.28rem;
        border:1px solid #dddddd;
        border-radius:4px;

    }
    .form-items-starts{
    	width:0.14rem;
    	height: 0.14rem;
    	font-size:0.14rem;
    	text-align: center;
    	color: red;
    }
    .form-items-sub{
    	height:0.54rem;
    	display: flex;
    	justify-content: center;
    	align-items: center;
    }
    .items-pad{
    	width:0.8rem;
    	height:0.54rem;
    }
    .items-sub{
    	width:1.6rem;
    	height:0.54rem;
    	display: flex;justify-content: space-between;

    }
    .sub-btn,.sub-reset{
    	width:0.7rem;
    	height:0.28rem
    }
    .md-button.md-dense {
	    min-height: 0px;
	    line-height: 32px;
	    font-size: 13px;
	        line-height: 0.24rem;
	}
    .form-address{
        width:1.6rem;
        height:0.28rem;
        border-radius:4px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border:1px solid #dddddd;
    }
    .address-txt{
        width:1.2rem;
        height:0.24rem;
        outline: none;
        border: none;
    }

</style>
