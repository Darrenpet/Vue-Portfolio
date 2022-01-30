<template>
  <div class="container mb-5">
    <div class="row my-5">
      <div
        class="col-xl-6 col-md-6 col-sm-12 animate__animated animate__rotateInDownLeft"
      >
        <h2 class="fw-bold mb-2">Contact Me</h2>
        <form action="https://formspree.io/f/mzboedjl" method="POST">
          <label class="text-dark">Email:</label>
          <input
            class="border-3"
            type="email"
            name="email"
            v-model="email"
            required
          />

          <label class="text-dark">Password:</label>
          <input
            class="border-3"
            type="password"
            name="password"
            v-model="password"
            required
          />
          <div v-if="passwordError" class="error">{{ passwordError }}</div>

          <div class="form-outline">
            <label class="form-label text-dark" for="form4Example3"
              >Message</label
            >
            <textarea
              class="form-control"
              id="form4Example3"
              rows="4"
              name="message"
              required
            ></textarea>
          </div>

          <div class="terms my-3">
            <input type="checkbox" v-model="terms" required />
            <label class="text-dark">Accept Terms and Conditions</label>
          </div>

          <div class="submit my-3">
            <button class="btn-primary" target="_blank">Submit</button>
          </div>
        </form>
      </div>

      <div
        class="col-xl-6 col-md-6 col-sm-12 animate__animated animate__rotateInDownRight"
      >
        <h2 class="fw-bold">Contact Details</h2>

        <div class="card my-5 shadow-5-strong">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div class="align-self-center">
                <i class="fas fa-mobile-alt text-primary fa-3x"></i>
              </div>
              <div class="text-end">
                <h3>Phone Number</h3>
                <p class="mb-0">+27 78 752 1530</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card my-5 shadow-5-strong">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div class="align-self-center">
                <i class="fas fa-at text-primary fa-3x"></i>
              </div>
              <div class="text-end">
                <h3>Email Address</h3>
                <p class="mb-0">darrenpetersen16@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div class="card my-5 shadow-5-strong">
          <div class="card-body">
            <div class="d-flex justify-content-between px-md-1">
              <div class="align-self-center">
                <i class="fas fa-map-marked-alt text-primary fa-3x"></i>
              </div>
              <div class="text-end">
                <h3>Location</h3>
                <p class="mb-0">South Africa, Cape Town</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      terms: false,
      passwordError: "",
    };
  },
  methods: {
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5 ? "" : "Password must at least be 6 char long";

      if (!this.passwordError) {
        console.log("email: ", this.email);
        console.log("password: ", this.password);
        console.log("terms accepted: ", this.terms);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}

label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}

input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}

button {
  background: black;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}

.submit {
  text-align: center;
}

.error {
  color: blue;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
