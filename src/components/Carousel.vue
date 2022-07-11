<template>
     <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
<div class="carousel-item" v-for="(banner,idx) in banners" v-bind:key="idx" :class="{ active: idx==0 }">
      <img :src="`/assets/carousel/${banner}`" alt="" class="img-fluid">
</div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">السابق</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">التالي</span>
    </button>
  </div>
</template>

<script>
export default {
data() {
  return {
    banners:['03.jpg','01.jpg','02.jpg','04.jpg','05.jpg']
  }
},
}
</script>

<style>

</style>