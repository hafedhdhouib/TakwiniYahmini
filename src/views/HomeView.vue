<script>
import dayjs from 'dayjs'
import Carousel from "../components/Carousel.vue";
import db from "../firebase/init";
import firebase from "firebase/app";
import Actualite from "../components/actualite.vue";
import FooterCOM from "../components/footerCOM.vue";
import Scroling from "../components/scroling.vue";
export default {
  async beforeMount() {
    const act = await db
      .collection("actualites")
      .where("visible", "==", true).orderBy("date",'desc')
      .get();
    if (act.empty) {
      console.log("No matching documents.");
      return;
    }
    act.forEach((doc) => {
      return this.actualite.push({
        id: doc.id,
        titre: doc.data().titre,
        photo: doc.data().photo,
        description: doc.data().description,
        visible: doc.data().visible,
        resume: doc.data().resume,
        date:doc.data().date
      });
    });
  },
  data() {
    return {
      actualite: [],
    };
  },
  components: { Actualite, Carousel, FooterCOM, Scroling },
};
</script>

<template>
  <br /><br /><br />
  <div class="container">
    <scroling class="my-3"></scroling>

    <Carousel class="my-3"> </Carousel>
    <div class="row my-5">
      <div
        class="col-xs-12 col-sm-6 col "
        v-for="actualite in actualite"
        v-bind:key="actualite"
      >
        <actualite

          :id="actualite.id"
          :description="actualite.description"
          :photo="actualite.photo"
          :resume="actualite.resume"
          :title="actualite.titre"
          :date="actualite.date"
        ></actualite>
      </div>
    </div>
  </div>
</template>
<style scoped>


</style>
