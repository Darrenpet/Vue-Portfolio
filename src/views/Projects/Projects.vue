<template>
  <h1 class="fw-bold my-5">Project Page</h1>
  <div class="container">
    <div v-if="projects.length">
      <div v-for="project in projects" :key="project._id" class="project">
        <router-link
          :to="{
            name: 'ProjectDetails',
            params: {
              id: project._id,
            },
          }"
        >
          <h2 class="text-white my-5 animate__animated animate__zoomIn">
            {{ project.title }}
          </h2>
        </router-link>
      </div>
    </div>
    <div v-else>
      <p>Loading projects...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("https://vue-portfolio-api.herokuapp.com/projects", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.projects = json;
      })
      .catch((err) => {
        alert(console.log(err));
      });
  },
};
</script>

<style>
.project h2 {
  background: #000000;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}

.project h2:hover {
  background: blue;
}

.project a {
  text-decoration: none;
}
</style>
