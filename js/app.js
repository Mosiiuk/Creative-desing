$(function () {
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window);

  // Fixed Header

  CheckScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    CheckScroll(scrollOffset);
  });
  function CheckScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  // Smoots scroll

  $("[data-scroll]").on(click, function (event) {
    event.preventDefault();

    let blockId = this.data("scroll");
  });

  // hamburger menu

  const menu = document.querySelector(".nav");
  const menuItems = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".closeIcon");
  const menuIcon = document.querySelector(".menuIcon");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
    }
  }

  hamburger.addEventListener("click", toggleMenu);

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", toggleMenu);
  });
});
