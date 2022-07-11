<template>
  <div class="container my-5">
<div class="position-fixed top-5 end-5 p-3" style="z-index: 11">
<div id='liveToast' class="toast align-items-center text-primary  border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body">
      تم التسجيل بنجاح.
    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
</div>

    <form class="container p-5" v-on:submit.prevent="add">
<div class="text-center fs-1  rounded-pill">
  <p class="m-3 ">تسجيل الدخول للتوجيه المهني</p>
  </div>

    <div class="row">
      <div class="col-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">الاسم و اللقب
          </label>
          <input v-model="nom" type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">رقم الهاتف
          </label>
          <input v-model="num_tel" type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-5">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">العنوان
          </label>
          <input v-model="adresse" type="text" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">عنوان البريد الإلكتروني
          </label>
          <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">المستوى الدراسي
          </label>
<select class="form-select" aria-label="Default select example" v-model="niveau_scolaire">
  <option v-for="niveau in niveaux" :key="niveau" :value="niveau.مستوى">{{niveau.الأسم}}</option>
</select>

</div>
<select v-if="niveau_scolaire" class="form-select" aria-label="Default select example" v-model="annee_scolaire">
  <option  v-for="nivea in niveaux[niveau_scolaire].الأقسام" :key="nivea" :value="nivea">{{nivea}}</option>
</select>


        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">سنة الانقطاع عن الدراسة
          </label>
          <input v-model="annee" type="date" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="fs-3 form-label">السن </label>
          <input v-model="age" min="7" type="number" class="form-control" id="exampleFormControlInput1" placeholder="" required />
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col"></div>
    <div class="col">
              <button class="btn btn-warning" type="submit">الإرسال</button>
    </div>
    </div>
    </form>
    
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/storage";
import db from "../firebase/init";
export default {
  data() {
    return {
      niveaux:[{مستوى:"0",الأسم:'أبتدائي',الأقسام:['أولى','ثانية','ثالثة','رابعة','خامسة','سادسة']},
     { مستوى:"1",الأسم:'إعدادي',الأقسام:['سابعة','ثامنة','تاسعة']},
     {مستوى:"2",الأسم:'ثانوي',الأقسام:['أولى','ثانية','ثالثة','رابعة']}
      ],
      niveau_scolaire:null,
      annee_scolaire:null,
      age:null,
      annee:null,
      email:null,
      adresse:null,
      num_tel:null,
      nom:null
    }
  },
  methods: {
    async add(){
    const dataBase = await db.collection("demande").doc();
    await dataBase.set({
    niveau_scolaire:this.niveau_scolaire,
annee_scolaire:this.annee_scolaire,
age:this.age,
annee:this.annee,
email:this.email,
adresse:this.adresse,
num_tel:this.num_tel,
nom:this.nom
    }).then(()=>{
var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    })
}
  }}</script>

<style scoped>

form{
  
  background-color: #25389C;
}
.fs-3 {
  color: white;
}
.text-center{
  color: #25389C;
  background-color: #FCCE02;
;
}
.form-control{
    background-color:  #FFFFFF45;
    border-radius: 12px;
    border-color:#FFFFFF45 ;
}
.form-select{
    background-color:  #FFFFFF45;
    border-radius: 12px;
    border-color:#FFFFFF45 ;

}
.round{
  border-radius:90 ;
}
</style>