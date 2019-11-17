<template>
  <div>
    <div v-for="ordine in Unify" :key="ordine.Tavolo">
      <Ordine :Ordine="ordine" ref="p" />
    </div>
  </div>
</template>

<script>
import Ordine from '../components/Ordine.vue'
import axios from '../services/JsonService.js' // <--- brings in the axios library

export default {
  components: {
    Ordine
  },
  data() {
    return {
      data: [],
      Ordini: []
    }
  },
  created() {
      axios
        .getEventsComplOrdini() // Does a get request
        .then(response => {
          this.data = response.data
          console.log(this.data) // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error) // Logs out the error
        })
  },
  computed: {
    Unify() {
      let ordini = []
      this.data.forEach(Subordine => {
        let ordine = {
          Nome: Subordine.Nome,
          Tavolo: Subordine.Tavolo,
          id: Subordine.id,
          Ordini: [
            Subordine.Ordini[0],
            Subordine.Ordini[1],
          ]
        }
        ordini.push(ordine)
      })
      console.log('Ordine', ordini)
      return ordini
    }
  },
  methods: {
    chageOrder(Ordine, num, pos) {
      Ordine.Ordini[pos] += num
      this.ciao += 1
      console.log('ordine', Ordine.Ordini[pos])
      return Ordine
    }
  }
}
</script>

<style scoped>
</style>