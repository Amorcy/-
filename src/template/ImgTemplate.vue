<template>
	<div class="img-template">
		  <h4 class="logo-header">LOGO</h4>
		  <h4 class="logo-header">上传</h4>

		  <div class="img-cxt">
		  	  <img :src="img.imgSrc" class="img-upload">
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
  import Api from '../api/api'
  import store from '../constant/store';
   import {shareImgAction} from '../constant/actions';


   export default {
	 	 name:"ImgTemplate",
	 	 data(){
	 	 	return {
        img:{
          id:'',
          areaCode:'',
          areaName:'',
          areaSeq:1,
          picDirection:1,
          editType:1,
          type:'IMG',
          index:'',
          imgSrc:'http://wacowsf.com/wp-content/uploads/2016/12/1024px-KFC_logo.svg_.png',
        },
	 	 	}
	 	 },
	 	 methods:{
	 	 	uploadImg:function(e){
        let files = e.target.files
//        let data = files[0]
//        data = JSON.stringify(data)
        var formData = new FormData()
        for (var i = 0, len = files.length; i < len; i++) {
          formData.append('files', files[i]);

        }
        if (files) {
          var _options = {
            headers: {
              'Content-Type': 'multipart-form-data',
              'Authorization': Api.getToken()
            }
          }
          this.$http.post('http://101.200.79.3:8765/docs/api/docs/upload', formData, _options).then((res) => {
            this.$http.get('http://101.200.79.3:8765/api/config',_options).then((r)=>{
              this.img.imgSrc = r.body.docsUrl + res.body[0].path
              store.dispatch(this.img)
            })
          }).catch((err) => {
            console.log(err)
          })
        }
	 	 	}
	 	 },
     mounted(){
       this.img=store.getState().img;
       store.subscribe(()=>{
	 	     this.img = store.getState().img

       })
     }
	 }
</script>
