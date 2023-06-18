<template>
  <div class="container my-5">
    <div class="row my-5">
      <div
        class="col-xl-6 col-md-6 col-sm-12 animate__animated animate__rotateInDownLeft content-center"
      >
        <h1 class="fw-bold">Contact Me</h1>
        <form @submit.prevent="handleSubmit()">
          <label class="h4 text-dark">Full Name:</label>
          <input
            class="mb-5 border-3"
            type="text"
            name="name"
            v-model="name"
            required
          />
          <label class="h4 text-dark">Email:</label>
          <input
            class="mb-5 border-3"
            type="email"
            name="email"
            v-model="email"
            required
          />

          <div class="form-outline">
            <label class="h4 form-label text-dark" for="form4Example3"
              >Message:</label
            >
            <textarea
              class="mb-2 form-control"
              id="form4Example3"
              rows="4"
              name="message"
              v-model="message"
              required
            ></textarea>
          </div>

          <div class="submit d-flex my-3">
            <input type="submit" class="btn-primary mx-2" value="Submit" />
            <input type="reset" value="Reset" class="btn-primary mx-2" />
          </div>
        </form>
      </div>

      <div
        class="col-xl-6 col-md-6 col-sm-12 animate__animated animate__rotateInDownRight content-center"
      >
        <h1 class="fw-bold">Contact Details</h1>

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
                <p class="mb-0">South Africa, Cape Town, Strandfontein</p>
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
      name: "",
      email: "",
      message: "",
    };
  },

  methods: {
    handleSubmit() {
      fetch("https://blue-violet-tick-sari.cyclic.app/contact", {
        method: "POST",
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          message: this.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => res.json())
        .then((data) => (this.contact = data));
      alert("Message Sent!").catch((err) => console.log(err.message));
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

textarea {
  border-color: black;
}

.error {
  color: blue;
  margin-top: 10px;
  font-size: 0.8rem;
  font-weight: bold;
}
</style>
