<!--
添加商户组件
-->
<template>
<div>

            <!--<Tables
              :bodyName="bodyName"
              :actionName="actionName"
              :resultSet="resultSet"
            ></Tables>-->
  <div class="store-aside" v-show="isStoreAside">
    <form action="" class="form">
      <div class="store-list">
        <span class="store-left">门店编号:</span><span class="store-right">
            <input type="text" name="store-num" placeholder="输入门店编号" v-model="storeNum">
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">门店名称:</span><span class="store-right">
            <input type="text" name="store-name" placeholder="输入门店名称">
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">管理模式:</span><span class="store-choose">
            <span>
              <input type="radio" id="direct" name="store-model" value="直营"><label for="direct">直营</label>
            </span>
            <span>
              <input type="radio" id="join" name="store-model" value="加盟" checked><label for="join">加盟</label>
            </span>
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">经营模式:</span><span class="store-choose">
            <span>
            <input type="radio" id="dinner" name="store-model" value="正餐"><label for="dinner">正餐</label>
            </span>
            <span>
            <input type="radio" id="fastfood" name="store-model" value="快餐" checked><label for="fastfood">快餐</label>
            </span>
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">所属品牌:</span><span class="store-right">
            <input type="text" name="" placeholder="输入所属品牌">
            <img src="" alt="">
        </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">联系人:</span><span class="store-right">
            <input type="text" name="" placeholder="输入联系人">
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">联系电话:</span><span class="store-right">
            <input type="text" name="" placeholder="输入联系电话">
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">登录账号:</span><span class="store-right">
            <input type="text" name="" placeholder="输入登录账号">
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">地址：</span><span class="store-right">
            <select name="">
              <option value="volvo" selected>请选择</option>
              <option value="saab">1</option>
            </select>
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">&nbsp</span><span class="store-right">
            <input type="text" name="" placeholder="详细地址">
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">上级组织:</span><span class="store-right">
            <select name="">
              <option value="volvo" selected>请选择</option>
              <option value="saab">1</option>
            </select>
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list">
        <span class="store-left">&nbsp</span><span class="store-right">
            <button>添加门店推广菜品信息</button>
          </span>
      </div>
      <div class="input-tip"></div>
      <div class="store-list store-pic">
        <span class="store-left">门店图片:</span><span class="store-right">
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
              <button @click="addStore">保存</button>
              <button>重置</button>
          </span>
      </div>
    </form>
  </div>
  <div class="store-content">
    <ButtonGroup
      :btnList="btnList"
      :isStoreAside="isStoreAside"
    ></ButtonGroup>
    <table>
      <tr>
        <th>门店编号</th>
        <th>门店名称</th>
        <th>所属省</th>
        <th>管理模式</th>
        <th>经营模式</th>
        <th>品牌</th>
        <th>联系人</th>
        <th>联系电话</th>
        <th>登录账号</th>
        <th>操作</th>
      </tr>
      <tr v-for="item in resultSet">
        <td>{{item.id}}</td>
        <td>{{item.orgName}}</td>
        <td>{{item.provinceName}}</td>
        <td>{{item.storesType}}</td>
        <td>{{item.curStatus}}</td>
        <td>{{item.orgForm}}</td>
        <td>{{item.cityName}}</td>
        <td>{{item.cityName}}</td>
        <td>{{item.cityName}}</td>
        <td>禁用&nbsp&nbsp编辑</td>
      </tr>
    </table>
    <div class="sort">
      <button class=""><</button>
      <button class="">1</button>
      <button class="">2</button>
      <button class="">3</button>
      <button class="">4</button>
      <button class="">5</button>
      <button class="">6</button>
      <button class="">7</button>
      <button class="">8</button>
      <button class="">></button>
    </div>
  </div>



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
        isStoreAside:false,
        btnList:[
          {title:'添加门店',action:function(){
  //        _this.$router.push({name:'addStores'});
            _this.showAside()
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
        addStore: 'http://101.200.79.3:8765/org/api/stores',
        page: 0,
        size: 4,
        isStore: true,
        storeNum:''
      }
 	 },
 	 components:{ButtonGroup,Tables},
   methods: {
     /*获取门店列表*/
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
        console.log(this.resultSet);
      });

    },
     /*添加门店按钮隐藏*/
    showAside(){
      this.isStoreAside = !this.isStoreAside

    },
    /*添加门店信息提交*/
    addStore(){
      this.isStoreAside = !this.isStoreAside;
      var options={
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization':Api.getToken()
        }
      };
      console.log(options);
      var body ={
        orderNum: this.storeNum


      };
      this.$http.post(this.storeList,Api.formFormat(body),options).then((res)=>res.json()).then((res)=>{
//        console.log(res);

      });

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
    width: 8.6rem;
    background-color: #ededed;
    margin-top: .18rem;
    float: left;


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
  .sort{
    margin-top: .18rem;
    margin-right: .5rem;
    float: right;
  }
  .sort button{
    display: inline-block;
    width: .28rem;
    height: .28rem;
    background-color: #fff;
    box-shadow: none;
    border: 1px solid #d9d9d9;
  }
  /*添加门店样式*/
  .store-aside{
    width: 3rem;
    height: 100%;
    background-color: greenyellow;
    float: left;
  }
  .form{
    padding-left: .3rem;
    padding-top: .3rem;
  }
  .input-tip{
    height: .18rem;
  }
  .store-list{
    width: 2.4rem;
    height: .28rem;
  }
  .store-left{
    display: inline-block;
    width: .7rem;
    text-align: right;
    padding-right: .12rem;
    height: .28rem;
    line-height: .28rem;
    font-size: .12rem;
  }
  .store-right{
    display: inline-block;
    width: 1.7rem;
    height: .28rem;
  }
  .store-right input{
    width: 1.7rem;
    height: .28rem;
    padding-left: .05rem;
    outline: none;
    border: 1px solid grey;
    border-radius: 3px;
    background-color: #f7f7f7;
  }
  .store-right select{
    width: 1.7rem;
    height: .28rem;
    padding-left: .05rem;
    outline: none;
    border: 1px solid grey;
    border-radius: 3px;
    background-color: #f7f7f7;
  }
  .store-choose input{
    width: .15rem;
    vertical-align: middle;
  }
  .store-choose label{
    padding-left: .08rem;
    padding-right: .16rem;
  }
  .upload-pic{
    display: inline-block;
    width: .78rem;
    height: .81rem;
    border: 1px dashed black;
    text-align: center;

  }
  .upload-pic p:nth-child(1){
    font-size: .5rem;
    line-height: .5rem;
    height: .5rem;
  }
  .upload-pic p:nth-child(2){
    line-height: .16rem;
    height: .16rem;
  }
  .upload-explain{
    display: inline-block;
    padding: .15rem 0;
  }
  .store-pic{
    height: 1.6rem;
  }
  .store-pic .store-left{
    vertical-align: top;
  }
  .store-right button{
    width: 1.54rem;
    height: .28rem;

  }
  .vertify button{
    width: .7rem;
    height: .26rem;
    margin-right: .12rem;

  }
</style>
