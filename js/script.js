/* ハンバーガーメニュー */
let menu_btn = document.getElementById('hamburger-btn');
let header_nav = document.getElementById('header-nav');

menu_btn.addEventListener('click' , function () {
    header_nav.classList.toggle('menu-open');
  } );

/* アコーディオン */
const accordion_menu = document.querySelectorAll(".js-menu");

function toggle() {
  const content = this.nextElementSibling;
  /* this.classList.toggle("is-active"); */
  content.classList.toggle("content-open");
}

for (let i = 0; i < menu_btn.clientHeight; i++) {
  accordion_menu[i].addEventListener("click", toggle);
}