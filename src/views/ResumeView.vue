<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Experience</h2>
        </div>
    </div>
    <div class="row" >
        <div class="col d-flex justify-content-center" v-for="resumes in resume" :key="resumes.id">
            <div class="card m-3" style="width: 18rem; height: 35rem;" >
          <img :src="resumes.proof" class="card-img-top p-3">
          <div class="card-body">
            <h5 class="card-title">{{ resumes.year }}</h5>
            <p class="card-text">{{ resumes.description }}</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{ resumes.place }}</li>
          </ul>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            resume() {
                return this.$store.state.resume;
            }
        },
        mounted() {
            this.$store.dispatch(`fetchResume`);
        },
        // components: { SpinnerComp }
    };
</script>

<style scoped>

</style>