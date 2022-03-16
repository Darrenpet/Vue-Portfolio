<template>
  <h1 class="fw-bold my-5">Project Details</h1>
  <div class="container animate__animated animate__rubberBand">
    <div v-if="project">
      <div
        class="card border border-primary shadow-0 text-white"
        style="background-color: #000000"
      >
        <div
          class="bg-image hover-overlay ripple"
          data-mdb-ripple-color="light"
        >
          <img
            :src="require('@/assets/Thumbnails/' + project.img)"
            class="img-fluid"
          />
          <a href="#!">
            <div
              class="mask"
              style="background-color: rgba(251, 251, 251, 0.15)"
            ></div>
          </a>
        </div>
        <div class="card-header">Project: {{ project._id }}</div>
        <div class="card-body">
          <h5 class="card-title">{{ project.title }}</h5>
          <p class="card-text">{{ project.details }}</p>
        </div>
        <div class="card-footer">
          <a :href="project.github" class="card-link" target="_blank"
            ><i class="bi bi-github mx-2" style="font-size: 2rem"></i>Github</a
          >
          <a :href="project.netlify" class="card-link" target="_blank"
            ><i
              ><span
                class="iconify mx-2"
                data-icon="simple-icons:netlify"
                style="font-size: 2rem"
              ></span></i
            >Netlify</a
          >
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading project details...</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      project: null,
    };
  },
  mounted() {
    fetch("https://vue-portfolio-api.herokuapp.com/projects/" + this.id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.projects = json;
      });
  },
};
</script>

<style scoped>
.img-fluid {
  max-width: 500px;
  max-height: 500px;
}
</style>
