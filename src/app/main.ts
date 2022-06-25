import { createApp } from "vue";
import { createPinia } from "pinia";

import PrimeVue from 'primevue/config';
import Panel from "primevue/panel";

import 'primevue/resources/themes/rhea/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

import App from "./App.vue";
import router from "./shared/router";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(PrimeVue);
app.component('Panel', Panel);

app.mount("#app");
