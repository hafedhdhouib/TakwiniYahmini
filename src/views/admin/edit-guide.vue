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
            >lien pdf</label
          >
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            v-model="resultat.pdf"
            rows="3"
            disabled
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
          <div class="mb-3">
            <input type="file" @change="onFileChange" accept="application/pdf" />
            <div class="progress">
              <div
                class="progress-bar progress-bar-striped progress-bar-animated pass"
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: progress + '%' }"
              ></div>
            </div>
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
import "firebase/storage";

export default {
  data() {
    return {
      visible: true,
      titre: "",
      pdf: "",
      resultat: [],
      file: null,
      progress:0
    };
  },
  methods: {
    onFileChange(e) {
      return (this.file = e.target.files[0] || e.dataTransfer.files[0]);
    },
    async save() {
      if (this.file != null) {
        const storageRef = await firebase.storage().ref();
        console.log(storageRef);

        const docRef = storageRef.child(this.file.name);
        docRef.put(this.file).on(
          "state_changed",
          (snapshot) => {
            this.progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          },
          (err) => {
            console.log(err);
          },
          async () => {
            const downloadURL = await docRef.getDownloadURL();
            await db
              .collection("guides")
              .doc(this.$route.params.id)
              .set({
                titre: this.resultat.titre,
                pdf: downloadURL,
                visible: this.resultat.visible,
                thumbnail: this.resultat.thumbnail,
              })
              .then(() => {
                this.$router.push("/admin");
              });
          }
        );
      }
      else {
          await db.collection("guides").doc(this.$route.params.id).set({
    titre:this.resultat.titre,
    pdf:this.resultat.pdf,
    visible:this.resultat.visible,
    thumbnail:this.resultat.thumbnail
  }).then(()=>{
    this.$router.push('/admin')
  })
      }
    },
  },
  async beforeCreate() {
    const res = await db
      .collection("guides")
      .doc(this.$route.params.id)
      .get();
    if (!res.exists) {
      console.log("No such document!");
    } else {
      return (this.resultat = res.data());
    }
  },
};
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Readex+Pro:wght@600&display=swap');
*{

font-family: 'Lato';

}
</style>