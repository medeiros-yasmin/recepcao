<template>
<div  class="app-header" >
    <v-navigation-drawer v-model="drawer"   app >
      <v-list style="box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4); padding: 4px" >
        <v-list-item>
          <v-list-item-avatar>
            <v-icon size="50">fa-user-circle</v-icon>
          </v-list-item-avatar>
          <span class="sub-desc">Vitor Felipe Rodrigues</span>
        </v-list-item>
      </v-list>

      <Menu ></Menu>
     
    </v-navigation-drawer>
    <v-app-bar app background-color="blue" style="padding-buttom: 2px"  >
      <v-app-bar-nav-icon @click="drawer = !drawer"> </v-app-bar-nav-icon>
      <v-toolbar-title><v-img  src="@/assets/logo_diario.png"   max-height="250"
        max-width="250" /> </v-toolbar-title>
    </v-app-bar>
    </div>

  
</template>

<script>
import Menu from './Menu';
export default {
    components:{Menu},
    data: ()=>{
        return {drawer:true}
    }
}
</script>

<style scoped>
.app-header {
    margin: 4vh;
}
</style>