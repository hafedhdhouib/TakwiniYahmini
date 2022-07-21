<script>
import Carousel from "../components/Carousel.vue";
import db from "../firebase/init";
import firebase from "firebase/app";
import Actualite from "../components/actualite.vue";
import FooterCOM from "../components/footerCOM.vue";
import Scroling from '../components/scroling.vue';
export default{
    async beforeMount()  {
       const act = await db.collection("actualites").where("visible", "==", true).get();
        if (act.empty) {
            console.log("No matching documents.");
            return;
        }
        act.forEach(doc => {
            return this.actualite.push(doc.data());
        });



    },
    data() {
        return {
            actualite: [],
        };
    },
    components: { Actualite, Carousel, FooterCOM, Scroling },

}
</script>

<template>
<br><br><br>
  <div class="container ">
<Carousel class="my-5" >
</Carousel> 
   <div class="row mb-5">
      <div class="col-lg-8 col-sm-8">
          <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
<div class="carousel-item" v-for="(banner,idx) in actualite" v-bind:key="idx" :class="{ active: idx==0 }" data-bs-interval="1000" >
      <img :src="banner.photo" alt="" class="img-fluid">
            <div class="carousel-caption  d-md-block">
        <h5>{{banner.titre}}</h5>
        <p style="font-size: 1.5vw;">{{banner.description}}</p>
      </div>

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
</div>
    </div>
    <scroling ></scroling>
  </div>
</template>
<style scoped>
@media (max-width: 720px) {  
  .s {font-size:10px} /*1rem = 16px*/
}

</style>
