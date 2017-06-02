<!--
添加门店组件
-->
<template>
  <div class="add-business">
    <div class="add-cxt">
      <form action="" class="form">
        <div class="store-list">
          <span class="store-left">门店编号:</span>
          <input type="text" name="store-num" class="store-right" placeholder="输入门店编号">
        </div>
        <div class="input-tip"></div>
        <div class="store-list">
          <span class="store-left">门店名称:</span>
          <input type="text" name="store-name" class="store-right" placeholder="输入门店名称">
        </div>
        <div class="input-tip"></div>
        <div>
          <span>管理模式:</span>
          <span>
            <span>
              <input type="radio" name="store-model" value="直营">直营
            </span>
            <span>
              <input type="radio" name="store-model" value="加盟" checked>加盟
            </span>
          </span>
        </div>
        <div class="input-tip"></div>
        <div>
          <span>经营模式:</span>
          <span>
            <span>
            <input type="radio" name="store-model" value="正餐">正餐
            </span>
            <span>
            <input type="radio" name="store-model" value="快餐" checked>快餐
            </span>
          </span>
        </div>
        <div class="input-tip"></div>
        <div>
          所属品牌:
          <input type="text" name="" placeholder="输入所属品牌">
          <img src="" alt="">
        </div>
        <div class="input-tip"></div>
        <div>
          联系人:
          <input type="text" name="" placeholder="输入联系人">
          <img src="" alt="">
        </div>
        <div class="input-tip"></div>
        <div>
          联系电话:
          <input type="text" name="" placeholder="输入联系电话">
          <img src="" alt="">
        </div>
        <div class="input-tip"></div>
        <div>
          登录账号:
          <input type="text" name="" placeholder="输入登录账号">
        </div>
        <div class="input-tip"></div>
        <div>
          地址：
          <select name="">
            <option value="volvo" selected>请选择</option>
            <option value="saab">1</option>
          </select>
        </div>
        <div class="input-tip"></div>
        <div>
          <input type="text" name="" placeholder="详细地址">
        </div>
        <div class="input-tip"></div>
        <div>
          上级组织：
          <select name="">
            <option value="volvo" selected>请选择</option>
            <option value="saab">1</option>
          </select>
        </div>
        <div class="input-tip"></div>
        <div>
          <button>添加门店推广菜品信息</button>
        </div>
        <div>
          <span>门店图片</span>
          <span>
            <div>
              <p>+</p>
              <p>上传照片</p>
            </div>
            <p>图片需1M以内</p>
            <p>最佳尺寸: 300*400px</p>
            <p>最多可添加5张</p>
            <div>
              <button>保存</button>
              <button>重置</button>
            </div>
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
    justify-content: center;
    align-items: center;
  }
  .add-cxt {
    background-color: skyblue;

    flex: 2.4;
    /*width: 2.4rem;*/
    height: 100%;
  }
  .form{
    padding: .3rem;
    font-size: .12rem;
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
  .store-list{
    width: 100%;
  }
  .store-left{
    background-color: royalblue;

    flex: 3;
    text-align: right;
    padding-right: .12rem;
    height: .28rem;
    line-height: .28rem;
  }
  .store-right{
    background-color: darkkhaki;

    flex: 7;
    height: .28rem;
    padding-left: .05rem;

  }
  .input-tip{
    height: .18rem;
  }
</style>
