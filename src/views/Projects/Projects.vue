<template>
  <h2 class="fw-bold mb-5">Project Page</h2>
  <div class="container">
    <div v-if="projects.length">
      <div
        v-for="project in projects"
        :key="project.id"
        :title="project.title"
        :details="project.details"
        :img="project.img"
        :github="project.github"
        :netlify="project.netlify"
        class="project"
      >
        <router-link
          :to="{
            name: 'ProjectDetails',
            params: {
              id: project.id,
              title: project.title,
              details: project.details,
              img: project.img,
              github: project.github,
              netlify: project.netlify,
            },
          }"
        >
          <h2 class="text-white my-5">{{ project.title }}</h2>
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
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
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
