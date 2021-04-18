import { createApp } from "vue";
import App from "./App.vue";
import vFocusDetect from "../src/vFocusDetect";

createApp(App)
    .use(vFocusDetect)
    .mount("#app");
