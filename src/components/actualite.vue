<template>
    <div class="">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{title}}</h3>
          <div class="mb-1 text-muted">{{date}}</div>
          <p class="card-text mb-auto">{{resume}}</p>
          <router-link :to="{ name: 'article', params: { id: id }}" class="stretched-link">أكمل القراءة</router-link>
        </div>
        <div class="col-auto m-auto d-block">
<img :src="photo" alt="" width="300" height="250">
        </div>
      </div>
    </div>
    </template>

<script>
export default {
 props: {
  id:{
    type:String,
    required:true
  },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    resume:{
      type:String,
      required:true
    },
    photo: {
      type: String,
      required: true
    },
  }
}
</script>
      .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
<style scoped>
</style>