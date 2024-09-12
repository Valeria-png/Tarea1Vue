import {createRouter, createWebHistory} from 'vue-router'
import Register from '@/components/Register.vue';
import Home from '@/components/Home.vue';
import Login from '@/components/Login.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            beforeEnter: (to, from, next) => {
                if(!localStorage.getItem('newUserRegistered')) {
                    next('/');
                } else {
                    next();
                    localStorage.removeItem('newUserRegistered');
                }
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }

    ]
})
export default router;