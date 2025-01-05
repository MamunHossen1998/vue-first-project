<template>
  <div id="AxiosTest">
    <h3>Axios Test In Vue</h3>
    <h5 v-for="(post,index) in posts" :key="index">{{post.title}}</h5>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AxiosTest",
  data() {
    return {
        posts:[]
    }
  },
  methods: {},
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
