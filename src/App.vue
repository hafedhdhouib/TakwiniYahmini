<script setup>

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import Navbar from './components/navbar.vue';
import FooterCOM from './components/footerCOM.vue';
const items = ref(['1','2','3','4','4'])
/*
async function show(){
  let pagesCol= collection(db,'pages')
  //console.log(pagesCol);
    const pagesSnapshot = await getDocs(pagesCol)
  const pagesList = pagesSnapshot.docs.map(doc => doc.data());
  console.log(pagesList);
}
*/
</script>

<template>
<Navbar/>

<router-view class="vh-100"/>
  <!--<router-view v-slot="{ Component }">
    <transition name="slide" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
-->
<FooterCOM></FooterCOM>
</template>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 1s, transform 1s;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>

