<!--
添加门店组件
-->
<template>
  <div class="add-business">
    <div class="add-cxt">
      <form action="" class="form">
        <div class="store-list">
          <span class="store-left">门店编号:</span><span class="store-right">
            <input type="text" name="store-num" placeholder="输入门店编号">
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
              <button>保存</button>
              <button>重置</button>
          </span>
        </div>
      </form>
    </div>
    <div class="add-tables">
      <div class="add-tables-cxt">
        <Tables
          :bodyName="bodyName"
          :actionName="actionName"
          :resultSet="resultSet"
        ></Tables>
      </div>
    </div>
  </div>
</template>

<script>
  import Tables from './Tables';
  export default {
    name: 'addStores',
    components: {Tables},
    data(){
      return {
        bodyName: ["门店编号", "门店名称", "商户类型", "门店数", "协议周期", "签约时间", "协议状态"],
        actionName: [
          {
            "txt": "编辑",
            actions: function () {
              alert('详细');
            }
          },
          {
            "txt": "协议",
            actions: function () {
              alert('详细');
            }
          },
        ],
        resultSet: 7,
        isCheckBox: false,
      }
    }
  }

</script>

<style>
  .add-business {
    width: 100%;
    height: 100%;
    display: flex;
    /*justify-content: center;*/
    /*align-items: center;*/
  }
  .add-tables {
    flex: 7.6;
    /*width: 9.66rem;*/
    height: 100%;
    overflow-x: scroll;
  }
  .add-tables-cxt {
    padding: 0.2rem;
  }
  .add-cxt {
    background-color: skyblue;
    flex: 2.4;
    /*width: 2.4rem;*/
    height: 100%;
    font-size: .12rem;
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
