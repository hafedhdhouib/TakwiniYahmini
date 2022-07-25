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
    </article>
  </div></div>
</template>

<script>

import db from "@/firebase/init";
export default {
    data() {
        return {
            article:{}
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

</style>