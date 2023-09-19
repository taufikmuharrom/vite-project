import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        name:'Login',
        path: '/login',
        component: () => import("./pages/Login.vue"),
        meta: {
            requiresAuth: false,
        },
      },
      {
        path: '/',
        component: () => import("./pages/Dashboard.vue"),
        meta: {
            requiresAuth: false,
        },
      },
    ]
  })

router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem('token')
    if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
    else next()
  })
  
  export default router