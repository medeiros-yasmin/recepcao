<template>
  <app-layout>
    <v-app div slot="conteudo">
      <v-alert color="blue" style="margin: 0px 5px 35px 5px">
        <h4 style="color: white">Visitas Cadastradas</h4>
      </v-alert>
      <v-data-table :items="visitas" :headers="cabecalho" :items-per-page="10">
       
      </v-data-table>
      
    </v-app>
  </app-layout>
</template>

<script>
export default {
  created: function () {
    this.getPosts();
  },
  methods:{
    getPosts() {
      this.$http.get("/visitas").then((result) => (this.visitas = result.data));
    },
  },
    data: () => {
    return {
      page: 2,
      cabecalho: [
        { text: "VisitaId", value: "visitaId" },
        { text: "Cpf", value: "cpf" },
        { text: "Hora Entrada", value: "horaEntrada" },
        { text: "Hora Saída", value: "horaSaida" },
        { text: "Setor Visitado", value: "setorId" },
        { text: "Objetos Pessoais", value: "objetosPessoais" },
        { text: "Observação", value: "observacao" },
        
      ],
      visitas: [],
    };
  },
}
</script>