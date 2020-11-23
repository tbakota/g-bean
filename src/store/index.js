import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tasks: []
    },
    mutations: {
        addNewTask(state, task) {
            state.tasks.push(task);
        }
    },
    getters: {
        completedTasks(state) {
            return state.tasks.filter(task => task.completed);
        }
    }
    // actions: {
    //     getTasks({ commit }) {

    //     }
    // }
});
