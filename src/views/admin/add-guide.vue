<template>
  <div class="my-5">
    <div class="container py-5">
      <h1>add guide</h1>
      <form class="row g-3" @submit.prevent="save">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">titre</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            v-model="titre"
            required
          />
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
              v-model="visible"
              id="flexSwitchCheckDefault"
            />
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">pdf</label
          ><br />
          <input
            type="file"
            @change="onFileChange"
            required
            accept="application/pdf"
          />
          <div class="progress">
            <div
              class="
                progress-bar progress-bar-striped progress-bar-animated
                pass
              "
              role="progressbar"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >image</label
            ><br />
            <input
              type="file"
              @change="onFileChange2"
              required
              accept="image/*"
            />
            <div class="progress">
              <div
                class="
                  progress-bar progress-bar-striped progress-bar-animated
                  pass
                "
                role="progressbar"
                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{ width: progress2 + '%' }"
              ></div>
            </div>
          </div>
        </div>
        <div class="mb-3">
          <button class="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
      {{ file.name }}||{{ file2.name }}
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/storage";

import { onMounted } from "@vue/runtime-core";

export default {
  data() {
    return {
      visible: true,
      titre: "",
      uploadValue: 0,
      file: "null",
      file2: "null",
      progress: 0,
      progress2: 0,
      link: "",
      guideurl: "",
      thumbnailurl:''
    };
  },
  methods: {
    onFileChange(e) {
      return (this.file = e.target.files[0] || e.dataTransfer.files[0]);
    },
    onFileChange2(e) {
      return (this.file2 = e.target.files[0] || e.dataTransfer.files[0]);
    },
    async save() {
      const storageRef = await firebase.storage().ref();
      console.log(storageRef);

      const docRef = storageRef.child(`guides/${this.file.name}`);
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
          this.guideurl = await docRef.getDownloadURL();
          this.upload1()
        }
      );
    },
   async upload1(){

      const storageRef1 = await firebase.storage().ref();
      console.log(storageRef1);

      const docRef = storageRef1.child(`thubnail/${this.file2.name}`);
      docRef.put(this.file2).on(
        "state_changed",
        (snapshot) => {
          this.progress2 =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (err) => {
          console.log(err);
        },
        async () => {
           this.thumbnailurl = await docRef.getDownloadURL();
  await db.collection("guides").doc().set({
    titre:this.titre,
    visible:this.visible,
    pdf:this.guideurl,
    thumbnail:this.thumbnailurl,
  }).then(()=>{
    this.$router.push('/admin')
  })
        }
          );
        }
   

    }
};
</script>

<style>
</style>