// const pessoa = {
//   name: 'matheus',
//   age: 25,
//   falar: function () {
//     alert(`eu ${pessoa.name} existo e tenho ${pessoa.age} de idade`)
//   }
// }
// pessoa.falar()
// DOM DOCUMENT OBJECT MODEL
// document.body.style.background = 'red'

// ABRE E FECHA O MENU QUANDO CLICAR NO ÍCONE: HAMBURGUER E X
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')
// console.log(toggle)
for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show') //isso adiciona a classe show no elemento nav, ou retira se caso ela ja foi adicionada. Funciona como um interruptor.
    //toggle e classList  ja existe no mapeamento da DOM
    // alert('chegamos aqui')
  })
  const links = document.querySelectorAll('nav ul li a')
  for (const link of links) {
    link.addEventListener('click', function () {
      nav.classList.remove('show')
    })
  }
  // console.log(element)
}

// mudar o header da página quando der scroll

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que o header
    header.classList.add('scroll')
  } else {
    //scroll é menor que o header
    header.classList.remove('scroll')
  }
})

// TESTIMONIALS CAROUSEL SLIDER SWIPER
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,//pode ver um slide por vez
  pagination: {
    el: 'swiper-pagination'
  },
  mousewheel: true,
  Keyboard: true
}) 
// scrollreveal: mostra os elementos quando der scroll na página
const scrollreveal =  ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 700,
  reset: true
})
scrollreveal.reveal(`
#home .image, #home .text,
#about .image, #about .text,
#services header, #services .card,
testimonials header, #testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social`,
{interval: 100})

// Botão voltar para o topo

const backToTopButton = document.querySelector(".back-to-top")
window.addEventListener("scroll", function() {
  if(window.scrollY >= 560){
    backToTopButton.classList.add("show")
  }else{
    backToTopButton.classList.remove("show")
  }
})