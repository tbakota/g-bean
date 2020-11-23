// import Axios from 'axios';

export default {
    namespaced: true,
    state: {
        user: null
    },
    mutations: {
        updateCurrentUser(state, user) {
            state.user = user;
        }
    },
    actions: {
        login({ commit }) {
            // return Axios
            //     .get('/api/login')
            //     .then(result => commit('updateCurrentUser', result.data))
            //     .catch(console.error);
            setTimeout(function() {
                commit('updateCurrentUser', [
                    {
                        email: 'Test',
                        displayName: 'display test'
                    }
                ]);
            }, 1000);
        }
    }
};
