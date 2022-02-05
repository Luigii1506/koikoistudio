import { createRouter, createWebHistory } from 'vue-router'
import Design from '../views/Design.vue'
import App from '../App.vue'

const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/design',
        component: Design
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router