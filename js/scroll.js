$(document).ready(function () {
    $(window).on("scroll", function () {
        var w = $(window).width();
        var scrollTop = $(this).scrollTop();

        for (n = 0; n <= 20; n++) {
            var offset = $(".scroll").eq(n).offset().top;
            if (w < 768) {
                if (scrollTop + 500 >= offset) {
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
        }
    });
});