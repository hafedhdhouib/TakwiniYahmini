<template>
     <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
<div class="carousel-item" v-for="(banner,idx) in resultat" v-bind:key="idx" :class="{ active: idx==0 }">
      <img :src="banner.link" alt="" class="img-fluid">
</div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">السابق</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">التالي</span>
    </button>
  </div>
</template>

<script>
import db from "../firebase/init";
import firebase from "firebase/app";
export default{
    async beforeMount()  {
       const res = await db.collection("carousel").where("visible", "==", true).get();
        if (res.empty) {
            console.log("No matching documents.");
            return;
        }
        res.forEach(doc => {
            return this.resultat.push(doc.data());
        });
    },
    data() {
        return {
            resultat: []
        };
    },}
</script>

<style>

</style>