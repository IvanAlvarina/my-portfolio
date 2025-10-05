import { createApp } from 'vue'
import App from './App.vue'
import './main.css'

// Font Awesome setup
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Add brand icons
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faTwitter, faInstagram, faLinkedin)

const app = createApp(App)

//Register the Font Awesome component globally
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')