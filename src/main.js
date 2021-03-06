'use strict';

import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'

import './assets/scss/main.scss'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  render: h => h(App)
}).$mount('#app');
