<template>
	<div class="box-template">
	    
	   
			<div v-if="type.types=='TEXT'">
			    <TxtTemplate></TxtTemplate>
			</div>
			<div v-else>
				<div v-if="type.types=='IMG'">
				    <ImgTemplate></ImgTemplate>
			    </div>
			    <div v-else>
			    	<div v-if="type.types=='HY'">
				        <HYTemplate></HYTemplate>
			        </div>
			        <div v-else>
			        	<div v-if="type.types='CELL'">
			        		<CellTemplate></CellTemplate>
			        	</div>
			        </div>
			    </div>
			</div>
	</div>
</template>



<style scoped>
	.box-template{
		width:400px;
		height: 400px;
		position: absolute;
     	left:440px;
     	top:0px;
	}

</style>

<script>
     import ImgTemplate from './ImgTemplate';
     import TxtTemplate from './TxtTemplate';
     import HYTemplate from './HYTemplate';
     import CellTemplate from './CellTemplate';
	 export default {
	 	 name:"BoxTemplate",
	 	 props:['type','name'],
	 	 components:{ImgTemplate,TxtTemplate,HYTemplate,CellTemplate},
	 	 mounted(){
	 	 	
	 	 }
	 }
</script>