// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Uikit from 'uikit'
import Vue from 'vue'
import App from './App'
import router from './router'
import Navbar from './components/Navbar.vue'
import StoryblokVue from 'storyblok-vue'
import UiRoot from './components/UiRoot.vue'
import UiSection from './components/UiSection.vue'

window.Uikit = Uikit

Vue.component('root', UiRoot)
Vue.component('ui-section', UiSection)
Vue.component('navbar', Navbar)
Vue.use(StoryblokVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
