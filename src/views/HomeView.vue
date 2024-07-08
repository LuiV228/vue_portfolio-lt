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
        <h2 class="developer">
          I'm an aspiring Data Scientist <br />&<br /> Fullstack Web Developer
        </h2>
      </div>
      <br />
      <div class="circle">
        <router-link to="/about" class="nav-link"><i class="bi bi-arrow-right"></i></router-link>
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
/* General Styles */
.home {
  padding-top: 50px;
}
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
}

.col-left,
.col-middle,
.col-right {
  flex: 1;
  min-width: 300px; /* Ensures columns don't get too narrow */
  margin: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.col-middle img {
  width: 100%;
  max-width: 300px; /* Prevents image from getting too large */
  height: auto;
  border-radius: 5%;
}

.hero-btn {
  color: #faf9f6;
  border: 5px solid #faf9f6;
  padding: 12px 34px;
  font-size: 17px;
  background: transparent;
  cursor: pointer;
  text-align: center;
  transition: 0.2s;
}

.hero-btn:hover {
  border: 1px solid #faf9f6;
  background: rgb(114, 119, 255);
  transition: 0.5s;
}

.developer {
  text-align: center;
  margin-top: 10%;
}

.circle {
  border: 5px solid #faf9f6;
  background-color: #36454f;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.3rem;
  transition: 0.2s;
}

.circle:hover {
  border-color: rgb(114, 119, 255);
  transform: scale(1.1, 1.1);
}

.bi-arrow-right {
  font-size: 50px !important;
  color: #faf9f6;
  transition: 0.2s;
}

.bi-arrow-right:hover {
  color: rgb(114, 119, 255);
}

img {
  border-radius: 5%;
  margin-top: 22px;
}

/* Media Queries for different screen sizes */
@media (max-width: 1200px) {
  .developer {
    font-size: 1.8rem;
  }

  .intro span {
    font-size: 1.8rem;
  }

  .circle {
    width: 90px;
    height: 90px;
  }

  .bi-arrow-right {
    font-size: 45px !important;
  }

  .hero-btn {
    font-size: 1.1rem;
    padding: 10px 28px;
  }

  .hero-btn:hover {
    border: 1px solid #faf9f6;
    background: rgb(114, 119, 255);
    transition: 0.5s;
  }
}

@media (max-width: 768px) {
  .developer {
    font-size: 1.5rem;
  }

  .intro span {
    font-size: 1.5rem;
  }

  .circle {
    width: 80px;
    height: 80px;
  }

  .bi-arrow-right {
    font-size: 40px !important;
  }

  .hero-btn {
    font-size: 1rem;
    padding: 8px 24px;
  }

  .hero-btn:hover {
    border: 1px solid #faf9f6;
    background: rgb(114, 119, 255);
    transition: 0.5s;
  }

  .col-left,
  .col-middle,
  .col-right {
    margin: 0.5rem;
  }
}

@media (max-width: 480px) {
  .developer {
    font-size: 1.2rem;
  }

  .intro span {
    font-size: 1.2rem;
  }

  .circle {
    width: 70px;
    height: 70px;
  }

  .bi-arrow-right {
    font-size: 35px !important;
  }

  .hero-btn {
    font-size: 0.9rem;
    padding: 6px 20px;
  }

  .hero-btn:hover {
    border: 1px solid #faf9f6;
    background: rgb(114, 119, 255);
    transition: 0.5s;
  }
}
</style>
