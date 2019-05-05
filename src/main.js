import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css' // only if your build system can import css, otherwise import it wherever you would import your css.
 

import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Sticky from 'vue-sticky-directive'
Vue.use(Sticky)

Vue.use(Vuetify, {
  iconfont: 'fa',
  theme: {    
    primary:"#ee8900", // #E53935
    secondary: colors.red.darken1, // #FFCDD2
    accent: colors.indigo.base // #3F51B5
  }
})
Vue.use(VuePlyr)

Vue.config.productionTip = false  

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
