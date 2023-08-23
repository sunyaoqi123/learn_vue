<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.content }}</article>
        <p>作者：{{ blog.author }}</p>
        <p>分类：</p>
        <ul>
            <li v-for="category in blog.categories">
                {{ category }}
            </li>
        </ul>
        <button @click="deleteSingleBlog()">删除</button>
        <button>
        <router-link :to="'/edit/' + id" style="color:white; text-decoration: none;">编辑</router-link>
        </button>
    </div>
</template>

<script>
export default{
    name:"single-blog",
    data(){
        return{
            id:this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('https://blog-1e9cd-default-rtdb.firebaseio.com/posts/' + this.id + ".json")
        .then(function(data){
            console.log(data);
            return data.json();
            //this.blog=data.body;
        })
        .then(function(data){
            this.blog = data;
        })
    },
    methods:{
        deleteSingleBlog(){
            this.$http.delete("https://blog-1e9cd-default-rtdb.firebaseio.com/posts/" + this.id + ".json")
            .then(response =>{
                this.$router.push({path:"/"})
            })
        }
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 800px;
    margin: 0 auto;
    padding: 70px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px dotted #aaa; 
}
h1{
    color: rgb(68, 133, 219);
    text-align: center;
}

article{
    color: aliceblue;
    font-size: large;
    line-height: 30px;
}
p,ul{
    text-align: right;
    line-height: 20px;
}
div{
    border: 1px solid #000;
    margin: auto;
    box-sizing: content-box;
}
button{
    background-color:#4489cf ;
    color:aliceblue;
    width: 770px;
    height: 25px;
    border: 0;
    font-size: 16px;
    
    box-sizing: content-box;
    border-radius: 5px;
}
</style>

