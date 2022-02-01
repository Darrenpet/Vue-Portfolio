<template>
  <h2 class="fw-bold mb-2">Testimonials</h2>
  <div class="container my-5">
    <div v-if="testimonials.length" class="row">
      <div
        v-for="testimonial in testimonials"
        class="col-xl-6 col-md-6 col-sm-12"
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
    fetch("http://localhost:3000/testimonials")
      .then((res) => res.json())
      .then((data) => (this.testimonials = data))
      .catch((err) => console.log(err.message));
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
</style>
