<template>
  <div>
    <input type="text" v-model.trim="input" @keyup.enter="handleEnter" placeholder="Add todo">
  </div>
</template>

<script>
export default {
  name: 'TodoInput',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    handleEnter () {
      if (!this.input) {
        return
      }
      this.$emit('on-enter', this.input)
      this.input = ''
    }
  }
}
</script>

<style scoped>
input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #989898;
  color: #989898;
  display: block;
  font-family: inherit;
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 0.025em;
  line-height: 0;
  padding: 1.5rem 0;
  width: 100%;
}

input::placeholder {
  color: #989898;
}
</style>
