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
    <div class="skills-container">
      <div class="skill" v-for="(skill, index) in skills" :key="index">
        <i :class="skill.icon" :style="{ color: skill.color }"></i>
        <span>{{ skill.name }}</span>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <h2 class="display-2">Soft Skills</h2>
      </div>
    </div>
    <div class="soft-skills">
      <div class="skill" v-for="(softSkill, index) in softSkills" :key="index">
        <i :class="softSkill.icon"></i>
        <span>{{ softSkill.name }}</span>
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
  data() {
    return {
      skills: [
        { name: 'HTML5', icon: 'fa-brands fa-html5' },
        { name: 'CSS3', icon: 'fa-brands fa-css3-alt' },
        { name: 'Bootstrap', icon: 'fa-brands fa-bootstrap' },
        { name: 'Figma', icon: 'fa-brands fa-figma' },
        { name: 'JavaScript', icon: 'fa-brands fa-js' },
        { name: 'Mysql', icon: 'fa-solid fa-database' },
        { name: 'Vue.js', icon: 'fa-brands fa-vuejs' },
        { name: 'Node.js', icon: 'fa-brands fa-node-js' },
      ],
      softSkills: [
        { name: 'Leadership', icon: 'fa-solid fa-user-tie' },
        { name: 'Mentorship', icon: 'fa-solid fa-school' },
        { name: 'Positive Influence', icon: 'fa-regular fa-face-laugh-beam' },
        { name: 'Personal Values', icon: 'fa-solid fa-circle-exclamation' },
        { name: 'Conflict Resolution', icon: 'fa-solid fa-handshake' },
        { name: 'Time Management', icon: 'fa-solid fa-hourglass-half' },
        { name: 'Goal Setting', icon: 'fa-solid fa-clipboard-list' },
        { name: 'Teamwork', icon: 'fa-solid fa-people-group' },
        { name: 'Problem Solving', icon: 'fa-regular fa-circle-check' },
        { name: 'Analytical Thinking', icon: 'fa-solid fa-chart-line' },
      ],
    };
  },
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

.skills-container,
.soft-skills {
  display: grid;
  justify-content: center;
  gap: 20px;
}

.skills-container {
  grid-template-columns: repeat(4, 1fr);
}

.soft-skills {
  grid-template-columns: repeat(5, 1fr);
}

.skill {
  text-align: center;
  font-size: 130px;
}

.skill span {
  font-size: 14px;
  display: block;
  color: #faf9f6;
}

.skill i {
  transition: 0.5s ease all;
}

.skill .fa-html5:hover {
  transform: scale(1.2);
  color: red;
}
.skill .fa-css3-alt:hover {
  transform: scale(1.2);
  color: orange;
}
.skill .fa-bootstrap:hover {
  transform: scale(1.2);
  color: yellow;
}
.skill .fa-figma:hover {
  transform: scale(1.2);
  color: green;
}
.skill .fa-js:hover {
  transform: scale(1.2);
  color: blue;
}
.skill .fa-database:hover {
  transform: scale(1.2);
  color: indigo;
}
.skill .fa-vuejs:hover {
  transform: scale(1.2);
  color: violet;
}
.skill .fa-node-js:hover {
  transform: scale(1.2);
  color: black;
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
