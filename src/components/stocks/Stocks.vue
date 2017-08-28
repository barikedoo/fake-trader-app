<template>
  <v-layout wrap>

    <app-stock v-for="stock in stocks" :key="stock.id" :oneStock="stock" @successPurchase="purchaseAlert($event)"></app-stock>

    <v-card class="grey lighten-4">

      <v-snackbar :timeout="2000" top v-model="snackbar">
        {{ text }}
        <v-btn flat class="green--text lighten-2" @click.native="snackbar = false">Cool</v-btn>
      </v-snackbar>

      
    </v-card>

  </v-layout>
</template>

<script>

import Stock from './Stock.vue'
export default {

  components: {
    'app-stock': Stock
  },

  data() {
    return {
      snackbar: false,
      text: ''
    }
  },
   methods: {
      purchaseAlert(message) {
        this.text = message;
        this.snackbar = true;
      }
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
}
</script>

<style>

</style>
