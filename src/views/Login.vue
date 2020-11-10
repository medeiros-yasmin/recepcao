<template>
  <div class="login">
    <v-app-bar  app    >
      <v-img
        lazy-src="@/assets/logo_tribunal.png"
        max-height="250"
        max-width="250"
        src="@/assets/logo_tribunal.png"
      ></v-img>
    </v-app-bar>
    <v-app>
      <v-row justify="center" style="margin-top: 170px;margin-bottom:60px">
        <v-col cols="12" md="4">
          <v-card>
            <v-toolbar color="#e6e6e6">
              <v-img
                style="margin: auto"
                max-height="150"
                max-width="290"
                src="@/assets/logo_diario.png"
              ></v-img>
            </v-toolbar>

            <v-row style="margin: 20px">
              <v-col cols="12">
                <v-text-field label="Login" prepend-icon="fa-user" required />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  type="password"
                  label="Senha"
                  required
                  prepend-icon="fa-key"
                />
              </v-col>

              <v-col cols="12">
                <v-btn color="primary" block @click="logar()" > Acessar</v-btn>
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

  methods:{
   logar(){
     this.$router.push("/home");
   }
  }
};
</script>

<style>
</style>