import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './components/Home.vue'
import items from './components/Users.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


const routes = 
[
  {path: '/home', component: Home},
  {path: '/users', component: items}
];

const router = new VueRouter(
  {routes: routes}
);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
