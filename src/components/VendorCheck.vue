<!--
描述:登录成功 商户核销单
作者:dong.xie
-->
<template>
    <div>
       <Labels 
           :name="textName"
             :title="placeTxt"
             :source="api"
             :hasSearch="true"
       ></Labels>
         <div class="tables">
            
            <Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
            ></Tables>
         </div>
    </div>
</template>
<script>
  import Labels from './Labels';
  import Tables from './Tables';
  import ButtonGroup from './ButtonGroup';
  export default {
     name:'vendorCheck',
     data(){
      var _this=this;
      return{
        textName:'商户核销单',
        placeTxt:'门面名称/门店编号',
        bodyName:["商户编号","商户名称","分销商数","交易单数","交易金额","反佣金额","待结算金额","实际待结金额"],
        actionName:[
        {"txt":"详细",actions:function(){
                      alert('详细');
        }},
        ],
        resultSet:8,
        api:{
          url:'https://www.baidu.com/s?ie=utf-8&mod=11&isbd=1&isid=C766E1F407116111&ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=',
          type:'get',
          success:function(data){
            console.log(this);
          }
        }
      }
     },
     components:{Labels,Tables,ButtonGroup}
  }

</script>
<style>
  
   .views>div{
      width: 100%;height: 100%;
    }
  .tables{
    width:12.66rem;
      height:calc(100% - 1.13rem);
    height:-moz-calc(100% - 1.13rem);
    height:-webkit-calc(100% - 1.13rem);
      background-color: rgb(237,237,237);
      overflow:scroll;
  }
</style>