<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submmited">
            <label>博客标题</label>
            <input type="text" v-model="blog.title" required />

            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
              | <label>Romantic</label>
              <input type="checkbox" value="Romantic" v-model="blog.categories">
              | <label>Rainbow</label>
              <input type="checkbox" value="Rainbow" v-model="blog.categories">
              | <label>Jasmine</label>
              <input type="checkbox" value="Jasmine" v-model="blog.categories">
              | <label>Aurora</label>
              <input type="checkbox" value="Aurora" v-model="blog.categories">
            </div>

            <label>作者：</label>
            <select v-model="blog.author">
              <option v-for="author in authors">
               {{ author }}
              </option>
            </select>
            <button v-on:click.prevent="post">添加博客</button>
        </form>

        <div v-if="submmited">
          <h3>您的博客发布成功！</h3>
        </div>

        <div id="preview">
            <h3>博客总览</h3>
            <p><b>博客标题：</b></p>
            <p>{{ blog.title }}</p>
            <p><b>博客内容：</b></p>
            <p>{{ blog.content }}</p>
            <p><b>博客分类：</b></p>
            <ul>
              <li v-for="category in blog.categories">
                {{ category }} 
              </li>
            </ul>
            <p><b>作者:</b></p>
            <p>{{ blog.author }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'add-blog',
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: []
      },
      authors: ["Tang", "And", "Sun"],
      submmited: false
    }
  },
  methods: {
    post: function () {
      this.$http.post("https://jsonplaceholder.typicode.com/posts", {
        title: this.blog.title,
        body: this.blog.content,
        userId: 1
      })

        .then(function (data) {
          console.log(data);
          this.submmited = true;
        });
    }
  }
}
</script>

<style scoped>

</style>