const openMenuButton = document.querySelector(".main-nav__toggle");
openMenuButton.classList.add(".main-nav__toggle--open");

const menu = document.querySelector(".modal-window-menu");
menu.classList.remove("modal-window-menu--show");

const whiteLogo = document.querySelector(".main-nav__logo--white");
const blueLogo = document.querySelector(".main-nav__logo--blue");

blueLogo.classList.remove("logo__img--show")


openMenuButton.addEventListener("click", function (evt) {
    evt.preventDefault();

    if (openMenuButton.classList.contains("main-nav__toggle--close")){
      menu.classList.remove("modal-window-menu--show");
      openMenuButton.classList.remove("main-nav__toggle--close");
      openMenuButton.classList.add("main-nav__toggle--open");
      blueLogo.classList.remove("logo__img--show");
      whiteLogo.classList.add("logo__img--show");
    }
    else{
      menu.classList.add("modal-window-menu--show");
      openMenuButton.classList.remove("main-nav__toggle--open");
      openMenuButton.classList.add("main-nav__toggle--close");
      whiteLogo.classList.remove("logo__img--show");
      blueLogo.classList.add("logo__img--show");
    }
});

