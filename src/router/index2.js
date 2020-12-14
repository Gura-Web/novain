import Vue from 'vue';
import Router from 'vue-router';
import Vuex from 'vuex';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { VueHammer } from 'vue2-hammer';
import toppage from '@/components/pages/toppage';

Vue.use(VueHammer);
Vue.use(Router);
Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Router({
  routes: [
    {
      path: '/',
      component: toppage
    },
    // { 
    //   path: '/hello',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // },
    // {
    //   path: '/swiping',
    //   name: 'Swiping',
    //   component: Swiping
    // },
    // {
    //   path: '/addLike',
    //   name: 'AddLike',
    //   component: AddLike
    // },
    // {
    //   path: '/favoriteMusic',
    //   name: 'FavoriteMusic',
    //   component: FavoriteMusicList
    // },
  ]
})
