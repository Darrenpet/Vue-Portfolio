<template>
  <!-- Navbar -->
  <nav
    id="nav"
    class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark mb-5"
  >
    <!-- Container wrapper -->
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a class="navbar-brand" href="#">Darren Petersen</a>

      <ul class="navbar-nav mc-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link
            class="nav-link active"
            aria-current="page"
            href="#!"
            to="/"
          >
            <div>
              <i class="fas fa-home fa-lg mb-1"></i>
            </div>
            Home
          </router-link>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link class="nav-link" href="#!" :to="{ name: 'About' }">
            <div>
              <i class="far fa-user"></i>
            </div>
            About
          </router-link>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link class="nav-link" href="#!" :to="{ name: 'Resume' }">
            <div>
              <i class="far fa-file"></i>
            </div>
            Resume
          </router-link>
        </li>
      </ul>
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link class="nav-link" href="#!" :to="{ name: 'Projects' }">
            <div>
              <i class="fas fa-tasks"></i>
              <span class="badge rounded-pill badge-notification bg-primary"
                >6</span
              >
            </div>
            Projects
          </router-link>
        </li>

        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link
            class="nav-link"
            href="#!"
            :to="{ name: 'Testimonials' }"
          >
            <div>
              <i class="fas fa-users"></i>
              <span class="badge rounded-pill badge-notification bg-primary"
                >6</span
              >
            </div>
            Testimonials
          </router-link>
        </li>
        <li class="nav-item text-center mx-2 mx-lg-1">
          <router-link class="nav-link" href="#!" :to="{ name: 'Contact' }">
            <div>
              <i class="fas fa-phone"></i>
            </div>
            Contact
          </router-link>
        </li>
      </ul>
      <!-- Right links -->
    </div>
    <!-- Collapsible wrapper -->
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {};
</script>
<style>
.btn {
  padding: 0.55rem 1.5rem 0.45rem;
}

#nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: #0011ff;
}
</style>
