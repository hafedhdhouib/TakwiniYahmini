<template>


<div class="my-5">
<div class="container-fluid py-5">
  <div class="row">
 
    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2"></h1>
      </div>
      <h2>Actualite</h2> 
      <router-link class="btn btn-primary" tag="button" to="/admin/add-actualite/">add

 </router-link>
      <div class="table-responsive">
        <table class=" table-bordered table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">img</th>
              <th scope="col">title</th>
              <th scope="col">description</th>
              <th scope="col">visible</th>
              <th scope="col">button</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(res,idx) in actualites" v-bind:key="idx">
              <td>{{idx}}</td>
              <td><figure class="figure">
  <img :src="res.photo" class="figure-img img-fluid rounded" width="250" height="250" alt="...">
</figure></td>
              <td>{{res.titre}}</td>
              <td>{{res.description}}</td>
              <td>{{res.visible}}</td>
              <td class="m-2">    
            <router-link class="btn btn-primary" tag="button" :to="{ name: 'edit actualite', params: { id: res.id }}">edit</router-link>

<button type="button" class="btn btn-danger" @click.prevent="delate_actualite(res.id||'0')">delate</button>
</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>Guides</h2> 
      <router-link class="btn btn-primary" tag="button" to="/admin/add-guide/">add

 </router-link>
      <div class="table-responsive">
        <table class=" table-bordered table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">img</th>
              <th scope="col">title</th>
              <th scope="col">pdf</th>
              <th scope="col">visible</th>
              <th scope="col">button</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(res,idx) in guides" v-bind:key="idx">
              <td>{{idx}}</td>
              <td><figure class="figure">
  <img :src="res.thumbnail" class="figure-img img-fluid rounded" width="250" height="250" alt="...">
</figure></td>
              <td>{{res.titre}}</td>
              <td>{{res.pdf}}</td>
              <td>{{res.visible}}</td>
              <td class="m-2">    
            <router-link class="btn btn-primary" tag="button" :to="{ name: 'edit guide', params: { id: res.id }}">edit</router-link>

<button type="button" class="btn btn-danger" @click.prevent="delate_guide(res.id||'0')">delate</button>
</td>
            </tr>
          </tbody>
        </table>
      </div>
            <h2>Liens</h2> 
      <router-link class="btn btn-primary" tag="button" to="/admin/add-lien/">add

 </router-link>
      <div class="table-responsive">
        <table class=" table-bordered table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">title</th>
              <th scope="col">lien</th>
              <th scope="col">visible</th>
              <th scope="col">button</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(res,idx) in liens" v-bind:key="idx">
              <td>{{idx}}</td>
              <td><figure class="figure">
  <img :src="res.thumbnail" class="figure-img img-fluid rounded" width="250" height="250" alt="...">
</figure></td>
              <td>{{res.titre}}</td>
              <td>{{res.lien}}</td>
              <td>{{res.visible}}</td>
              <td class="m-2">    
           <router-link class="btn btn-primary" tag="button" :to="{ name: 'edit lien', params: { id: res.id }}">edit</router-link>

<button type="button" class="btn btn-danger" @click.prevent="delate_lien(res.id||'0')">delate</button>
</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>video</h2> 
      <router-link class="btn btn-primary" tag="button" to="/admin/add-video/">add

 </router-link>
      <div class="table-responsive">
        <table class=" table-bordered table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">title</th>
              <th scope="col">lien</th>
              <th scope="col">type</th>
              <th scope="col">button</th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="(res,idx) in videos" v-bind:key="idx">
              <td>{{idx}}</td>
              <td>{{res.titre}}</td>
              <td><a :href="'https://www.youtube.com/watch?v='+res.lien" target="_blank">https://www.youtube.com/watch?v={{res.lien}}</a></td>
              <td>{{res.type}}</td>
              <td class="m-2">    
           <router-link class="btn btn-primary" tag="button" :to="{ name: 'edit video', params: { id: res.id }}">edit</router-link>

<button type="button" class="btn btn-danger" @click.prevent="delate_video(res.id||'0')">delate</button>
</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</div></div>
</template>

<script>
import db from "@/firebase/init";
import firebase from "firebase/app";

export default {
data() {
    return {
        actualites:[],
        guides:[],
        liens:[],
        videos:[]
    }
},
methods: {
  async delate_actualite(id){
        await db.collection("actualites").doc(id).delete().then(()=>{
              this.$router.go()
        });

  },
    async delate_guide(id){
        await db.collection("guides").doc(id).delete().then(()=>{
              this.$router.go()
        });
  },
      async delate_lien(id){
        await db.collection("liens").doc(id).delete().then(()=>{
              this.$router.go()
        });
  },
  async delate_video(id){
        await db.collection("videos").doc(id).delete().then(()=>{
              this.$router.go()
        });
  }
},
    async beforeMount()  {
       const actualite = await db.collection("actualites").get();
       const guide = await db.collection("guides").get();
        const lien = await db.collection("liens").get();
        const video = await db.collection("videos").get();
        video.forEach(doc => {
            return this.videos.push({
              id:doc.id,
              titre:doc.data().titre,
              lien:doc.data().lien,
              type:doc.data().type
            });
        });
        if (actualite.empty) {
            console.log("No matching documents.");
            return;
        }
        actualite.forEach(doc => {
            return this.actualites.push({
              id:doc.id,
              titre:doc.data().titre,
              photo:doc.data().photo,
              description:doc.data().description,
              visible:doc.data().visible
            });
        });
        if (guide.empty) {
            console.log("No matching documents.");
            return;
        }
        guide.forEach(doc => {
            return this.guides.push({
              id:doc.id,
              titre:doc.data().titre,
              pdf:doc.data().pdf,
              thumbnail:doc.data().thumbnail,
              visible:doc.data().visible
            });
        });
               if (lien.empty) {
            console.log("No matching documents.");
            return;
        }
        lien.forEach(doc => {
            return this.liens.push({
              id:doc.id,
              titre:doc.data().titre,
              lien:doc.data().lien,
              visible:doc.data().visible
            });
        });
        if (actualite.empty) {
            console.log("No matching documents.");
            return;
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