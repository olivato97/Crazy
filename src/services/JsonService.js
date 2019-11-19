import axios from 'axios'

const apiClient = axios.create({
    baseURL: `http://192.168.1.118:3000`,
    withCredentials: false, // This is the default
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents() {
        return apiClient.get('/products')
    },
    getEventsCucina() {
        return apiClient.get('/products?cucina=true')
    },
    getEventsComplOrdini() {
        return apiClient.get('/products?Cucina=false')
    },
    getEventsFilterOrdini(name) {
        return apiClient.get('/products?Cucina=false&&Nome=' + name)
    },
    postEventsOrdini(data) {
        return apiClient.post('/products', data)
    },
    PutEventsOrdini(data) {
        return apiClient.put('/products/' + data.id, data)
    }
}