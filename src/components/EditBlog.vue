<template>
    <div id="added">
        <h2>编辑博客</h2>
        <form v-if="!submmited">
            <label><b>博客标题</b></label>
            <input type="text" v-model="blog.title" required />

            <label><b>博客内容</b></label>
            <textarea style="white-space: pre-line" v-model="blog.content"></textarea>

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
            <button v-on:click.prevent="post">修改博客</button>
        </form>

        <div v-if="submmited">
          <h1>您的博客修改成功！</h1>
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
            id:this.$route.params.id,
            blog: {},
            authors: ["Tang", "And", "Sun"],
            submmited: false
        }
    },
    methods: {
        fetchData(){
            //console.log(this.id)
            this.$http.get('https://blog-1e9cd-default-rtdb.firebaseio.com/posts/' + this.id + ".json")
            .then(response =>{
                //console.log(response.body)
                this.blog=response.body;
            })
        },
        post: function () {
            this.$http.put('https://blog-1e9cd-default-rtdb.firebaseio.com/posts/' + this.id + ".json",this.blog)
                .then(function (data) {
                    console.log(data);
                    this.submmited = true;
                });
        }
    },
    created(){
        this.fetchData();
    }
}
</script>

<style>
h2 {
    font-size: 32px;
}

#added * {
    box-sizing: border-box;
}

#added {
    margin: 20px auto;
    max-width: 800px;
    padding: 0px;
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

input,
textarea,
select,
p,
h3,
li {
    color: antiquewhite;
}

input,
textarea {
    font-size: large;
}

div {
    white-space: pre-line;
}</style>