<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-primary">
    <div class="container-fluid">
        <div class="navbar-brand ">
                <img class="logo" src="../assets/logo/Logo-Takwini-Yahmni.png" alt="Logo" width="100" height="100">
        </div>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="تبديل التنقل">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mb-2 mb-md-0">
          <li class="nav-item">
            <router-link class="nav-link fs-5" :class="$route.path == '/' ? 'active' : ' ' " aria-current="page" to="/">الرئيسية</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link fs-5" :class="$route.path == '/about' ? 'active' : ' ' " to="/about">من نحن؟</router-link>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link fs-5" :class="$route.path == '/list' ? 'active' : ' ' " to="/list">مراكز التكوين المهني </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  fs-5" to="/inscription" :class="$route.path == '/inscription' ? 'active' : ' ' ">تسجيل الدخول للتوجيه المهني </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link  fs-5" :class="$route.path == '/ich3ar' ? 'active' : ' ' " to='/ich3ar' >الإشعار </router-link>
          </li>
                    <li class="nav-item">
            <router-link class="nav-link  fs-5" :class="$route.path == '/video' ? 'active' : ' ' " to='/video' >فيديو </router-link>
          </li>
        </ul>
              </div>
    </div>
  </nav>

</template>

<script>

</script>

<style  scoped>

/* GLOBAL STYLES
-------------------------------------------------- */
/* Padding below the footer and lighter body text */
.navbar-brand {
  flex: 0 1 auto;
  display: block;
  width: 100px;
  height: 100px; 
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 !important;
  padding: 0 !important;
  transform: translateX(-50%);
  text-align: center;

}
.navbar-nav{
  margin-right: 120px;
}

.navbar-brand img {
  max-height: 100%;
  max-width: 100%;
}


body {
  padding-top: 3rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}


/* CUSTOMIZE THE CAROUSEL
-------------------------------------------------- */

/* Carousel base class */
.carousel {
  margin-bottom: 4rem;
}
/* Since positioning the image, we need to help out the caption */
.carousel-caption {
  bottom: 3rem;
  z-index: 10;
}

/* Declare heights because of positioning of img element */
.carousel-item {
  height: 32rem;
}
.carousel-item > img {
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  height: 32rem;
}


/* MARKETING CONTENT
-------------------------------------------------- */

/* Center align the text within the three columns below the carousel */
.marketing .col-lg-4 {
  margin-bottom: 1.5rem;
  text-align: center;
}
.marketing h2 {
  font-weight: 400;
}
/* rtl:begin:ignore */
.marketing .col-lg-4 p {
  margin-right: .75rem;
  margin-left: .75rem;
}
/* rtl:end:ignore */


/* Featurettes
------------------------- */

.featurette-divider {
  margin: 5rem 0; /* Space out the Bootstrap <hr> more */
}

/* Thin out the marketing headings */
.featurette-heading {
  font-weight: 300;
  line-height: 1;
  /* rtl:remove */
  letter-spacing: -.05rem;
}


/* RESPONSIVE CSS
-------------------------------------------------- */

@media (min-width: 40em) {
  /* Bump up size of carousel content */
  .carousel-caption p {
    margin-bottom: 1.25rem;
    font-size: 1.25rem;
    line-height: 1.4;
  }

  .featurette-heading {
    font-size: 50px;
  }
}

@media (min-width: 62em) {
  .featurette-heading {
    margin-top: 7rem;
  }
}

</style>