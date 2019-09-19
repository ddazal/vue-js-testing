<template>
  <div id="app">
    <todo-input />
  </div>
</template>

<script>
import TodoInput from './components/TodoInput'

export default {
  name: 'app',
  components: { TodoInput }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
