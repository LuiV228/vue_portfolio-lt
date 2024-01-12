<template>
    <div class="container-fluid 100vh">
        <div class="row">
            <h2 class="display-2">My Projects</h2>
        </div>
    </div>
    <br>
    <br>
    <section class="row d-block d-m-flex justify-content-center">
        <div class="card my-5 p-5 d-flex justify-content-center" id="cardP" style="width: 60rem;" v-for="project in projects" :key="project.name">
          <img :src="project.image" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ project.name }}</h5>
            <ul class="list-group list-group-flush" id="cardP">
              <li class="list-group-item" id="cardP">{{ project.description }}</li>
            </ul>
            <div class="card-body">
              <a :href="project.github" class="btn" id="btnP" target="_blank">Github</a>
              <a :href="project.netlify" class="btn" id="btnP" target="_blank">Netlify</a>
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
            }
        },
        mounted() {
            this.$store.dispatch(`fetchProjects`);
        },
        // components: { SpinnerComp }
    };
</script>

<style scoped>

#cardP {
    border-radius: 5%;
    color: #18c8e3;
    background-color: black;
}

#btnP :hover {
    color: #18c8e3;
    border-color: #18c8e3;
    margin-left: 10px;
    margin-right: 10px;
}
</style>