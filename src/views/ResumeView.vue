<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Experience</h2>
    </div>
  </div>
  <div class="row">
    <div class="col d-flex justify-content-center" v-for="resumes in resume" :key="resumes.id">
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
    <div class="container">
      <div class="row">
        <h2 class="display-2">Skills</h2>
      </div>
    </div>
    <div class="skills-container1">
      <div class="skill">
        <i class="fa-brands fa-html5"></i>
        <span>HTML5</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-css3-alt"></i>
        <span>CSS3</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-bootstrap"></i>
        <span>Bootstrap</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-js"></i>
        <span>JavaScript</span>
      </div>
    </div>
    <div class="skills-container2">
      <div class="skill">
        <i class="fa-brands fa-vuejs"></i>
        <span>Vue.js</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-database"></i>
        <span>Mysql</span>
      </div>
      <div class="skill">
        <i class="fa-brands fa-figma"></i>
        <span>Figma</span>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Soft Skills</h2>
      </div>
    </div>
    <div class="soft-skills">
      <div class="skill">
        <i class="fa-solid fa-paintbrush"></i>
        <span>Creativity</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-face-smile-beam"></i>
        <span>Emotional Intelligence</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-business-time"></i>
        <span>Time Management</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-people-arrows"></i>
        <span>Communication</span>
      </div>
      <div class="skill">
        <i class="fa-solid fa-infinity"></i>
        <span>Adaptability</span>
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

.skills-container1 {
  font-size: 130px;
  color: rgb(134, 133, 133);
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 50px;
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  justify-content: space-evenly;
}

.skills-container2 {
  font-size: 130px;
  color: rgb(134, 133, 133);
  display: flex;
  flex-wrap: wrap;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 10px;
  width: 46%;
  justify-content: space-between;
}

.soft-skills {
  font-size: 100px;
  color: rgb(134, 133, 133);
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); */
  gap: 10px;
  width: 50%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
}

.skill {
  text-align: center;
}

.skill span {
  font-size: 14px;
  display: block;
}

.skill .fa-html5,
.fa-css3-alt,
.fa-bootstrap,
.fa-js,
.fa-vuejs,
.fa-database,
.fa-figma
 {
  transition: 0.5s ease all;
}
.skill .fa-html5:hover {
  transform: scale(1.2);
  color: tomato;
}
.skill .fa-css3-alt:hover {
  transform: scale(1.2);
  color: teal;
}
.skill .fa-bootstrap:hover {
  transform: scale(1.2);
  color: purple;
}
.skill .fa-js:hover {
  transform: scale(1.2);
  color: yellow;
}
.skill .fa-vuejs:hover {
  transform: scale(1.2);
  color: forestgreen;
}
.skill .fa-database:hover {
  transform: scale(1.2);
  color: aquamarine;
}
.skill .fa-figma:hover {
  transform: scale(1.2);
  color: rebeccapurple;
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

