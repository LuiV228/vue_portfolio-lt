import { createStore } from 'vuex'
const dataUrl = `https://luiv228.github.io/vue_portfolio-lt-json/data/`

export default createStore({
  state: {
    resume: null,
    projects: null,
    testimonials: null
  },
  getters: {
  },
  mutations: {
    setResume(state, value) {
      state.resume = value
    },
    setProjects(state, value) {
      state.projects = value
    },
    setTestimonials(state, value) {
      state.testimonials = value
    }
  },
  actions: {
    async fetchResume(context) {
      let result = await fetch(dataUrl)
      let {resume} = await result.json()
      context.commit(`setResume`, resume)
    },
    async fetchProjects(context) {
      let result = await fetch(dataUrl)
      let {projects} = await result.json()
      context.commit(`setProjects`, projects)
    },
    async fetchTestimonials   (context) {
      let result = await fetch(dataUrl)
      let {testimonials} = await result.json()
      context.commit(`setTestimonials`, testimonials)
    }
  },
  modules: {
  }
})
