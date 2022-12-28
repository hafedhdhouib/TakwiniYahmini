<template>
  <br>
  <br>
    <div class="my-5">
   <div class="container my-5 py-5">
         <h1>add video</h1>
   
     <form class="row  g-3" @submit.prevent="save">
   <div class="mb-3">
     <label for="exampleFormControlInput1" class="form-label">titre</label>
     <input type="text" class="form-control" id="exampleFormControlInput1" v-model="titre" required>
   </div>
   <div class="mb-3">
     <label for="exampleFormControlTextarea1" class="form-label">lien</label>
     <input class="form-control" id="exampleFormControlTextarea1" v-model="lien"  required/>
   </div>
   <div class="mb-3">
   <div class="form-check form-switch">  
     <label class="form-check-label" for="flexSwitchCheckDefault">visible    </label>
     <select class="form-select" v-model="type" aria-label="Default select example">
  <option selected value="etatique">مراكز التكوين العامة </option>
  <option value="prive">مراكز التكوين الخاصة</option>
              </select>   </div>
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
       type:'etatique',
       titre:'',
       lien:'',
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
    async save(){
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        var match = this.lien.match(regExp);

if (match && match[2].length == 11) {
    await db.collection("videos").doc().set({
       titre:this.titre,
       lien:match[2],
       type:this.type,
     }).then(()=>{
       this.$router.push('/admin')
     })
} else {
    return 'error';
}
     
   },
   
   } 
   }
   </script>
   
   <style scoped>
     @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Readex+Pro:wght@600&display=swap');
   *{
   
   font-family: 'Lato';
   
   }
   </style>