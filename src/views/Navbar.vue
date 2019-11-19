<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <a href="/">
        <v-img
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </a>
    </div>
    <div class="d-flex align-center">
      <a href="/cameriere">
        <v-img
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </a>
    </div>
    <div class="d-flex align-center">
      <a href="/cucina">
        <v-img
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </a>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style>
</style>