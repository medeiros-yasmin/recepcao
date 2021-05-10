<template>
  <div class="menu">
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title"> Menu Principal </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-navigation-drawer class="deep-purple accent-4">
      <v-list dense nav rounded>
        <!-- Item Menu Inicio -->
        <v-list-item-group
          :value="true"
          color="cyan"
          prepend-icon="mdi-account-circle"
        >
          <v-list-item link @click="inicio()">
            <v-list-item-icon>
              <v-icon>fa-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Início</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="cadastrarVisita()">
            <v-list-item-icon>
              <v-icon>fa fa-user-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Cadastrar Visita</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="visualizar()">
            <v-list-item-icon>
              <v-icon> fa fa-search</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Visualizar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item link @click="sair()" style="color: red">
            <v-list-item-icon>
              <v-icon style="color: red"> fa-sign-out-alt</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title style="color: red">Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <!-- Fim Menu  -->
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    itemSelecionado: 1,
    items: [
      { title: "Inicio", icon: "fa-home" },
      { title: "Cadastrar Visita", icon: "fa fa-user-plus" },
      { title: "Visualizar", icon: "fa fa-search" },
      { title: "Sair", icon: "fa-sign-out-alt" },
    ],
    miniVariant: false,
    right: true,
    rightDrawer: false,
    title: "Menu Principal",
  }),

  methods: {
    inicio() {
      this.$router.push("/inicio");
    },
    cadastrarVisita() {
      this.$router.push("/cadastrarVisita");
    },
    sair() {
      this.$router.push("/");
    },
    visualizar() {
      this.$router.push("/visualizar");
    },
  },
};
</script>

<style>
</style>