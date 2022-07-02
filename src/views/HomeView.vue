<script setup>
import Carousel from "../components/Carousel.vue";
import Actualite from "../components/actualite.vue";
import BarPartenaire from "../components/barPartenaire.vue";
components: {
  Carousel;
}
</script>

<template>
  <div class="container">
    <carousel class="my-5" />
    <div class="row">
      <div class="col-6">
        <Actualite />
      </div>
      <div class="col-6">
        <Actualite />
      </div>
    </div>

    <BarPartenaire class="my-5"></BarPartenaire>
  </div>
</template>
