import { createWebHistory, createRouter } from "vue-router"
import createComponent from "@/components/createComponent.vue"
import editComponent from "@/components/editComponent.vue"
import listComponent from "@/components/listComponent.vue"

const routes = [    
    {
        path: "/",
        name: "home",
        component: createComponent
    },
    {
        path: "/view",
        name: "view",
        component: listComponent
    },
    {
        path: "/edit/:id",
        name: "edit",
        component: editComponent
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router