const btnMenu = document.querySelector('.nav-hb');

const navOver = document.querySelector('.nav-wrapper-over');

console.log(btnMenu)
console.log(navOver)
btnMenu.addEventListener('click', () => {
  navOver.classList.toggle('active')
})

// loader

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

setTimeout(() => {
  loader.classList.add('noOpacity');
}, 1000);

setTimeout(() =>{
  loader.classList.add('display-none');
}, 2500);

setTimeout(() => {
  main.classList.remove('display-none');
}, 2000)

setTimeout(() => {
  main.classList.remove('noOpacity');
}, 2500);


// TYPE WRITTER CLASS

const AboutAnim = document.querySelector(".about-title");
console.log('AboutAnim:', AboutAnim)

let typeWriter = new Typewriter(AboutAnim, {
  delay: 120,
  deleteSpeed: 40,
  cursor: "."
})

typeWriter
  .pauseFor(5500)
  .typeString('Bonjour, Je suis Développeur...    ')
  .pauseFor(150)
  .typeString('<span style="color: #F1C40F">Javascript </span>')
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
  .deleteChars(23)
  .typeString('<span style="color: #345756">Axel Gourlin</span>')
  .pauseFor(1000)
  .start();

