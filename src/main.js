import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'

// By defining Vue.prototype.$http = Axios we have 
// modified the vue engine and added axios. 
// We can now use axios in all our components like this.$http
Vue.prototype.$http = Axios;

Vue.config.productionTip = false


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
