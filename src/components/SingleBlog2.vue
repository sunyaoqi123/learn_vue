<template>
    <div id="single2-blog">
        <h1> 哈哈</h1>
        <article>{{ blog.content }}</article>
        <p>作者：{{ blog.author }}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
                {{ category }}
            </li>
        </ul>
        <button @click="RecycleSingleBlog()">删除</button>
    </div>
</template>

<script>
export default {
    name: "single2-blog",
    data() {
        return {
            id: this.$route.params.id,
            blog: {}
        }
    },
    created() {
        this.$http.get('https://recycleblog-28574-default-rtdb.firebaseio.com/posts2/' + this.id + ".json")
            .then(function (data) {
                console.log(data);
                return data.json();
                //this.blog=data.body;
            })
            .then(function (data) {
                this.blog = data;
            })
    },
    methods: {
        RecycleSingleBlog() {
            this.$http.delete("https://recycleblog-28574-default-rtdb.firebaseio.com/posts2/" + this.id + ".json")
                .then(response => {
                    this.$router.push({ path: "/" })
                })
        }
    }
}
</script>

<style scoped>
#single2-blog {
    max-width: 800px;
    margin: 0 auto;
    padding: 70px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px dotted #aaa;
}

h1 {
    color: rgb(68, 133, 219);
    text-align: center;
}

article {
    color: aliceblue;
    font-size: large;
    line-height: 30px;
}

p,
ul {
    text-align: right;
    line-height: 20px;
}

div {
    border: 1px solid #000;
    margin: auto;
    box-sizing: content-box;
}

button {
    background-color: #4489cf;
    color: aliceblue;
    width: 770px;
    height: 25px;
    border: 0;
    font-size: 16px;

    box-sizing: content-box;
    border-radius: 5px;
}</style>