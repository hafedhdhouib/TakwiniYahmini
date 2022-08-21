<template>
<teleport to="head">
  <title>{{article.titre}}</title>
  <link :href="article.photo" rel="image_src">
  <meta property="og:title" :content="article.title">
<meta property="og:image" :content="article.photo">

  </teleport>
  <div class="container py-5">
    <div class="py-5">
    <article class=" m-5 blog-post">
        <h2 class="blog-post-title">{{article.titre}}</h2>
        <p class="blog-post-meta"><a href="#">  </a></p>
<div class="d-flex justify-content-center">
  <img :src="article.photo" class="img-fluid" alt="" >
</div>
        <p class="h5 mt-2">{{article.description}}</p>
        <hr>
<!--facebook-->
<a class="btn btn-primary" style="background-color: #3b5998;" @click="sharefb"
  ><i class="fa fa-facebook-f"></i
></a>

<!-- Instagram -->


<!-- Linkedin -->
<a class="btn btn-primary" style="background-color: #0082ca;" @click="sharelinkedin"
  ><i class="fa fa-linkedin"></i
></a>

<!-- Whatsapp -->
<a class="btn btn-primary" style="background-color: #25d366;" @click="shareWhatsApp"
  ><i class="fa fa-whatsapp"></i
></a><!--<div class="img-fluid" v-html="test"></div> -->   </article>
  </div>
  </div>
</template>

<script>

import db from "@/firebase/init";
export default {
name:'Article',
methods: {
    sharefb(){
            const link="https://www.facebook.com/sharer/sharer.php?u=https://www.takwini-yahmini.org/article/"+this.$route.params.id
      window.open(link,'_blank',"width=400,height=400")
    },
          shareMs(){
      const link="https://www.facebook.com/dialog/send?link=https://www.takwini-yahmini.org/article/"+this.$route.params.id
      window.open(link,'_blank',"width=600,height=600")
    },
        shareWhatsApp(){
      
      const link="https://web.whatsapp.com/send?text=https://www.takwini-yahmini.org/article/"+this.$route.params.id
      window.open(link,'_blank',"width=600,height=600")
    },
  },
    data() {
        return {
            article:{},
            test:'<iframe width="640" height="360" src="https://www.youtube.com/embed/0fBYuK0TBf4" title="Bolice 4.0 - Ep 14 | part 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
        }
    },
  async beforeCreate() {
    const res = await db
      .collection("actualites")
      .doc(this.$route.params.id)
      .get();
    if (!res.exists) {
      console.log("No such document!");
    } else {
      return (this.article = res.data());
    }
  },

}
</script>

<style scoped>

.aa{
width:640px; 
height:500px}
</style>