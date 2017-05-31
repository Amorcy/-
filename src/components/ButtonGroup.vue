<template>
   <div class="btnCxt">
   	
			     <div class="btngroup">
				    <md-button v-for="(row,index) in btnList"  
				    class="md-raised md-primary btn-items" 
				    :style="row.styles"
				    @click.native="row.action"
				    >{{row.title}}</md-button>
				</div>

				<div class="btnlabel" >
					 <span v-if="labelIs" v-for="(row , index) in btnLabel">{{row.text}}:{{row.value}}</span>
				</div>


   </div>
	
</template>

<script>
	export default {
		 name:"ButtonGroup",
		 props:['btnList','btnLabel','labelIs'],
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
.btnCxt{
	display: flex;
	justify-content: center;
	align-content: center;
	width:12rem;height:0.55rem;
	margin:0 auto;
   display: flex;
   align-items: flex-end;
}
		
.btngroup,.btnlabel{
   width:6rem;
   height:0.55rem;
   overflow:hidden;
   display: flex;
   align-items: flex-end;
  
}
.btnlabel{
	 justify-content: flex-end;
}
.btnlabel>span{
  font-size: 0.14rem;
  color:'#333333';
  text-align: right;
  width:1.17rem;
}
.btn-items{
	font-size: 0.14rem;
	margin-right:0.3rem;
}
</style>