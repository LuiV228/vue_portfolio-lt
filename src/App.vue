<template>
  <NavBar/>
  <main class="container-fluid" id="background">
    <router-view/>
    <Spinner/>
  </main>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';

export default {
  components: {
    NavBar,
    Footer,
    Spinner
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
