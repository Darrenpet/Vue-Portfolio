<template>
  <h1 class="fw-bold mt-5">My Resume</h1>
  <div class="main-container my-5">
    <div v-if="resume.length">
      <div
        v-for="item in resume"
        :key="item.id"
        class="col-sm-12 col-md-12 col-xl-12"
      >
        <section id="timeline" class="timeline-outer">
          <div class="container" id="content">
            <div>
              <ul class="timeline">
                <li
                  class="event animate__animated animate__rotateInDownLeft"
                  :data-date="item.date"
                >
                  <h2 class="fw-bold">{{ item.event }}</h2>
                  <h2 class="fw-bold">{{ item.place }}</h2>
                  <p class="text-dark">
                    {{ item.details }}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div v-else>
      <p>Loading resume...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      resume: [],
    };
  },
  mounted() {
    fetch("https://vue-portfolio-api.herokuapp.com/resume", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        this.resume = json;
      })
      .catch((err) => {
        alert(console.log(err));
      });
  },
};
</script>

<style>
#content {
  margin-top: 50px;
  text-align: center;
}

section.timeline-outer {
  width: 80%;
  margin: 0 auto;
}

h1.header {
  font-size: 50px;
  line-height: 70px;
}

.timeline {
  border-left: 8px solid #42a5f5;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  color: blue;
  margin: 50px auto;
  letter-spacing: 1px;
  position: relative;
  line-height: 1.4em;
  padding: 20px;
  list-style: none;
  text-align: left;
}

.timeline h1,
.timeline h2,
.timeline h3 {
  font-size: 1.4em;
}

.timeline .event {
  border-bottom: 1px solid rgba(160, 160, 160, 0.2);
  padding-bottom: 15px;
  margin-bottom: 20px;
  position: relative;
}

.timeline .event:last-of-type {
  padding-bottom: 0;
  margin-bottom: 0;
  border: none;
}

.timeline .event:before,
.timeline .event:after {
  position: absolute;
  display: block;
  top: 0;
}

.timeline .event:before {
  left: -177.5px;
  color: #212121;
  content: attr(data-date);
  text-align: right;
  font-size: 16px;
  min-width: 120px;
}

.timeline .event:after {
  box-shadow: 0 0 0 8px #42a5f5;
  left: -30px;
  background: #212121;
  border-radius: 50%;
  height: 11px;
  width: 11px;
  content: "";
  top: 5px;
}

@media (max-width: 945px) {
  .timeline .event::before {
    left: 0.5px;
    top: 20px;
    min-width: 0;
    font-size: 13px;
  }
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 20px;
  }
  section.lab h3.card-title {
    padding: 5px;
    font-size: 16px;
  }
}

@media (max-width: 768px) {
  .timeline .event::before {
    left: 0.5px;
    top: 20px;
    min-width: 0;
    font-size: 13px;
  }
  .timeline .event:nth-child(1)::before,
  .timeline .event:nth-child(3)::before,
  .timeline .event:nth-child(5)::before {
    top: 38px;
  }
  .timeline h3 {
    font-size: 16px;
  }
  .timeline p {
    padding-top: 20px;
  }
}

a.portfolio-link {
  margin: 0 auto;
  display: block;
  text-align: center;
}
</style>
