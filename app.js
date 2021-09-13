// loader

const loader = document.querySelector(".loader");
const main = document.querySelector(".main");

setTimeout(() => {
  loader.classList.add("noOpacity");
}, 1000);

setTimeout(() => {
  loader.classList.add("display-none");
}, 2500);

setTimeout(() => {
  main.classList.remove("display-none");
}, 2000);

setTimeout(() => {
  main.classList.remove("noOpacity");
}, 2500);

// TOGGLE NAVBAR
document.querySelector(".nav-hb").addEventListener("click", () => {
  const navOver = document.querySelector(".nav-wrapper-over");
  const navLogo = document.querySelector(".nav-logo");
  const navHb = document.querySelector(".nav-hb");
  const hb = document.querySelector(".nav-hb-span");
  navOver.classList.toggle("active");
  navLogo.classList.toggle("filterActive");
  navHb.classList.toggle("filterActive");
  hb.classList.toggle("toggle");
});

// ANIMATION SCROLL
const ratio = 0.1;
const options = {
  root: null,
  rootMargin: "0px",
  threshold: ratio,
};

setTimeout(() => {
  const handleIntersect = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > ratio) {
        entry.target.classList.add("reveal-visible");
        let typeWriter = new Typewriter(AboutAnim, {
          delay: 120,
          deleteSpeed: 40,
          cursor: ".",
        });
        typeWriter
          .pauseFor(1000)
          .typeString("Bonjour, Je suis Développeur..<br>")
          .pauseFor(150)
          .typeString('<span style="color: #F1C40F">JavaScript </span>')
          .pauseFor(400)
          .deleteChars(11)
          .typeString('<span style="color: #2980B9">React</span>')
          .pauseFor(500)
          .deleteChars(5)
          .typeString('<span style="color: #82cc00">NodeJs</span>')
          .pauseFor(500)
          .deleteChars(6)
          .typeString('<span style="color: #8c444c">Web</span>')
          .pauseFor(500)
          .deleteChars(18)
          .typeString('<span style="color: #345756">Axel Gourlin</span>')
          .pauseFor(1000)
          .start();
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(handleIntersect, options);
  document
    .querySelectorAll("[class*='reveal-']")
    .forEach((elem) => observer.observe(elem));
}, 2800);

// TYPE WRITTER CLASS

const AboutAnim = document.querySelector(".about-title");

// Work

document.querySelector(".work-1").addEventListener("click", () => {
  window.open("https://axelgourlin.github.io/restOdyssey/");
});
// document.querySelector('.work-2').addEventListener('click',() => {
//   window.open('https://axelgourlin.github.io/');
// })
// document.querySelector('.work-3').addEventListener('click',() => {
//   window.open('https://axelgourlin.github.io/');
// })
