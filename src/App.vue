<template>
  <div id="app">
    <blog-header></blog-header>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
import router from './router'
import BlogHeader from './components/BlogHeader.vue'
export default{
  name: 'app',
  components: {
    AddBlog, ShowBlog, BlogHeader,
    router
}
}
</script>

<style lang="less">

body{
    background-image: url("../static/beijing1.png");
    width: 100%;min-width: 990px;
    height: 100%;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
