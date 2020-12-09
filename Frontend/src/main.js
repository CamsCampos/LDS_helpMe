// ##### Importações #####
import Vue from "vue";
import App from "./App.vue";
import axios from "axios";

// -- importar estilos --
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// -- importar rotas e plugins --
import router from "./router";
import "./plugins/axios";

// ##### Usar importações #####
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(axios);
Vue.config.productionTip = false;

// ##### Renderizar aplicação #####
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
