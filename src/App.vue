<template>
  <div id="app">
    <app-header></app-header>
    <b-container>
      <b-row align-h="center">
        <b-col cols="8">
          <b-form></b-form>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import RegForm from './pages/RegForm'
import Header from './components/Header';

export default {
  name: 'app',
  components: {
    'app-header': Header,
    //'app-footer': Footer,
    'b-form': RegForm
  }
}
</script>

<style lang="scss">
  #app {
    padding-top: 56px;
  }
</style>
