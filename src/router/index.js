import Vue from "vue";
import VueRouter from "vue-router";
import Subscribe from "../views/Subscribe.vue";
import about from "../views/About.vue";
import home from "../views/home.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/subscribe",
        name: "Subscribe",
        component: Subscribe,
        // component: () =>
        //     import ( /* webpackChunkName: "about" */ "../views/Subscribe.vue"),
    },
    {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: about,
    },
    {
        path: "/",
        name: "home",
        component: home,
        // component: () =>
        //     import ( /* webpackChunkName: "about" */ "../views/Subscribe.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;