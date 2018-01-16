<!--
容器
-->
<script>
  import Api from '../api/api'
  import store from '../constant/store';
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
		  var submitMsg = this.submitMsg
          return <div>
                     <div class="container">

                       <draggable v-model="ele">

	                        {
	                          this.renderComponents(h)
	                        }

			             </draggable>
                   <BoxTemplate type={{types}}></BoxTemplate>
			         </div>

      <div class="commit-data">提交</div>

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
               baseToken:'Basic eW1zLXRlc3Q6UlVLVFRKRUpPOEhUUkJYSEtPTFA=',

      }
		},
    created(){
//      ====================以下为模拟登陆设置localstorge,从而方便获取Token===========================
      Api.setLS('username', 'sell1')
      Api.setLS('password', 'admin')
      var _body={};
      _body.username='sell1';
      _body.password='admin';
      _body.grant_type="password";
//        console.log(Api.formFormat(_body));
      var _options={
        headers:{
          'Content-Type':'application/x-www-form-urlencoded',
          'Authorization':this.baseToken
        }
      };
      this.$http.post('http://xxx.xxx.xxx.xxx:8765/uaa/oauth/token', Api.formFormat(_body), _options)
        .then( (response) => {
          //将token信息保存到本地

          var msg=Api.saveToken(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })

//      ====================以下为获取所有信息===========================
       _options = {
        headers: {
          'Content-Type': 'multipart-form-data',
          'Authorization': Api.getToken()
        }
      }
      this.$http.get('http://xxx.xxx.xxx.xxx:8765/settings/api/print/tmpl/area/189076587302771240',_options)
        .then((res)=>{
//          console.log(res)
        })





    },
		methods:{
      submitMsg(){
        console.log(123)
      },
			clickBox:function(data,index,clickFlag){
             let _index=index.i;
             const self = this
			       if(clickFlag){
			       	  this.components[_index].edit=false;
			       }else{
               this.components.forEach(function (i,index) {
                 self.components[index].edit=false;
               })
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
                                    key={i}
                                    callback={{_callback}}
                                    openbox={{_openBox}}
                                    index={{i}}
                                    name={{items}}
                                    edit={{_edit}}
                                  ></items.componentName>}
                    )}
					        </transition-group>)
		    }

		},
    mounted(){
      store.subscribe(()=>{
//        console.log(store.getState().sendData)
      })
    }

	}
</script>

<style scoped>
	.container{
		width:400px;
		padding: 0px 0px 0px 0px;
		background-color: #ffffff;
		border-radius:4px;
     	box-shadow: 2px 2px 2px #acacac;
     	border:1px solid #ddd;
     	margin: 40px 40px 5px 40px;
     	position: relative;
	}
  .commit-data{
    width:100px;
    height:40px;
    border-radius: 4px;
    background-color:#673AB7;
    color: #ffffff;
    font-size: 20px;
    line-height:40px;
    margin-left: 40px;
    margin-bottom: 40px;
    text-align: center;
    user-select: none;
  }
</style>
