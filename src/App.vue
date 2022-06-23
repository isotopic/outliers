<template>
  <PhoneFrame/>
</template>

<script>
import PhoneFrame from './components/PhoneFrame.vue'

export default {
  name: 'App',
  components: {
    PhoneFrame
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap');
body{
  margin: 0;
  padding: 0;
  color: #fff;
  background-color: #333;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}
</style>
