<script>
import Carousel from "../components/Carousel.vue";
import db from "../firebase/init";
import firebase from "firebase/app";
import Actualite from "../components/actualite.vue";
import FooterCOM from "../components/footerCOM.vue";
export default{
    async beforeMount()  {
      
        const res = await db.collection("actualites").where("visible", "==", true).get();
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
    },
    components: { Actualite, Carousel, FooterCOM }
}
</script>

<template>
<br><br><br>
  <div class="container">
<Carousel class="my-5" >
</Carousel> 
   <div class="row mb-5">
      <div v-for="resultat in resultat" v-bind:key="resultat" class="col-lg-6 col-sm-6">
<Actualite :description="resultat.description" :photo="resultat.photo" :title="resultat.titre"></Actualite>
</div>
    </div>
  </div>
</template>
