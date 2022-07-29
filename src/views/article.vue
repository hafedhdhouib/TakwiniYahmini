<template>
  <div class="container py-5">
    <div class="py-5">
    <article class=" m-5 blog-post">
        <h2 class="blog-post-title">{{article.titre}}</h2>
        <p class="blog-post-meta"><a href="#">  </a></p>
<div class="d-flex justify-content-center"><img :src="article.photo" class="w-50" alt="" >
</div>
        <p class="h5 mt-2">{{article.description}}</p>
        <hr>
<!--<div class="img-fluid" v-html="test"></div> -->   </article>
  </div></div>
</template>

<script>

import db from "@/firebase/init";
export default {
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