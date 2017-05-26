<template>
   <div>
      <md-button class="md-raised loginBtn">Default</md-button>
   </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
   .loginBtn{
   	   min-width: 0px;
       min-height: 0px;
       width:3rem;
       height:0.6rem;
       
   }
</style>
