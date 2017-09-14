<!--
设置弹出框
-->
 <template>
 	<div>
 		 <div class="print-box">
 		 	<h4 class="print-header">编辑内容</h4>
            <div class="print-editor">
            	<i @click="openFontFamily()" class="iconfont icon-ziti"></i>
            	<i @click="changeFontUpper()" class="iconfont icon-method-draw-image"></i>
            	<i @click="changeFontWeight()" class="iconfont icon-jiacu"></i>
            	<i @click="changeFontAlign()" class="iconfont icon-duiqi"></i>
            	<i class="iconfont icon-kongge"></i>
            	<i @click="openChangedSwitch()" class="iconfont icon-yidong" :class="{'checkedStyle':operate.sort}"></i>
            </div>
            <div class="print-checked">
            	<div class="print-checked-box">
                           <input
                           class="text-inputs"
                           :value="txt.text.textValue"
                           :class="{'input-font-weight':txt.text.textWeight}"
                           :style="{'textAlign':txt.text.textAlign,'fontFamily':txt.text.textFamily}"
                           />

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
   import Api from '../api/api'
   import draggable from 'vuedraggable';
    import store from '../constant/store';
    import {shareTxtAction} from '../constant/actions';
 	export default {
 		 name:'TxtTemplate',
         components:{draggable},
         data(){
         	 return {
             msg:'xxxx',
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
             fontAlign:0,//居中状态码
             txt:{
                 id:'',
                 areaCode:'',
                 areaName:'',
                 areaSeq:1,
                 picDirection:1,
                 editType:1,
                 type:'TXT',
                 index:'',
                 text:{
                   textValue:'物美店庆大酬宾欢迎您！',
                   textUpper:false,
                   textFamily:'',
                   textAlign:'center',
                   textWeight:false
                 }

              },
              fontWeight:false //细字体
         	 }
         },
         methods:{

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
                 console.log(this.txt.text.textValue.trim("").length);
                 if(this.txt.text.textValue.trim("").length==0){
                     return false;
                 }
                 if(this.fontWeight){
                      this.fontWeight=false;
                      this.txt.text.textWeight=false;
                 }else{
                      this.fontWeight=true;
                      this.txt.text.textWeight=true;
                 }
                 store.dispatch(shareTxtAction(this.txt));
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
                 this.txt.text.textFamily=ft.value;
                 store.dispatch(shareTxtAction(this.txt));
            },
            //改变字体大小写
            changeFontUpper:function(){
                 console.log(this.txt.text.textValue.toUpperCase());
                 if(this.fontUpper==false){
                    this.txt.text.textValue=this.txt.text.textValue.toUpperCase();
                    this.fontUpper=true;
                 }else{
                    this.txt.text.textValue=this.txt.text.textValue.toLowerCase();
                    this.fontUpper=false;
                 }


            },
            //改变字体对齐方式
            changeFontAlign:function(){
                 if(this.txt.text.textValue.trim("").length==0){
                     return false;
                 }
                var _align=this.fontAlign;
                switch(_align){
                     case 0:
                     this.txt.text.textAlign="left";
                     break;
                     case 1:
                     console.log('center');
                     this.txt.text.textAlign="center";
                     break;
                     case 2:
                     console.log('right');
                     this.txt.text.textAlign="right";
                     break;
                }
                this.fontAlign=_align+1;
                if(this.fontAlign>=3){
                   this.fontAlign=0;
                }
                store.dispatch(shareTxtAction(this.txt));

            },
            changeTextValue:function(e){

            },
           submitMsg(){
             this.txt.text.textValue=document.querySelector('.text-inputs').value;

             let data = {
               area:[
                 {
                   areaCode:this.txt.areaCode,
                   areaName:this.txt.areaName,
                   areaSeq:this.txt.areaSeq,
                   editType:this.txt.editType,
                   tmplId:'189076587302771240',
                   picDirection:this.txt.picDirection,
                   areaContent:JSON.stringify(this.txt.text)
                 }
               ]
             }
             var _options = {
               headers: {
//                 'Content-Type': 'application/json',
                 'Authorization': Api.getToken()
               }
             }
             console.log(data)
             this.$http.put('http://101.200.79.3:8765/settings/api/print/tmpl/update/189076587302771240',data,_options)
               .then((res)=>{
                 console.log(res)
               })


             this.txt.text.textValue=document.querySelector('.text-inputs').value;
             store.dispatch(shareTxtAction(this.txt))
//             this.txt = {}
           }
         },
         mounted:function(){
           this.txt=store.getState().txt;
              store.subscribe(()=>{
              	 this.txt=store.getState().txt;
              });
         }
 	}
 </script>

 <style scoped>
      @import  '../iconfont/iconfont.css';

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
     	height:160px;
     	margin-top: 20px;
     	background-color: rgb(242,242,242);
     	border-radius:4px;
     	box-shadow: 2px 2px 2px #acacac;
        position: relative;
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
     .text-inputs{
     	flex:1;
     	height:50px;
     	border:none;
     	outline: none;
     }
     .print-checked{
     	width:100%;
     	display: flex;
     	justify-content: center;
     	align-items: center;
     }
     .print-checked-box{
     	width:360px;
     	height:60px;
     	border-radius:4px;
     	background-color: #ffffff;
     	border:1px solid #ddd;
     	display: flex;

     }
     .print-checked-box-items{
        display: flex;
        height:40px;
        line-height: 40px;
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
        flex:1;
        border: none;
        outline: none;
        padding-left: 20px;
        padding-right: 20px;
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
     .input-font-weight{
        font-weight: 700
     }








 </style>
