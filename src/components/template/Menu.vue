<template>
  <div class="menu">
    <v-app light>
      <v-navigation-drawer
        v-model="sidebarMenu"
        app
        floating
        :permanent="sidebarMenu"
        :mini-variant.sync="mini"
        
      >
        <v-list dense color="transparent">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title >
                <h2 color = "blue" class="font-weight-bold">Menu</h2>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-avatar>
          <v-list-item-content class="text-truncate">
            Yasmin
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list rounded dense>
          
          <v-list-item
            v-for="item in items"
            :key="item.title"
            link
            :to="item.href"

          >
            <v-list-item-icon>
              <v-icon color="primary" >{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="primary--text" active-class="red--text">{{
                item.title
              }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>


      <v-main>
        <v-container fluid>
          <v-row class="fill-height">
            <v-col>
              <transition name="fade">
                <router-view></router-view>
              </transition>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    sidebarMenu: true,
    toggleMini: false,

    items: [
      { title: "Início",
       icon: "fa-home",
        href: "/inicio" },
      {
        title: "Cadastrar Visita",
        icon: "fa fa-user-plus",
        href: "/cadastrarVisita",
      },
      { title: "Visualizar",
       icon: "fa fa-search",
        href: "/visualizar" },
      { title: "Sair", icon: "fa-sign-out-alt", href: "/sair" },
    ],
  }),

  computed: {
    mini() {
      return this.$vuetify.breakpoint.smAndDown || this.toggleMini;
    },
  },

  methods: {
    inicio() {
      this.items.$router.push("/inicio");
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

