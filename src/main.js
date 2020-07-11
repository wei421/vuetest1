import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Parent from './components/Parent.vue'
Vue.component("my-cmp1", Home);
Vue.component("my-cmp2", Parent);

export const eventBus = new Vue();
new Vue({
  el: '#app',

  render: h => h(App)
})
