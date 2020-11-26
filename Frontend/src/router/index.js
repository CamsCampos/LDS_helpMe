// ##### Importações #####
import Vue from "vue";
import VueRouter from "vue-router";

// ** importações de componentes **
import CadastroAula from "@/views/CadastroAula.vue";
import CadastroUsuario from "@/views/CadastroUsuario.vue";
import SolicitaAula from "../views/SolicitarAulas";
import PerfilUsuario from "../views/PerfilUsuario";
import Agenda from "../views/Agenda";
import Login from "../views/Login";
import Forum from "../views/Forum";

// ##### Usar plugins de importações #####
Vue.use(VueRouter);

// ##### Atribuir importações #####
export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/cadastro-aula",
      component: CadastroAula,
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
      path: "/agenda",
      component: Agenda,
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/perfil",
      component: PerfilUsuario,
    },
    {
      path: "/forum/:id",
      component: Forum,
      props: true,
    },
  ],
});
