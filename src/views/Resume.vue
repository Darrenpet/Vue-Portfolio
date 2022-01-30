<template>
  <h2 class="fw-bold">My Resume</h2>
  <div class="main-container my-5 animate__animated animate__rotateIn">
    <section id="timeline" class="timeline-outer">
      <div class="container" id="content">
        <div class="row">
          <div class="col s12 m12 l12">
            <ul class="timeline py-5">
              <li class="event" data-date="2021/Present">
                <h2 class="fw-bold">Web development and Coding</h2>
                <h2 class="fw-bold">LifeChoices Academy</h2>
                <p class="text-muted">
                  Started a Web development and Coding Course at LifeChoices
                  Academy. I have started learning the following languages:
                  HTML, CSS, JavaScript, MySQL, Vue, Front-End and Back-End
                  development.
                </p>
              </li>
              <li class="event" data-date="2016/2017">
                <h2 class="fw-bold">
                  Higher Certificate in Accounting Science
                </h2>
                <h2 class="fw-bold">Univercity of South Africa (UNISA)</h2>
                <p>
                  Started my Higher Certificate in Accounting Science. Subjects
                  that I finished are: BNU1501, CAS1501, CLA1503, ENN1504,
                  FAC1501, MNB1501, MAC1501 and TAX1501.
                </p>
                <p>
                  I had to drop out from the course due to financial reasons.
                  Subjects that are outstanding: AUE1501 and FAC1502.
                </p>
              </li>
              <li class="event" data-date="2014/2020">
                <h2 class="fw-bold">Accountant/Bookkeeper</h2>
                <h2 class="fw-bold">Muizenberg Bowling and Croquet Club</h2>
                <p>
                  Started doing volunteer bookkeeping and admin work at
                  Muizenberg Bowling and Croquet Club.
                </p>
              </li>
              <li class="event" data-date="2014/2014">
                <h2 class="fw-bold">Bachelors Pass</h2>
                <h2 class="fw-bold">Muizenberg High School</h2>
                <p>Finished my matric with a Bachelors Pass.</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <br />
  </div>
</template>

<script>
export default {};
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
  color: #333;
  margin: 50px auto;
  letter-spacing: 0.5px;
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
