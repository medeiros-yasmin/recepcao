<template>
  <div class="login">
    <v-app-bar app color="blue">
      <v-img
        lazy-src="@/assets/logo_tribunal.png"
        max-height="250"
        max-width="250"
        src="@/assets/logo_tribunal.png"
      ></v-img>
    </v-app-bar>
    <v-app>
      <v-row justify="center" style="margin-top: 170px; margin-bottom: 60px">
        <v-col cols="12" md="4">
          <v-card>
            <v-toolbar color="#e6e6e6">
              <v-img
                style="margin: 40px"
                max-height="150"
                max-width="290"
                src="@/assets/sisrep.png"
              ></v-img>
            </v-toolbar>

            <v-row style="margin: 20px">
              <v-col cols="12">
                <v-text-field v-model="usuario.login" label="Login" prepend-icon="fa-user" required ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
               
                  v-model="usuario.senha"
                  label="Senha"
                  :append-icon="exibirSenha ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="exibirSenha ? 'text' : 'usuario.senha'"
                  required
                  prepend-icon="fa-key"
                  class="input-group--focused"
                  @click:append="exibirSenha =!exibirSenha"
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" block @click="logar()"> Acessar</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-footer fixed>
        <v-col class="text-center" cols="12"
          >2020 ©Copyright TCE-MA - Todos os Direitos Reservados
        </v-col>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    exibirSenha: false,
    alert: false,
      usuario: {
        login: "",
        senha: "123"
      },
      rules:{
      required: value => !!value || 'Senha obrigatória.',
      min: v => v.length >= 6 || ''
    }
  }),

  methods: {
    fade(){

    },
    logar() {
       this.$store
        .dispatch("efetuarLogin", this.usuario)
        .then(() => {
      this.$router.push("/inicio");
        })
        .catch(err => {
          console.log(err);
        });
    },
    /* deslogar(){
      this.$store
      .dispatch("efetuarLogout", this.usuario)
      .then(() => {
        this.$router.push("/login");
      })
      .catch(err =>{
        console.log(err);
      })
    }, */
  },
};
</script>

<style>
</style>