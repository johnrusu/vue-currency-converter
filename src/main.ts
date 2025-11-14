import { createApp } from "vue";
import Buefy from "buefy";
import router from "./router";

// styles
import "buefy/dist/css/buefy.css";
import "./assets/css/style.css";

import App from "./App.vue";

createApp(App).use(Buefy).use(router).mount("#app");
