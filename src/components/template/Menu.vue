<template>
<div class="menu" >

 <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> Menu Principal </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
          <!-- Item Menu Inicio -->

         
        <v-list-item link  @click="diario()">
          <v-list-item-icon>
            <v-icon>fa-newspaper</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Diário</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

           <v-list-item link @click="tipoPubliacacao()" >
          <v-list-item-icon>
            <v-icon> fa-list-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Tipo Publicação</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link @click="relatorios()" >
          <v-list-item-icon>
            <v-icon> fa-file-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Relatórios</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

          <v-list-item link @click="logout()" style="color:red;" >
          <v-list-item-icon>
            <v-icon style="color:red;"> fa-sign-out-alt</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title style="color:red;" >Sair</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <!-- Fim Menu  -->
      </v-list>

</div>
  
</template>

<script>
export default {

  methods:{
    diario(){
      this.$router.push("/");
    },
    tipoPubliacacao(){
     
      this.$router.push("/");
    
    },
    logout(){
      this.$router.push("/");
    },
    relatorios(){
      this.$router.push("/");
    }
  }

}
</script>

<style>

</style>