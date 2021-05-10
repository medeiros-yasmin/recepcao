<template>
  <div class="cadastro">
    <v-app-bar app>
      <v-img
        lazy-src="@/assets/logo_tribunal.png"
        max-height="250"
        max-width="250"
        src="@/assets/logo_tribunal.png"
      ></v-img>
    </v-app-bar>
    <v-app>
      <v-row align="center" justify="center" style="margin-top: 170px; margin-bottom: 60px">
          <v-col cols="14" md="7">
            <v-toolbar color="#e6e6e6">
              <v-img
                style="margin: 190px"
                max-height="150"
                max-width="290"
                src="@/assets/sisrep.png"
              ></v-img>
            </v-toolbar>
        

        <div>
          <v-tabs
            v-model="tab"
            show-arrows
            background-color="blue"
            icons-and-text
            dark
            grow
          >
            <v-tabs-slider color="blue"></v-tabs-slider>
            <v-tab v-for="tab in tabs" :key="tab.id">
              <v-icon large>{{ tab.icon }}</v-icon>
              <div class="caption py-1">{{ tab.name }}</div>
            </v-tab>
            <v-flex xs12>
        <v-alert type="sucess" :value="displayError" dismissible
          >{{displayError}}</v-alert>
        </v-flex>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                          v-model="loginEmail"
                          
                          label="Login"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="loginPassword"
                          :append-icon="show1 ? 'eye' : 'eye-off'"
                          
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Senha"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="6" xsm="12"> </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex" cols="12" sm="3" xsm="12" align-end>
                        <v-btn
                          x-large
                          block
                          :disabled="!valid"
                          color="success"
                          @click="acessar"
                        >
                          Acessar
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card class="px-4">
                <v-card-text>
                  <v-form ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="firstName"
                          
                          label="Nome"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <v-text-field
                          v-model="lastName"
                          
                          label="Sobrenome"
                          maxlength="20"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="email"
                          :rules="emailRules"
                          label="Login"
                          required
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          v-model="password"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Senha"
                          hint="At least 8 characters"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-col cols="12">
                        <v-text-field
                          block
                          v-model="verify"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          
                          :type="show1 ? 'text' : 'password'"
                          name="input-10-1"
                          label="Confirmação de Senha"
                          counter
                          @click:append="show1 = !show1"
                        ></v-text-field>
                      </v-col>
                      <v-spacer></v-spacer>
                      <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                        <v-btn
                          x-large
                          block
                          :disabled="!valid"
                          color="success"
                          @click="validate"
                          >Cadastrar</v-btn
                        >
                      </v-col>
                    </v-row>
                  </v-form>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
         </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    snackbar: true,
    tab: 0,
    tabs: [
      { id: 0, name: "Login", icon: "mdi-account" },
      { id: 1, name: "Cadastro", icon: "mdi-account-plus" },
    ],
    valid: true,

    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],

    show1: false,
    rules: {
      required: (value) => !!value || "Obrigatório.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),

  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "As senhas não coincidem.";
    },
  },
  methods: {
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    acessar(){
      this.$router.push("/inicio");
    }
  },
};
</script>

<style>
</style>