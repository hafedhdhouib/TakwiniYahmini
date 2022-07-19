import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
      component: () => import('../views/admin/index.vue')
    },{
      path: '/admin/add-actualite/',
      name: 'add actualite',
      component: () => import('../views/admin/add-actualite.vue')
    },{
      path: '/admin/edit-actualite/:id',
      name: 'edit actualite',
      component: () => import('../views/admin/edit-actualite.vue')
    },
    {
      path: '/admin/add-guide',
      name: 'add guide',
      component: () => import('../views/admin/add-guide.vue')
    },
    {
      path: '/admin/edit-guide/:id',
      name: 'edit guide',
      component: () => import('../views/admin/edit-guide.vue')
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('../views/admin/login.vue')
    },
  ]
})

export default router
