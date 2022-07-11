<template>
  <main class="container my-5">
    <div class="position-fixed top-5 end-5 p-3" style="z-index: 11">
<div id='liveToast' class="toast align-items-center text-primary  border-0" role="alert" aria-live="assertive" aria-atomic="true">
  <div class="d-flex">
    <div class="toast-body fs-3">
      تم ابلاغ مندوب حماية الطفولة المختص ترابيا عن طريق الايميل 
      <br>
اشعاركم هذا مساهمة جدية في حماية طفل من الخطر 
<br>
شكرا لكم 
<br>
الاشعار واجب قانوني و أخلاقي

    </div>
    <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</div>
</div>
    <p class="m-3 align-centre">يمكنكم ملء هذه الاستمارة او الاشعار عبر تطبيقنا على app store</p>
    <form @submit.prevent="add" class="form p-5 my-3">
      <div class="form-check col">
        <label for="exampleFormControlInput1" class="form-label fs-5">الإسم و اللقب</label>
        <input v-model="nom" type="text" class="form-control" id="exampleFormControlInput1" placeholder="الإسم و اللقب">
      </div>
      <div class="form-check col">
        <label for="exampleFormControlInput1" class="form-label fs-5">الصفة   <small class="red">*</small></label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="etat" required>
          <option value="طفل">طفل </option>
          <option value="ولي">ولي</option>
          <option value="مواطن/شاهد">مواطن/شاهد </option>
          <option value="مؤسسة عمومية">مؤسسة عمومية</option>
          <option value="جمعية / منظمة">جمعية / منظمة </option>
          <option value="اخر">اخر ...</option>
        </select>
        <div class="my-3">
  <input type="tel" v-if="etat == 'اخر'" v-model="autre" class="form-control" id="exampleFormControlInput1" required  placeholder="">
</div>

      </div>
      <div class="form-check col">
        <label for="exampleFormControlInput1" class="form-label fs-5">موضوع التهديد <small class="red">*</small></label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="Sujet_menace" required>
          <option v-for="Sujet_menaces in Sujet_menaces" v-bind:key="Sujet_menaces" :value="Sujet_menaces">{{Sujet_menaces}} </option>
        </select>
                <div class="my-3">
  <input type="tel" v-if="Sujet_menace == 'اخر'" v-model="menace" class="form-control" id="exampleFormControlInput1" required  placeholder="">
</div>

      </div>
            <div class="form-check col">
        <label for="exampleFormControlInput1" class="form-label fs-5">الولاية <small class="red">*</small></label>
        <select class="form-select form-select-sm" v-model="region" aria-label=".form-select-sm example" required>
          <option v-for="regions in regions" v-bind:key="regions" :value="regions">{{regions}} </option>
        </select>
        <label for="exampleFormControlInput1" class="form-label fs-5"> العنوان الكامل لمكان التهديد</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="adresse"></textarea>
      </div>
<div class="form-check col">

        <label for="exampleFormControlInput1" class="form-label fs-5">معلومات اضافية</label>
<div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label fs-5" >رقم الهاتف للتواصل <small class="red">*</small> </label>
  <input type="tel" class="form-control" id="exampleFormControlInput1" required v-model="num_tel" placeholder="">
</div>
<div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label fs-5"> معلومات تكميلية حول وضعية التهديد</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="info"></textarea>
</div>
      </div>
              <button class="btn btn-warning" type="submit">الإرسال</button>

    </form>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
data() {
  return {
    mandoubiya: [
        {
            "region": "تونس",
            "nom": "مندوب حماية الطفولة بتونس",
            "adresse": " 44 شارع خير الدين باشا - الطابق الثاني - 1073 - تونس",
            "telelephone": {
                "telephone": 71905156,
                "fixe": 71905156
            },
            "email": "dpe-tunis@delegue-enfance.nat.tn"
        },
        {
            "region": "أريانة",
            "nom": "مندوب حماية الطفولة بأريانة",
            "adresse": "16 نهج بالحسن جراد الحي الإداري - 2080 - أريانة",
            "telelephone": {
                "telephone": 70730664,
                "fixe": 70730664
            },
            "email": "dpe-ariana@delegue-enfance.nat.tn"
        },
        {
            "region": "منوبة",
            "nom": "مندوب حماية الطفولة بمنوبة",
            "adresse": "32 نهج البرتقال بجانب إدارة أملاك الدولة والملكية العقارية - 2010 - منوبة",
            "telelephone": {
                "telephone": 71603568,
                "fixe": 71603568
            },
            "email": "dpe-manouba@delegue-enfance.nat.tn"
        },
        {
            "region": "بن عروس",
            "nom": "مندوب حماية الطفولة ببن عروس",
            "adresse": "30 نهج عزيز تاج المدينة الجديدة - 2063 - بن عروس",
            "telelephone": {
                "telephone": 71313712,
                "fixe": 71313712
            },
            "email": "dpe-benarous@delegue-enfance.nat.tn"
        },
        {
            "region": "نابل",
            "nom": "مندوب حماية الطفولة بنابل",
            "adresse": "115 شارع الحبيب ثامر - 8000 - نابل",
            "telelephone": {
                "telephone": 72224248,
                "fixe": 72224248
            },
            "email": "dpe-nabeul@delegue-enfance.nat.tn"
        },
        {
            "region": "زغوان",
            "nom": "مندوب حماية الطفولة بزغوان",
            "adresse": "نهج الشنفري - 1100 - زغوان",
            "telelephone": {
                "telephone": 72681108,
                "fixe": 72681108
            },
            "email": "dpe-zaghouan@delegue-enfance.nat.tn"
        },
        {
            "region": "بنزرت",
            "nom": "مندوب حماية الطفولة ببنزرت",
            "adresse": "16 نهج اليونان ط4 - 7000 - بنزرت",
            "telelephone": {
                "telephone": 72422455,
                "fixe": 72424633
            },
            "email": "dpe-bizerte@delegue-enfance.nat.tn"
        },
        {
            "region": "سليانة",
            "nom": "مندوب حماية الطفولة بسليانة",
            "adresse": "نهج أبو القاسم الشابي، شارع الحبيب بورقيبة - 6100 - سليانة",
            "telelephone": {
                "telephone": 78872840,
                "fixe": 78872840
            },
            "email": "dpe-siliana@delegue-enfance.nat.tn"
        },
        {
            "region": "باجة",
            "nom": "مندوب حماية الطفولة بباجة",
            "adresse": "17 نهج حسان بن النعمان - 9000 - باجة",
            "telelephone": {
                "telephone": 78452611,
                "fixe": 78442442
            },
            "email": "dpe-beja@delegue-enfance.nat.tn"
        },
        {
            "region": "جندوبة",
            "nom": "مندوب حماية الطفولة بجندوبة",
            "adresse": "5 نهج الحمامات - 8100 - جندوبة",
            "telelephone": {
                "telephone": 78607288,
                "fixe": 78612017
            },
            "email": "dpe-jendouba@delegue-enfance.nat.tn"
        },
        {
            "region": "الكاف",
            "nom": "مندوب حماية الطفولة بالكاف",
            "adresse": "حي الرياض - 7100 - الكاف",
            "telelephone": {
                "telephone": 78223332,
                "fixe": 78225511
            },
            "email": "dpe-kef@delegue-enfance.nat.tn"
        },
        {
            "region": "المهدية",
            "nom": "مندوب حماية الطفولة بالمهدية",
            "adresse": "شارع اشبيلية قبالة مكتب البريد - 5100 - المهدية",
            "telelephone": {
                "telephone": 73693012,
                "fixe": 73693012
            },
            "email": "dpe-mahdia@delegue-enfance.nat.tn"
        },
        {
            "region": "سوسة",
            "nom": "مندوب حماية الطفولة بسوسة",
            "adresse": "عمارة بودخان، شارع ابن خلدون - 4003 - سوسة",
            "telelephone": {
                "telephone": 73334178,
                "fixe": 73334178
            },
            "email": "dpe-sousse@delegue-enfance.nat.tn"
        },
        {
            "region": "المنستير",
            "nom": "مندوب حماية الطفولة بالمنستير",
            "adresse": "عمارة بوزقور، شارع 7 نوفمبر - 5000 - المنستير",
            "telelephone": {
                "telephone": 73464007,
                "fixe": 73464007
            },
            "email": "dpe-monastir@delegue-enfance.nat.tn"
        },
        {
            "region": "صفاقس",
            "nom": "مندوب حماية الطفولة بصفاقس",
            "adresse": "نهج أحمد علولو إقامة الرضا متفرع عن شارع 14 جانفي قبالة مركز الولاية بجانب المحكمة الابتدائية صفاقس 2 - 3000 - صفاقس",
            "telelephone": {
                "telephone": 74402166,
                "fixe": 74402166
            },
            "email": "dpe-sfax@delegue-enfance.nat.tn"
        },
        {
            "region": "القصرين",
            "nom": "مندوب حماية الطفولة بالقصرين",
            "adresse": "16 شارع الحسين زروق، حي النور - 1230 - القصرين",
            "telelephone": {
                "telephone": 77470281,
                "fixe": 77411185
            },
            "email": "dpe-kasserine@delegue-enfance.nat.tn"
        },
        {
            "region": "القيروان",
            "nom": "مندوب حماية الطفولة بالقيروان",
            "adresse": "المنصورة - 3100 - القيروان",
            "telelephone": {
                "telephone": 77232622,
                "fixe": 77237500
            },
            "email": "dpe-kairouan@delegue-enfance.nat.tn"
        },
        {
            "region": "سيدي بوزيد",
            "nom": "مندوب حماية الطفولة بسيدي بوزيد",
            "adresse": "16 شارع محمد الخامس - 9100 - سيدي بوزيد",
            "telelephone": {
                "telephone": 76622450,
                "fixe": 76627220
            },
            "email": "dpe-sidibouzid@delegue-enfance.nat.tn"
        },
        {
            "region": "مدنين",
            "nom": "مندوب حماية الطفولة بمدنين",
            "adresse": "شارع الطيب المهيري - 4100 - مدنين",
            "telelephone": {
                "telephone": 75647523,
                "fixe": 75631803
            },
            "email": "dpe-medenine@delegue-enfance.nat.tn"
        },
        {
            "region": "قابس",
            "nom": "مندوب حماية الطفولة بقابس",
            "adresse": "شارع محمد علي - 6000 - قابس",
            "telelephone": {
                "telephone": 75275852,
                "fixe": 75274433
            },
            "email": "dpe-gabes@delegue-enfance.nat.tn"
        },
        {
            "region": "تطاوين",
            "nom": "مندوب حماية الطفولة بتطاوين",
            "adresse": "نهج الحبيب الغندور - 3200 - تطاوين",
            "telelephone": {
                "telephone": 75852635,
                "fixe": 75851602
            },
            "email": "dpe-tataouine@delegue-enfance.nat.tn"
        },
        {
            "region": "قفصة",
            "nom": "مندوب حماية الطفولة بقفصة",
            "adresse": "عمارة خلف الله ط2، حي النور - 2100 - قفصة",
            "telelephone": {
                "telephone": 76226214,
                "fixe": 76203150
            },
            "email": "dpe-gafsa@delegue-enfance.nat.tn"
        },
        {
            "region": "توزر",
            "nom": "مندوب حماية الطفولة بتوزر",
            "adresse": "1 نهج محمد العايش قبالة مكتب مراقبة الأداؤات - 2200 - توزر",
            "telelephone": {
                "telephone": 76461112,
                "fixe": 76461112
            },
            "email": "dpe-tozeur@delegue-enfance.nat.tn"
        },
        {
            "region": "قبلي",
            "nom": "مندوب حماية الطفولة بقبلي",
            "adresse": "شارع الشهداء - 4200 - قبلي",
            "telelephone": {
                "telephone": 75493260,
                "fixe": 75493260
            },
            "email": "dpe-kebili@delegue-enfancenat.tn"
        }
    ],
    regions:['تونس','صفاقس','نابل','سوسة','بن عروس','أريانة','القيروان','بنزرت','المنستير','مدنين','القصرين','سيدي بوزيد','المهدية','جندوبة','منوبة','قابس','قفصة','باجة','الكاف','سليانة','زغوان','قبلي','تطاوين','توزر'],
    Sujet_menaces:['فقدان السند العائلي'
,'تعريض الطفل للإهمال و التشرد'
,'تقصير في التربية و الرعاية'
,'سوء معاملة الطفل'
,'استغلال الطفل جنسيا'
,'استغلال الطفل في الاجرام المنظم'
,'تعريض الطفل للتسول و الاستغلاله تقتصاديا'
,'عجز الابوين عن رعاية الطفل'
,'محاولة انتحار'
,'ولادة خارج اطار الزواج'
,'صعوبات نفسية'
,'اخر'],
autre:null,
etat:null,
Sujet_menace:null,
menace:null,
num_tel:'',
nom:'',
adresse:'',
region:null,
info:''

  
  }
},
methods: {
  add(){
   let menace;
   let etat; 
    if (this.Sujet_menace=="اخر"){
    menace = this.menace
    }
    else{
 menace = this.Sujet_menace 
    }
    if (this.etat=="اخر"){
    etat = this.autre
    }
    else{
 etat = this.etat 
    }
    this.mandoubiya.forEach(mandoubiya=>{
      if(mandoubiya.region === this.region){
       emailjs.send("service_mwox9uq","template_xhikczb",{
region:this.region,
etat: etat,
Sujet_menace: menace,
num_tel: this.num_tel,
nom: this.nom,
adresse: this.adresse,
info: this.info,
reply_to: "chakrounhoussem34@gmail.com",
},'tF8qINzXr-AhDi7we').then(()=>{
var toastLiveExample = document.getElementById('liveToast')
    var toast = new bootstrap.Toast(toastLiveExample)
    toast.show()
    })
      }

})
}
},
}
</script>

<style scoped>
.form-label{
  background-color: #FCCE02;
  padding: 7px;
  border-radius: 12px;
}
.red{
  color: red;
}
</style>>

