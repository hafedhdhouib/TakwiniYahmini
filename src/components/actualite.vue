<template>
<div class="portfolio-item">
               <img :src="photo" class="img-thumbnail" alt="">
               <div class="portfolio-overlay">
                  <div>
                     <h3>{{title}}</h3>
                     <h6 class="s">{{description}}</h6>
                  </div>
               </div>
         </div>
</template>

<script>
export default {
 props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    photo: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped>
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
@media (max-width: 720px) {  
  .s {font-size:10px} /*1rem = 16px*/
}
.portfolio-item{
    overflow: hidden;
    position: relative;
}

</style>