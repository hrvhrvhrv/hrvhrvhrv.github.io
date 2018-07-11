import Vue from 'vue';
import Vuex from 'vuex';
import * as Blog from '../store/modules/Blog';
// import * as Pupil from '../store/modules/Pupil';
import * as Auth from '../store/modules/Auth';

// import actions from './actions.js';


Vue.use(Vuex);

export default new Vuex.Store({
  // actions,
  modules: {
    // stocks,
    Blog,
    // Pupil,
    Auth
  }
});

