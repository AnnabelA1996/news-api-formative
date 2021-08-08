import { createApp } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";
import VueNextSelect from "vue-next-select";

const app = createApp(App);
app.component("vue-select", VueNextSelect);
app.use(VueAxios, axios);
app.use(router).mount("#app");
