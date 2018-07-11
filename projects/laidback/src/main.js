import Vue from "vue"
// import Vuetify from"vuetify";
import VueRouter from "vue-router";
import axios from "axios";
import store  from './store/store.js';
import Vuemoment from 'vue-moment';
import Vuelidate from 'vuelidate'



import VCalendar from 'v-calendar';
import 'v-calendar/lib/v-calendar.min.css';

import App from "./App.vue";
import { routes } from "./routes";

import "./re-style-sheet.css";
import "./responsive.css";
import Vue2Filters from 'vue2-filters'

Vue.use(Vue2Filters)


Vue.use(VueRouter);

//  Vuelidate is a plugin used to validate forms
Vue.use(Vuelidate);

// Vue - moment is a plugin used to parse the date object
Vue.use(Vuemoment);

// Use v-calendar, v-date-picker & v-popover components
Vue.use(VCalendar, {
  firstDayOfWeek: 2,
  titlePosition: "left",
  datePickerTintColor: "#d0021b"
});

// Vue.http.options.root = 'https://vuejs-stock-trader-c7441.firebaseio.com/';
// Vue.http.options.root = 'http://localhost:3005/v1/';

// axios.defaults.baseURL = 'http://localhost:3005/v1';
axios.defaults.baseURL = 'https://shrouded-reaches-73606.herokuapp.com/v1';


Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});



const router = new VueRouter({
  mode: 'history',
  routes
  ,
  linkActiveClass: "active"
});





router.beforeEach((to, from, next) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);
  next();
  if (to.matched.some(record => record.meta.adminOnly)) {

    const enter = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    if ( enter && role === "Admin") {
      next()
    }

    else {
      next('/login')
    }
  } else if (to.matched.some(record => record.meta.loggedInOnly)) {
//  need to be ale to check the state or could check local storage
    const enter = localStorage.getItem('token');
    if ( enter && role === "Registered") {
      next()
    } else {
      next('/login')
    }
  } else {
    next();
  }

});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
});
