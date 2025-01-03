<template>
  <!-- <div id="app"> -->
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>{{ title }}</h1> 

    <navbar></navbar>
    <description></description>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur ipsam, et qui ullam tempore dignissimos ab odit quis adipisci iure architecto fugiat unde iusto aliquid impedit sapiente repudiandae. Facere.</p>
  <!-- </div> -->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' 
import navbar from './components/Navbar.vue'
import description from './components/Description.vue'

export default {
  name: 'App',
  components: { 
    // HelloWorld,
    navbar,
    description
  },
  data(){
    return {
      title:"Bangladesh"
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
