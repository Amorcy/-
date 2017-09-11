<!--
容器
-->
<script>
    import PrintBase from './PrintBase';
    import PrintTitle from './PrintTitle';
    import PrintLogo from './PrintLogo';//
    import PrintShowInfo from './PrintShowInfo';
    import PrintStoreInfo from './PrintStoreInfo';
    import PrintShowTotal from './PrintShowTotal';
    import PrintFooter from './PrintFooter';
    import PrintBarCode from './PrintBarCode';
    
    import draggable from 'vuedraggable';
    //import template components

    import HYTemplate from '../template/HYTemplate';
    import BoxTemplate from '../template/BoxTemplate';

	export default {
		render:function(h){
		  var ele=this.components;
		  var types=this.type;
		  var values=this.values;
          return <div>
                     <div class="container">
                       
                       <draggable v-model="ele">
			              	
	                        {
	                          this.renderComponents(h)
	                        }
                           
			             </draggable>
                         <BoxTemplate 
                         type={{types}}
                        
                         ></BoxTemplate>
			         </div>
				</div>
		},
		name:'PrintContainer',
		components:{
			draggable,
			PrintTitle,
			PrintLogo,
			PrintStoreInfo,
			PrintShowInfo,
			PrintShowTotal,
			PrintFooter,
			PrintBarCode,
			PrintBase
		},
		data(){
			
			return {
              components:[
                     {id:'base',name:'基本组件',
                     component:PrintBase,type:'MAIN',componentName:'PrintBase',edit:false},

                     {id:'title',name:'标题组件',
                     component:PrintTitle,type:'TEXT',componentName:'PrintTitle',edit:false},

                     {id:'logo',name:'logo组件',
                     component:PrintLogo,type:'IMG',componentName:'PrintLogo',edit:false},

                     {id:'store',name:'店面信息组件',
                     component:PrintStoreInfo,type:'HY',componentName:'PrintStoreInfo',edit:false},

                     {id:'info',name:'展示信息组件',
                     component:PrintShowInfo,type:'CELL',componentName:'PrintShowInfo',edit:false},

                     {id:'total',name:'优惠汇总组件',
                     component:PrintShowTotal,type:'CELL',componentName:'PrintShowTotal',edit:false},

                     {id:'footer',name:'票脚组件',
                     component:PrintFooter,type:'HY',componentName:'PrintFooter',edit:false},

                     {id:'barcode',name:'二维码组件',
                     component:PrintBarCode,type:'IMG',componentName:'PrintBarCode',edit:false}
               ],
               type:'NONE',
			}
		},
		methods:{
			clickBox:function(data,index,clickFlag){
                   var _index=index.i;
			       if(clickFlag){
			       	  this.components[_index].edit=false;
			       }else{
			       	   this.components[_index].edit=true;
			       }

            },
            mountComponentByType:function(type,items){
                  this.type=type;
                  this.values=items;
            },
            openBox:function($event,items,index,type){
            	//console.log($event);
                switch(type){
                   case "EDIT":
                    //console.log(items);
                    var editType=items.type;
                    this.mountComponentByType(editType,items);
                   break;
                   case "ADD":
                   break;
                   case "REMOVE":
                   break;
                }
            },
			renderComponents:function(h){
				    
				    var _callback=this.clickBox;
				    var _openBox=this.openBox;
				   
					return (<transition-group>
					{this.components.map((items,i)=>
						   { 
                            var _edit=items.edit;
                
						   	return <items.componentName 
						   						    key={{i}} 
						   						    callback={{_callback}}
						   						    openbox={{_openBox}}
						   						    index={{i}}
						   						    name={{items}}
						   						    edit={{_edit}}
						   						    ></items.componentName>}
						)}
					 </transition-group>)	
		    }
		    
		}
		
	}
</script>

<style scoped>
	.container{
		width:400px;
		padding: 0px 0px 20px 0px;
		background-color: #ffffff;
		border-radius:4px;
     	box-shadow: 2px 2px 2px #acacac;
     	border:1px solid #ddd;
     	margin: 40px;
     	position: relative;
	}
</style>