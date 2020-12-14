import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import { createRouter, createWebHistory } from 'vue-router'
import tinderUI from '../components/features/tinderUI.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/tinder',
    component: tinderUI
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
