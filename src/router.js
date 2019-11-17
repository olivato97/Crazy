import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Cucina from "./views/Cucina.vue"
import Cameriere from "./views/Cameriere.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path:"/cucina",
      name:"Cucina",
      component: Cucina
    },
    {
      path:"/cameriere",
      name:"Cameriere",
      component: Cameriere
    }
  ]
});
