import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Home.vue";
import Add from "@/components/Add.vue"
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    }, {
        path: "/add",
        name: "Add",
        component: Add
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router