<template>
  <div id="AxiosTest">
    <h3>Axios Test In Vue</h3>
    <div v-for="(post,index) in posts" :key="index">
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
