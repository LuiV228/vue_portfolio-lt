<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Who is Luqmaan?</h2>
    </div>
    <div class="row m-3">
      <div
        class="col d-flex justify-content-center m-3"
        v-for="testimonial in testimonials"
        :key="testimonial.name"
      >
        <div class="card p-3" style="width: 18rem;">
          <img :src="testimonial.profile" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ testimonial.name }} {{ testimonial.surname }}</h5>
            <button 
              type="button" 
              class="btn btn-primary" 
              data-bs-toggle="modal" 
              data-bs-target="#agentModal" 
              @click="setCurrentTestimonial(testimonial)"
            >
              Review
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal outside the v-for loop -->
    <div class="modal fade" id="agentModal" tabindex="-1" aria-labelledby="agentModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content loginbg">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="agentModalLabel">{{ currentTestimonial.name }} {{ currentTestimonial.surname }} Review:</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body login-box">
            <div class="user-box">
              <p class="modal-text">{{ currentTestimonial.quotes }}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTestimonial: {}
    };
  },
  computed: {
    testimonials() {
      return this.$store.state.testimonials;
    }
  },
  methods: {
    setCurrentTestimonial(testimonial) {
      this.currentTestimonial = testimonial;
    }
  },
  mounted() {
    this.$store.dispatch('fetchTestimonials');
  }
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
#agentModalLabel {
  color: #ffffff;
}
.loginbg {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background: linear-gradient(#141e30, #243b55);
  height: 100vh;
}
.login-box {
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}
.modal-header {
  border-bottom: none;
}
.modal-header .btn-close {
  padding: 1rem;
}
.modal-body {
  max-height: 400px;
  overflow-y: auto;
}
.modal-text {
  color: #ffffff;
  text-align: justify;
}
.modal-footer {
  border-top: none;
}
</style>
