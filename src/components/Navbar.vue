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

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars text-light"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left links -->
        <ul class="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
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
            <router-link
              class="nav-link"
              aria-current="page"
              href="#!"
              :to="{ name: 'About' }"
            >
              <div>
                <i class="far fa-user"></i>
              </div>
              About
            </router-link>
          </li>
          <li class="nav-item text-center mx-2 mx-lg-1">
            <router-link
              class="nav-link"
              aria-current="page"
              href="#!"
              :to="{ name: 'Resume' }"
            >
              <div>
                <i class="far fa-file"></i>
              </div>
              Resume
            </router-link>
          </li>
          <li class="nav-item dropdown text-center mx-2 mx-lg-1">
            <router-link
              class="nav-link"
              aria-current="page"
              href="#!"
              :to="{ name: 'Projects' }"
            >
              <div>
                <i class="fas fa-tasks"></i>
                <span class="badge rounded-pill badge-notification bg-primary"
                  >4</span
                >
              </div>
              Projects
            </router-link>
          </li>
        </ul>
        <!-- Left links -->

        <!-- Right links -->
        <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
          <li class="nav-item text-center mx-2 mx-lg-1">
            <router-link
              class="nav-link"
              aria-current="page"
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
            <router-link
              class="nav-link"
              aria-current="page"
              href="#!"
              :to="{ name: 'Contact' }"
            >
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
    </div>
    <!-- Container wrapper -->
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
</style>
