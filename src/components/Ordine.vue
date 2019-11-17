<template>
  <v-card class="d-flex flex-column mb-2">
    <v-card-title>
      Tavolo:{{OrdineData.Tavolo}}
      <v-spacer />
      Nome:{{OrdineData.Nome}}
    </v-card-title>
    <v-flex>
      <v-card-text width="250px">
        <v-btn :width="witdh" rounded @click="chageOrder(0,1)">+1</v-btn>
        <v-btn :width="witdh" rounded @click="chageOrder(0,5)">+5</v-btn>
        <div class="text">Rossa:{{Primo}}</div>
        <v-btn :width="witdh" rounded @click="chageOrder(0,-5)">-5</v-btn>
        <v-btn :width="witdh" rounded @click="chageOrder(0,-1)">-1</v-btn>

        <v-spacer />

        <v-btn :width="witdh" rounded @click="chageOrder(1,1)">+1</v-btn>
        <v-btn :width="witdh" rounded @click="chageOrder(1,5)">+5</v-btn>
        <div class="text">Bianca:{{Secondo}}</div>
        <v-btn :width="witdh" rounded @click="chageOrder(1,-5)">-5</v-btn>
        <v-btn :width="witdh" rounded @click="chageOrder(1,-1)">-1</v-btn>
      </v-card-text>
    </v-flex>
  </v-card>
</template>

<script>
import axios from '../services/JsonService.js' // <--- brings in the axios library

export default {
  props: {
    Ordine: {
      Nome: String,
      Ordini: ['initialCounter'],
      Tavolo: Number,
      Cucina: Boolean
    }
  },
  data() {
    return {
      witdh: 20,
      OrdineData: this.Ordine,
      Primo: this.Ordine.Ordini[0],
      Secondo: this.Ordine.Ordini[1],
      Cucina: []
    }
  },
  methods: {
    chageOrder(pos, val) {
      axios.getEventsCucina().then(Response => {
        this.Cucina = Response.data[0]
        if (val > 0) {
          this.Cucina.ordini[pos] += val
        }
        console.log(this.Cucina.ordini[pos])
        switch (pos) {
          case 0:
            this.Primo += val
            this.Ordine.Ordini[0] += val
            break
          case 1:
            this.Secondo += val
            this.Ordine.Ordini[1] += val
            break
          default:
            break
        }
        this.Ordine.Cucina = false
        axios.PutEventsOrdini(this.Ordine) // Does a get request
        axios.PutEventsOrdini(this.Cucina) // Does a get request
      })
      console.log('OrdineData', this.Ordine)
    }
  }
}
</script>

<style scoped>
.text {
  width: 70px;
  display: inline-block;
  margin: auto;
  padding: auto;
  text-align: center;
}
.btn {
  padding: 0px;
}
</style>