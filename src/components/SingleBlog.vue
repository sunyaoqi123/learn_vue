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
    }
}
</script>

<style>
#single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px dotted #aaa;
}
h1{
    color: rgb(68, 133, 219);
    text-align: center;
}

article{
    color: aliceblue;
    text-align: center;

}
p,ul{
    text-align: right;
}
div{
    border: 1px solid #000;
    margin: auto;
}
</style>

