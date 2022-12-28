<template>
    <div class="my-5">
      <div class="container py-5">
        <form class="row g-3" @submit.prevent="save">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">titre</label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="resultat.titre"
              required
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >lien</label
            >
            <input
              class="form-control"
              id="exampleFormControlTextarea1"
              v-model="resultat.lien"
            />
            <a :href="'https://www.youtube.com/watch?v='+resultat.lien" target="_blank">https://www.youtube.com/watch?v={{resultat.lien||''}}</a>
          </div>
          <div class="mb-3">
            <div class="form-check form-switch">
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >visible
              </label>
              <select class="form-select" v-model="resultat.type" aria-label="Default select example">
  <option selected value="etatique">مراكز التكوين العامة </option>
  <option value="prive">مراكز التكوين الخاصة</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <button class="btn btn-primary" type="submit">Edit</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import db from "@/firebase/init";
  import firebase from "firebase/app";
  
  export default {
    data() {
      return {
        titre: "",
        description: "",
        resultat: [],
        file: null,
      };
    },
    methods: {
      async save() {
              await db
                .collection("videos")
                .doc(this.$route.params.id)
                .set({
                  titre: this.resultat.titre,
                  lien: this.resultat.lien,
                  type: this.resultat.type,
                })
                .then(() => {
                  this.$router.push("/admin");
                });
            },},
    async beforeCreate() {
      const res = await db
        .collection("videos")
        .doc(this.$route.params.id)
        .get();
      if (!res.exists) {
        console.log("No such document!");
      } else {
        return (this.resultat = res.data());
      }
    },
  }
  </script>
  
  <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Readex+Pro:wght@600&display=swap');
  *{
  
  font-family: 'Lato';
  
  }
  </style>
  