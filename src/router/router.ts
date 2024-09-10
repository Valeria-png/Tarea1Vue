import {createRouter, createWebHistory} from 'vue-router'
import Register from '@/components/Register.vue';
import TheWelcome from '@/components/TheWelcome.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Initial',
            component: Register
        },
        {
            path: '/login',
            name: 'Login',
            component: Register
        },
        {
            path: '/home',
            name: 'Home',
            component: TheWelcome
        }

    ]
})
export default router;