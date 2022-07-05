<template>
  <main class="container m-5">
    <form class="form p-5">
<div class="text-center fs-1 fw-normal rounded-pill"><p class="m-3 ">
  تسجيل الدخول للتوجيه المهني
</p> </div>

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
<select class="form-select" aria-label="Default select example" v-model="annee_scolaire">
  <option v-if="niveau_scolaire" v-for="nivea in niveaux[niveau_scolaire].الأقسام" :key="nivea" :value="nivea.الأقسام">{{nivea}}</option>
</select>


</div>
        
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
    <button @click.prevent="add()">test</button>
  </main>
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
const data_base= await db.collection('test').doc()
await data_base.set({
  nom:'hafedh'
})
    }
  },
};
</script>

<style scoped>

.form{
  
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
.round{
  border-radius:90 ;
}
</style>