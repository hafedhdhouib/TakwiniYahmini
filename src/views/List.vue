<template>
  <div class="container my-5">
    <div class="row p-5">
        <div class="col-lg-6 col-sm-6">
        <div class="portfolio-item">
               <img src="../assets/M-654-grey.jpg" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6 class="s">قائمة مؤسسات التكوين المهني العمومية </h6>
                  </div>
               </div>
         </div>

        </div>
<div class="col-lg-6 col-sm-6">
        <div class="portfolio-item">
               <img src="../assets/M-654-grey.jpg" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6 class="s">قائمة مؤسسات التكوين المهني الخاصة</h6>
                  </div>
               </div>
         </div>

        </div>
        <div class="col-lg-6 col-sm-6">
        <div class="portfolio-item">
               <img src="../assets/M-654-grey.jpg" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6 class="s">
الاختصاصات المتوفرة بمراكز التكوين المهني بولاية
صفاقس دورة سبتمبر 2022</h6>
                  </div>
               </div>
         </div>

        </div>
        <div class="col-lg-6 col-sm-6">
        <div class="portfolio-item">
               <img src="../assets/M-654-grey.jpg" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6 class="s">
قائمة مؤسسات خاصة منظرة في صفاقس</h6>
                  </div>
               </div>
         </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
@media (max-width: 720px) {  
  .s {font-size:10px} /*1rem = 16px*/
}
.portfolio-overlay{
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: flex-end;
    padding: 30px;
    color: white;
}
.portfolio-item{
    overflow: hidden;
    position: relative;
}


</style>