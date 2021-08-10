/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../app.vue'
import smoothScroll from 'vue-smoothscroll'
import VueTyperPlugin from 'vue-typer'
import VueParticles from 'vue-particles'
Vue.use(smoothScroll)
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)

import { library } from '@fortawesome/fontawesome-svg-core'

import { faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,faSchool,
  faSearch,faEnvelope,faMapMarkerAlt,faGlobe,faBlog,
  faBirthdayCake,faImage,faArchive,faToolbox,faFileCode } from '@fortawesome/free-solid-svg-icons'

import { faTwitter,faGithub,faHtml5,faCss3Alt,faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee,faHandshake,faCode,faUserCircle,faHammer,faPen,
    faSchool,faSearch,faTwitter,faGithub,faEnvelope,faMapMarkerAlt,faGlobe,
    faBlog,faBirthdayCake,faHtml5,faCss3Alt,faJsSquare,faImage,faToolbox,faArchive,faFileCode)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    render: h => h(App)
  }).$mount()
  document.body.appendChild(app.$el)
})


// The above code uses Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.
// To be able to target elements in your existing html/erb templates,
// comment out the above code and uncomment the below
// Add <%= javascript_pack_tag 'hello_vue' %> to your layout
// Then add this markup to your html template:
//
// <div id='hello'>
//   {{message}}
//   <app></app>
// </div>


// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// document.addEventListener('DOMContentLoaded', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: {
//       message: "Can you say hello?"
//     },
//     components: { App }
//   })
// })
//
//
//
// If the project is using turbolinks, install 'vue-turbolinks':
//
// yarn add vue-turbolinks
//
// Then uncomment the code block below:
//
// import TurbolinksAdapter from 'vue-turbolinks'
// import Vue from 'vue/dist/vue.esm'
// import App from '../app.vue'
//
// Vue.use(TurbolinksAdapter)
//
// document.addEventListener('turbolinks:load', () => {
//   const app = new Vue({
//     el: '#hello',
//     data: () => {
//       return {
//         message: "Can you say hello?"
//       }
//     },
//     components: { App }
//   })
// })
