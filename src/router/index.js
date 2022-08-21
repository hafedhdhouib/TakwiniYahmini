import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import firebase from 'firebase'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
 scrollBehavior(to,from, savedPosition){return { top: 0 }},
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutUs.vue')
    },
    {
      path: '/inscription',
      name: 'inscription',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Inscription.vue')
    },
    {
      path: '/ich3ar',
      name: 'ich3ar',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ich3ar.vue')
    },
    {
      path: '/AboutView',
      name: 'AboutView',
      component: () => import('../views/AboutView.vue')
    },
    ,
    {
      path: '/guide',
      name: 'guide',
      component: () => import('../views/List.vue')
    },
    ,
    {
      path: '/video',
      name: 'video',
      component: () => import('../views/video.vue')
    }, {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/index.vue'),
      meta:{
        requiresAuth:true
      }
    },{
      path: '/admin/add-actualite/',
      name: 'add actualite',
      component: () => import('../views/admin/add-actualite.vue'),
      meta:{
        requiresAuth:true
      }
    },{
      path: '/admin/edit-actualite/:id',
      name: 'edit actualite',
      component: () => import('../views/admin/edit-actualite.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/admin/add-guide',
      name: 'add guide',
      component: () => import('../views/admin/add-guide.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/admin/edit-guide/:id',
      name: 'edit guide',
      component: () => import('../views/admin/edit-guide.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/admin/login.vue')
    }, {
      path: '/admin/add-lien',
      name: 'add lien',
      component: () => import('../views/admin/add-lien.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/admin/edit-lien/:id',
      name: 'edit lien',
      component: () => import('../views/admin/edit-lien.vue'),
      meta:{
        requiresAuth:true
      }
    },
    {
      path: '/article/:id',
      name: 'article',
      component: () => import('../views/article.vue')
    },
    
  ]
})
router.beforeEach(async (to, from, next) => {
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    
    let user = await firebase.auth().currentUser
    console.log(user);
    if (user) {
          next()
    } else {
 
      next({
        name: 'login'
      })
    }
  } else {
    next()
  }
})


export default router
