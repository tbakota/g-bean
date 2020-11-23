import Vue from 'vue';
import Vuex from 'vuex';

import tasksModule from './modules/tasks';
import usersModule from './modules/users';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        tasks: tasksModule,
        users: usersModule
    }
});
