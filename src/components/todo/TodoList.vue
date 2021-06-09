<template>
    <div class="todos-wrapper">
        <h1>TO DO LIST</h1>
        <div class="add-todo">
            <input v-model="input" type="text" @keyup.enter="addTodo" placeholder="Add new item">
        </div>
        <ul class="todos">
            <li v-for="todo in todos" :key="todo.text" class="todo">
                <Todo :text="todo.text" @delete-todo="deleteTodo"/>
            </li>
        </ul>
    </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
    components: {
        Todo
    },
    data() {
        return {
            todos: [
                {
                    text: "Learn Vue"
                },
                {
                    text: "Learn CSS",
                },
                {
                    text: "Learn Go"
                }
            ],
            input: ''
        }
    },
    methods: {
        deleteTodo(value) {
            this.todos = this.todos.filter(e => e.text !== value);
        },
        addTodo() {
            this.todos.push({text: this.input});
            this.input = '';
        }
    }
}
</script>

<style scoped>
    .todos {
        list-style-type: none;
        padding: 0;
        width: 400px;
    }
    .todos-wrapper {
        background-color: #fff;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 1px solid black;
    }
    .todos-wrapper h1 {
        padding-top: 20px;
        text-align: center;
    }
    .add-todo {
        margin: 0;
        padding: 10px;
        width: 100%;
        box-sizing: border-box;
    }
    .add-todo input {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 1.5rem;
        text-indent: 1rem;
    }
</style>