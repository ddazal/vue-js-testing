<template>
  <div>
    <p>{{ completedTodos }} / {{ todos.length }} completed</p>
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'TodoProgress',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  computed: {
    completedTodos () {
      return this.todos.filter(todo => todo.completed).length
    },
    progress () {
      if (!this.todos.length) {
        return 0
      }
      return 100 * this.completedTodos / this.todos.length
    }
  }
}
</script>

<style>

</style>
