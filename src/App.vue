<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-form></b-form>
  </div>
</template>

<script>
import Form from './components/Form.vue'

export default {
  name: 'app',
  components: {
    'b-form': Form
  }
}
</script>

<style lang="scss">
$color: red;

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
