// ##### Importações #####
import Vue from "vue";
import VueRouter from "vue-router";

// ** importações de componentes **
import Cadastro from "@/views/CadastroAula.vue";
import CadastroUsuario from "@/views/CadastroUsuario.vue";
import PaginaEmBranco from "@/components/templates/PaginaEmBranco";
import SolicitaAula from "../components/SolicitarAulas";
import Card from "../components/templates/Card";

// ##### Usar plugins de importações #####
Vue.use(VueRouter);

// ##### Atribuir importações #####
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: PaginaEmBranco,
    },
    {
      path: "/cadastro",
      component: Cadastro,
    },
    {
      path: "/cadastro-usuario",
      component: CadastroUsuario,
    },
    {
      path: "/solicita-aula",
      component: SolicitaAula,
    },
    {
      path: "/Card",
      component: Card,
    },
  ],
});

// const routes = [{
//     path: '/',
//     component: App
// }, {
//     path: '/cadastro',
//     component: Cadastro
// },]

// const router = new VueRouter({
//     mode: 'history',
//     base: process.env.BASE_URL,
//     routes
// })

// export default router
