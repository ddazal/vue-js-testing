<template>
  <div>
    <TodoInput @on-enter="addTodo"/>
    <TodoList :todos="todos" @on-checked="updateTodo" />
    <TodoProgress :todos="todos" />
  </div>
</template>

<script>
import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import TodoProgress from '@/components/TodoProgress'

export default {
  name: 'Todo',
  components: { TodoInput, TodoList, TodoProgress },
  data () {
    return {
      todos: []
    }
  },
  methods: {
    addTodo (name) {
      this.todos.push({ name, completed: false })
    },
    updateTodo (index) {
      this.todos[index].completed = !this.todos[index].completed
    }
  }
}
</script>

<style>

</style>
