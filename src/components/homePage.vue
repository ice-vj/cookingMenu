import homePage from './components/homePage'
<template>
  <div class="home">

    <img alt="cooking" src="../assets/home.png">
    <h1>Welcome to home cooking!</h1>
 
    <h2><router-link to="/menu" >come on！</router-link></h2>
    
  </div>
</template>

<script>

export default {
  name: 'cooking',
  props: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home {
  text-align: center;
}
a {
  color: red;
}
</style>
