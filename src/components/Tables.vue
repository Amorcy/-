<!--
描述:页面的公共表格
作者:dong.xie
-->
<template>
	
		<div class="tableCxt">
            <div class="tableCxtArea">
            	<md-table v-once>
					  <md-table-header>
					    <md-table-row>
					      <md-table-head md-numeric v-for="(row,index) in bodyName" :key="index">{{row}}</md-table-head>
					      
					      <md-table-head md-numeric>操作</md-table-head>
					    </md-table-row>
					  </md-table-header>

					  <md-table-body>
					    <md-table-row v-for="(row, index) in 10" :key="index">
					      <md-table-cell v-for="(col, index) in resultSet" :key="index" md-numeric>10</md-table-cell>
					      <md-table-cell class="actions"><div v-on:click="row.actions" class="options" v-for="(row,index) in actionName" :key="index">{{row.txt}}</div></md-table-cell> 
					    </md-table-row>
					  </md-table-body>
					</md-table>


            </div>

			
            <div class="pagution">
               <div class="pagution-cxt">
                    <md-button class="md-button md-raised">
					   <
					</md-button>
	                <md-button class="md-button md-raised">1</md-button>
                    <md-button class="md-button md-raised">2</md-button>
                    <md-button class="md-button md-raised">3</md-button>
                    <md-button class="md-button md-raised">4</md-button>
                    <md-button class="md-button md-raised">5</md-button>
                    <md-button class="md-button md-raised">6</md-button>
                    <md-button class="md-button md-raised">7</md-button>
                    <md-button class="md-button md-raised">8</md-button>
                    <md-button class="md-button md-raised">
					   >
					</md-button>
                </div>	
            </div>
		
	</div>
</template>

<script>
	export default {
		name:'tables',
		props:['bodyName','actionName','resultSet'],
		data(){
			return {

			}
		}
	}

</script>

<style>
    .views>div{
    	width: 100%;height: 100%;
    }
	.tables{
		width:12.66rem;
    	height:calc(100% - 1.13rem);
		height:-moz-calc(100% - 1.13rem);
		height:-webkit-calc(100% - 1.13rem);
    	background-color: rgb(237,237,237);
    	overflow-y: scroll;
	}
	.tableCxt{
		width:12rem;
		height: 6.2rem;
		position: relative;
		margin:0.3rem auto;
	}
	.pagution{
		width:100%;
		height: 0.66rem;
		position: absolute;
		bottom: 0rem;
	}
	
	.pagution-cxt{
		 position: absolute;
		 bottom: 0px;
		 right: 0px;
		 width:4.88rem;
		 height:0.64rem;
		 display: flex;
		 justify-content:space-between;
		 align-items: center;
	}
	.md-button {
    margin: 0px;
    width: 0.28rem;
    height: 0.28rem;
    font-size: 0.16rem;
    min-width: 0px; 
    min-height: 0px; 
    margin: 0px 0px; 
    padding: 0 0px; 
    line-height: 0.24rem;
    text-align: center;
    color: #333333;
}
   .tableCxtArea{
       width:100%;
       height: 5.54rem;
       background-color: #ffffff;
       border-top-right-radius: 4px;border-top-left-radius: 4px;
   }
   .md-table .md-table-cell .md-table-cell-container {
    padding: 9px 55px 6px 24px;
    font-size: 0.14rem;
    text-align: left;
   }
   .md-table .md-table-head.md-numeric {
    text-align: left;
    font-size: 0.14rem;
   }
   .options{
   	   padding-left: 5px;
   	   padding-right: 5px;
   	   text-align: left;
   	   color: rgb(51, 135, 255);
   }
   .actions{
	   	width:100%;
	   	height: 100%;
	   	display:flex;
	   	align-items: center;
	   	justify-content: space-between;
   }
   .md-table-cell-container{
   	   	display:flex;
	   	align-items: center;
	   	justify-content: space-around;
   }


</style>