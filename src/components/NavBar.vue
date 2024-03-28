<template>
  <nav
    class="navbar navbar-expand-lg border-body"
    data-bs-theme="dark"
    id="nav"
  >
    <div class="container-fluid">
      <router-link to="/">
        <img
          src="https://i.postimg.cc/7hqY8Yfv/LT-Coding.png"
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
}

#nav {
  padding: 10px;
  background: rgb(255, 0, 199, 50%) 100% !important;
}

nav a {
  font-size: 20px;
  color: rgb(0, 0, 0);
}

nav a:hover {
  font-weight: bold;
  color: #0008ff;
}

nav a.router-link-exact-active:hover {
  color: #0008ff;
}

nav a.router-link-exact-active {
  color: #0008ff;
}
</style>
