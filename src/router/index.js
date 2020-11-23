import Vue from 'vue';
import Router from 'vue-router';

import HomePage from '../home/HomePage.vue';
import LoginPage from '../login/LoginPage.vue';
import RegisterPage from '../register/RegisterPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage,
            beforeEnter(to, from, next) {
                next(true);
            }
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterPage
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginPage
        }
        // {
        //     path: '*',
        //     component: HomePage
        // }
    ]
});
