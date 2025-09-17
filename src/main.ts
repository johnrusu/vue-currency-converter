import { createApp } from "vue";
import Buefy from "buefy";

import "buefy/dist/css/buefy.css";
import "./style.css";
import App from "./App.vue";

createApp(App).use(Buefy).mount("#app");
