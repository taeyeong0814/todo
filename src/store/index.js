import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //데이터가 들어가는 곳  컴포넌트의 Date에 해당
        todos: [
            {id: 1, text: 'buy a car', checked: false},
            {id: 2, text: 'play game', checked: false},
        ],
        users: []
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        //데이터를 실제 바꾸는 곳(여기서만 가능하다.)
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            });
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        }
    },
    actions: {
        getUsers({commit}) {
            axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
                commit('SET_USERS', res.data);
            });
        },
        //함수가 들어가는 곳 비동기적인 일을 처리하는 곳 컴포넌트의 Method에 해당
        addTodo({commit}, value) {
            setTimeout(function () {
                commit('ADD_TODO', value);
            }, 500);
            console.log(value);
            // commit('ADD_TODO', value);
        },
        toggleTodo({commit}, payload) {
            setTimeout(function () {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({commit}, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId);
            }, 500);
        }
    },
    getters: {
        //Vue 컴포넌트의 computed에 해당
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        }
    }
})
