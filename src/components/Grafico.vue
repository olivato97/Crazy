<template>
  <div class="small">
    <bar-chart v-if="Load" :chart-data="datacollection"></bar-chart>
    <button @click="fillData()">Refresh</button>
  </div>
</template>

<script>
import axios from '../services/JsonService.js' // <--- brings in the axios library
import BarChart from '../Chart/Bar.js'
import { setInterval } from 'timers'
export default {
  components: {
    BarChart
  },
  data() {
    return {
      Cucina: {
        nome: 'Cucina',
        ordini: [10, 12, 14]
      },
      Camerieri: {
        nome: 'Camerieri',
        ordini: [10, 12, 14]
      },
      datacollection: {},
      Load: false,
      height: 500
    }
  },
  created() {
    axios
      .getEventsCucina() // Does a get request
      .then(response => {
        this.Cucina.ordini[0] = response.data[0].ordini[0]
        this.Cucina.ordini[1] = response.data[0].ordini[1]
        this.Cucina.ordini[2] = response.data[0].ordini[2]
        this.Load = true
        console.log('Cucina', response.data[0].ordini) // For now, logs out the response
      })
      .catch(error => {
        console.log('There was an error:', error) // Logs out the error
      })
    axios
      .getEventsComplOrdini() // Does a get request
      .then(response => {
        let ordini = [0, 0]
        response.data.forEach(Subordine => {
          let ordine = Subordine.Ordini
          ordini[0] += ordine[0]
          ordini[1] += ordine[1]
        })
        this.Camerieri.ordini = ordini
        console.log('Camerieri', this.Camerieri.ordini) // For now, logs out the response
      })
      .catch(error => {
        console.log('There was an error:', error) // Logs out the error
      })
  },
  mounted() {
    setInterval(() => {
      this.fillData()
    }, 2500)
  },
  methods: {
    fillData() {
      axios
        .getEventsCucina() // Does a get request
        .then(response => {
          this.Cucina.ordini[0] = response.data[0].ordini[0]
          this.Cucina.ordini[1] = response.data[0].ordini[1]
          this.Cucina.ordini[2] = response.data[0].ordini[2]
          this.Load = true
          console.log('Cucina', response.data[0].ordini) // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error) // Logs out the error
        })
      axios
        .getEventsComplOrdini() // Does a get request
        .then(response => {
          let ordini = [0, 0]
          response.data.forEach(Subordine => {
            let ordine = Subordine.Ordini
            ordini[0] += ordine[0]
            ordini[1] += ordine[1]
          })
          this.Camerieri.ordini = ordini
          console.log('Camerieri', this.Camerieri.ordini) // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error) // Logs out the error
        })
      this.datacollection = {
        labels: ['rossa', 'bianca'],
        datasets: [
          {
            label: 'da servire',
            backgroundColor: 'red',
            data: [this.Camerieri.ordini[0], this.Camerieri.ordini[1], 0]
          },
          {
            label: 'Serviti',
            backgroundColor: 'black',
            data: [this.Cucina.ordini[0], this.Cucina.ordini[1], 0]
          }
        ]
      }
    }
  },
  computed: {
    myStyles() {
      return {
        height: '500px',
        position: 'relative'
      }
    }
  }
}
</script>

<style scoped>
.small {
  max-width: 40%;
  margin: 100px;
}
</style>