<template>
  <div>
    <div class="todo" v-for="(todo, index) in todos" :key="index">
      <label>
        <input type="checkbox" @change="handleChange(index)">
        <span>{{ todo.name }}</span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true
    }
  },
  methods: {
    handleChange (index) {
      this.$emit('on-checked', index)
    }
  }
}
</script>

<style>
</style>
