<template>
    <div id="single-blog">
        <h1>{{ blog.title }}</h1>
        <article>{{ blog.body }}</article>
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
        this.$http.get('https://jsonplaceholder.typicode.com/posts/' + this.id)
        .then(function(data){
            //console.log(data);
            this.blog=data.body;
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
}

article{
    color: aliceblue;
}
</style>

