import Vue from 'vue'
import './plugins/fontawesome'
//import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import http from '@/http'


import vuetify from './plugins/vuetify';
import layout from '@/components/template/Layout'
import alertas from '@/components/Mensagens'


import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'




Vue.component('app-layout',layout);
Vue.component('app-alertas',alertas);
Vue.config.productionTip = false


Vue.prototype.$http = http;


new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
