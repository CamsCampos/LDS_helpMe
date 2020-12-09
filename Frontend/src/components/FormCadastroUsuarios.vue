<template >
  <div class="grid-box-picture">
    <div
      class="grid-box-picturebox"
      :style="{
        'background-image':
          'url(https://github.com/CamsCampos/LDS_helpMe/blob/dev/Frontend/public/img/laptopImageBackground.png?raw=true)',
      }"
    >
      <div class="backgroundDegrade">
        <header>
          <h1 class="text-center titulo">Cadastre-se</h1>
        </header>

        <fieldset>
          <div class="box">
            <div class="boxVerticalAlignment bordaFundo">
              <b-form>
                <b-row class="mb-3">
                  <b-col>
                    <b-input-group>
                      <b-form-input
                        id="input-1"
                        v-model="usuario.nome"
                        type="text"
                        required
                        placeholder="Nome completo"
                      ></b-form-input>
                    </b-input-group>
                  </b-col>
                  <b-col>
                    <b-input-group>
                      <b-form-input
                        id="example-input"
                        v-model="usuario.data_nascimento"
                        type="text"
                        placeholder="Nascimento (AAAA-MM-DD)"
                        autocomplete="off"
                      ></b-form-input>
                      <b-input-group-append>
                        <b-form-datepicker
                          v-model="usuario.data_nascimento"
                          button-only
                          right
                          locale="pt-BR"
                          aria-controls="example-input"
                          @context="onContext"
                        ></b-form-datepicker>
                      </b-input-group-append>
                    </b-input-group>
                  </b-col>
                </b-row>

                <b-row class="mb-3">
                  <b-col>
                    <b-form-input
                      id="input-1"
                      v-model="usuario.nome_usuario"
                      type="text"
                      required
                      placeholder="Usuário"
                    ></b-form-input>
                  </b-col>
                  <b-col>
                    <b-form-input
                      id="input-1"
                      v-model="usuario.senha"
                      type="password"
                      required
                      placeholder="Senha"
                    ></b-form-input>
                  </b-col>
                </b-row>

                <b-row class="mb-3">
                  <b-col>
                    <b-form-input
                      id="input-1"
                      v-model="usuario.senhaConf"
                      type="password"
                      required
                      placeholder="Confirmar senha"
                    ></b-form-input>
                  </b-col>
                  <b-col>
                    <b-form-input
                      id="input-1"
                      v-model="usuario.email"
                      type="email"
                      required
                      placeholder="E-mail"
                    ></b-form-input>
                  </b-col>
                </b-row>

                <b-form-select
                  v-model="usuario.formacao"
                  :options="opcoesFormacao"
                  class="mb-3"
                ></b-form-select>

                <b-form-radio-group
                  v-model="tipoUsuarioSelecionado"
                  :options="opcaoTipoUsuario"
                  class="mb-3 text-center"
                  value-field="item"
                  text-field="name"
                ></b-form-radio-group>

                <div class="text-center">
                  <b-button @click.prevent="cadastrar">Registrar</b-button>
                </div>
              </b-form>
            </div>
          </div>
        </fieldset>
        <b-row align-h="end">
          <b-col cols="4">
            <div class="verticalVoltarLoginRelativo">
              <div class="verticalVoltarLoginFixo">
                <p class="textoRodape" @click="goLogin">
                  <b-icon-arrow-left></b-icon-arrow-left>
                  Voltar à página de login
                </p>
              </div>
            </div>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formatted: "",
      usuario: {
        nome: "",
        data_nascimento: "",
        nome_usuario: "",
        descricao: "",
        formacao: null,
        senha: "",
        senhaConf: "",
        email: "",
      },

      // formacao: null,
      opcoesFormacao: [
        { value: null, text: "Selecione uma opção" },
        {
          value: "Ensino fundamental incompleto",
          text: "Ensino fundamental incompleto",
        },
        {
          value: "Ensino fundamental completo",
          text: "Ensino fundamental completo",
        },
        { value: "Ensino médio incompleto", text: "Ensino médio incompleto" },
        { value: "Ensino médio completo", text: "Ensino médio completo" },
        {
          value: "Ensino superior incompleto",
          text: "Ensino superior incompleto",
        },
        { value: "Ensino superior completo", text: "Ensino superior completo" },
        { value: "Pós-graduado", text: "Pós-graduado" },
      ],

      tipoUsuarioSelecionado: "alunos",
      opcaoTipoUsuario: [
        { item: "alunos", name: "Aluno" },
        { item: "professores", name: "Professor" },
      ],
    };
  },
  methods: {
    onContext(ctx) {
      this.formatted = ctx.selectedFormatted;
      this.selected = ctx.selectedYMD;
    },
    goLogin() {
      this.$router.push("/login");
    },
    cadastrar() {
      console.log("usuario: ", this.usuario);
      this.$http
        .post(`/${this.tipoUsuarioSelecionado}`, this.usuario)
        .then((res) => {
          console.log("Sucesso: " + res.data);
          localStorage.setItem("idUser", res.data.id_usuario);
          localStorage.setItem(
            "permissao",
            this.tipoUsuarioSelecionado == "alunos" ? 2 : 1
          );
        })
        .catch((err) => {
          console.warn("Erro: " + err);
        });
      setTimeout(() => {
        this.$router.push("/perfil");
      }, 500);
    },
  },
};
</script>

<style scoped>
@import "../style/form-base.css";
</style>
