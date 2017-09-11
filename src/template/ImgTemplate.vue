<template>
	<div class="img-template">
		  <h4 class="logo-header">LOGO</h4>
		  <h4 class="logo-header">上传</h4>
		  
		  <div class="img-cxt">
		  	  <img :src="imgSrc" class="img-upload">
		  	  <input @change="uploadImg($event)"  type="file" class="img-upload-btn"></input>
		  </div>
	</div>
</template>



<style scoped>
	.img-template{
		width:400px;
		height: 300px;
		position: absolute;
     	background-color: rgb(242,242,242);
     	border-radius:4px;
     	box-shadow: 2px 2px 2px #acacac;
	}
	.logo-header{
		padding-left: 20px;
     	padding-top: 10px;
     	padding-bottom: 10px;
        user-select: none;
	}
	.img-cxt{
		width:100%;
		height: 200px;
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding-left: 20px;
		position: relative;
	}
	.img-upload{
		width:140px;
		height: 140px;
		border-radius: 4px;
	}
	.img-upload-btn{
		display: block;
		position: absolute;
		left: 20px;
		width:140px;
		height: 140px;
		opacity: 0;
	}

</style>

<script>
    
	 export default {
	 	 name:"ImgTemplate",
	 	 data(){
	 	 	return {
	 	 		 imgSrc:'http://wacowsf.com/wp-content/uploads/2016/12/1024px-KFC_logo.svg_.png'
	 	 	}
	 	 },
	 	 methods:{
	 	 	uploadImg:function(e){
               
	 	 	}
	 	 }
	 }
</script>