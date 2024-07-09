<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Experience</h2>
    </div>
  </div>
  <div class="row">
    <div
      class="col d-flex justify-content-center"
      v-for="resumes in resume"
      :key="resumes.id"
    >
      <div class="card m-3 mb-5" style="width: 18rem; height: 30rem">
        <ul class="list-group list-group-flush">
          <li class="list-group-item" id="card-content-1">
            {{ resumes.year }}: {{ resumes.place }}
          </li>
        </ul>
        <img :src="resumes.proof" class="card-img-top p-3" id="img"/>
        <div class="card-body">
          <p class="card-text" id="card-content-2">{{ resumes.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    resume() {
      return this.$store.state.resume;
    },
  },
  mounted() {
    this.$store.dispatch(`fetchResume`);
  },
  // components: { SpinnerComp }
};
</script>

<style scoped>
.container {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.display-2 {
  color: #faf9f6;
  text-align: center;
  padding-bottom: 22px;
}

.card {
  background: rgb(114, 119, 255);
  width: 100%;
  max-width: 300px;
  transition: transform 0.2s;
  margin-bottom: 30px;
}

.card:hover {
  transform: scale(1.1, 1.1);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.list-group-item {
  background-color: #36454f;
  color: #faf9f6;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}

.card-body {
  margin: 1rem;
  padding: 1rem;
  background-color: #36454f;
  border-radius: 3%;
}

.card-text {
  text-align: justify;
  font-size: 1rem;
  color: #faf9f6;
}

@media (max-width: 1200px) {
  .card {
    max-width: 90%;
  }
}

@media (max-width: 768px) {
  .card {
    max-width: 100%;
  }
}

@media (max-width: 576px) {
  .display-2 {
    font-size: 2rem;
  }
  .card {
    max-width: 100%;
  }
}
</style>

