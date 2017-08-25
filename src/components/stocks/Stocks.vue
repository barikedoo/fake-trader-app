<template>
  <v-layout wrap>

    <app-stock v-for="stock in stocks" :key="stock.id" :oneStock="stock" @successPurchase="purchaseAlert($event)"></app-stock>

    <v-card class="grey lighten-4">

      <v-snackbar :timeout="2000" top v-model="snackbar">
        {{ text }}
        <v-btn flat class="green--text lighten-2" @click.native="snackbar = false">Збс</v-btn>
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
      stocks: [
        { id: 1, name: 'BMW', price: 100 },
        { id: 1, name: 'Google', price: 130 },
        { id: 1, name: 'Yandex', price: 80 },
        { id: 1, name: 'Facebook', price: 110 },
        { id: 1, name: 'Yahoo', price: 70 },
      ],
      snackbar: false,
      text: ''
    }
  },
   methods: {
      purchaseAlert(message) {
        this.text = message;
        this.snackbar = true;
      }
    }
}
</script>

<style>

</style>
