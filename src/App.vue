<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <h1>{{ title }}</h1> 
    <navbar></navbar>
    <description></description>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias tenetur ipsam, et qui ullam tempore dignissimos ab odit quis adipisci iure architecto fugiat unde iusto aliquid impedit sapiente repudiandae. Facere.</p>
    <allFriend :friends="friends"></allFriend>
    <OnlineFriend :friends="friends" @delete="deleteFriend"></OnlineFriend>
    <Hook></Hook>
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue' 
import navbar from './components/Navbar.vue'
import description from './components/Description.vue'
import allFriend from './components/AllFriends.vue'
import OnlineFriend from './components/OnlineFriend.vue'
import Hook from './components/Hook.vue'

export default {
  name: 'App',
  components: { 
    // HelloWorld,
    navbar,
    description,
    allFriend,
    OnlineFriend,
    Hook,
  },
  data(){
    return {
      title:"Bangladesh",
      friends:[
          {name:'A',online:true},
          {name:'B',online:false},
          {name:'C',online:true},
          {name:'D',online:false},
          {name:'E',online:true},
        ]
    }
  },
  methods:{
    deleteFriend(payload){
      console.log(payload);
      this.friends = this.friends.filter(friend =>{
        return  friend.name != payload.name;
      })
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
