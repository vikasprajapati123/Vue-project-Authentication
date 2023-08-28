import Home from './components/HomePage.vue'
import SignUP from './components/SignUp'
import Login from './components/Login'
import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUP,
        path: '/signUP'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router