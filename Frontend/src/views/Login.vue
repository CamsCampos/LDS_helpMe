<template>
  <div class="grid-box-picture">
    <div
      class="grid-box-picturebox"
      :style="{
        'background-image':
          'url(https://github.com/CamsCampos/LDS_helpMe/blob/dev/Frontend/public/img/laptopImageBackground.png?raw=true)',
      }"
    >
      <!-- lado esquerdo -->
      <b-row>
        <b-col cols="6">
          <div class="flexCenter">
            <div class="innerContainer">
              <div class="borda">
                <p class="lead text-center textoEsquerda">
                  o site <br />
                  que <br />
                  ajuda <br />
                  você!
                </p>
              </div>
            </div>
          </div>
        </b-col>

        <!-- lado direito -->
        <b-col cols="6" align-self="center" class="backgroundDegrade">
          <div class="flexCenter">
            <b-row>
              <p class="textoDireita">HELP ME!</p>
            </b-row>
          </div>

          <b-container>
            <div class="containerVerticalInterno">
              <b-form v-if="show">
                <b-form-group id="input-group-1" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    v-model="form.nome_usuario"
                    type="text"
                    required
                    placeholder="Login"
                    class="inputsLogin"
                  ></b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label-for="input-2">
                  <b-form-input
                    id="input-2"
                    v-model="form.senha"
                    required
                    type="password"
                    placeholder="Senha"
                    class="inputsLogin"
                  ></b-form-input>
                </b-form-group>

                <div class="text-center">
                  <b-button class="btnLogin mt-2" type="submit" @click="logar"
                    >Login</b-button
                  >
                </div>
                <div class="text-center mt-2">
                  <router-link to="/cadastro-usuario" active-class="active">
                    <b-button class="btnRegistrar">Cadastre-se</b-button>
                  </router-link>
                </div>
              </b-form>
            </div>
          </b-container>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nome_usuario: "",
        senha: "",
      },
      show: true,
      teste: "",
    };
  },
  methods: {
    logar() {
      this.$http
        .post("/login", this.form)
        .then((response) => {
          localStorage.setItem("idUser", response.data.id_usuario);
          localStorage.setItem(
            "permissao",
            response.data.perfil == "aluno" ? 2 : 1
          );
          this.$router.push(`/perfil`);
          // console.log(response.data);
        })
        .catch((err) => {
          console.log("Não foi possível logar - " + err);
        });
    },
  },
};
</script>

<style scoped>
@import "../style/loginHero.css";
</style>