import Vue from 'vue';
import Router from 'vue-router';

import TasksPage from '../tasks/TasksPage.vue';
import LoginPage from '../login/LoginPage.vue';
import RegisterPage from '../register/RegisterPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Tasks',
            component: TasksPage,
            beforeEnter(to, from, next) {
                //todo: check if user is logged in/check if can be handled with metadata
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
        //     component: TasksPage
        // }
    ]
});
