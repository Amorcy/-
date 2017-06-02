//tableList

<!--
描述:分销商页面
作者:dong.xie
-->
<template>

  <div class="tableCxt">
    <div class="tableCxtArea">
      <ul>
        <li class="head-li">
          <span v-for="(row,index) in bodyName">{{row}}</span>
          <span>操作</span>
        </li>
        <li v-for="(item,index) in contentList">
          <span>{{item.orgCode}}</span>
          <span>{{item.orgName}}</span>
          <span>{{item.protocolTemplate}}</span>
          <span>{{filterStatus(0,item.manageStatus)}}</span>
          <span>{{filterStatus(1,item.accountStatus)}}</span>
          <span>{{item.orgName}}</span>
          <div class="dill-css">
            <i v-on:click="callBack(item.id,0)"
               class="options"
            >审核
            </i>
            <i v-on:click="callBack(item.id,1)"
               class="options"
            >停用
            </i>
          </div>
        </li>
      </ul>

    </div>
    <div class="pagution">
      <div class="pagution-cxt">
        <md-button class="md-button md-raised">
          <
        </md-button>
        <md-button class="md-button md-raised">1</md-button>
        <md-button class="md-button md-raised">2</md-button>
        <md-button class="md-button md-raised">3</md-button>
        <md-button class="md-button md-raised">4</md-button>
        <md-button class="md-button md-raised">5</md-button>
        <md-button class="md-button md-raised">6</md-button>
        <md-button class="md-button md-raised">7</md-button>
        <md-button class="md-button md-raised">8</md-button>
        <md-button class="md-button md-raised">
          >
        </md-button>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name:'tables',
    props:['bodyName','actionName','resultSet','cellStyle','hasRoles','roleList','isCheckBox','contentList'],
    data(){
      return {

      }
    },
    methods:{
      callBack(id,flag){
        console.log(id);
        this.$emit("childClick",id,flag);
      }

    },
    created(){
    }
  }

</script>

<style scoped>
  ul{
    list-style: none;
  }
  ul li {
    border-bottom: 0.01rem solid #e9e9e9;
    height:0.45rem;
    line-height: 0.45rem;
  }
  li span{
    width: 1.7rem;
    display: inline-block;
    text-align: center;
  }
  .head-li{
    height: 0.64rem;
    line-height: 0.64rem;
    background-color: #f7f7f7;
    border: none;
  }
  .tableCxt{
    width:12rem;
    height: 6.2rem;
    position: relative;
    margin:0.3rem auto;
  }
  .pagution{
    width:100%;
    height: 0.66rem;
    position: absolute;
    bottom: 0rem;
  }

  .pagution-cxt{
    position: absolute;
    bottom: 0px;
    right: 0px;
    width:4.88rem;
    height:0.64rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
  }
  .md-button {
    margin: 0px;
    width: 0.28rem;
    height: 0.28rem;
    font-size: 0.16rem;
    min-width: 0px;
    min-height: 0px;
    margin: 0px 0px;
    padding: 0 0px;
    line-height: 0.24rem;
    text-align: center;
    color: #333333;
  }
  .tableCxtArea{
    width:100%;
    height: 5.54rem;
    background-color: #ffffff;
    border-top-right-radius: 4px;border-top-left-radius: 4px;
  }
  .dill-css{
    display: inline-block;
    width: 1.5rem;
    text-align: center;
  }
  .options{
    font-style: normal;
  }
</style>
