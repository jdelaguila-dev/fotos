import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import { VueFire, VueFireAuth } from "vuefire";
import { firebaseApp } from "./services/firebase";

const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(VueFire, {
  // imported above but could also just be created here
  firebaseApp,
  modules: [
    // we will see other modules later on
    VueFireAuth(),
  ],
});
app.mount("#app");
