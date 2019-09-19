<template>
  <div id="app">
    <Todo />
  </div>
</template>

<script>
import Todo from './components/Todo'

export default {
  name: 'app',
  components: { Todo }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: #fcfcfc;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 36rem;
  margin: 0 auto;
  padding: 0 1rem;
}
</style>
