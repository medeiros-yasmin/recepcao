<template>
  <app-layout style="padding-top: 0px">
    <div slot="conteudo">
      <div>
        <v-row style="margin-left: 10px">
          <!-- <v-btn depressed color="primary" @click="dialog = true">
            <i class="fas fa-plus"></i>
             Novo
          </v-btn>
          -->
        </v-row>
      </div>

      <v-alert color="blue" style="margin: 0px 5px 35px 5px">
        <h4 style="color: white">Visitantes</h4>
      </v-alert>
      <div></div>

      <v-card>
        <v-row style="margin: 10px">
          <v-col cols="12" md="3">
            <v-text-field 
            label="CPF"
            v-model="filtro.cpf"
            />
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filtro.dataEntrada"
              :rules="[(v) => !!v]"
              label="Data Inicial"
              type="date"
              value="current-date"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="filtro.dataSaida"
              :rules="[(v) => !!v]"
              label="Data Fim"
              type="date"
              value="current-date"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12" md="3" style="margin-top: 10px">
            <v-btn color="primary" style="margin: 2px" @click="pesquisarVisita"
              ><v-icon>fa-search</v-icon></v-btn
            >
            <v-btn color="primary" style="margin: 2px"
              ><v-icon>fa-retweet</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card>

      <v-data-table :items="visitas" :headers="cabecalho" :items-per-page="10">
        <template v-slot:item.actions="{ item }">
          <!--<v-row align="center"> -->
          <div>
            <!--<v-col cols="12" sm="6"> -->
            <v-alert
              max-width="400px"
              max-height="70px"
              :color="type"
              v-if="type"
            >
              Visitante excluído com sucesso!
            </v-alert>
            <v-layout column align-center>
              <v-btn
                class="mt-1 mb-1"
                slot="activator"
                depressed
                @click="confirmarSaida(item)"
                color="success"
                rounded
                x-small
              >
                <v-icon left> mdi-account-check-outline </v-icon>
                Confirmar saída
              </v-btn>
            </v-layout>
          </div>

          <div>
            <v-btn
              class="mt-1 mb-1"
              depressed
              @click="removerVisita(item)"
              color="error"
              rounded
              x-small
            >
              <v-icon left> mdi-delete </v-icon>
              Excluir
            </v-btn>
          </div>

          <!-- </v-col> -->

          <!--  </v-row>-->
        </template>
      </v-data-table>
    </div>
  </app-layout>
</template>


<script>
//import func from '../../vue-temp/vue-editor-bridge';

export default {
  created: function () {
    this.getPosts();
  },
  methods: {

    pesquisarVisita(){


      this.$http.get("/visitas/porFiltro",{params:this.filtro})
      .then((result) => (this.visitas = result.data));

    },

    filterSearch(val){
        this.filters = this.$MultiFilters.updateFilters(this.filters, {search: val});
    },

    filtroCustomizado(cpf){
        this.filters = this.$MultiFilters.updateFilters(this.filters, {pesquisar: cpf})
    },
    logar() {
      this.$router.push("/inicio");
    },
    getPosts() {
      this.$http.get("/visitas").then((result) => (this.visitas = result.data));
    },

    confirmarSaida(visita) {
      const confirmar = window.confirm("Deseja confirmar a saída?");
      if (confirmar) {
        this.$http.put("/visitas/" + visita.visitaId, {});

        this.$router.push("/visualizar");
        alert("Saída confirmada com sucesso");
      }

      //this.mensagem = "Visita excluída com sucesso!";
      //console.log('confirmando saida'+visita);
    },

    removerVisita(visita) {
      const confirmar = window.confirm(
        "Deseja deletar a visita " + visita.cpf + " ?"
      );
      if (confirmar) {
        this.$http.delete("/visitas/" + visita.visitaId);
        this.mensagem = "Visita excluída com sucesso!";
        this.$router.push("/visualizar");
      }
    },
    pesquisarPorCpf() {},

    exibirAlerta(type) {
      this.type = type;
      let timer = this.exibirAlerta.timer;
      if (timer) {
        clearTimeout(timer);
      }
    },
  },
  data: () => {
    return {
      filtro:{},
      cabecalho: [
        { text: "VisitaId", value: "visitaId" },
        { text: "Cpf", value: "cpf" },
        { text: "Hora Entrada", value: "horaEntrada" },
        { text: "Hora Saída", value: "horaSaida" },
        { text: "Setor Visitado", value: "setorId" },
        { text: "Objetos Pessoais", value: "objetosPessoais" },
        { text: "Observação", value: "observacao" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      mensagem: "",
      textoDePesquisa: "",

      visitas: [],
      visitaDeletada: null,
      dataEntrada: null,
      dataSaida: null,
      page: 1,
      diario: {
        diarioId: null,
        data: new Date().toISOString().substr(0, 10),

        numero: null,
        suplemento: false,
      },
      dialog: false,
      menu4: false,
      menu5: false,
      type: null,
      elapse: null,
    };
  },
  components: {},

  //computed: {
  //evenNumbers: ('formatDate', function (cabecalho)) {
  // return this.cabecalho.dataEntrada.filter(function (number) {
  //  return number % 2 === 0
  //})
  // }
  // }
};
</script>
