import Vue from 'vue'
import VueRouter from 'vue-router'
import Agregar from '../views/Agregar'
import Detalle from '../views/Detalle'
import Editar from '../views/Editar'
import Inicio from '../views/Inicio'
import Visualizar from '../views/Visualizar'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/visualizar',
    name: 'Visualizar',
    component: Visualizar
  },
  {
    path: '/detalle',
    name: 'Detalle',
    component: Detalle
  },
  {
    path: '/editar',
    name: 'Editar',
    component: Editar
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: Agregar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
