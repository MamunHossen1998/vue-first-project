<template>
    <div id="onlineFrien">
        <h2>Online Friend</h2>
        <div v-for="(friend,index) in friends" :key="index">
            <h2 v-if="friend.online">{{friend.name}}</h2>
        </div>
    </div>
</template>friends
<script>
export default {
   name:'OnlineFriend',
   props:['friends'],
   data(){
    return{
    }
   }
}
</script>
<style>
    h2 {
        text-align: center;
        color: blue;
    }
</style>