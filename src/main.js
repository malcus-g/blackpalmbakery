import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons */
import { faDiamond } from '@fortawesome/free-solid-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faDiamond);
library.add(faInstagram);
library.add(faBars);

const app = createApp(App);

app.use(router);

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
