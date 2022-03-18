<template>
  <div class="mt-5">
    <div class="mt-5 pt-5">
      <section id="home" class="section-slide home d-flex mt-5 pt-5">
        <div class="container my-auto position-relative pe-none">
          <div class="row">
            <div class="offset-2 col-8 offset-md-2 col-md-8">
              <div class="row gy-5">
                <div class="col-md-6">
                  <div class="about-image h-100 d-flex align-items-center">
                    <img
                      class="rounded-circle img-fluid"
                      src="@/assets/Landing/DarrenPetersen.jpg"
                      alt="Darren"
                    />
                  </div>
                </div>
                <div class="col-md-6 mt-5">
                  <div class="container">
                    <router-link to="/">
                      <p class="h1 fw-bold">Darren Petersen</p></router-link
                    >
                    <p class="fw-bold h3 display-6">
                      Aspiring <span class="text-primary" id="text"></span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
particlesJS("particles-js", {
  particles: {
    number: { value: 60, density: { enable: true, value_area: 800 } },
    color: { value: "#000000" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#000000",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

const sentences = ["Full-Stack Developer", "Web Developer"];

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function typeSentence(sentence, element, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    document.querySelector(element).append(letters[i]);
    i++;
  }
}

async function deleteSentence(element) {
  const sentence = document.querySelector(element).innerHTML;
  const letters = sentence.split("");
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    document.querySelector(element).innerHTML = letters.join("");
  }
}

async function sentenceLoop(sentenceList, element) {
  let i = 0;
  while (true) {
    await typeSentence(sentenceList[i], element);
    await waitForMs(1500);
    await deleteSentence(element);
    await waitForMs(500);
    i++;
    if (i >= sentenceList.length) {
      i = 0;
    }
  }
}

sentenceLoop(sentences, "#text");
</script>

<style>
#particles-js {
  position: absolute;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100%;
  z-index: -1;
}

.section-slide {
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
  box-sizing: border-box;
}

.section-slide .img-fluid {
  border-radius: 50%;
}

.section-slide .home .container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-slide .home .container p {
  font-size: 3rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
}

#text:after {
  content: "";
  width: 3px;
  height: 15%;
  background: black;
  position: absolute;
  animation: blink 1s infinite;
}

@keyframes blink {
  0%,
  49% {
    background: black;
  }
  50%,
  100% {
    background: white;
  }
}
</style>
