<template>
  <div>
    <v-toolbar dense>

      <v-toolbar-title>
        <router-link to="/">
          <h4 id="logo">Fake Trade</h4>
        </router-link>
      </v-toolbar-title>

      <v-toolbar-items>

        <router-link to="/" tag="li">
          <v-btn flat class="route-button">Home</v-btn>
        </router-link>

        <router-link to="/portfolio" tag="li">
          <v-btn flat class="route-button">Portfolio</v-btn>
        </router-link>

        <router-link to="/stocks" tag="li">
          <v-btn flat class="route-button">Stocks</v-btn>
        </router-link>

      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>

        <v-btn flat class="">
          <a href="#">End Day</a>
        </v-btn>
        
        <v-menu >
          <v-btn class="ma-1" primary dark slot="activator">Actions</v-btn>
          <v-list>
            <v-list-tile v-for="action in actions" :key="action.id">
              <v-list-tile-title>{{ action }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>

      </v-toolbar-items>

    </v-toolbar>
  </div>
</template>

<script>
export default {
    data() {
      return {
        actions:['Save Data', 'Load Data']
      }
    }
}
</script>

<style>
h4 {
  margin: 0 10px 0;
  color: wheat;
}

* {
  text-decoration: none;
}

.route-button {
  margin: 0;
  height: 100%;
}

li {
  list-style: none;
}

.router-link-exact-active {
  background-color: lightgray;
}
</style>
