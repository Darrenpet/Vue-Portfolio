<template>
  <h1 class="fw-bold mt-5">Testimonials</h1>
  <div class="container my-5">
    <div v-if="testimonials.length" class="row">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.id"
        class="col-lg-4 col-md-6 col-sm-12"
      >
        <div
          class="card testimonial-card shadow-5-strong mt-2 mb-3 pt-4 animate__animated animate__jackInTheBox"
        >
          <div class="card-up aqua-gradient"></div>
          <div class="avatar mx-auto white">
            <img
              :src="require('@/assets/Testimonials/' + testimonial.img)"
              class="rounded-circle img-fluid test-img"
              alt="Kagiso"
            />
          </div>
          <div class="card-body text-center">
            <h4 class="card-title font-weight-bold">
              {{ testimonial.name }}
            </h4>
            <hr />
            <p>
              <i class="fas fa-quote-left"></i> {{ testimonial.quote }}
              <i class="fas fa-quote-right"></i>
            </p>
            <p class="card-text">
              <small class="text-muted">{{ testimonial.relation }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading testimonials...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [],
    };
  },
  mounted() {
    fetch("https://vue-portfolio-api.herokuapp.com/testimonials", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.testimonials = json;
      })
      .catch((err) => {
        alert(console.log(err));
      });
  },
};
</script>

<style>
.test-img {
  max-width: 200px;
  max-height: 200px;
}

.testimonial-card {
  height: 550px;
}

/* @media only screen and (max-width: 600px) {
  .testimonial-card {
    height: 450px;
  }
} */
</style>
