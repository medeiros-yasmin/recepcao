
<template>
  <app-layout style="padding-top: 0px">
    <div slot="conteudo">
      <div>
        <v-row style="margin-left: 10px" align="left">
          <v-btn depressed color="primary" @click="dialog = true">
            <i class="fas fa-plus"></i>
            Novo
          </v-btn>
        </v-row>
      </div>

      <v-alert color="blue-grey" style="margin: 35px 5px 35px 5px">
        <h4 style="color: white">Gerenciar Diários</h4>
      </v-alert>

      <v-card>
        <v-row style="margin: 10px">
          <v-col cols="12" md="3">
            <v-text-field label="Numero" />
          </v-col>

          <v-col cols="12" md="3">
            <v-menu
              ref="menu4"
              v-model="menu4"
              :close-on-content-click="false"
              :return-value.sync="filtro.dataCirculacaoInicio"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="filtro.dataCirculacaoInicio | moment('DD/MM/YYYY')"
                  label="Data Circulação Inicio"
                  prepend-icon="mdi-calendar"
                  hint="DD/MM/YYYY  format"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filtro.dataCirculacaoInicio"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu4 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu4.save(filtro.dataCirculacaoInicio)"
                >
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3">
            <v-menu
              ref="menu5"
              v-model="menu5"
              :close-on-content-click="false"
              :return-value.sync="filtro.dataCirculacaoFim"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  :value="filtro.dataCirculacaoFim | moment('DD/MM/YYYY')"
                  label="Data Circulação Fim"
                  prepend-icon="mdi-calendar"
                  hint="DD/MM/YYYY  format"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="filtro.dataCirculacaoFim"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu5 = false">
                  Cancel
                </v-btn>
                <v-btn
                  text
                  color="primary"
                  @click="$refs.menu5.save(filtro.dataCirculacaoFim)"
                  >OK</v-btn
                >
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" md="3" style="margin-top: 10px">
            <v-btn color="primary" style="margin: 2px"
              ><v-icon>fa-search</v-icon></v-btn
            >
            <v-btn color="primary" style="margin: 2px"
              ><v-icon>fa-retweet</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-card>

      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Id</th>
              <th class="text-left">Data</th>

              <th class="text-left">Data Circulação</th>

              <th class="text-left">Data Fechamento</th>

              <th class="text-left">Opções</th>
            </tr>
          </thead>
          <tbody>
           
            <tr v-for="item in page.content" :key="item.id">
            <!--   <td>{{ item.id}}</td>
              <td>{{ item.data }}</td>
              <td>{{ item.dataCirculacao}}</td>
              <td>{{ item.dataFechamento }}</td>
              <td>
                <v-btn   text color="primary" @click="edit(item.id)" style="margin:2px">
                  <v-icon>far fa-edit</v-icon>
                </v-btn>

                <ModalConfirm
                  titulo="Alerta"
                  @onYes="updateYes"
                  :mensagem="
                    'Deseja excluir o diario do dia ' +
                    formatDate(item.dataCirculacao) +
                    ' ?'
                  "
                  :url="'diario/' + item.diarioId"
                  icon="fa-trash-alt"
                >
                </ModalConfirm>
              </td> -->
            </tr> 
          </tbody>

              <tfoot>
           
          </tfoot>
        </template>
      </v-simple-table>
       <div class="text-center">
              <v-pagination value="1"    
              length="2"  >                
              </v-pagination>
            </div>

    </div>
  </app-layout>
</template>

<script>


export default {
  data: () => {
    return {
      page: {},
      diario: {
        diarioId: null,
        data: new Date().toISOString().substr(0, 10),
        dataFechamento: null,
        dataCirculacao: null,
        numero: null,
        suplemento: false,
      },
      filtro: {
        numero: null,
        dataCirculacaoInicio: null,
        dataCirculacaoFim: null,
      },
      dialog: false,
      menu4: false,
      menu5: false,
    };
  },
  components: {  },
  methods: {
    updateSave() {
      //this.diario.diarioId = ev.diario.diarioId;
      //this.dialog = ev.dialog;
      
    },
    cancelar() {
      //this.dialog = ev;
      
    },
    updateYes() {
      //alert("Sim");
      
    },

    edit() {
      //this.$router.push("/diario/" + id);
      
    },

    atualizarPagina(){
      
      /* let url  = '/diarios?page='+(ev - 1)+'&size=10';
      console.log(url)
      this.$http.get(url).then(res=>{
       this.page = res.data
    }) */
    },
  },
  mounted(){
    /* this.$http.get('/diarios').then(res=>{
     this.page = res.data;
    }); */

  }
};
</script>

<style>
</style>