<template>
  <div class="app-header">
    <v-navigation-drawer v-model="sidebarMenu" app>
      <Menu> </Menu>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      elevation="2"
      max-height="800"
      hide-on-scroll
    >
      <v-toolbar-title>SISREP</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon @click="deslogar()">mdi-logout-variant</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Menu from "./Menu";
export default {
  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
  },
  components: { Menu },
  data: () => ({
    drawer: true,
    sidebarMenu: true,
    toggleMini: false,
  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
    deslogar() {
      this.$store
        .dispatch("efetuarLogout", this.usuario)
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.app-header {
  margin: 2vh;
}
</style>