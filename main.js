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
