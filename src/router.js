import Home from './components/HomePage.vue'
import SignUP from './components/SignUp'
import Login from './components/Login'
import Add_re from './components/Add'
import update_re from './components/Update'
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
    },
    {
        name: 'Add_re',
        component: Add_re,
        path: '/Add_re'
    },
    {
        name: 'update',
        component: update_re,
        path: '/update/:id'
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router