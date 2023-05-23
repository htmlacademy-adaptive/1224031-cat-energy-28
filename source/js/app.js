let mainMenu = document.querySelector('.page-header__menu');
let menuToggleButton = document.querySelector('.page-header__menu-button');
let menuOpenButton = document.getElementsByClassName('page-header__menu-button-opened');
let menuCloseButton = document.getElementsByClassName('page-header__menu-button-closed');

mainMenu.classList.remove('page-header__menu--no-js');
menuToggleButton.style.visibility = 'visible'
document.querySelector('.cooperate__no-js').style.display = 'block'
document.querySelector('.cooperate__map-image-wrapper').style.display = 'none'

menuToggleButton.addEventListener('click', function () {
  if (mainMenu.classList.contains('page-header__menu--closed')) {
    mainMenu.classList.remove('page-header__menu--closed');
    menuOpenButton[0].style.display = 'none';
    menuCloseButton[0].style.display = 'block';
  }
  else {
    mainMenu.classList.add('page-header__menu--closed');
    menuOpenButton[0].style.display = 'block';
    menuCloseButton[0].style.display = 'none';
  }
});
