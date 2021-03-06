import Vue from 'vue'
import Router from 'vue-router'
import VueCookies from 'vue-cookies';
import home from '../components/home/home.vue'
import admin from '@/components/Admin'
import order from '@/components/Order'
import total from '@/components/Total'
import guestProfile from '@/components/guestInterface'
import Bill from '@/components/Bill'
import seat from '@/components/Seat'
import socket from '@/components/socket'
import guestsignup from '../views/guestsignup.vue'
import guestlogin from '../views/Guestlogin.vue'

Vue.use(Router);
Vue.use(VueCookies);
const router = new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/total',
      name: 'total',
      component: total,
      meta:{
        role:'admin'
      }
    },
    {
      path: '/guestProfile',
      name: 'guestProfile',
      component: guestProfile,
      meta:{
        role:'guest'
      }
    },
    {
      path: '/Bill',
      name: 'Bill',
      component: Bill
    },
    {
      path: '/seat',
      name: 'seat',
      component: seat
    },
    {
      path: '/socket',
      name: 'socket',
      component: socket
    },
    {
      path: '/guestsignup',
      name: 'guestsignup',
      component: guestsignup
    },
    {
      path: '/guestlogin',
      name: 'guestlogin',
      component: guestlogin
    }
  ]
})

router.beforeEach((to, from, next) =>{
    if(to.name == 'guestProfile' && Vue.$cookies.get('guesttoken')==null ){
      alert('ban phai dang nhap')
      next({path:'/guestlogin'})
    }else{
      next()
    }
});

router.beforeEach((to, from, next) => {
    if(to.name=='total'&& Vue.$cookies.get('token')==null){
      alert('admin moi co quyen')
      next({path:'/admin'})
    }else{
      next()
    }
});

export default router