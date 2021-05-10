<template>
  <div class="app-header">
    <v-navigation-drawer
      v-model="sidebarMenu"
      app
      floating
      :permanent="sidebarMenu"
      :mini-variant.sync="mini"
    >
      <v-list
        dense
        color="primary"
        style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); padding: 4px"
      >
        <v-list-item>
          <v-list-item-action>
            <v-icon @click.stop="sidebarMenu = !sidebarMenu"
              >mdi-chevron-left</v-icon
            >
            <v-spacer></v-spacer>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <h3 class="font-weight-thin">Menu</h3>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list-item class="px-2" @click="toggleMini = !toggleMini">
        <v-list-item-avatar>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-avatar>
        <v-list-item-content class="text-truncate">
          Yasmin
        </v-list-item-content>
        <v-btn icon small>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
      <Menu> </Menu>
    </v-navigation-drawer>

    <v-app-bar app color="blue" dark elevation="2">
      <v-app-bar-nav-icon
        @click.stop="sidebarMenu = !sidebarMenu"
      ></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-icon>mdi-account</v-icon>
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
      },
};
</script>

<style scoped>
.app-header {
  margin: 4vh;
}
</style>