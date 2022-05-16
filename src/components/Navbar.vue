<template>
  <MDBNavbar id="nav" expand="lg" dark bg="dark" position="top" container-fluid>
    <MDBNavbarBrand class="a" href="#" fw-bold>Darren Petersen</MDBNavbarBrand>
    <MDBNavbarToggler
      @click="collapse1 = !collapse1"
      target="#navbarSupportedContent"
    ></MDBNavbarToggler>
    <MDBCollapse v-model="collapse1" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
        <li class="nav-item text-center mx-2 mx-lg-1">
          <MDBNavbarNav class="navbar-nav ms-auto d-flex flex-row mt-3 mt-lg-0">
            <MDBNavbarItem>
              <router-link
                class="nav-link active mx-2"
                aria-current="page"
                href="#!"
                to="/"
              >
                <div>
                  <i class="fas fa-home fa-lg mb-1"></i>
                </div>
                Home
              </router-link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <router-link
                class="nav-link mx-2"
                href="#!"
                :to="{ name: 'About' }"
              >
                <div>
                  <i class="fas fa-user"></i>
                </div>
                About
              </router-link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <router-link
                class="nav-link mx-2"
                href="#!"
                :to="{ name: 'Resume' }"
              >
                <div>
                  <i class="fas fa-file"></i>
                </div>
                Resume
              </router-link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <router-link
                class="nav-link mx-2"
                href="#!"
                :to="{ name: 'Projects' }"
              >
                <div>
                  <i class="fas fa-tasks"></i>
                  <span class="badge rounded-pill badge-notification bg-primary"
                    >6</span
                  >
                </div>
                Projects
              </router-link>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <router-link
                class="nav-link mx-2"
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
            </MDBNavbarItem>

            <MDBNavbarItem>
              <router-link
                class="nav-link mx-2"
                href="#!"
                :to="{ name: 'Contact' }"
              >
                <div>
                  <i class="fas fa-phone"></i>
                </div>
                Contact
              </router-link>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </li>
      </ul>
    </MDBCollapse>
  </MDBNavbar>
</template>

<script>
import {
  MDBBtn,
  MDBNavbar,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";
import { ref } from "vue";
export default {
  components: {
    MDBBtn,
    MDBNavbar,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBCollapse,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
  },
  setup() {
    const collapse1 = ref(false);
    const dropdown1 = ref(false);
    return {
      collapse1,
      dropdown1,
    };
  },
};
</script>
<style>
.btn {
  padding: 0.55rem 1.5rem 0.45rem;
}

#nav .a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

#nav .router-link-exact-active {
  color: #0011ff;
}

.fas:hover {
  color: blue;
}
</style>
