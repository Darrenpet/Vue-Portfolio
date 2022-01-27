import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Resume from "../views/Resume.vue";
import Projects from "../views/Projects/Projects.vue";
import ProjectDetails from "../views/Projects/ProjectDetails.vue";
import Testimonials from "../views/Testimonials.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
  {
    path: "/Projects/:id",
    name: "ProjectDetails",
    component: ProjectDetails,
    props: true
  },
  {
    path: "/testimonials",
    name: "Testimonials",
    component: Testimonials,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
