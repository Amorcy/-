<!--
添加门店组件
-->
<template>
  <div class="add-business">
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
        <div class="store-list store-pic">
          <span class="store-left">添加logo:</span><span class="store-right">
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
          <span class="store-left">品牌介绍:</span><span class="store-right">
             <textarea>
               
             </textarea>
          </span>
        </div>
        <div class="input-tip"></div>
        <div class="store-list">
          <span class="store-left">&nbsp</span><span class="store-right vertify">
              <button type="button">保存</button>
              <button type="button">重置</button>
          </span>
        </div>
      </form>
    </div>
    <div class="add-brands">
         <div class="brands-cxt">
              <div class="b-ct">
                
              </div>
              <div class="b-btns">
                  <div class="b-btns-btns">
                      <span class="b-btns-edit">编辑</span>
                      <span class="b-btns-line"></span>
                      <span class="b-btns-delete">删除</span>
                  </div>
                   <div class="b-btns-drops">
                       <span>开启<i class="iconfont icon-tubiao10"></i></span>
                  </div>
              </div>
         </div>


         <div class="brands-cxt">
              <div class="b-ct">
                
              </div>
              <div class="b-btns">
                  <div class="b-btns-btns">
                      <span class="b-btns-edit">编辑</span>
                      <span class="b-btns-line"></span>
                      <span class="b-btns-delete">删除</span>
                  </div>
                   <div class="b-btns-drops">
                       <span>开启<i class="iconfont icon-tubiao10"></i></span>
                  </div>
              </div>
         </div>
         <div class="brands-cxt">
              <div class="b-ct">
                
              </div>
              <div class="b-btns">
                  <div class="b-btns-btns">
                      <span class="b-btns-edit">编辑</span>
                      <span class="b-btns-line"></span>
                      <span class="b-btns-delete">删除</span>
                  </div>
                   <div class="b-btns-drops">
                       <span>开启<i class="iconfont icon-tubiao10"></i></span>
                  </div>
              </div>
         </div>
    </div>
    <Paginate></Paginate>
  </div>
</template>

<script>
  import Tables from './Tables';
  import Paginate from './Paginate';
  export default {
    name: 'addBrands',
    components:{Paginate},
    data(){
      return {
      }
    }
  }

</script>

<style>
  .b-btns{
    height:0.27rem;
    width: 2.54rem;
  }
  .b-ct{
    width:2.54rem;
    height:1.65rem;
  }
  .b-btns-drops{
    width:0.79rem;
    height:0.27rem;
    float: right;
    text-align: center;
    line-height: 0.27rem;
  }
  .b-btns-btns{
    width:1.05rem;
    height:0.27rem;
    border:1px solid #dddddd;
    border-radius: 2px;
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .b-btns-edit,.b-btns-delete{
      flex:1;
      line-height: 0.27rem;
      font-size: 0.14rem;
      text-align: center;
  }
  .b-btns-delete{
    color:red;
  }
  .b-btns-line{
    width:1px;
    height: 100%;
    background-color: #dddddd;
  }
  .add-business {
    width: 100%;
    height: 100%;
    display: flex;

  }
  .add-brands {
    flex: 7.6;
    height: 100%;
    display: flex;
    justify-content: space-around;
    padding-top:0.1rem;
    flex-direction: row;
    flex-wrap: wrap;
  }
 
  .add-brands-menu {
    flex:2.4;
    height: 100%;
    font-size: .12rem;
    background-color: #ffffff;
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
  .store-right input,.store-right textarea{
    width: 1.7rem;
    height: .28rem;
    padding-left: .05rem;
    outline: none;
    border: 1px solid grey;
    border-radius: 3px;
    background-color: #f7f7f7;
  }
  .store-right textarea{
    width: 1.7rem;
    height: .36rem;
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
  .add-brands>div{
    width:2.87rem;
    height: 2.26rem;
    border:1px solid #dddddd;
    border-radius: 4px;
    margin-top:0.17rem;
    background-color: #ffffff;
    padding:0.18rem;
  }

</style>
