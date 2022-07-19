<template>
  <div class="container my-5">
    <div class="row p-5">
        <a :href="resultat.pdf"  target="_blank" class="col-lg-6 col-sm-6" v-for="resultat in resultat" v-bind:key="resultat">
        <div class="portfolio-item">
               <img :src="resultat.thumbnail" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6 class="s">قائمة مؤسسات التكوين المهني العمومية </h6>
                  </div>
               </div>
         </div>

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
  .s {font-size:10px} /*1rem = 16px*/
}
.portfolio-overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 30px;
    color: white;
}
.portfolio-item{
    overflow: hidden;
    position: relative;
}


</style>