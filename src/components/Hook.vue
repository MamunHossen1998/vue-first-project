<template>
    <div id="hook">
        <h4>This is Hook</h4>
    </div>
</template>
<script>
export default {
    name:'HookTest',
    data(){
        return{
        }
    },
    beforeCreate(){
        alert('Before Created In Hook');
    },
    created(){
        alert('After Created In Hook');
    },
}
</script>
<style>

</style>