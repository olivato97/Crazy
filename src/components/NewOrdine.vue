<template>
  <div>
    <v-btn color="orange lighten-2" class="mt-12" @click="overlay = !overlay">Show Overlay</v-btn>

    <v-overlay dark=false :value="overlay">
      <v-card class="mx-auto col-5" max-width="500" outlined>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline mb-5 pb-5">Numero Tavolo</v-list-item-title>
            <v-slider height="50" max="20" v-model="slider" thumb-label="always"></v-slider>
          </v-list-item-content>
        </v-list-item>

        <v-card-actions>
          <v-btn @click="NewTable" text>Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-overlay>
  </div>
</template>

<script>

import axios from '../services/JsonService.js' // <--- brings in the axios library

export default {
  props: {
    Nome: {
      type: String
    }
  },
  data() {
    return {
      Ordine: {
        Nome: "",
        Ordini: [0, 0],
        Tavolo: this.slider,
        Cucina: false
      },
      overlay: false,
      absolute: true,
      opacity: 0.3,
      slider: 10
    };
  },
  methods: {
    NewTable() {
      axios
        .postEventsOrdini(this.Ordine) // Does a get request
        .then(response => {
          this.data = response.data;
          console.log(this.data); // For now, logs out the response
        })
        .catch(error => {
          console.log("There was an error:", error); // Logs out the error
        });
        this.overlay = false
    }
  }
};
</script>

<style>
</style>