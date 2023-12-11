<template>
  <px-header />
  <px-form-register />
</template>

<script>
import PxFormRegister from './components/PxFormRegister.vue'
import PxHeader from './components/PxHeader.vue'

export default {
  name: 'App',

  components: { PxHeader, PxFormRegister },
}
</script>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: auto;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
