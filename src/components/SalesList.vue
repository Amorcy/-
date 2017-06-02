<template>
  <div>
    <ButtonGroup
      :btnList="btnList"
      :btnLabel="btnLabel"
      :labelIs="labelIs"
    ></ButtonGroup>
    <TableList
      :bodyName="bodyName"
      :actionName="actionName"
      :resultSet="resultSet"
      :contentList="contentList"
      @childClick="childCallBack"
    ></TableList>
    <div class="pop-box" v-show="isShow">
      <div class="pop-pop">
        <p class="title-re"><span>注册审核</span><i class="close" @click="close"></i></p>
        <div class="con-box">
          <p style="padding-top: 0.1rem">
            <span class="span-name">微信名称:</span>
            <input class="input-wxname" value="admin-XXXXXXXXX">
          </p>
          <p>
            <span class="span-name">注册手机号:</span>
            <input class="input-wxname" placeholder="请输入6~20个字符，除特殊符号">
          </p>
          <p >
            <span class="span-name">注册时间:</span>
            <span class="span-time">2017/05/22</span>
          </p>
        </div>
        <p class="warn-p">
          <i class="warn-css"></i>
          <span class="span-warn">温馨提示：信息审核通过后，请点击【协议】签订双方合作协议</span>
        </p>
        <div class="buttom-box">
          <button class="buttom grey" @click="close">拒绝</button>
          <button @click="pass" class="buttom blue">通过</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
  import Tables from './Tables';
  import TableList from '../common/TableList.vue';
  import ButtonGroup from './ButtonGroup';
  import Api from '../api/api';
  export default {
    name:'saleslist',
    components:{Tables,ButtonGroup,TableList},
    data(){
      var _this=this;
      return {
        textName:'分销商',
        title:'分销商名称/分销商编号',
        bodyName:["分销商编号","分销商名称","协议模板","管理状态","账号状态","注册时间"],
        actionName:[
          {"txt":"审核",actions:function(){

          }},
          {"txt":"停用",actions:function(){
            alert('停用');
          }}
        ],
        resultSet:6,
        btnList:[
          {title:'发起邀请',action:function(){
            _this.$router.push({name:'salesInvite'});
          },styles:{width:'0.75rem',backgroundColor:'rgb(51, 135, 255)',color:'#ffffff'}},

          {title:'批量导入',action:function(){
            alert('添加啊');
          },styles:{width:'0.75rem',backgroundColor:'#ffffff',color:'#333333'}}
        ],
        btnLabel:[{text:'今日新增',value:20},{text:'分销商总数',value:100}],
        labelIs:true,
        contentList:[],
        isShow:false,
        distributorId:""
      }
    },
    created(){
      this.queryList(0)
    },
    methods:{
      queryList(page){
        var _body={page:page,size:10};
        var _token=Api.getToken();
        //设置请求头部
        var _options={
          headers:{
            'Content-Type':'application/x-www-form-urlencoded',
            'Authorization':_token
          }
        }
        //发送请求
        this.$http.post(global.PATH + 'api/distributor/list',Api.formFormat(_body),_options).then((res)=>res.json()).then((response)=>{
          this.contentList = response.content;
        });
      },
      pass(){
        var _body= JSON.stringify({
            "flag": true,
            "message": ""
          })
          ;
        var _token=Api.getToken();
        //设置请求头部
        var _options={
          headers:{
            'Content-Type':'application/json;charset=UTF-8',
            'Authorization':_token
          }
        }

        //发送请求
        this.$http.put(global.PATH + 'api/distributor/approve/'+this.distributorId,_body,_options).then((res)=>res.json()).then((response)=>{
          this.queryList(0);
        });
        this.isShow=false;
      },
      childCallBack(id,flag){
        this.distributorId = id;
        if(flag==0){
          this.isShow = true;
        }else{
          this.disabled();
        }
      },
      close(){
        this.isShow = false;
      },
      disabled(){
        var _token=Api.getToken();
        //设置请求头部
        var _options={
          headers:{
//            'Content-Type':'application/json;charset=UTF-8',
            'Authorization':_token
          }
        }

        //发送请求
        this.$http.put(global.PATH + 'api/distributor/disable/'+this.distributorId,_options).then((res)=>res.json()).then((response)=>{
          this.queryList(0);
        });
        this.isShow=false;
      }
    }
  }
</script>
<style scoped>
  .pop-box{
    position: fixed;
    top:0;
    left:0;
    bottom:0;
    right: 0;
    width: 100%;
    height:100vh;
    background-color:hsla(0,0%,53%,.8);
    z-index: 100000;
  }
  .pop-pop {
    height: 3.24rem;
    width: 4.38rem;
    background-color: #fff;
    position: absolute;
    left: 5rem;
    top: 2rem;
    border-radius: 0.02rem;
  }
  .title-re{
    padding:0.17rem 0.16rem;
    border-bottom: 0.01rem solid #e9e9e9;
    color:#6f6f6f;
    font-size: 0.14rem;
    position: relative;
  }
  .close{
    background: url(../assets/close.png) no-repeat;
    width: 10px;
    height: 10px;
    position: absolute;
    top:0.21rem;
    right:0.17rem;
  }
  .con-box{
    margin-top: 0.1rem;
  }
  .con-box p{
    margin-top: 0.16rem;
  }
  .span-name{
    display: inline-block;
    width: 1.05rem;
    text-align: right;
    font-size: 0.14rem;
    color:#6f6f6f;
    vertical-align: middle;
  }
  .input-wxname{
    margin-left: 0.16rem;
    width: 2.68rem;
    height:0.3rem;
    border: 0.01rem solid #e9e9e9;
    border-radius: 0.03rem;
    vertical-align: middle;
    padding-left: 0.1rem;
  }
  .span-time{
    margin-left: 0.16rem;
    vertical-align: middle;
  }
  .warn-css{
    width:12px;
    height:12px;
    background: url(../assets/warning.png) no-repeat;
    display: inline-block;
  }
  .warn-p{
    padding:0.3rem 0 0.35rem 0.17rem;
    border-bottom: 0.01rem solid #e9e9e9;
    vertical-align: middle;
  }
  .span-warn{
    color:#a0a0a0;
    font-size: 0.11rem;
    margin-left: 0.08rem;
    display: inline-block;
    vertical-align: middle;
  }
  .buttom{
    width: 0.63rem;
    height:0.34rem;
    border: 0.01rem solid #e9e9e9;
    border-radius: 0.03rem;
  }
  .grey{
    background-color: #fff;
  }
  .blue{
    background-color: #339bff;
  }
  .buttom-box{
    height: 0.5rem;
    line-height: 0.5rem;
    text-align: right;
    padding-right: 0.16rem;
  }
</style>
