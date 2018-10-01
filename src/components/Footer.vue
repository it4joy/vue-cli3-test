<template>
  <footer class="footer bg-light">
      <b-container>
          <b-row>
            <b-col cols="4">
              &copy; 2018, AwesomeCorp | All rights reserved
            </b-col>
            <b-col cols="4">
              <ul class="list">
                <li>
                  <b-link href="#">User Agreement</b-link>
                </li>
              </ul>
            </b-col>
            <b-col cols="4">
              <ul class="list">
                <li>
                  <b-link href="#">Quick link #1</b-link>
                </li>
                <li>
                  <b-link href="#">Quick link #2</b-link>
                </li>
              </ul>
            </b-col>
          </b-row>
      </b-container>
  </footer>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss">
  .footer {
    padding: 1rem 0;
    min-height: 5rem;
    text-align: center;
  }
</style>
