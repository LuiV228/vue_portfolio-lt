<template>
  <div class="container-fluid 100vh">
    <div class="row">
      <h2 class="display-2">My Projects</h2>
    </div>
  </div>
  <br />
  <br />
  <section class="row d-block d-flex justify-content-center">
    <div
      class="card m-5 p-3 d-flex justify-content-center flex-wrap-row"
      id="cardP"
      style="width: 20rem"
      v-for="project in projects"
      :key="project.name"
    >
    <h5 class="card-title">{{ project.name }}</h5>
      <img :src="project.image" class="card-img-top" />
      <div class="card-body">
        
        <ul class="list-group list-group-flush" id="cardP">
          <li class="list-group-item" id="cardP">{{ project.description }}</li>
        </ul>
        <div class="cardbody">
          <a :href="project.github" class="btn" id="btnP" target="_blank"
            >Github</a
          >
          <a :href="project.netlify" class="btn" id="btnP" target="_blank"
            >Netlify</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects;
    },
  },
  mounted() {
    this.$store.dispatch(`fetchProjects`);
  },
  // components: { SpinnerComp }
};
</script>

<style scoped>
.card {
  background: rgb(114, 119, 255) 50% !important;
  font-size: 20px;
}

img {
  vertical-align: middle;
}

#cardP {
  border-radius: 10px;
  color: #faf9f6;
  background: #36454f;
}

#btnP {
  color: #faf9f6;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  vertical-align: middle;
  border-color: #faf9f600;
  border-width: 3px;
  font-weight: bold;
}

#btnP:hover {
  color: #36454f;
  border-color: #36454f;
  border-width: 3px;
  font-weight: bold;
}
</style>
