<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客</router-link>
                <router-link to="/add" exact>添加博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default{
    name:"blog-header"
}
</script>

<style scoped>
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