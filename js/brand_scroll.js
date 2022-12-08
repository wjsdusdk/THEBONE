$(document).ready(function () {
    $(window).on("scroll", function () {
        var w = $(window).width();
        var scrollTop = $(this).scrollTop();

        if (w < 768) {
            for (n = 0; n <= 20; n++) {
                var offset = $("#brand #section .box").eq(n).offset().top;
                if (scrollTop + 400 >= offset) {
                    $("#brand #section .box").eq(n).children(".wrap").css({
                        opacity: "1",
                        top: "-50px",
                    });
                } else {
                    $("#brand #section .box").eq(n).children(".wrap").css({
                        opacity: "0",
                        top: "50px",
                    });
                }
            }
        } else if (w < 1200) {
            for (n = 0; n <= 20; n++) {
                var offset = $("#brand #section .box").eq(2 * n).offset().top;
                if (scrollTop + 800 >= offset) {
                    $("#brand #section .box").eq(2 * n + 1).css({
                        opacity: "1",
                        top: "0",
                        transition: "all 0.5s 0.3s",
                    });
                    $("#brand #section .box").eq(2 * n).css({
                        opacity: "1",
                        top: "0",
                        transition: "all 0.5s",
                    });
                } else {
                    $("#brand #section .box").eq(2 * n + 1).css({
                        opacity: "0",
                        top: "100px",
                        transition: "all 0.5s 0.3s",
                    });
                    $("#brand #section .box").eq(2 * n).css({
                        opacity: "0",
                        top: "100px",
                        transition: "all 0.5s",
                    });
                }
            }
        } else {
            for (n = 0; n <= 20; n++) {
                var offset = $("#brand #section .box").eq(3 * n).offset().top;
                if (scrollTop + 600 >= offset) {
                    $("#brand #section .box").eq(3 * n + 2).css({
                        opacity: "1",
                        top: "0",
                        transition: "all 0.5s 0.7s",
                    });
                    $("#brand #section .box").eq(3 * n + 1).css({
                        opacity: "1",
                        top: "0",
                        transition: "all 0.5s 0.3s",
                    });
                    $("#brand #section .box").eq(3 * n).css({
                        opacity: "1",
                        top: "0",
                        transition: "all 0.5s",
                    });
                } else {
                    $("#brand #section .box").eq(3 * n + 2).css({
                        opacity: "0",
                        top: "100px",
                        transition: "all 0.5s 0.7s",
                    });
                    $("#brand #section .box").eq(3 * n + 1).css({
                        opacity: "0",
                        top: "100px",
                        transition: "all 0.5s 0.3s",
                    });
                    $("#brand #section .box").eq(3 * n).css({
                        opacity: "0",
                        top: "100px",
                        transition: "all 0.5s",
                    });
                }
            }
        }
    });
});