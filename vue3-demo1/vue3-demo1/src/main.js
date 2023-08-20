import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPluginPersist from "pinia-plugin-persistedstate";
import App from "./App.vue";
let pinia = createPinia(); //创建pinia实例
let app = createApp(App); //创建根实例
app.use(pinia.use(piniaPluginPersist)).mount("#app");
