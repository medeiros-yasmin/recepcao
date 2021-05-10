<template>
<v-container fluid class="fluid">
  <app-layout >
    
    <v-app div slot="conteudo" >
      <v-alert color="blue" style="margin: 0px 5px 35px 5px">
        <h4 style="color: white">Nova Visita</h4>
      </v-alert>


      <v-snackbar v-model="snackbar" :timeout="-1">
          {{snackbarText}}

          <v-btn text @click="snackbar=false"> 
          Fechar
          </v-btn>

        </v-snackbar>
      <!--<app-layout > -->
      <form ref="formulario" align-center>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row justify="center" align="center">
         <v-col
          cols="12"
          sm="8"
        >
          <v-text-field v-model="visita.nome" label="Nome" required></v-text-field>
        
          <v-text-field
            v-model="visita.cpf"
            :counter="11"

            label="CPF"
          ></v-text-field>
          
          <v-text-field
            v-model="visita.horaEntrada"
            :rules="[(v) => !!v || 'É necessário cadastrar a hora da entrada']"
            label="Hora Entrada"
            type="datetime-local"
            value="current-date"
            required
          ></v-text-field>

          <v-autocomplete
            ref="setor"
            v-model="visita.setor"
            :rules="[() => !!visita.setor || 'Campo obrigatório']"
            :items="setores"
            label="Setor Visitado"
            placeholder="Selecione..."
            required
          ></v-autocomplete>

          <v-text-field
            v-model="visita.objetosPessoais"         
            label="Objetos Pessoais"
            required
          ></v-text-field>

          <v-textarea
            v-model="visita.observacao" 
            filled
            label="Observação"
            auto-grow
            clearable
            outlined
            dense
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="criarVisita()"
          >
            Cadastrar
          </v-btn>

          <v-btn color="error" class="mr-4" @click="reset"> Limpar Campos </v-btn>

          </v-col>
          </v-row>
        </v-form>
        
        <!-- </app-layout> -->
      </form>
      
    </v-app>
    
  </app-layout>
</v-container>
</template>

<script>

import { validationMixin } from "vuelidate";
import { required, maxLength, minLength } from "vuelidate/lib/validators";


export default {
  mixins: [validationMixin],

  validations: {
    cpf: { required, maxLength: maxLength(11), minLength: minLength(11) },

    select: { required },
  },
  created(){

  },
  data: () => ({
    snackbar: false,
    snackbarText: "",
    valid: true,
    alerta: false,
    visita:{},
    select: null, 
    setores: ["ASCOM", "ASESP", "ASJUR", "CEMOD", "COIN", "SUGOV"],
    
   
    
  }),

  computed: {
   
  },

  methods: {
   
   criarVisita(){
      
      this.$store.dispatch('criarVisita', this.visita)
   },
   
    validate() {
         this.$http.post("/visitas", this.visita);
         this.$router.push("/visualizar");
         this.snackbar = true;
         this.snackbarText = `Visita cadastrada com sucesso!`;


     // this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.cpf = "";
    },
  },


};
</script>