$(document).ready(function () {
  $(window).on("scroll", function () {
    var w = $(window).width();
    var scrollTop = $(this).scrollTop();

    if (w < 576) {
      for (n = 0; n <= 20; n++) {
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
            top: "100px",
            transition: "all 0.5s",
          });
        }
      }
    } else if (w < 768) {
      for (n = 0; n <= 20; n++) {
        var offset = $(".scroll")
          .eq(2 * n)
          .offset().top;
        if (scrollTop + 1000 >= offset) {
          $(".scroll")
            .eq(2 * n + 1)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(2 * n)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s",
            });
        } else {
          $(".scroll")
            .eq(2 * n + 1)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(2 * n)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s",
            });
        }
      }
    } else if (w < 992) {
      for (n = 0; n <= 20; n++) {
        var offset = $(".scroll")
          .eq(3 * n)
          .offset().top;
        if (scrollTop + 1000 >= offset) {
          $(".scroll")
            .eq(3 * n + 2)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(3 * n + 1)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(3 * n)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s",
            });
        } else {
          $(".scroll")
            .eq(3 * n + 2)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(3 * n + 1)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(3 * n)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s",
            });
        }
      }
    } else if (w < 1200) {
      for (n = 0; n <= 20; n++) {
        var offset = $(".scroll")
          .eq(3 * n)
          .offset().top;
        if (scrollTop + 1100 >= offset) {
          $(".scroll")
            .eq(3 * n + 2)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(3 * n + 1)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(3 * n)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s",
            });
        } else {
          $(".scroll")
            .eq(3 * n + 2)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(3 * n + 1)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(3 * n)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s",
            });
        }
      }
    } else if (w < 1400) {
      for (n = 0; n <= 20; n++) {
        var offset = $(".scroll")
          .eq(4 * n)
          .offset().top;
        if (scrollTop + 1100 >= offset) {
          $(".scroll")
            .eq(4 * n + 3)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.9s",
            });
          $(".scroll")
            .eq(4 * n + 2)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(4 * n + 1)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(4 * n)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s",
            });
        } else {
          $(".scroll")
            .eq(4 * n + 3)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.9s",
            });
          $(".scroll")
            .eq(4 * n + 2)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(4 * n + 1)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(4 * n)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s",
            });
        }
      }
    } else {
      for (n = 0; n <= 20; n++) {
        var offset = $(".scroll")
          .eq(5 * n)
          .offset().top;
        if (scrollTop + 1100 >= offset) {
          $(".scroll")
            .eq(5 * n + 4)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 1.2s",
            });
          $(".scroll")
            .eq(5 * n + 3)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.9s",
            });
          $(".scroll")
            .eq(5 * n + 2)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(5 * n + 1)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(5 * n)
            .css({
              opacity: "1",
              top: "0",
              transition: "all 0.5s",
            });
        } else {
          $(".scroll")
            .eq(5 * n + 4)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 1.2s",
            });
          $(".scroll")
            .eq(5 * n + 3)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.9s",
            });
          $(".scroll")
            .eq(5 * n + 2)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.6s",
            });
          $(".scroll")
            .eq(5 * n + 1)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s 0.3s",
            });
          $(".scroll")
            .eq(5 * n)
            .css({
              opacity: "0",
              top: "100px",
              transition: "all 0.5s",
            });
        }
      }
    }
  });
});
