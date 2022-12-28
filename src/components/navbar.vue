<template>
  <div>
  <nav
    class="navbar navbar-expand-md navbar-dark fixed-top bg-primary"
    v-bind:class="{ navbarOpen: show }"
  >

    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      @click.stop="toggleNavbar()"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="navbar-brand">
      <router-link to="/"
        ><img
          class="logo p-2"
          src="../assets/logo/Logo-Takwini-Yahmni.png"
          alt="Logo"
width="100"
height="100"
        />
      </router-link>
    </div>
    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
      v-bind:class="{ show: show }"
    >
      <ul class="navbar-nav mb-2 mb-md-0">
        <li class="nav-item">
          <router-link
            class="nav-link fs-5"
            @click.stop="toggleNavbar()"
            :class="$route.path == '/' ? 'active' : ' '"
            aria-current="page"
            to="/"
            >
            <i class="bi bi-house"></i>
            الرئيسية
            
            </router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link fs-5"
            @click.stop="toggleNavbar()"
            :class="$route.path == '/about' ? 'active' : ' '"
            to="/about"
            >من نحن؟</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link fs-5"
            @click.stop="toggleNavbar()"
            :class="$route.path == '/guide' ? 'active' : ' '"
            to="/guide"
            >مراكز التكوين المهني
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link fs-5"
            to="/inscription"
            @click.stop="toggleNavbar()"
            :class="$route.path == '/inscription' ? 'active' : ' '"
            >تسجيل الدخول للتوجيه المهني
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link fs-5"
            @click.stop="toggleNavbar()"
            :class="$route.path == '/ich3ar' ? 'active' : ' '"
            to="/ich3ar"
            >الإشعار
          </router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle fs-5" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            فيديو
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <router-link  
                class="dropdown-item a"
                @click.stop="toggleNavbar()"
                to="/video_Etatique"
                >مراكز التكوين العمومية 
              </router-link></li>
            <li><router-link class="dropdown-item a"                 @click.stop="toggleNavbar()"
                to="/video_Prive">مراكز التكوين الخاصة</router-link></li>
          </ul>
        </li>
        <li class="nav-item">
<i class="bi bi-search nav-link fs-5"  data-bs-toggle="modal" data-bs-target="#exampleModal"></i>        
</li>
      </ul> 
                 
    </div>
    
  </nav>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">New message</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>


  </div>
</template>

<script>
  import 'bootstrap/dist/js/bootstrap.bundle'
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    
    toggleNavbar() {
      this.show = !this.show;
    },
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style  scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Readex+Pro:wght@600&display=swap');

  .font{
    font-family: 'Lato';
  }
  .a{
    text-align: right
  }


@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) {
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
.navbar-nav {
  margin-right: 120px;
}
.navbar-nav > li{
    padding-left:30px;
    padding-right:30px;
  }
}

@media screen 
  and (max-device-width: 1199px) 
and (-webkit-min-device-pixel-ratio: 1) {
  .navbar-brand {
  flex: 0 1 auto;
  display: block;
  width: 100px;
  height: 100px; 
  position: absolute;
  left: 0;
  top: 0;
  margin: 0 !important;
  padding: 0 !important;
  transform: translateX(0);
  text-align: center;
}
.navbar-nav {
  margin-right: 0px;
}
.navbar-nav > il{
    padding-left:0px;
    padding-right: 30px;
  }
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
  margin-right: 0.75rem;
  margin-left: 0.75rem;
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
  letter-spacing: -0.05rem;
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