// ##### Importações #####
import Vue from "vue";
import App from "./App.vue";

// -- importar estilos --
import EstiloFormulario from "./style/form-base.css";
import EstiloGeral from "./style/general.css";
import EstiloCadastroUsuario from "./style/user-register.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// -- importar rotas --
import router from "./router";

// ##### Usar importações #####
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;

Vue.use(EstiloFormulario);
Vue.use(EstiloGeral);
Vue.use(EstiloCadastroUsuario);

// ##### Renderizar aplicação #####
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
