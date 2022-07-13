<template>
 <div class="my-5">
<div class="container py-5">
      <h1>add actualite</h1>

  <form class="row g-3" @submit.prevent="save">
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">titre</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" v-model="titre" required>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" v-model="description" rows="3" required></textarea>
</div>
<div class="mb-3">
<div class="form-check form-switch">  
  <label class="form-check-label" for="flexSwitchCheckDefault">visible    </label>
  <input class="form-check-input" type="checkbox" role="switch" v-model="visible" id="flexSwitchCheckDefault">
</div>
</div>
<div class="mb-3">
    <input type="file" @change="onFileChange" required accept="image/*"/>
    <div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated pass" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" :style="{width: progress +'%'}" ></div>
</div>

</div>
<div class="mb-3">
    <button class="btn btn-primary" type="submit">Add</button>

</div>
</form>
</div> </div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";
import "firebase/storage";

import { onMounted } from '@vue/runtime-core';

export default {
data() {
  return {
    visible:true,
    titre:'',
    description:'',
    resultat:null,
    photo:'',
    imageData: null,  
    picture: null,
    uploadValue: 0,
    file:null,
    progress:0
  }
},
methods: {
  onFileChange(e) {
      return this.file = e.target.files[0] || e.dataTransfer.files[0];

    },
 async save(){
          const storageRef = await firebase.storage().ref();
          console.log(storageRef);

      const docRef = storageRef.child(this.file.name);
     docRef.put(this.file).on(
        "state_changed",
        (snapshot) => {
        this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        },
        (err) => {
          console.log(err);
        },
        async () => {
          const downloadURL = await docRef.getDownloadURL();
  await db.collection("actualites").doc().set({
    titre:this.titre,
    description:this.description,
    visible:this.visible,
    photo:downloadURL
  }).then(()=>{
    this.$router.push('/admin')
  })
}
      );


  },
add () {
  console.log(this.$refs);
      const storageRef = db.storage.ref()
      const uploadTask = storageRef.child(`actualites/${this.file}`).put(this.file)
      uploadTask.on('state_changed', (snapshot) => {
      //  this.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log('Upload is ' + this.progress + '% done')
      },
      (error) => {
        console.log(error)
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((img) => {
          console.log(img);
        }
        ).then(() => {/*
          this.$buefy.toast.open({
            duration: 3000,
            message: 'product added with succes ' + this.name,
            position: 'is-bottom',
            type: 'is-danger'
          })
          this.$router.push('/marketplace')*/
        })
      })
    },

},
 
}
</script>

<style>

</style>