<template>
  <div class="home">
    <h2 class="display-2">What is Luqmaan?</h2>
  </div>
  <br />
  <div class="row">
    <div class="col-left">
      <div id="intro">
        <h2 class="intro"><span>Hi, I am Luqmaan Toffey</span></h2>
      </div>
      <br />
      <div class="contact-us" id="home">
        <router-link to="/contact" class="hero-btn">Contact Us</router-link>
      </div>
    </div>
    <div class="col-middle">
      <img src="https://i.ibb.co/mJkyg0W/DSC-0326.jpg" class="cover" />
    </div>
    <div class="col-right">
      <div>
        <h2 class="developer">I'm an aspiring Data Scientist</h2>
      </div>
      <br />
      <div class="circle">
        <i class="bi bi-arrow-right"></i>
      </div>
      <br />
      <div>
        <h3>About Me</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.row {
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.col-left,
.col-middle,
.col-right {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 30%;
}
.col-left {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
}

.col-middle img {
  width: 90%;
  height: 100%;
}
.hero-btn {
  color: rgb(0, 0, 0);
  border: 1px solid black;
  padding: 12px 34px;
  font-size: 13px;
  background: transparent;
  cursor: pointer;
}
.hero-btn:hover {
  border: 1px solid #18c8e3;
  background: #18c8e3;
  transition: 1s;
}

.developer {
  margin-top: 10%;
}
.circle {
  border: 2px solid black;
  background-color: #ffffff;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.3rem;
}

.bi-arrow-right {
  font-size: 50px !important;
}

.col-right {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}

img {
  border-radius: 5%;
}
</style>
