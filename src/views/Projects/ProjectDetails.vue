<template>
  <h2 class="fw-bold my-5">Project Details</h2>
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
        <div class="card-header">Project: {{ project.id }}</div>
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
  props: ["id", "details", "title", "img", "github", "netlify"],
  data() {
    return {
      project: null,
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects/" + this.id)
      .then((res) => res.json())
      .then((data) => (this.project = data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style></style>
