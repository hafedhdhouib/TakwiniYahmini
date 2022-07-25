<template>
  <div class="container my-5">
    <div class="row my-5 p-5">
        <a :href="resultat.pdf"  target="_blank" class=" my-5 col-lg-6 col-sm-6" v-for="resultat in resultat" v-bind:key="resultat">
        <div class="portfolio-item">
               <img :src="resultat.thumbnail" class="img-thumbnail" alt="">
         </div>
                     <div class="s text-center text-primary h3">{{resultat.titre}} </div>
           </a>
 </div>
  </div>
</template>

<script>
import db from "../firebase/init";
import firebase from "firebase/app";

export default {
  async beforeMount()  {
       const res = await db.collection("guides").where("visible", "==", true).get();
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
}
</script>

<style>
@media (max-width: 720px) {  
  .s {font-size:20px} /*1rem = 16px*/
}

</style>