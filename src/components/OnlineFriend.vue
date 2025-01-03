<template>
    <div id="onlineFrien">
        <h2>Online Friend</h2>
        <div v-for="(friend,index) in friends" :key="index">
            <h2 v-if="friend.online" @click="unfriend(friend.name)">{{friend.name}}</h2>
        </div>
    </div>
</template>
<script>
export default {
   name:'OnlineFriend',
   props:['friends'],
   data(){
    return{
    }
   },
   methods:{
        unfriend(name){
            this.$emit('delete',{name})
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