<template>
  <nav
    class="navbar navbar-expand-lg border-body"
    data-bs-theme="dark"
    id="nav"
  >
    <div class="container-fluid">
      <router-link to="/">
        <img
          src="https://i.ibb.co/WGt09sk/LT-Coding-Logo.png"
          alt="logo"
          id="logo"
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <div class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </div>
          <div class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </div>
          <div class="nav-item">
            <router-link to="/resume" class="nav-link">Resume</router-link>
          </div>
          <div class="nav-item">
            <router-link to="/projects" class="nav-link">Projects</router-link>
          </div>
          <div class="nav-item">
            <router-link to="/testimonials" class="nav-link"
              >Testimonials</router-link
            >
          </div>
          <div class="nav-item">
            <router-link to="/contact" class="nav-link">Contact</router-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {},
};
</script>

<style scoped>
#logo {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}

#nav {
  padding: 10px;
  background: rgb(0, 10, 255, 50%) 100% !important;
}

nav a {
  font-size: 20px;
  color: #faf9f6;
}

nav a:hover {
  font-weight: bold;
  color: #36454f;
}

nav a.router-link-exact-active:hover {
  color: #36454f;
}

nav a.router-link-exact-active {
  color: #36454f;
}
</style>
