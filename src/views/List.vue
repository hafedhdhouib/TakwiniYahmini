<template>
  <div class="container my-5">
    <div class="row p-5">
        <div class="col-lg-6 col-sm-6">
        <div class="portfolio-item">
               <img src="../assets/M-654-grey.jpg" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6>Project title</h6>
                  </div>
               </div>
         </div>

        </div>
<div class="col-lg-6 col-sm-6">
        <div class="portfolio-item">
               <img src="../assets/M-654-grey.jpg" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h6>Project title</h6>
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