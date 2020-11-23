// import Axios from 'axios';

export default {
    namespaced: true,
    state: {
        tasks: []
    },
    mutations: {
        addNewTask(state, task) {
            state.tasks.push(task);
        },
        updateTasks(state, tasks) {
            state.tasks = tasks;
        }
    },
    getters: {
        completedTasks(state) {
            return state.tasks.filter(task => task.completed);
        }
    },
    actions: {
        getTasks({ commit }) {
            // return Axios
            //     .get('/api/tasks')
            //     .then(result => commit('updateTasks', result.data))
            //     .catch(console.error);
            setTimeout(function() {
                commit('updateTasks', [
                    {
                        name: 'Test',
                        description: 'description',
                        completed: true
                    }
                ]);
            }, 1000);
        },
        addNewTask({ commit /*, state*/ }, task) {
            //const tasks = [...state.tasks, task];
            // return Axios.post('/api/tasks', task).then(() =>
            //     commit('addNewTask', task)
            // );

            setTimeout(function() {
                commit('addNewTask', task);
            }, 1000);
        }
    }
};
