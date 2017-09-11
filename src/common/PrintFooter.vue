<!--
底部的电话和网址设置
-->
<template>
	<div class="container-show-footer"
          @click="callback._callback(name.items,index,edit._edit)"
          :class="{'title-select':edit._edit}"
          >
        	  	   <div v-for="its in stores.shows" class="net-address">{{its.value}}</div>
        	  	   
                    <div class="edit-box" v-if="edit._edit==true">
                        <span @click.stop="handleClick($event)">编辑</span>
                    <span @click.stop="openbox._openBox($event,name.items,index,'ADD')">加内容</span>
                    <span @click.stop="openbox._openBox($event,name.items,index,'REMOTE')">删除</span>
                    </div>
                    <div v-else></div>
              </div>
        	  </div>
</template>
<style scoped>
	 .container-show-footer{
    	width: 100%;
    	padding: 20px 10px 20px 10px;
    	display: flex;
    	justify-content: center;
    	flex-direction: column;
    	border:1px  dashed #ffffff;
        position: relative;
    }
    .title-select{
        border:1px dashed rgb(107,107,107);
    }
    .edit-box{
        width:180px;
        height:20px;
        position: absolute;
        background-color: rgb(107,107,107);
        line-height: 20px;
        display: flex;
        bottom:0px;
        right: 0px;
        z-index: 9999;
    }
    .edit-box>span{
        flex:1;
        color: #ffffff;
        text-align: center;
        z-index: 9999;
    }
</style>
<script>
    import store from '../constant/store';
    import {shareHYAction} from '../constant/actions';
	export default {
         name:"PrintFooter",
         props:['index','name','callback','edit','openbox'],
         data(){
            return {
                stores:{
                    type:'HY',
                    index:'',
                    shows:[{id:0,name:"网址 www.youmeishiyun.com",checked:true,value:'网址 www.youmeishiyun.com',
                   fontStyle:{
                                         fontFamily:'',
                                         fontWeight:false,
                                         textAlign:'',
                    }},
                
                    {id:1,name:"电话 010-66708234",checked:true,value:"电话 010-66708234",
                                         fontStyle:{
                                         fontFamily:'',
                                         fontWeight:false,
                                         textAlign:'',
                    }},],
                    options:[{id:0,name:"门店名称",checked:true,value:'门店名称',
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},

                      {id:1,name:"订单号",checked:true,value:"订单号",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:2,name:"收款台号",checked:true,value:"收款台号",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:3,name:"收款员代码",checked:true,value:"收款员代码",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:4,name:"收款员姓名",checked:true,value:"收款员姓名",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:5,name:"销售员代码",checked:true,value:"销售员代码",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:6,name:"销售员姓名",checked:true,value:"销售员姓名",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:7,name:"交易时间",checked:true,value:"交易时间",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:8,name:"网址",checked:true,value:"网址",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }},
                      {id:9,name:"服务热线",checked:true,value:"服务热线",
                      fontStyle:{
                         fontFamily:'',
                         fontWeight:false,
                         textAlign:'',
                      }}]
                }
            }
         },
         methods:{
            handleClick:function($event){
                this.openbox._openBox($event,this.name.items,this.index,'EDIT');
                this.stores.index=this.index.i;
                console.log(this.stores);
                store.dispatch(shareHYAction(this.stores));
            },
            updateViews:function(){
               if(this.index.i==store.getState().stores.index){
                    this.stores=store.getState().stores;
                }
            }
         },
         mounted:function(){
                 this.updateViews();
             store.subscribe(()=>{
                 this.updateViews();
             });
         }
    }

</script>