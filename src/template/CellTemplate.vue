<!--
设置弹出框
-->
 <template>
 	<div>
 		 <div class="print-box">
 		 	<h4 class="print-header">票头</h4>
            <div class="print-items">
            	<div  @click="addTemplate(items.id,index,items)" v-for="(items,index) in stores.options"
            	:class="{'print-items-its':items.checked,'print-items-its-check':!items.checked}">{{items.name}}</div>
            </div>
            <div class="print-editor">
            	<i @click="openFontFamily()" class="iconfont icon-ziti"></i>
            	<i @click="changeFontUpper()" class="iconfont icon-method-draw-image"></i>
            	<i @click="changeFontWeight()" class="iconfont icon-jiacu"></i>
            	<i @click="changeFontAlign()" class="iconfont icon-duiqi"></i>
            	<i class="iconfont icon-kongge"></i>
            	<i @click="openChangedSwitch()" class="iconfont icon-yidong" :class="{'checkedStyle':operate.sort}"></i>
            </div>
            <div class="print-checked">
            	<div class="print-checked-box" v-if="operate.edit">

                    <draggable v-model="templates">
                       <transition-group class="print-check-box-edits">
                        		<div  :key="its.id"  v-for="its in templates" class="print-checked-box-items">
                        			<div class="text-name">{{its.name}}</div>
                                    <div class="text-name">{{its.value}}</div>
                        		</div>
                       </transition-group>
                    </draggable>

            	</div>
                <div class="print-checked-box" v-else>
                         <div class="print-template-header-name">
                            <div v-for="(its,editIndex) in templates" class="print-checked-box-items-edit">
                                <input
                                :value="its.name"
                                 @mouseup="changeSelectIndex(its.value,editIndex)"
                                  class="print-checked-box-items-input"
                                 :class="{
                                 'input-edit-fontWeight':its.fontStyle.fontWeight
                                 }"
                                 :style="{
                                    fontFamily:its.fontStyle.fontFamily,
                                    textAlign:its.fontStyle.textAlign
                                    }"
                                 />
                            </div>
                        </div>
                        <div  class="print-template-header-value">
                           <div v-for="(its,editIndex) in templates" class="print-checked-box-items-edit" >
                             <input
                                 @mouseup="changeSelectIndex(its.value,editIndex)"
                                 v-model="its.value" :value="its.value"
                                  class="print-checked-box-items-input"
                                 :class="{
                                 'input-edit-fontWeight':its.fontStyle.fontWeight
                                 }"
                                 :style="{
                                    fontFamily:its.fontStyle.fontFamily,
                                    textAlign:its.fontStyle.textAlign
                                    }"
                                 />
                        </div>
                        </div>
                </div>
            </div>
             <div v-if="fontFamilyBox" class="font-box">
                  <h4 class="print-header">选择字体<span  @click="openFontFamily()" class="close-font">关闭</span></h4>
                  <div class="font-box-line"></div>
                  <div class="font-box-cxt">
                      <div @click="changeFontFamily(ft,ftIndex)" v-for="(ft,ftIndex) in fontFamilyOptions" class="font-box-cxt-items">{{ft.name}}</div>
                  </div>
            </div>
            <div v-else></div>
 		 </div>
         <div class="commit-data" @click="submitMsg">提交</div>
 	</div>
 </template>

 <script>
    import store from '../constant/store';
    import {shareCellAction} from '../constant/actions';
    import draggable from 'vuedraggable';
 	export default {
 		 name:'CellTemplate',
         components:{draggable},
         data(){
         	 return {
         	 	 msg:'xxxx',
         	 	 stores:{
                   id:'',
                   areaCode:'',
                   areaName:'',
                   areaSeq:1,
                   picDirection:1,
                   editType:1,
                    type:'CELL',
                    index:'',
                    options:[]
                 },  //整个设置选项的参数列],
                 selectInput:{        //记录被光标选中的节点
                    index:-1,value:''
                 },
         	 	 templates:[],
                 middleTemplates:[],  //用于去重的中间辅助变量
                 operate:{            //用于纪录是否操作
                    edit:false,//改变位置属性
                 },
                 fontFamilyBox:false,//控制字体选项盒子的现实隐藏
                 fontFamilyOptions:[ //全部字体选项列表
                    {id:0,name:'微软雅黑',value:'微软雅黑'},
                    {id:1,name:'黑体',value:'SimHei'},
                    {id:2,name:'Arial',value:'Arial'},
                    {id:3,name:'宋体',value:'宋体'},
                    {id:4,name:'Helvetica',value:'Helvetica'},
                    {id:5,name:'Tahoma',value:'Tahoma'},
                    {id:6,name:'sans-serif',value:'sans-serif'},
                    {id:7,name:'微软正黑体',value:'Microsoft JhengHei'},
                    {id:8,name:'新宋体',value:'NSimSun'},
                    {id:9,name:'楷体',value:'KaiTi'},
                    {id:10,name:'华文宋体',value:'STSong'},
                    {id:11,name:'仿宋',value:'FangSong'},
                 ],
                 fontUpper:false,//设置字体大小写开关
                 fontAlign:0
         	 }
         },
         methods:{
           // todo 向后台提交数据
           submitMsg(){
             this.stores.shows=this.templates;
             console.log('send data');
             console.log(this.stores);
             store.dispatch(shareCellAction(this.stores));

             this.stores = {}
             this.templates = []
           },
            //将选项添加到列表中
         	addTemplate:function(id,index,items){

                if(this.stores.options[index].checked){
                    this.stores.options[index].checked=false;
                }else{
                    this.stores.options[index].checked=true;
                }

                this.middleTemplates.push(this.stores.options[index]);
                var _mtp=this.middleTemplates;
                var lgh=_mtp.length;
                var hash={};
                var newArray=[];
                for(var i=0;i<lgh;i++){
                    if(!hash[_mtp[i].name]){
                        newArray.push(_mtp[i]);
                        hash[_mtp[i].name]="xxxx";
                    }
                }
                this.templates=newArray;
//                this.stores.shows=this.templates;
//                console.log('send data');
//                console.log(this.stores);
//                store.dispatch(shareCellAction(this.stores));
         	},
            //开启改变子项位置
            openChangedSwitch:function(){
                if(this.operate.edit){
                   this.operate.edit=false;
                }else{
                    this.operate.edit=true;
                }
            },
            //改变字体粗细
            changeFontWeight:function(){
                 if(this.selectInput.index==-1){
                     return false;
                 }
                 if(this.operate.edit){
                    return false;
                 }
                 var _index=this.selectInput.index;
                 if(this.templates[_index].fontStyle.fontWeight){
                         this.templates[_index].fontStyle.fontWeight=false;
                 }else{
                        this.templates[_index].fontStyle.fontWeight=true;
                 }
            },
            //纪录选中文字所在的下标
            changeSelectIndex:function(value,editIndex){
                 var _news={};
                 _news.index=editIndex;
                 _news.value=value;
                 this.selectInput=_news;
                 console.log(_news);
            },
            //打开设置字体窗口
            openFontFamily:function(){
                console.log(this.fontFamilyBox);
                if(this.fontFamilyBox){
                    this.fontFamilyBox=false;
                }else{
                     this.fontFamilyBox=true;
                }
            },
            //改变字体类型
            changeFontFamily:function(ft,ftIndex){
                 if(this.selectInput.index==-1){
                    return false;
                 }
                 var _index=this.selectInput.index;
                 this.templates[_index].fontStyle.fontFamily=ft.value;
            },
            //改变字体大小写
            changeFontUpper:function(){
                 if(this.selectInput.index==-1){
                    return false;
                 }
                 var _index=this.selectInput.index;
                 var _text=this.selectInput.value;
                 console.log(_text);
                 if(this.fontUpper==false){
                    this.templates[_index].value=_text.toUpperCase();
                    this.fontUpper=true;
                 }else{
                    this.templates[_index].value=_text.toLowerCase();
                    this.fontUpper=false;
                 }

            },
            //改变字体对齐方式
            changeFontAlign:function(){
                 if(this.selectInput.index==-1){
                    return false;
                 }
                var _align=this.fontAlign;
                var _index=this.selectInput.index;
                switch(_align){
                     case 0:
                     console.log('left');
                     this.templates[_index].fontStyle.textAlign="left";
                     break;
                     case 1:
                     console.log('center');
                     this.templates[_index].fontStyle.textAlign="center";
                     break;
                     case 2:
                     console.log('right');
                     this.templates[_index].fontStyle.textAlign="right";
                     break;
                }
                this.fontAlign=_align+1;
                if(this.fontAlign>=3){
                   this.fontAlign=0;
                }

            }
         },
         mounted:function(){
            this.stores=store.getState().infos;
            store.subscribe(()=>{
                this.stores=store.getState().infos;
                console.log(this.stores);
            });
         }
 	}
 </script>

 <style scoped>
      @import  '../iconfont/iconfont.css';
      .print-template-header-name{
        width:100%;
        height:50px;
            display: flex;line-height: 50px;
      }
      .print-template-header-value{
        width:100%;
        height:50px;
            display: flex;
            line-height: 50px;
      }
     .print-header{
     	padding-left: 20px;
     	padding-top: 10px;
     	padding-bottom: 10px;
        user-select: none;
     }
     .print-items{
     	width:100%;
     	height:100px;
     	padding-left: 20px;
     	padding-right: 20px;
     	display: flex;
     	flex-wrap: wrap;
     	justify-content: space-between;
     }
     .print-box{
     	width:400px;
     	margin-top: 20px;
     	background-color: rgb(242,242,242);
     	border-radius:4px;
     	box-shadow: 2px 2px 2px #acacac;
        position: relative;
        padding-bottom: 20px;
     }
     .print-items-its{
     	width:80px;
     	height: 26px;
     	background-color: rgb(174,174,174);
     	border-radius:4px;
     	text-align: center;
     	line-height:26px;
     	font-size: 14px;
     	color: #ffffff;
        user-select: none;
     }
     .print-editor{
     	width:100%;
     	height: 40px;
     	padding-left: 20px;
     	padding-right: 20px;
     }
     .print-editor>i{
     	font-size:16px;
     	line-height:40px;
     	letter-spacing:10px;
     }
     .print-checked{
     	width:100%;
     	display: flex;
     	justify-content: center;
     	align-items: center;
     }
     .print-checked-box{
     	width:360px;
     	height:220px;
     	border-radius:4px;
     	background-color: #ffffff;
     	border:1px solid #ddd;
     }
     .print-checked-box-items{
        flex:1;
        padding:10px 0px 10px 0px;
        line-height: 40px;
        border-left: 1px solid #ddd;
        background-color: rgb(242,242,242);
        border-bottom: 1px solid #ddd;

     }
     .text-icon{
        flex:1;
        text-align: center;
     }
     .text-name{
     	flex:5;
     	text-align: left;
     	padding-left: 20px;
     }
     .print-items-its-check{
     	width:80px;
     	height: 26px;
     	background-color: rgb(107,107,107);
     	border-radius:4px;
     	text-align: center;
     	line-height:26px;
     	font-size: 14px;
     	color: #ffffff;
        user-select: none;
     }
     .checkedStyle{
       color: red;
     }
     .print-checked-box-items-edit{
        display: flex;
        height:40px;
        line-height: 40px;
        background-color: #ffffff;
        border-bottom: 1px solid #ffffff;
     }
     .print-checked-box-items-input{
        width: 100%;
        border: none;
        outline: none;
        text-align: center;
     }
     .input-edit-fontWeight{
        font-weight: 700
     }
     .font-box{
        width:250px;
        height:250px;
        border: 1px solid #ddd;
        position: absolute;
        top:150px;
        left:75px;
        border-radius: 4px;
        z-index:999;
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 2px 2px 2px #acacac;
     }
     .font-box-line{
        border-bottom: 1px solid #ddd;
     }
     .font-box-cxt{
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        height: 160px;
        flex-wrap: wrap;
     }
     .font-box-cxt-items{
        width:60px;
        height: 20px;
        font-size: 14px;
        color: #ffffff;
        background-color: rgb(174,174,174);
        border-radius: 4px;
        text-align: center;
        line-height: 20px;

     }
     .close-font{
        display: inline-block;
        padding-left: 120px;

     }
     .commit-data{
        width:100px;
        height:40px;
        border-radius: 4px;
        background-color:#673AB7;
        color: #ffffff;
        font-size: 20px;
        line-height:40px;
        text-align: center;
        user-select: none;
     }
      .container-show-item-line,.container-show-total-line{
        width:100%;
        height: 0.5px;
        border-bottom: 0.5px dashed #ddd;
    }
    .print-check-box-edits{
        width:100%;
        display: flex;
    }
 </style>
