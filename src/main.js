import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createStore } from './store';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import icons */
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowLeft);
library.add(faArrowRight);

const store = createStore();
const app = createApp(App);

app.use(router);
app.use(store);

app
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app');
