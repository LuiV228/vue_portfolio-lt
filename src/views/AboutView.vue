<template>
  <div class="container">
    <div class="row">
      <h1 class="display-2">About Luqmaan</h1>
    </div>
    <div class="row1">
      <div class="col1">
        <div id="about1">
          <p>
            Meet Luqmaan Toffey, a passionate and driven aspiring Data Scientist
            on the cusp of making a transformative impact in the world of data
            analytics. With a strong foundation in mathematics and a natural
            curiosity for uncovering patterns within datasets, Luqmaan is poised
            to revolutionize decision-making through data-driven insights.
          </p>
        </div>
      </div>
      <div class="col2">
        <img
          src="https://i.postimg.cc/LXhs6xBN/IMG-20220213-WA0040-97.jpg"
          class="img-fluid"
        />
      </div>
    </div>
    <div class="row1 reverse-on-mobile">
      <div class="col2">
        <img src="https://i.postimg.cc/QdrJzypL/IMG-20220213-WA0039-85.jpg" />
      </div>
      <div class="col1" id="about2">
        <div>
          <p>
            Adept at programming languages like Python and R, Luqmaan possesses
            a deep understanding of machine learning algorithms and statistical
            techniques. This knowledge, combined with a keen eye for detail,
            allows Luqmaan to extract meaningful information from complex
            datasets, transforming them into actionable intelligence.
          </p>
        </div>
      </div>
    </div>
    <div class="row1">
      <div class="col1">
        <div id="about3">
          <p id="align">
            What sets Luqmaan apart is an insatiable hunger for knowledge and a
            commitment to staying at the forefront of industry advancements.
            Luqmaan is not just aspiring to be a Data Scientist; they are
            determined to be a trailblazer, using their analytical prowess to
            solve real-world problems and drive innovation. With Luqmaan at the
            helm, the future of data science is brighter and more promising than
            ever.
          </p>
        </div>
      </div>
      <div class="col2">
        <img src="https://i.postimg.cc/y6gh8Hj4/IMG-9132-98.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.row {
  text-align: center;
  margin-bottom: 20px;
}

.row1 {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.col1, .col2 {
  flex: 1;
  text-align: center;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.col1 {
  font-size: 20px;
}

img {
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 25%;
}

#about1, #about2, #about3 {
  font-size: 20px;
  margin-top: 30px;
  text-align: justify;
}

/* Media Queries */
@media (max-width: 768px) {
  .row1 {
    flex-direction: column;
  }

  .reverse-on-mobile {
    flex-direction: column-reverse;
  }
  
  img {
    max-width: 200px;
  }

  #about1, #about2, #about3 {
    font-size: 18px;
  }
}

@media (max-width: 480px) {
  img {
    max-width: 150px;
  }

  #about1, #about2, #about3 {
    font-size: 16px;
    margin-top: 20px;
  }
}
</style>
