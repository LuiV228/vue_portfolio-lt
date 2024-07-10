<template>
  <div class="container">
    <div class="row">
      <h2 class="display-2">Acknowledgments</h2>
    </div>
    <div class="row" id="card-row">
      <div
        class="col d-flex justify-content-center m-3"
        v-for="testimonial in testimonials"
        :key="testimonial.name">
        <div class="card p-3" style="width: 18rem;">
          <img :src="testimonial.profile" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ testimonial.name }} {{ testimonial.surname }}</h5>
            <button 
              type="button" 
              class="btn btn-primary" 
              id="review"
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
            <h1 class="modal-title fs-5" id="agentModalLabel">{{ currentTestimonial.name }} {{ currentTestimonial.surname }}'s Review:</h1>
          </div>
          <div class="modal-body login-box">
            <div class="user-box">
              <p class="modal-text">{{ currentTestimonial.quotes }}</p>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" id="close" data-bs-dismiss="modal">
              Close
            </button>
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
#card-row {
  padding-bottom: 30px;
}

.card {
  background-color: rgb(114, 119, 255);
  color: #faf9f6;
}

.card-text {
  padding: 10px;
  text-align: justify;
}

#review {
  background-color: #36454f;
  color: #faf9f6;
  border: 0px;
  transition: 0.2s;
}

#review:hover {
  transform: scale(1.1, 1.1)
}

#agentModalLabel {
  color: #faf9f6;
}

.loginbg {
  margin: 0;
  padding: 0;
  background: rgb(114, 119, 255);
  height: 80vh;
}

.login-box {
  padding: 20px;
  background: #36454f;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.modal-header {
  border-bottom: none;
  padding-left: 20px;
}

.modal-header .btn-close {
  padding: 1rem;
  color: #36454f;
}

.modal-body {
  margin-left: 20px;
  margin-right: 20px;
  min-height: 100px;
  overflow-y: auto;
}

.modal-text {
  color: #faf9f6;
  text-align: justify;
}

.modal-footer {
  border-top: none;
  margin-right: 4px;
}

#close {
  background-color: #36454f;
  color: #faf9f6;
  transition: 0.2s;
}

#close:hover {
  box-shadow: 0 0 15px rgb(0, 0, 0, 0.6);
  transform: scale(1.1, 1.1)
}
</style>
