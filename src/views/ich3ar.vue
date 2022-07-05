<template>
  <main class="container m-5">
    <form class=" form p-5 m-3">
      <div class="form-check">
        <label for="exampleFormControlInput1" class="form-label">الإسم و اللقب</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="الإسم و اللقب">
      </div>
      <div class="form-check">
        <label for="exampleFormControlInput1" class="form-label">الصفة</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="etat" required>
          <option value="طفل">طفل </option>
          <option value="ولي">ولي</option>
          <option value="مواطن/شاهد">مواطن/شاهد </option>
          <option value="مؤسسة عمومية">مؤسسة عمومية</option>
          <option value="جمعية / منظمة">جمعية / منظمة </option>
          <option value="اخر">اخر ...</option>
        </select>
      </div>
      <div class="form-check">
        <label for="exampleFormControlInput1" class="form-label">موضوع التهديد</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="Sujet_menace" required>
          <option v-for="Sujet_menaces in Sujet_menaces" v-bind:key="Sujet_menaces" value="Sujet_menaces">{{Sujet_menaces}} </option>
        </select>
      </div>
            <div class="form-check">
        <label for="exampleFormControlInput1" class="form-label">الولاية</label>
        <select class="form-select form-select-sm" aria-label=".form-select-sm example" required>
          <option v-for="region in region" v-bind:key="region" value="region">{{region}} </option>
        </select>
        <label for="exampleFormControlInput1" class="form-label">العنوان كامل ان وجد</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
<div class="form-check">

        <label for="exampleFormControlInput1" class="form-label">معلومات اضافية</label>
<div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">رقم الهاتف للتواصل </label>
  <input type="tel" class="form-control" id="exampleFormControlInput1" placeholder="">
</div>
<div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">معلومات اضافية  </label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </div>
              <button class="btn btn-warning" type="submit">الإرسال</button>

    </form>

  </main>
</template>

<script>
export default {
data() {
  return {
    region:['تونس','صفاقس','نابل','سوسة','بن عروس','أريانة','القيروان','بنزرت','المنستير','مدنين','القصرين','سيدي بوزيد','المهدية','جندوبة','منوبة','قابس','قفصة','باجة','الكاف','سليانة','زغوان','قبلي','تطاوين','توزر'],
    Sujet_menaces:['فقدان السند العائلي'
,'تعريض الطفل للإهمال و التشرد'
,'تقصير في التربية و الرعاية'
,'سوء معاملة الطفل'
,'استغلال الطفل جنسيا'
,'استغلال الطفل في الاجرام المنظم'
,'تعريض الصفل للتسول و الاستغلاله تقتصاديا'
,'عجز الابوين عن رعاية الطفل'
,'محاولة انتحار'
,'ولادة خارج اطار الزواج'
,'صعوبات نفسية'
,'اخر'],
etat:null,
Sujet_menace:null
  }
},
}
</script>

<style scoped>
</style>>

