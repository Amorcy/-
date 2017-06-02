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
					      <md-table-head md-numeric class="checkbox-header" v-if="isCheckBox">
					      	  <md-checkbox   name="my-test2"  class="md-primary md-primary-cellrows"></md-checkbox>
					      </md-table-head>
					      <md-table-head md-numeric v-for="(row,index) in bodyName" :key="index">{{row}}</md-table-head>
					      <md-table-head md-numeric>操11作</md-table-head>
					    </md-table-row>
					  </md-table-header>

					  <md-table-body v-if="!hasRoles">
					    <md-table-row v-for="(row, index) in resultSet" :key="index">
					      <md-table-cell v-if="isCheckBox"><md-checkbox   name="my-test2"  class="md-primary md-primary-cellrows"></md-checkbox></md-table-cell>
					      <!--<md-table-cell v-for="(col, index) in resultSet" :key="index"  md-numeric>10</md-table-cell>-->
                <md-table-cell>{{row.id}}</md-table-cell>
                <md-table-cell>{{row.orgName}}</md-table-cell>
                <md-table-cell>{{row.provinceName}}</md-table-cell>
                <md-table-cell>{{row.storesType}}</md-table-cell>
                <md-table-cell>{{row.curStatus}}</md-table-cell>
                <md-table-cell>{{row.orgForm}}</md-table-cell>
                <md-table-cell>{{row.cityName}}</md-table-cell>
                <md-table-cell>{{row.cityName}}</md-table-cell>
                <md-table-cell>{{row.cityName}}</md-table-cell>
					      <md-table-cell class="actions">
					          <div v-on:click="row.actions"
					           class="options"
					           v-for="(row,index) in actionName"  :key="index" :style="row.txtColor">{{row.txt}}</div></md-table-cell>
					    </md-table-row>
					  </md-table-body>

                       <md-table-body v-else>
					    <md-table-row v-for="(row,index) in roleList">
					      <md-table-cell  md-numeric>
					      	   {{row.id}}
					      </md-table-cell>
                          <md-table-cell  md-numeric>
                          	   {{row.roleName}}
                          </md-table-cell>
                          <md-table-cell  md-numeric>
                          	  <md-checkbox  v-for="(rows,i) in row.roleDesc" name="my-test2"  class="md-primary md-primary-cellrows">{{rows}}</md-checkbox>
                          </md-table-cell>
                          <md-table-cell  md-numeric>
                          	  {{row.roles}}
                          </md-table-cell>
					      <md-table-cell class="actions">
					          <div v-on:click="row.actions"
					           class="options"
					           v-for="(row,index) in actionName"  :key="index" :style="row.txtColor">{{row.txt}}</div></md-table-cell>
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
		props:['bodyName','actionName','resultSet','cellStyle','hasRoles','roleList','isCheckBox','isStore'],
		data(){
		    console.log(this.resultSet);
			return {

			}
		},

		created(){
      console.log(this.resultSet);
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
   .md-table .md-table-cell.md-numeric .md-table-cell-container{
   	 justify-content: center;
   }
   .md-primary-cellrows{
   	margin-right:0.2rem;
   }

   .md-table .md-table-head-text {
    overflow:visible;
   }

   .md-table .md-table-head-container {
    height: 56px;
    padding: 14px 0;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
    display: flex;
    justify-content: space-between;
}

</style>
