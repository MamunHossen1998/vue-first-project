<template>
    <div id="hook">
        <h4>{{ title }}</h4>
        <button @click="change_title">Click Here</button>
    </div>
</template>
<script>
export default {
    name:'HookTest',
    data(){
        return{
            title:'This is Hook'
        }
    },
    methods:{
        change_title(){
            this.title='This is Mamun'
        }
    },
    beforeCreate(){
        alert('Before Created In Hook');
    },
    created(){
        alert('After Created In Hook');
    },
    beforeUpdate(){
        alert('Before Update !');
    },
    updated(){
        alert('Updated !');
    }
}
</script>
<style>

</style>