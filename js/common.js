$(document).ready(function () {
  // 피시 .nav

  var $firstMenu = $(".nav > ul > li"),
    $header = $("header"),
    $headerHeight = $header.outerHeight();
  // A.height() : A의 알맹이 높이
  // A.innerHeight() : A의 패딩포함 높이
  // A.outerHeight() : A의 보더포함 높이
  // A.outerHeight(true) : A의 마진포함 높이
  $firstMenu
    .mouseenter(function () {
      /* var currentMenu = $(this); */
      var subHeight = $(this).find(".sub").outerHeight();

      $header.stop().animate({ height: 100 + subHeight + "px" }, 300);
      $(".sub").hide(); // 서브메뉴 안보이게 초기화
      $(this).find(".sub").fadeIn(300);

      /* setTimeout(function () {x
                $("ul").hide(); // 서브메뉴 안보이게 초기화
                currentMenu.find("ul").show(300); // .find() 특정 하위 요소를 찾을 때 사용
            });
            // setTimeout(할일, 시간); 할일 function(){} */
    })
    .mouseleave(function () {
      $header.stop().animate({ height: 100 + "px" }, 300);
      $(this).find(".sub").fadeOut(300);
    });

  $(window).resize(function () {
    var w = $(window).width();
    if (w < 576) {
      $("header").css({ height: "50px" });
    } else if (w < 768) {
      $("header").css({ height: "60px" });
    } else if (w < 992) {
      $("header").css({ height: "70px" });
    } else if (w < 1200) {
      $("header").css({ height: "80px" });
    } else {
      $("header").css({ height: "100px" });
    }
  });

  // 모바일, 태블릿 .menu

  $(".icon_menu").click(function () {
    $(".menu").css({ "min-width": "200px", width: "50%" });
  });
  $(".icon_x").click(function () {
    $(".menu").css({ "min-width": "0", width: "0" });
  });
  $(".menu .title").click(function () {
    $(this).parent().siblings().children(".sub").slideUp();
    $(this).siblings(".sub").slideToggle();
  });

  // 하위메뉴 화살표

  $(".icon_arrow_text")
    .parent()
    .click(function () {
      $(this).parent().siblings().children(".title").children(".icon_arrow_text").removeClass("on");
      $(this).children(".icon_arrow_text").toggleClass("on");
    });

  $(".i-a-t")
    .parent()
    .parent()
    .click(function () {
      $(this).parent().siblings().children(".title").children().children(".i-a-t").removeClass("on");
      $(this).children("p").children(".i-a-t").toggleClass("on");
    });

  // 아코디언

  $(".accordion-1").click(function () {
    $(this).parent().siblings().children(".accordion-2").slideUp();
    $(this).siblings(".accordion-2").slideToggle();
  });
});
