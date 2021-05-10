import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import NotFound from '../views/erros/NotFound.vue'
import Home from '../views/Home.vue'
import Recepcao from '../views/Recepcao.vue'
import Inicio from '../views/Inicio.vue'
import CadastrarVisita from '../views/CadastrarVisita.vue'
import Visualizar from '../views/Visualizar.vue'
import CadastrarUsuario from '../views/CadastrarUsuario.vue'

import store from '@/store'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Login,
    meta: {
      publica: true
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    hame: 'home',
    component: Home
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: Inicio,
  },
  {
    path: '/recepcao',
    name: 'recepcao',
    component: Recepcao
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/notfound',
    name: 'notfound',
    component: NotFound
  },
  {
    path: '/cadastrarVisita',
    name: 'cadastrar.visita',
    component: CadastrarVisita
  },
  {
    path: '/visualizar',
    name: 'visualizar',
    component: Visualizar
  },
  {
    path: '/cadastrarUsuario',
    name: 'cadastrar.usuario',
    component: CadastrarUsuario
  },

  {
    path: '*',
    name: 'notFound',
    redirect: '/notfound'
  }

]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})



router.beforeEach((routeTo, routeFrom, next) => {


  if (!routeTo.meta.publica && !store.state.token) {

    return next({ path: '/login' });

  } else {
    next();

  }
}

);

export default router