<template>
  <div class="fundoBranco">
    <div id="cabecalho-degrade">
      <div class="container">
        <p class="fonteTitulo">Agenda do Aluno</p>
        <p>Aqui está sua agenda:</p>
      </div>
    </div>
    <b-container>
      <section class="quadrado">
        <div class="conteudo">
          <b-row>
            <b-col>
              <label for="example-datepicker">Matéria:</label>
              <b-form-select
                v-model="selected"
                :options="options"
                class="mb-2"
              ></b-form-select>
              <p>
                Matéria selecionada: <strong>{{ selected }}</strong>
              </p>
            </b-col>
          </b-row>
          <b-row>
            <b-col>
              <h2>Aulas agendadas</h2>
              <hr />
              <h4>Português</h4>
              <b-row class="ml-3">
                <b-col>
                  <p>Professor: {{ professor }}</p>
                  <p>Valor: R${{ valor }}</p>
                  <p>Horários marcados:</p>
                </b-col>
                <b-col class="sublinhado">
                  <a href=""> Ver perfil </a>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    class="text-center"
                    sticky-header
                    :items="aulasAgendadas"
                    head-variant="light"
                  ></b-table>
                </b-col>
              </b-row>
              <hr />
              <h4>Matemática</h4>
              <b-row class="ml-3">
                <b-col>
                  <p>Professor: {{ professor }}</p>
                  <p>Valor: R${{ valor }}</p>
                  <p>Horários marcados:</p>
                </b-col>
                <b-col class="sublinhado">
                  <a href="">Ver perfil</a>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <b-table
                    class="text-center"
                    sticky-header
                    :items="aulasAgendadas"
                    head-variant="light"
                  ></b-table>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: "Please select an option" },
        { value: "1", text: "Português" },
        { value: "2", text: "Matemática" },
        { value: "3", text: "História" },
        { value: "4", text: "Geografia" },
        { value: "5", text: "Ciência" },
      ],
      dataExtenso: "",
      filtro: "",
      fields: [{ key: "data", label: "Data" }, "horario"],
      items: [
        { data: "07/09", horario: "10:00 as 11:00" },
        { data: "09/09", horario: "17:30 as 18:30" },
      ],
      professor: "ProfTeste",
      valor: "40,00",
      aulasAgendadas: [
        {
          Data: "08/06",
          De: "17:10",
          Até: "18:10",
          Modificar: "button",
        },
        {
          Data: "09/06",
          De: "17:10",
          Até: "18:10",
          Modificar: "button",
        },
        {
          Data: "10/06",
          De: "17:10",
          Até: "18:10",
          Modificar: "button",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
} */

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

.corTabelaCard {
  background: #efefef;
}

.espessuraFonte {
  font-weight: 500;
}

.btnCor {
  background: #025f53;
  width: 100%;
}

.cardRedondo {
  border-radius: 10px;
  padding: 0;
}

.imagemCard {
  position: relative;
  width: 98px;
  height: 102px;
  top: -10px;
}

.elipse {
  position: absolute;
  width: 388px;
  height: 200px;
  left: -50px;
  top: -120px;
  border-radius: 50%;
  background: linear-gradient(180deg, #031d44 0%, #025f53 100%);
}

.teste {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 90px;
}

.fonteTitulo {
  font-size: 50px;
  font-weight: 400;
  /* margin-bottom: 0; */
}

.testeCardPadding {
  padding: 0;
}

.sublinhado {
  text-decoration: underline;
}
</style>
