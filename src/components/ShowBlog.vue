<template>
  <div v-theme id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索">
    <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id">
            <h2 v-rainbow>
                {{ blog.title }}
            </h2>
        </router-link>
        <article>
            {{ blog.body | snippet }}
        </article>
    </div>

  </div>
</template>

<script>
export default {
    name: 'show-blogs',
    data() {
        return {
            blogs: [],
            search: ""
        }
    },

    created() {
        this.$http.get('/posts.json')
            .then(function (data) {
                this.blogs = data.body.slice(0, 10);
            })
    },
    computed: {
        filteredBlogs: function () {
            return this.blogs.filter((blog) => {
                return blog.title.match(this.search);
            })
        }
    }
}
</script>

<style>
#show-blogs {
    max-width: 800px;
    margin: 0 auto;
}

.single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    color: antiquewhite;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px dooted #aaa;
}

#show-blogs a{
    color: #444;
    text-decoration: none;
}

input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;

}
</style>
