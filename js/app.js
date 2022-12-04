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

  // Menu nav

  $("#nav-toggle").on("click", function (event) {
    event.preventDefault();

    $("#nav").toggleClass("active");
  });
});
