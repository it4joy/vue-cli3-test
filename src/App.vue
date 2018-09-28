<template>
  <div id="app">
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
import RegForm from './components/RegForm.vue'

export default {
  name: 'app',
  components: {
    'b-form': RegForm
  }
}
</script>
