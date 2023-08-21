<template>
    <div id="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submmited">
            <label><b>博客标题</b></label>
            <input type="text" v-model="blog.title" required />

            <label><b>博客内容</b></label>
            <textarea v-model="blog.content"></textarea>

            <div id="checkboxes">
              | <label><b>Romantic</b></label>
              <input type="checkbox" value="Romantic" v-model="blog.categories">
              | <label><b>Rainbow</b></label>
              <input type="checkbox" value="Rainbow" v-model="blog.categories">
              | <label><b>Jasmine</b></label>
              <input type="checkbox" value="Jasmine" v-model="blog.categories">
              | <label><b>Aurora</b></label>
              <input type="checkbox" value="Aurora" v-model="blog.categories">
            </div>

            <label><b>作者：</b></label>
            <select v-model="blog.author">
              <option v-for="author in authors">
               {{ author }}
              </option>
            </select>
            <button v-on:click.prevent="post">添加博客</button>
        </form>

        <div v-if="submmited">
          <h1>您的博客发布成功！</h1>
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
                <b>{{ category }} </b>
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

<style>

#add-blog * {
    box-sizing: border-box;
}

#add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label {
    display: block;
    margin: 20px 0 10px;
}

input[type="text"],
textarea,
select {
    display: block;
    width: 100%;
    padding: 8px;
    background-color: rgba(0, 0, 0, 0.6);
}

textarea {
    height: 200px;
}

#checkboxes label {
    display: inline-block;
    margin-top: 0;
}

#checkboxes input {
    display: inline-block;
    margin-right: 10px;
    color: antiquewhite;
}

button {
    display: block;
    margin: 20px 0;
    background: rgb(2, 2, 87);
    color: antiquewhite;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;
}

#preview {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}

input,textarea,select,p,h3,li{
    color: antiquewhite;
}

input,textarea{
    font-size: large;
}

</style>