<template>
  <div>
    <p class="progress-msg">{{ completedTodos }} / {{ todos.length }} completed</p>
    <div class="progress-bar-wrapper">
      <div class="progress-bar" :style="{ width: progress + '%' }"></div>
    </div>
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

<style scoped>
.progress-msg {
  font-size: .75rem;
  font-weight: 800;
  letter-spacing: .025em;
  margin-bottom: .5rem;
  text-transform: uppercase;
}
.progress-bar-wrapper {
  background-color: #eeeeee;
  border-radius: .5rem;
  height: 1rem;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.progress-bar {
  background-color: #0920f9;
  border-radius: .5rem;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  transition: width 0.25s ease-in;
}
</style>
