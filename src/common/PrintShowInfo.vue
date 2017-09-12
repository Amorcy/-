<!--
展示明细设置
-->
<template>
	<div class="container-show-item"
           @click="callback._callback(name.items,index,edit._edit)"
           :class="{'title-select':edit._edit}"
    >
        	  	  <div class="container-show-item-header">
        	  	  	  <div v-for="names in stores.shows" class="container-show-item-header-cxt">{{names.name}}</div>
        	  	  </div>
        	  	  <div class="container-show-item-line"></div>
        	  	  <div class="container-show-item-cxt">
        	  	  	   <div v-for="values in stores.shows" class="container-show-item-header-cxt">{{values.value}}</div>
        	  	  </div>
        	  	  <div class="container-show-item-line"></div>
                  <div class="edit-box" v-if="edit._edit==true">
                       <span @click.stop="handleClick($event)">编辑</span>
                    <span @click.stop="openbox._openBox($event,name.items,index,'ADD')">加内容</span>
                    <span @click.stop="openbox._openBox($event,name.items,index,'REMOTE')">删除</span>
                    </div>
                    <div v-else></div>
        	  </div>

</template>
<style scoped>
	 .container-show-item{
    	width:100%;

        position: relative;
        padding:20px 0px 20px 0px;

    }
    .container-show-item{
    	width:100%;
        padding: 0px 10px 0px 10px;
    }
    .container-show-item-header,.container-show-total-header{
    	width:100%;
    	height:40px;
    	display: flex;
    	justify-content: space-around;
    	align-items: center;
    }
    .container-show-item-cxt{
    	width:100%;
    	height:60px;
    	display: flex;
    	justify-content: space-around;
    	align-items: center;

    }
     .container-show-item-header-value{
    	flex: 1;
        width:60px;
        height:40px;
        text-align: center;
        line-height: 40px;
        font-size: 14px;
    }
     .container-show-item-line,.container-show-total-line{
    	width:100%;
    	height: 0.5px;
    	border-bottom: 0.5px dashed #ddd;
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
    import {shareCellAction} from '../constant/actions';
	export default {
		 name:'PrintShowInfo',
     props:['index','name','callback','edit','openbox'],
     data(){
         return {
              stores:{
                type:'CELL',
                index:'',
                shows:[
                     {id:0,name:"门店名称",checked:true,value:'门店名称',
                     fontStyle:{
                                           fontFamily:'',
                                           fontWeight:false,
                                           textAlign:'',
                      }},

                      {id:1,name:"商品代码",checked:true,value:"商品代码",
                                        fontStyle:{
                                           fontFamily:'',
                                           fontWeight:false,
                                           textAlign:'',
                      }},
                      {id:2,name:"单价",checked:true,value:"单价",
                                        fontStyle:{
                                           fontFamily:'',
                                           fontWeight:false,
                                           textAlign:'',
                      }}
                ],
                options:[
                    {id:0,name:"商品代码",checked:true,value:'商品代码',
                    fontStyle:{
                       fontFamily:'',
                       fontWeight:false,
                       textAlign:'',
                    }},

                    {id:1,name:"商品名称",checked:true,value:"商品名称",
                    fontStyle:{
                       fontFamily:'',
                       fontWeight:false,
                       textAlign:'',
                    }},
                    {id:2,name:"单价",checked:true,value:"单价",
                    fontStyle:{
                       fontFamily:'',
                       fontWeight:false,
                       textAlign:'',
                    }},
                    {id:3,name:"数量",checked:true,value:"数量",
                    fontStyle:{
                       fontFamily:'',
                       fontWeight:false,
                       textAlign:'',
                    }},
                    {id:4,name:"优惠",checked:true,value:"优惠",
                    fontStyle:{
                       fontFamily:'',
                       fontWeight:false,
                       textAlign:'',
                    }},
                    {id:5,name:"金额",checked:true,value:"金额",
                    fontStyle:{
                       fontFamily:'',
                       fontWeight:false,
                       textAlign:'',
                    }},
                    ]
              }
         }
     },
     methods:{
        handleClick:function($event){
            this.openbox._openBox($event,this.name.items,this.index,'EDIT');
            this.stores.index=this.index.i;

            store.dispatch(shareCellAction(this.stores));

            console.log(this.stores);

        }
     },
    mounted(){
      store.subscribe(()=>{
        console.log(this.index.i)
        console.log(store.getState().infos.index)
        if(this.index.i == store.getState().infos.index){
          this.stores.shows = store.getState().infos.shows
        }
      })
    }



	}
</script>
