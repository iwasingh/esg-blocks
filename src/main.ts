import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import App from './app/App.vue';
import router from './app/router';

import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

const app = createApp(App);
app.use(PrimeVue);
//app.use(router);
app.mount('#root');