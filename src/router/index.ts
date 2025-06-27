import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutUs from "../views/AboutUs.vue";
import CustomerCase from "../views/CustomerCase.vue";
import Product from "../views/Product/index.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/AboutUs",
      component: AboutUs,
    },
    {
      path: "/CustomerCase",
      component: CustomerCase,
    },
    {
      path: "/Product",
      component: Product,
    },
  ],
});

export default router;
