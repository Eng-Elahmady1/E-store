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

$(document).ready(function () {
  $(document).on("click", ".toggle", function () {
    $(".toggle").toggleClass("active");
    $(".links").toggleClass("back");
  });
});

// Pagination
window.onload = function () {
  var paginationPage = parseInt($(".cdp").attr("actpage"), 10);
  $(".cdp_i").on("click", function () {
    var go = $(this).attr("href").replace("#!", "");
    if (go === "+1") {
      paginationPage++;
    } else if (go === "-1") {
      paginationPage--;
    } else {
      paginationPage = parseInt(go, 10);
    }
    $(".cdp").attr("actpage", paginationPage);
  });
};


