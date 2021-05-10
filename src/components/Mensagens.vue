

<template>
<div>
 <v-alert v-for="alerta in alertas" 
    close-text="Close Alert"
      dark
      dismissible
 :key="alerta.mensagem" :type="alerta.tipo">
     {{alerta.mensagem}}
</v-alert>
  </div>
</template>

<script>
export default {
    props:{'alertas': {
        type:Array,
        required:true
    }}

}
</script>

<style>

</style>