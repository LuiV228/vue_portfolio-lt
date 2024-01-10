<template>
  <NavBar/>
  <main>
    <router-view/>

  </main>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

nav {
  padding: 30px;
}

nav a:hover {
  font-weight: bold;
  color: #5a7da0;
}

nav a.router-link-exact-active:hover {
  color: #18c8e3;
}
nav a.router-link-exact-active {
  color: #18c8e3;
}
</style>
