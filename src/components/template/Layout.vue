
<template>
<v-app id="layout" > 
    <app-header />
    <v-main id="conteudo-lay" >
       <slot name="conteudo">
            

       </slot>
    </v-main>

    <app-footer />
</v-app>
</template>

<script>

import header from "@/components/template/Header.vue"
import footer from  "@/components/template/Footer.vue"


export default {
  name:"Layout",
  components: { "app-header":header , "app-footer":footer},
}
</script>

<style scoped>
#conteudo-lay{
    margin: 10px;
    margin-bottom: 90px;

} 
</style>
