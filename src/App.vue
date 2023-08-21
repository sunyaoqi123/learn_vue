<template>
  <div id="app">
    <ShowBlog></ShowBlog>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlog from './components/ShowBlog'
export default{
  name: 'app',
  components: {
    AddBlog, ShowBlog
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
