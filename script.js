// Window Load screen

$(window).on("load", function () {
  // Loading Page
  $(".loader").fadeOut(500, function () {
    $(".loading").delay(1000).fadeOut(500);
  });
  $("body").css("overflow-y", "auto");

});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 6,
      },
    },
  });
});
