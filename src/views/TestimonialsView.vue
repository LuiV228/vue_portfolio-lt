<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Who is Luqmaan?</h2>
        </div>
    </div>
    <div class="row m-3">
        <div class="col d-flex justify-content-center m-3" v-for="testimonial in testimonials" :key="testimonial.name">
            <div class="card p-3" style="width: 18rem;">
                <img :src="testimonial.profile" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">{{ testimonial.name }} {{ testimonial.surname }}</h5>
                  <div class="dropdown">
                      <button class="btn btn-secondary dropdown-toggle" id="review" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Review
                      </button>
                      <ul class="dropdown-menu">
                        <p class="card-text">{{ testimonial.quotes }}</p>
                      </ul>
                  </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            testimonials() {
                return this.$store.state.testimonials;
            }
        },
        mounted() {
            this.$store.dispatch(`fetchTestimonials`);
        },
        // components: { SpinnerComp }
    };
</script>

<style scoped>

 .card {
    background-color: black;
    color: #18c8e3;

 }
 .card-text {
    padding: 10px;
    text-align: justify;
 }
</style>