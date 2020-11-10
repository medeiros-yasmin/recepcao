<template>
    <v-dialog
      v-model="visible"
      width="500"
    >
   <template v-slot:activator="{ on, attrs }">
        <v-btn 
          style="margin:2px"
           color="error"
            text
          v-bind="attrs"
          v-on="on"
        >
        <v-icon v-if="icon">
            {{icon}}
        </v-icon>
         
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          {{titulo}}
        </v-card-title>

        <v-card-text>
            {{mensagem}}
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            @click="sim()">
            Sim
          </v-btn>
           <v-btn
            color="primary"
            @click="visible = false">
            Não
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>

<script>
export default {
 props:["url","mensagem","titulo","icon"],
  data () {
      return {
        visible: false,
      }
    },
    methods:{
        sim(){
            this.visible = false
            this.$emit("onYes","Ok");
        }
    }

}
</script>

<style>

</style>
