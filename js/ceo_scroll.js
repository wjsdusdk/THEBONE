$(document).ready(function () {
  $(window).on("scroll", function () {
    var w = $(window).width();
    var scrollTop = $(this).scrollTop();

    if (w < 576) {
      for (n = 0; n <= 5; n++) {
        var offset = $(".scroll").eq(n).offset().top;
        if (scrollTop + 700 >= offset) {
          $(".scroll").eq(n).css({
            opacity: "1",
            top: "0",
            transition: "all 0.5s",
          });
        } else {
          $(".scroll").eq(n).css({
            opacity: "0",
            top: "30px",
            transition: "all 0.5s",
          });
        }
      }
    } else if (w < 992) {
      for (n = 0; n <= 5; n++) {
        var offset = $(".scroll").eq(n).offset().top;
        if (scrollTop + 1000 >= offset) {
          $(".scroll").eq(n).css({
            opacity: "1",
            top: "0",
            transition: "all 0.5s",
          });
        } else {
          $(".scroll").eq(n).css({
            opacity: "0",
            top: "30px",
            transition: "all 0.5s",
          });
        }
      }
    } else if (w < 1200) {
      for (n = 0; n <= 5; n++) {
        var offset = $(".scroll").eq(n).offset().top;
        if (scrollTop + 1100 >= offset) {
          $(".scroll").eq(n).css({
            opacity: "1",
            top: "0",
            transition: "all 0.5s",
          });
        } else {
          $(".scroll").eq(n).css({
            opacity: "0",
            top: "30px",
            transition: "all 0.5s",
          });
        }
      }
    } else {
      for (n = 0; n <= 5; n++) {
        var offset = $(".scroll").eq(n).offset().top;
        if (scrollTop + 1100 >= offset) {
          $(".scroll").eq(n).css({
            opacity: "1",
            top: "0",
            transition: "all 0.5s",
          });
        } else {
          $(".scroll").eq(n).css({
            opacity: "0",
            top: "30px",
            transition: "all 0.5s",
          });
        }
      }
    }
  });
});
