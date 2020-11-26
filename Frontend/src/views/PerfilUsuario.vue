<template>
  <div class="fundoBranco">
    <div id="cabecalho-degrade">
      <div class="container">
        <b-row align-v="center">
          <b-col cols="auto" class="mr-auto p-3">
            <p class="fonteTitulo">Página de perfil</p>
          </b-col>
          <b-col cols="auto">
            <p class="tamanhoBell">
              <b-icon-bell-fill
                @click="mostrarNotificacoes"
                class="cursorPonteiro"
              >
              </b-icon-bell-fill>
            </p>
          </b-col>
        </b-row>
        <b-row align-v="end">
          <b-col cols="auto" class="mr-auto p-3 btnAgenda">
            <h4 v-if="permissao == 1">{{ professores.pessoa.nome }}</h4>
            <h4 v-else>{{ alunos.pessoa.nome }}</h4>
          </b-col>
          <b-col cols="auto" class="p-3 btnAgenda">
            <b-button @click="acessarAgenda">Acessar agenda</b-button>
            <b-button @click="logout">Logout</b-button>
          </b-col>
        </b-row>
      </div>
    </div>
    <div class="container">
      <section class="quadrado">
        <div class="conteudo">
          <b-row>
            <b-col>
              <h5>Descrição:</h5>
              <p>Fale um pouco sobre você</p>
            </b-col>
            <b-col cols="auto">
              <p class="cursorPonteiro">Editar perfil</p>
            </b-col>
          </b-row>

          <!-- <div class="mt-5">
            <h4>Formação acadêmica:</h4>
            <p v-if="permissao == 1"></p>
            <p v-if="alunos.pessoa.formacao != ''">
              {{ professores.pessoa.formacao }}
              {{ alunos.pessoa.formacao }}
            </p>
            <p v-else>Formação não adicionada</p>
          </div> -->
          <!-- <div class="mt-5">
            <h4>Competências:</h4>
            {{ professores.pessoa.aulas }}
            <p>DISCIPLINAS QUE VAI LECIONAR com v-for</p>
          </div> -->

          <hr />

          <!-- <div>
            <h4>Escola:</h4>
            <p>Nome da escola do aluno com v-for</p>
          </div>
          <div>
            <h4>Turma:</h4>
            <p>Turma do aluno com interpolação</p>
          </div> -->
        </div>
      </section>
    </div>

    <div class="container" v-show="boolNotificacoes">
      <section class="quadrado">
        <div class="conteudo">
          <div
            class="notificacoes"
            v-for="(item, id) in notificacoes"
            :key="id"
          >
            <div class="text-center">
              <p>
                <strong>{{ item.remetente.nome }}</strong> solicitou agendamento
                da aula de <strong>{{ item.aulaHorario.id_aula }}</strong> para
                o dia <strong>{{ item.aulaHorario.id_horario }}</strong> as
                <strong>{{ item.aulaHorario.id_horario }}</strong> horas.
              </p>
              <b-button
                variant="success"
                class="mr-1"
                @click="confirmarAgendamento"
                >Aceitar</b-button
              >
              <b-button @click="cancelarAgendamento">Cancelar</b-button>
            </div>
            <hr />
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      professores: [],
      alunos: [],
      count: 0,
      notificacoes: [],
      boolNotificacoes: false,
      agendamentos: [],
      permissao: localStorage.getItem("permissao"),
    };
  },
  methods: {
    acessarAgenda() {
      this.$router.push("/agenda");
    },
    mostrarNotificacoes() {
      this.boolNotificacoes = !this.boolNotificacoes;

      this.$http
        .get("/notificacoes")
        .then((response) => {
          this.notificacoes = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    confirmarAgendamento() {
      this.$http
        .put(`/agendamentos/professores/${localStorage.getItem("idUser")}`, 1)
        .then((response) => {
          this.agendamentos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    cancelarAgendamento() {
      this.$http
        .put(`/agendamentos/professores/${localStorage.getItem("idUser")}`, 0)
        .then((response) => {
          this.agendamentos = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout() {
      localStorage.setItem("idUser", "");
      localStorage.setItem("permissao", "");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.$http
      .get(`/professores/1`)
      .then((response) => {
        this.professores = response.data;
      })
      .catch((err) => {
        console.warn(err);
      });

    this.$http
      .get(`/alunos/1`)
      .then((response) => {
        this.alunos = response.data;
      })
      .catch((err) => {
        console.warn("Erro: " + err);
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
