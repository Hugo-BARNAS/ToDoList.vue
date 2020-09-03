import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        results: [],
    },
    mutations: {
        UPDATE_LIST(state, results) {
            state.results = results;
            console.log(results);
        }
    },
    actions: {
        listData(context, results) { context.commit('UPDATE_LIST', results) }
    },
    getters: {
        
    }
})