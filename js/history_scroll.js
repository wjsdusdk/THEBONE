$(document).ready(function () {
  $(window).on("scroll", function () {
    var w = $(window).width();
    var scrollTop = $(this).scrollTop();

    for (n = 0; n <= 20; n++) {
      var offset = $("#history .box").eq(n).offset().top;
      if (w < 768) {
        if (scrollTop + 500 >= offset) {
          $("#history .box").eq(n).children(".wrap1").children(".horizontal").css({
            opacity: "1",
            left: "0",
            transition: "all 0.3s",
          });
          $("#history .box").eq(n).children(".wrap1").children(".year").css({
            opacity: "1",
            left: "15%",
            transition: "all 0.3s 0.3s",
          });
          $("#history .box").eq(n).children(".wrap2").children(".contents").css({
            opacity: "1",
            left: "15%",
            transition: "all 0.3s 0.6s",
          });
          $("#history .box").eq(n).children(".wrap2").children(".photo").css({
            opacity: "1",
            left: "15%",
            transition: "all 0.3s 0.9s",
          });
        } else {
          $("#history .box").eq(n).children(".wrap1").children(".horizontal").css({
            opacity: "0",
            left: "-15%",
            transition: "all 0.3s 0.9s",
          });
          $("#history .box").eq(n).children(".wrap1").children(".year").css({
            opacity: "0",
            left: "25%",
            transition: "all 0.3s 0.6s",
          });
          $("#history .box").eq(n).children(".wrap2").children(".contents").css({
            opacity: "0",
            left: "25%",
            transition: "all 0.3s 0.3s",
          });
          $("#history .box").eq(n).children(".wrap2").children(".photo").css({
            opacity: "0",
            left: "25%",
            transition: "all 0.3s",
          });
        }
      }
      if (w >= 768) {
        var offset_aa = $("#history .box")
          .eq(2 * n)
          .offset().top;
        if (scrollTop + 600 >= offset_aa) {
          $("#history .box")
            .eq(2 * n)
            .children(".wrap1")
            .children(".horizontal")
            .css({
              opacity: "1",
              left: "90%",
              transition: "all 0.3s",
            });
          $("#history .box")
            .eq(2 * n)
            .children(".wrap1")
            .children(".year")
            .css({
              opacity: "1",
              left: "0",
              transition: "all 0.3s 0.3s",
            });
          $("#history .box")
            .eq(2 * n)
            .children(".wrap2")
            .children(".contents")
            .css({
              opacity: "1",
              left: "0",
              transition: "all 0.3s 0.6s",
            });
          $("#history .box")
            .eq(2 * n)
            .children(".wrap2")
            .children(".photo")
            .css({
              opacity: "1",
              left: "0",
              transition: "all 0.3s 0.9s",
            });
        } else {
          $("#history .box")
            .eq(2 * n)
            .children(".wrap1")
            .children(".horizontal")
            .css({
              opacity: "0",
              left: "100%",
              transition: "all 0.3s 0.9s",
            });
          $("#history .box")
            .eq(2 * n)
            .children(".wrap1")
            .children(".year")
            .css({
              opacity: "0",
              left: "-15%",
              transition: "all 0.3s 0.6s",
            });
          $("#history .box")
            .eq(2 * n)
            .children(".wrap2")
            .children(".contents")
            .css({
              opacity: "0",
              left: "-15%",
              transition: "all 0.3s 0.3s",
            });
          $("#history .box")
            .eq(2 * n)
            .children(".wrap2")
            .children(".photo")
            .css({
              opacity: "0",
              left: "-15%",
              transition: "all 0.3s",
            });
        }
        var offset_a = $("#history .box")
          .eq(2 * n + 1)
          .offset().top;
        if (scrollTop + 600 >= offset_a) {
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap1")
            .children(".horizontal")
            .css({
              opacity: "1",
              left: "0",
              transition: "all 0.3s",
            });
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap1")
            .children(".year")
            .css({
              opacity: "1",
              left: "15%",
              transition: "all 0.3s 0.3s",
            });
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap2")
            .children(".contents")
            .css({
              opacity: "1",
              left: "15%",
              transition: "all 0.3s 0.6s",
            });
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap2")
            .children(".photo")
            .css({
              opacity: "1",
              left: "15%",
              transition: "all 0.3s 0.9s",
            });
        } else {
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap1")
            .children(".horizontal")
            .css({
              opacity: "0",
              left: "-15%",
              transition: "all 0.3s 0.9s",
            });
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap1")
            .children(".year")
            .css({
              opacity: "0",
              left: "40%",
              transition: "all 0.3s 0.6s",
            });
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap2")
            .children(".contents")
            .css({
              opacity: "0",
              left: "40%",
              transition: "all 0.3s 0.3s",
            });
          $("#history .box")
            .eq(2 * n + 1)
            .children(".wrap2")
            .children(".photo")
            .css({
              opacity: "0",
              left: "40%",
              transition: "all 0.3s",
            });
        }
      }
    }
  });
});
