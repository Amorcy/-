<!--
添加商户组件
-->
<template>
<div>
	<ButtonGroup
             :btnList="btnList"
            ></ButtonGroup>
            <!--<Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
            ></Tables>
</div>
</template>
<script>
import Tables from './Tables';
import ButtonGroup from './ButtonGroup';
import Api from '../api/api';
 export default{
 	 name:'storeslist',

 	 data(){
 	 	var _this=this;
 	 	return {
 	 		btnList:[
        {title:'添加门店',action:function(){
        _this.$router.push({name:'addStores'});
        },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}},

		 		   {title:'添加品牌',action:function(){
		 		   	  //跳转到添加品牌页面
		 		   	 _this.$router.push({name:'addBrands'});

		 		   },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333'}},

        {title:'批量导入门店',action:function(){
         alert('ddddddddsxxxxxx');
        },styles:{width:'1rem',backgroundColor:'#ffffff',color:'#333333'}},
      ],
      bodyName:["门店编号","门店名称","所属省","管理模式","经营模式","品牌","联系人","联系电话","登录账户"],
      actionName:[
		 		{"txt":"禁用",actions:function(){
                      alert('禁用');
		 		}},
		 		{"txt":"编辑",actions:function(){
                      alert('编辑');
		 		}}
      ],
      resultSet:[],
      storeList: 'http://101.200.79.3:8765/org/api/stores/list',
      page: 0,
      size: 4,
      isStore: true
 	 	}
 	 },
 	 components:{ButtonGroup,Tables},
   methods: {
    getStoreList(){
      var options={
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization':Api.getToken()
        }
      };
      console.log(options);
      var body ={
        page:this.page,
        size:this.size,
      };
      this.$http.post(this.storeList,Api.formFormat(body),options).then((res)=>res.json()).then((res)=>{
//        console.log(res);
        this.resultSet = res.content
      });

    },
    addStore(){
        alert(111)
    }

   },
   mounted(){

   },
   created(){
     this.getStoreList()
   }
 }
</script>
<style>
  .store-content{
    /*margin-left: 3rem;*/
    width: 100%;
    background-color: #ededed;

  }
  .store-content li{
    list-style: none;
  }
  table{
    width: 12rem;
    text-align: center;
    vertical-align: middle;
  }
  table tr{

  }
  table tr th{
    height: .6rem;
    background-color: #f7f7f7;

  }
  table tr td{
    height: .45rem;
    background-color: #fff;

  }

</style>
