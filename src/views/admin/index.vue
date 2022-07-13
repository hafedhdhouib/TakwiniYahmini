<template>


<div class="my-5">
<div class="container-fluid py-5">
  <div class="row">
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      <div class="position-sticky pt-3">
        <ul class="nav flex-column">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              <span data-feather="home"></span>
              لوحة القيادة
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file"></span>
              الطلبات
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="shopping-cart"></span>
              المنتجات
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="users"></span>
              الزبائن
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="bar-chart-2"></span>
              التقارير
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="layers"></span>
              التكاملات
            </a>
          </li>
        </ul>

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>التقارير المحفوظة</span>
          <a class="link-secondary" href="#" aria-label="إضافة تقرير جديد">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              الشهر الحالي
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              الربع الأخير
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              التفاعل الإجتماعي
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <span data-feather="file-text"></span>
              مبيعات نهاية العام
            </a>
          </li>
        </ul>
      </div>
    </nav>

    <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 class="h2">لوحة القيادة</h1>
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
            <tr v-for="(res,idx) in resultat" v-bind:key="idx">
              <td>{{idx}}</td>
              <td><figure class="figure">
  <img :src="res.photo" class="figure-img img-fluid rounded" width="250" height="250" alt="...">
</figure></td>
              <td>{{res.titre}}</td>
              <td>{{res.description}}</td>
              <td>{{res.visible}}</td>
              <td class="m-2">    
            <router-link class="btn btn-primary" tag="button" :to="{ name: 'edit actualite', params: { id: res.id }}">edit</router-link>

<button type="button" class="btn btn-danger" @click.prevent="delate(res.id||'0')">delate</button>
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
        resultat:[]
    }
},
methods: {
  async delate(id){
        await db.collection("actualites").doc(id).delete().then(()=>{
              this.$router.go()
        });

  }
},
    async beforeMount()  {
       const res = await db.collection("actualites").get();
        if (res.empty) {
            console.log("No matching documents.");
            return;
        }
        res.forEach(doc => {
            return this.resultat.push({
              id:doc.id,
              titre:doc.data().titre,
              photo:doc.data().photo,
              description:doc.data().description,
              visible:doc.data().visible
            });
        });
    },

}
</script>

<style>

</style>