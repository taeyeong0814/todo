<template>
  <div id="app" class="container">
    <h1 class="text-center">Todo App</h1>
    <CompletedTodo />
    <!-- <AddTodo @add-todo="addTodo"/> -->
    <AddTodo/>
    <button class="btn btn-danger btn-sm" @click="clickInsert">추가</button>
    <hr>
    <!-- <TodoList 
      @toggle-checkbox="toggleCheckbox"
      @click-delete="deleteTodo"
    /> -->
    <TodoList/>
    <UserList/>
    <!-- {{ todos }} -->
  </div>
</template>

<script>
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import CompletedTodo from '@/components/CompletedTodo';
import UserList from '@/components/UserList';

export default {
  components: {
    TodoList,
    AddTodo,
    CompletedTodo,
    UserList
  },
    data() {
      return {
        todoText: '',
        // todos: [
        //   { id: 1, text: 'buy a car', checked: false},
        //   { id: 2, text: 'play game', checked: false}
        // ]
      }
    },

    methods: {
      // deleteTodo(id) {
        // const index = this.todos.findIndex(todo => {
        //   return todo.id === id;
        // });
        // this.todos.splice(index, 1);

        // this.todos = this.todos.filter(todo => todo.id != id);
      // },
      // addTodo(value) {
      //   this.todos.push({
      //     id: Math.random(),
      //     text: value,
      //     checked: false
      //   });
      //   this.todoText = '';
      // },
      clickInsert(e) {
        this.todos.push({
          id: Math.random(),
          text: e.target.value,
          checked: false
        });
        this.todoText = '';
      },
      // toggleCheckbox({id, checked}) {
      //   // console.log(id, checked);
      //   const index = this.todos.findIndex(todo => {
      //     return todo.id === id;
      //   });
      //   this.todos[index].checked = checked;
      // }
    }
  }

</script>

<style>

</style>
