import HomeCompt from './components/HomeCompt.vue'
import SignUp from './components/SignUp.vue'
import LoginCompt from './components/LoginCompt.vue'
import AddResturant from './components/AddResturant.vue'
import UpdateResturant from './components/UpdateResturant.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [

    {
        name: 'Home',
        component: HomeCompt,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/signup'
    },
    {
        name: 'Login',
        component: LoginCompt,
        path: '/login'
    },
    {
        name: 'AddRest',
        component: AddResturant,
        path: '/add'
    },
    {
        name: 'UpdateRest',
        component: UpdateResturant,
        path: '/update/:id'
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;