<script setup>
import db from './firebase/init';
import { collection,getDocs } from 'firebase/firestore/lite';

import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import Navbar from './components/navbar.vue';
import FooterCOM from './components/footerCOM.vue';
const items = ref(['1','2','3','4','4'])
async function show(){
  let pagesCol= collection(db,'pages')
  //console.log(pagesCol);
    const pagesSnapshot = await getDocs(pagesCol)
  const pagesList = pagesSnapshot.docs.map(doc => doc.data());
  console.log(pagesList);
}
</script>

<template>
<Navbar/>
  <RouterView />
<FooterCOM></FooterCOM>
</template>

<style>

</style>

