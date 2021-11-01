let menu_btn = document.getElementById('hamburger-btn');
let header_nav = document.getElementById('header-nav');

menu_btn.addEventListener('click' , function () {
    header_nav.classList.toggle('menu-open');
  } );