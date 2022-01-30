<template>
  <section id="home" class="section-slide home d-flex">
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
            <div class="col-md-6">
              <div class="container">
                <p class="fw-bold h3 display-4">
                  Aspiring <span class="typed-text"></span
                  ><span class="cursor">&nbsp;</span>
                </p>
                <p class="h4">Darren Petersen</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

// const typedTextSpan = document.querySelector(".typed-text");
// const cursorSpan = document.querySelector(".cursor");

// const textArray = ["Web Developer", "Full Stack Developer"];
// const typingDelay = 200;
// const erasingDelay = 100;
// const newTextDelay = 2000; // Delay between current and next text
// let textArrayIndex = 0;
// let charIndex = 0;

// function type() {
//   if (charIndex < textArray[textArrayIndex].length) {
//     if (!cursorSpan.classList.contains("typing"))
//       cursorSpan.classList.add("typing");
//     typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
//     charIndex++;
//     setTimeout(type, typingDelay);
//   } else {
//     cursorSpan.classList.remove("typing");
//     setTimeout(erase, newTextDelay);
//   }
// }

// function erase() {
//   if (charIndex > 0) {
//     if (!cursorSpan.classList.contains("typing"))
//       cursorSpan.classList.add("typing");
//     typedTextSpan.textContent = textArray[textArrayIndex].substring(
//       0,
//       charIndex - 1
//     );
//     charIndex--;
//     setTimeout(erase, erasingDelay);
//   } else {
//     cursorSpan.classList.remove("typing");
//     textArrayIndex++;
//     if (textArrayIndex >= textArray.length) textArrayIndex = 0;
//     setTimeout(type, typingDelay + 1100);
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   if (textArray.length) setTimeout(type, newTextDelay + 250);
// });
</script>

<style>
#particles-js {
  position: absolute;
  width: 100%;
  height: 100%;
  /* background-color: #caf0f8; */
  background-image: url("");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  z-index: -1;
}

.section-slide {
  height: auto;
  background-size: cover;
  background-attachment: fixed;
  background-position: 50% 50%;
  box-sizing: border-box;
}

/* .section-slide .img-fluid {
  max-width: 100%;
  height: auto;
  border-radius: 50%;
} */

.section-slide .home .container {
  height: auto;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.section-slide .home .container p {
  font-size: 3rem;
  padding: 0.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  text-align: center;
  overflow: hidden;
}

.section-slide .home .container p span.typed-text {
  font-weight: normal;
  color: #dd7732;
}

.section-slide .home .container p span.cursor {
  display: inline-block;
  background-color: #ccc;
  margin-left: 0.1rem;
  width: 3px;
  animation: blink 1s infinite;
}

.section-slide .home .container p span.cursor.typing {
  animation: none;
}

@keyframes blink {
  0% {
    background-color: #ccc;
  }
  49% {
    background-color: #ccc;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
  100% {
    background-color: #ccc;
  }
}
</style>
