<template>
  <div class="container-fluid" id="footer">
    <footer class="socials container-fluid">
      <div class="row-1">
        <p class="lead">
          Luqmaan's Portfolio &copy; <span>{{ currYear }}</span>
        </p>
      </div>
      <div class="row-2">
        <a href="https://github.com/LuiV228/vue_portfolio-lt.git" target="_blank"><i class="bi bi-github" id="icon"></i
        ></a>
        <a href="https://www.linkedin.com/in/luqmaan-toffey-9802772aa/" target="_blank"><i class="bi bi-linkedin" id="icon"></i
        ></a>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: `FooterComp`,
  data() {
    return {
      currYear: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
body {
  font-family: "Lusitana", serif;
}

.lead {
  color: #faf9f6;
  margin-top: 1%;
}

.socials {
  color: #faf9f6;
}

a {
  text-decoration: none;
  margin-left: 1%;
  margin-right: 1%;
  margin-bottom: 1%;
  color: #faf9f6;
  font-size: 30px;
}

#footer {
  padding-top: 3px;
  width: 100%;
  background: rgb(0, 10, 255, 50%) 100% !important;
  position: relative;
  bottom: 0;
}

.row {
  width: 100%;
}
</style>
