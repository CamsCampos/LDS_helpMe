<template>
  <div class="fundoBranco">
    <div id="cabecalho-degrade">
      <div class="container">
        <b-row align-v="center">
          <b-col cols="auto" class="mr-auto p-3">
            <p class="fonteTitulo">Fórum</p>
          </b-col>
        </b-row>
        <b-row align-v="end">
          <b-col cols="auto" class="mr-auto p-3 btnAgenda">
            <h4 v-if="permissao == 2">{{ alunos.pessoa.nome }}</h4>
            <h4 v-else>{{ professores.pessoa.nome }}</h4>
          </b-col>
          <b-col cols="auto" class="p-3 btnAgenda">
            <b-button @click="acessarAgenda">Acessar agenda</b-button>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container">
      <section class="quadrado">
        <div class="conteudo">
          <b-row>
            <b-col>
              <h5 class="mb-4">Fórum da disciplina</h5>
              <p v-for="(item, id) in getMensagens" :key="id">
                {{ item.texto }}
              </p>
            </b-col>
          </b-row>

          <div>
            <b-form-textarea
              id="textarea"
              v-model="conteudoTexto.texto"
              placeholder="Digite algo..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </div>
          <b-button class="mt-1" @click="postarMensagem">Enviar</b-button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["idAgendamento"],
  components: {},
  data() {
    return {
      alunos: [],
      professores: [],
      getMensagens: "",
      agendamentos: [],
      conteudoTexto: {
        id_pessoa: 2,
        texto: "",
      },
      permissao: localStorage.getItem("permissao"),
    };
  },
  methods: {
    acessarAgenda() {
      this.$router.push("/agenda");
    },
    postarMensagem() {
      console.log(this.conteudoTexto);
      axios
        .post(`/mensagens/${1 /*this.idAgendamento*/}`, this.conteudoTexto)
        .then((response) => {
          console.log("Mensagem enviada: " + response.data);
        })
        .catch((error) => {
          console.warn("Mensagem não enviada: " + error);
        });
    },
  },
  mounted() {
    this.$http.get(`/alunos/${1 /*idAlunoAgendamento*/}`).then((response) => {
      this.alunos = response.data;
    });

    this.$http
      .get(`/professores/${localStorage.getItem("idUser")}`)
      .then((response) => {
        this.professores = response.data;
      });

    this.$http
      .get(`/mensagens/${1 /*this.idAgendamento*/}`)
      .then((response) => {
        this.getMensagens = response.data;
      });

    this.$http
      .get(`/agendamentos/alunos/${2 /*idAlunoAgendamento*/}`)
      .then((response) => {
        this.agendamentos = response.data;
      });
  },
};
</script>

<style scoped>
#cabecalho-degrade {
  background: linear-gradient(180deg, #031d44 25.52%, #025f53 100%);
  opacity: 0.9;
  color: white;
  box-shadow: 0px 1px 2px black;
}

#cabecalho-degrade h2 {
  padding: 30px 0 0 90px;
}

#cabecalho-degrade p {
  padding: 30px 0 50px 90px;
}

.quadrado {
  display: flex;
  position: relative;
  top: -40px;
}

.quadrado .conteudo {
  padding: 40px 20px 20px 20px;
  background: #fff;
  border-radius: 10px 10px 0px 0px;
  width: 100vw;
}

.fundoBranco {
  background: #fafafa;
}

.fonteTitulo {
  font-size: 50px;
  font-weight: 400;
}

.filtroValor {
  color: black;
  margin-left: 0;
}

.btnAgenda {
  top: -30px;
}

.cursorPonteiro {
  cursor: pointer;
}

.tamanhoBell {
  font-size: 30px;
  margin-left: auto;
}
</style>
