import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        results: [],
    },
    mutations: {
        UPDATE_LIST(state, results) {
            state.results = results;
            console.log(results);
        },
        PUSHLIST(state, todoPush) {
            state.results.push(todoPush)
        },
        PUTLIST(state, todoPut) {
            let p = state.results.findIndex(elem => elem.id == todoPut)
            console.log(p)
            state.results[p].todo = !state.results[p].todo
        },
        DELETEID(state, id){
            let t = state.results.findIndex(elem => elem.id == id)
            state.results.splice(t,1)
        }


    },
    actions: {
        listData(context, results) {
            context.commit('UPDATE_LIST', results)
        },
        PushData(context, todoPush) {
            context.commit('PUSHLIST', todoPush)
        },
        PutData(context, todoPut) {
            context.commit('PUTLIST', todoPut)
        },
        DeleteData(context, id) {
            axios.delete("http://localhost:3000/todo/" + id)
            context.commit('DELETEID', id)
        }

    },
    getters: {
        ListedData: state => (whatToDisplay) => {
            if (whatToDisplay == "todo") {
                return state.results.filter(todo => todo.todo == true)
            } else if (whatToDisplay == "done") {
                return state.results.filter((todo) => !todo.todo);
            } else {
                return state.results;
            }
        },
        GetTodoById: (state) => (id) => {
            return state.results.find(results => results.id === id)
        }
    }
})