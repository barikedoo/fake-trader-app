<template>
  <v-app light>


    <v-navigation-drawer></v-navigation-drawer>

    <v-toolbar ></v-toolbar>


    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>


    <v-footer>
      <span>&copy; 2017</span>
    </v-footer>


  </v-app>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
