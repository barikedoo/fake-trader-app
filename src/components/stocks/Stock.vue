<template>
  <v-flex xs3 class="pa-3">
    <v-card>
      <v-card-title class="pa-2 green lighten-4">
        <span class="headline">{{oneStock.name}}</span>
        <span class="pl-1">(Price: {{oneStock.price}})</span>
      </v-card-title>

      <v-layout row>

        <v-flex xs3 class="ml-4 pa-0">
          <v-text-field label="Quantity" type="number" v-model="quantity" min="0"></v-text-field>
        </v-flex>

        <v-flex xs3 offset-xs5 class="mt-3">
          <v-btn round class="green" @click="buyStock" :disabled="quantity <=0 || !isInteger(quantity) || quantity == ''">Buy</v-btn>
        </v-flex>
        
      </v-layout>

      
    </v-card>

    
  </v-flex>
</template>

<script>

export default {

  props: ['oneStock'],

  data() {
    return {
      quantity: '',
      successMessage: ''
    }
  },

  methods: {
    buyStock() {
      let order = {
        stockName: this.oneStock.name,
        stockId: this.oneStock.id,
        stockPrice: this.oneStock.price,
        stockQuantity: this.quantity
      };
      this.quantity = 0;
      this.successMessage = "You've just bought " + order.stockQuantity + " stocks of " + order.stockName + " for $" + order.stockQuantity*order.stockPrice;
      this.$emit('successPurchase', this.successMessage);
      
    },

    isInteger(num) {
      num = Number(num);
      return (num ^ 0) === num;
    },
  }
}
</script>

<style>

</style>
