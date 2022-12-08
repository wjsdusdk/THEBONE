$(document).ready(function () {
    $(window).on("scroll", function () {
        var w = $(window).width();
        var scrollTop = $(this).scrollTop();

        for (n = 0; n <= 20; n++) {
            var offset = $("#history #section .box").eq(n).offset().top;
            if (w < 768) {
                if (scrollTop + 500 >= offset) {
                    $("#history #section .box").eq(n).children(".wrap1").children(".horizontal").css({
                        opacity: "1",
                        left: "0",
                        transition: "all 0.3s",
                    });
                    $("#history #section .box").eq(n).children(".wrap1").children(".year").css({
                        opacity: "1",
                        left: "25%",
                        transition: "all 0.3s 0.3s",
                    });
                    $("#history #section .box").eq(n).children(".content").children(".wrap2").css({
                        opacity: "1",
                        left: "25%",
                        transition: "all 0.3s 0.6s",
                    });
                    $("#history #section .box").eq(n).children(".content").children(".poto").css({
                        opacity: "1",
                        left: "25%",
                        transition: "all 0.3s 0.9s",
                    });
                } else {
                    $("#history #section .box").eq(n).children(".wrap1").children(".horizontal").css({
                        opacity: "0",
                        left: "-20%",
                        transition: "all 0.3s 0.9s",
                    });
                    $("#history #section .box").eq(n).children(".wrap1").children(".year").css({
                        opacity: "0",
                        left: "35%",
                        transition: "all 0.3s 0.6s",
                    });
                    $("#history #section .box").eq(n).children(".content").children(".wrap2").css({
                        opacity: "0",
                        left: "35%",
                        transition: "all 0.3s 0.3s",
                    });
                    $("#history #section .box").eq(n).children(".content").children(".poto").css({
                        opacity: "0",
                        left: "35%",
                        transition: "all 0.3s",
                    });
                }
            }
            if (w >= 768) {
                var offset_aa = $("#history #section .box")
                    .eq(2 * n)
                    .offset().top;
                if (scrollTop + 600 >= offset_aa) {
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".wrap1")
                        .children(".horizontal")
                        .css({
                            opacity: "1",
                            left: "80%",
                            transition: "all 0.3s",
                        });
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".wrap1")
                        .children(".year")
                        .css({
                            opacity: "1",
                            left: "0",
                            transition: "all 0.3s 0.3s",
                        });
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".content")
                        .children(".wrap2")
                        .css({
                            opacity: "1",
                            left: "0",
                            transition: "all 0.3s 0.6s",
                        });
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".content")
                        .children(".poto")
                        .css({
                            opacity: "1",
                            left: "0",
                            transition: "all 0.3s 0.9s",
                        });
                } else {
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".wrap1")
                        .children(".horizontal")
                        .css({
                            opacity: "0",
                            left: "100%",
                            transition: "all 0.3s 0.9s",
                        });
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".wrap1")
                        .children(".year")
                        .css({
                            opacity: "0",
                            left: "-15%",
                            transition: "all 0.3s 0.6s",
                        });
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".content")
                        .children(".wrap2")
                        .css({
                            opacity: "0",
                            left: "-15%",
                            transition: "all 0.3s 0.3s",
                        });
                    $("#history #section .box")
                        .eq(2 * n)
                        .children(".content")
                        .children(".poto")
                        .css({
                            opacity: "0",
                            left: "-15%",
                            transition: "all 0.3s",
                        });
                }
                var offset_a = $("#history #section .box")
                    .eq(2 * n + 1)
                    .offset().top;
                if (scrollTop + 600 >= offset_a) {
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".wrap1")
                        .children(".horizontal")
                        .css({
                            opacity: "1",
                            left: "0",
                            transition: "all 0.3s",
                        });
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".wrap1")
                        .children(".year")
                        .css({
                            opacity: "1",
                            left: "25%",
                            transition: "all 0.3s 0.3s",
                        });
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".content")
                        .children(".wrap2")
                        .css({
                            opacity: "1",
                            left: "25%",
                            transition: "all 0.3s 0.6s",
                        });
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".content")
                        .children(".poto")
                        .css({
                            opacity: "1",
                            left: "25%",
                            transition: "all 0.3s 0.9s",
                        });
                } else {
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".wrap1")
                        .children(".horizontal")
                        .css({
                            opacity: "0",
                            left: "-20%",
                            transition: "all 0.3s 0.9s",
                        });
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".wrap1")
                        .children(".year")
                        .css({
                            opacity: "0",
                            left: "40%",
                            transition: "all 0.3s 0.6s",
                        });
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".content")
                        .children(".wrap2")
                        .css({
                            opacity: "0",
                            left: "40%",
                            transition: "all 0.3s 0.3s",
                        });
                    $("#history #section .box")
                        .eq(2 * n + 1)
                        .children(".content")
                        .children(".poto")
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