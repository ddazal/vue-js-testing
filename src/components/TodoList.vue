<template>
  <div class="todos">
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
.todos {
  margin-top: 2.5rem;
  margin-bottom: 2rem;
}
.todo {
  margin-bottom: 1rem;
}
.todo label {
  display: inline-flex;
  align-items: center;
  font-weight: 800;
  color: #5e5e5e;
}
.todo input[type="checkbox"] {
  appearance: none;
  width: 1.25rem;
  height: 1.25rem;
  border: 1px solid #989898;
  border-radius: .25rem;
  margin-right: .5rem;
  position: relative;
}
.todo [type="checkbox"]:checked:before {
  content: '\2713';
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
.todo input[type="checkbox"]:checked + span {
  text-decoration: line-through;
  color: #989898;
}
</style>
