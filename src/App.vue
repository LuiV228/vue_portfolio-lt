<template>
  <NavBar/>
  <main>
    <router-view/>

  </main>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: "Lusitana", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}


body {
  font-family: "Lusitana", serif;
}
</style>
