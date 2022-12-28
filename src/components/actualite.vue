<template>
  
    <div class="">
      <div class="row aa g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <h3 class="mb-0">{{title}}</h3>
         <!--Date pub ne9sa formating day.js or moment.js-->
          <!-- <div class="mb-1 text-muted">{{date.toDate()}}</div> -->
         <p class="card-text mb-auto">{{description.slice(0, 100)}}</p>
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
    date:{
      type:Date,
    }
  }
}
</script>
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Readex+Pro:wght@600&display=swap');
  .text-muted{

font-family: 'Lato';

}
@media (min-width:801px)  { .aa{
    min-height: 306.375px;
  } }


 
</style>