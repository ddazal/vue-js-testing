<template>
  <div>
    <input type="text" v-model.trim="input" @keyup.enter="handleEnter">
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

<style>

</style>
