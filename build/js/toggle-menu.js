const toggleMenu=document.querySelector(".header__toggle-menu"),mainNav=document.querySelector(".main-nav");function openMobMenu(){mainNav.classList.toggle("main-nav--close")?mainNav.classList.remove("main-nav--open"):mainNav.classList.add("main-nav--open")}toggleMenu.addEventListener("click",openMobMenu);