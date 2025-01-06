<template>
  <div id="AxiosTest">
    <h3>Axios Test In Vue</h3>
    <input type="text" v-model="searchItem" placeholder="Search">
    <div v-for="(post,index) in searchPosts" :key="index">
        <h2>{{  $filters.test(post.title)  }}</h2>
    </div><hr>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiosTest",
  data() {
    return {
        posts:[],
        searchItem:'',
    }
  },
  methods: {},
  computed:{
    searchPosts(){
      return this.posts.filter(post =>{
        return post.title.match(this.searchItem)
      })
    }
  },
  created() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      this.posts = response.data;
      this.posts.forEach(function (item) {
        console.log(item.title);
      });
    });
  },
};
</script>
<style></style>
