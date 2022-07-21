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
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            v-model="resultat.lien"
            rows="3"
            required
          ></textarea>
        </div>
        <div class="mb-3">
          <div class="form-check form-switch">
            <label class="form-check-label" for="flexSwitchCheckDefault"
              >visible
            </label>
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              v-model="resultat.visible"
              id="flexSwitchCheckDefault"
            />
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
      visible: true,
      titre: "",
      description: "",
      resultat: [],
      file: null,
    };
  },
  methods: {
    async save() {
            await db
              .collection("liens")
              .doc(this.$route.params.id)
              .set({
                titre: this.resultat.titre,
                description: this.resultat.lien,
                visible: this.resultat.visible,
              })
              .then(() => {
                this.$router.push("/admin");
              });
          },},
  async beforeCreate() {
    const res = await db
      .collection("liens")
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

<style></style>
