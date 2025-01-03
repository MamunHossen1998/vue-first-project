<template>
    <div id="allFriend">
        <h3>Online All Friend</h3>
        <div v-for="(friend,index) in friends" :key="index">
            <h4> {{ friend.name }} </h4>
        </div>
    </div>
</template>
<script>
export default {
    name:'AllFriend',
    props:['friends'],
    data(){
        return{
        }
    }
}
</script>
<style>
h4 {
    color:green;
    text-align: center;
}
</style>