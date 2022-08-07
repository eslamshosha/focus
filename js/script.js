let hint = document.querySelector(".preloader");
window.onload = function () {
  //hide the preloader
  setTimeout(function () {
    hint.style.display = "none";
  }, 700);
};
$(document).ready(function () {

  //phone size menu onclick
  if ($(window).width() <= 1199) {
    $("#menu-id").click(function (e) {
      e.preventDefault();
      $(".page-sidebar").toggleClass("reset-left");
      $("body").toggleClass("overflow");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
    });
    $(".nav-head .close-btn").click(function () {
      $(".page-sidebar").removeClass("reset-left");
      $(".menu-bars .bars").toggleClass("open-bars");
      $(".menu-bars .bars").toggleClass("close-bars");
      $("body").removeClass("overflow");
    });
  }
  //sidebar collpase
  $(".logged-drop").on("click", function () {
    $(".logged-content").toggleClass("open");
    $(".overlay-box2").fadeToggle("500");
  });
  $(".overlay-box2").on("click", function () {
    $(".logged-content").removeClass("open");
    $(".overlay-box2").fadeToggle("500");
  });
  $(".drop-link span").click(function (e) {
    e.preventDefault();
  });
});
