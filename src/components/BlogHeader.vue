<template >
    <div class="sticky-header" :class="{ 'is-sticky': isSticky }">
        <nav>
            <ul>
                <li><router-link to="/" exact>博客</router-link>
                    <router-link to="/add" exact>添加博客</router-link>
                    <router-link to="/recycle" exact>回收站</router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    name:"blog-header"
    return {
      isSticky: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      this.isSticky = scrollTop > 0 // 当页面滚动超过100px时启用固定
    }
  }
}
</script>

<style scoped>
.sticky-header {
    position: relative; /* 设置相对定位 */
    min-width: 1500px;
}

.is-sticky {
    position: fixed; /* 设置固定定位 */
    top: 0; /* 设置固定在顶部 */
}

ul{
  list-style-type: none;
  text-align: center;
  margin: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}

a{
  color: antiquewhite;
  text-decoration: none;
  padding: 12px;
  border-radius: 5px;
}
nav{
    background-color: rgba(0, 0, 0, 0.8);
    padding: 30px 0;
    margin-bottom: 40px;
    margin-top: 0%;
}

.router-link-active{
    background: rgba(65, 67, 60, 0.8);
    color: antiquewhite;
}
</style>