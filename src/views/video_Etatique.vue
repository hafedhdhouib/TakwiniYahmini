<template>
   <div class="container my-5 py-5">
      <div class="row my-5">

         <div class="col-lg-6 col-sm-6 p-2"  v-for="video in videos" v-bind:key='video'>
            <div class="ratio ratio-16x9">
               <iframe :src="'https://www.youtube.com/embed/'+video.lien" 
 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
            </div>
         </div>

      </div>
   </div>
</template>

<script>
import db from "../firebase/init";

export default {
   async beforeMount() {
      const video = await db
         .collection("videos")
         .where("type", "==", "etatique")
         .get();
      if (video.empty) {
         console.log("No matching documents.");
         return;
      }
      video.forEach((doc) => {
         return this.videos.push({
            id: doc.id,
            titre: doc.data().titre,
            lien: doc.data().lien
         });
      });
   },
   data() {
      return {
         videos:[]
      }
   },
};
</script>

<style>
.center {
   margin: auto;
}
</style>