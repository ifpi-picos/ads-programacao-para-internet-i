const btnMenuMobile = document.querySelector('.menu-mobile');

const menu = document.querySelector('.menu');
const iconeMenu = document.querySelector('.icone-menu');

btnMenuMobile.addEventListener('click', () => {
  if (menu.classList.contains('mostra-menu')) {
    menu.classList.remove('mostra-menu')
    iconeMenu.src = 'menu.svg'
  } else {
    menu.classList.add('mostra-menu')
    iconeMenu.src = 'close.svg'
  }
})

