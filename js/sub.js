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
    $(".menu").css({ "min-width": "200px", width: "80%" });
  });
  $(".icon_x").click(function () {
    $(".menu").css({ "min-width": "0", width: "0" });
  });
  $(".menu .title").click(function () {
    $(this).parent().children(".sub").slideToggle();
  });

  // 하위메뉴 화살표

  $(".icon_arrow_text")
    .parent()
    .click(function () {
      $(this).children(".icon_arrow_text").toggleClass("on");
    });

  // 모바일,탭 #list

  $("header .list > ul > li p span").click(function () {
    $("header .list ul ul").slideToggle();
  });

  $(window).on("scroll", function () {
    var w = $(window).width();
    var scrollTop = $(this).scrollTop();

    if (w < 576) {
      if (scrollTop >= 50) {
        $("header .list").css({
          top: "-50px",
        });
        $("header .wrap h6").css({
          opacity: "0",
        });
        $("#top .name").css({
          top: "-10%",
        });
      } else {
        $("header .list").css({
          top: "0",
        });
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "50%",
        });
      }
    } else if (w < 768) {
      if (scrollTop >= 50) {
        $("header .list").css({
          top: "-60px",
        });
        $("header .wrap h6").css({
          opacity: "0",
        });
        $("#top .name").css({
          top: "-10%",
        });
      } else {
        $("header .list").css({
          top: "0",
        });
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "50%",
        });
      }
    } else if (w < 992) {
      if (scrollTop >= 50) {
        $("header .list").css({
          top: "-70px",
        });
        $("header .wrap h6").css({
          opacity: "0",
        });
        $("#top .name").css({
          top: "-10%",
        });
      } else {
        $("header .list").css({
          top: "0",
        });
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "50%",
        });
      }
    } else if (w < 1200) {
      if (scrollTop >= 50) {
        $("header .list").css({
          top: "-80px",
        });
        $("header .wrap h6").css({
          opacity: "0",
        });
        $("#top .name").css({
          top: "-10%",
        });
      } else {
        $("header .list").css({
          top: "0",
        });
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "50%",
        });
      }
    } else if (w < 1400) {
      if (scrollTop >= 50) {
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "-10%",
        });
      } else {
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "50%",
        });
      }
    } else {
      if (scrollTop >= 50) {
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "-10%",
        });
      } else {
        $("header .wrap h6").css({
          opacity: "1",
        });
        $("#top .name").css({
          top: "50%",
        });
      }
    }
  });

  $(window).resize(function () {
    var w = $(window).width();
    var scrollTop = $(this).scrollTop();

    if (w >= 1200) {
      $("header .wrap h6").css({ opacity: "1" });
    } else {
      if (scrollTop >= 50) {
        $("header .wrap h6").css({
          opacity: "0",
        });
      } else {
        $("header .wrap h6").css({
          opacity: "1",
        });
      }
    }
  });

  // 모바일,탭 #top

  $(window).on("scroll", function () {
    var scrollTop = $(this).scrollTop();

    if (scrollTop >= 50) {
      $("#top .poto").css({
        opacity: "1",
      });
    } else {
      $("#top .poto").css({
        opacity: "0.5",
      });
    }
  });
  $(window).resize(function () {
    $(window).on("scroll", function () {
      var scrollTop = $(this).scrollTop();

      if (scrollTop >= 50) {
        $("#top .poto").css({
          opacity: "1",
        });
      } else {
        $("#top .poto").css({
          opacity: "0.5",
        });
      }
    });
  });

  // 국내매장 internal.html
  // .list의 하위메뉴

  $("#internal section .list .contents .wrap").click(function () {
    $(this).parent().children(".detail").slideToggle();
  });
});

// 매장찾기 form
function locationKindChange(e) {
  var sido = ["시/군/구"];
  var seoul = ["시/군/구", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구", "동작구", "마포구", "서대문구", "서초구", "성동구", "성북구", "송파구", "양천구", "영등포구", "용산구", "은평구", "종로구", "중구", "중랑구"];
  var busan = ["시/군/구", "강서구", "금정구", "남구", "남동구", "동구", "동래구", "부산진구", "북구", "사상구", "사하구", "서구", "수영구", "연제구", "영도구", "중구", "해운대구", "기장군"];
  var daegu = ["시/군/구", "남구", "달서구", "달성구", "동구", "북구", "서구", "수성구", "중구"];
  var incheon = ["시/군/구", "강화군", "계양구", "남구", "남동구", "동구", "부평구", "서구", "연수구", "옹진군", "중구"];
  var gwangju = ["시/군/구", "광산구", "남구", "동구", "북구", "서구"];
  var daejeon = ["시/군/구", "대덕구", "동구", "서구", "유성구", "중구"];
  var ulsan = ["시/군/구", "남구", "동구", "북구", "울주군", "중구"];
  var gyeonggi = ["시/군/구", "가평군", "고양시", "고양시 덕양구", "고양시 일산동구", "고양시 일산서구", "과천시"];
  var gangwon = ["시/군/구", "강릉시", "고성군", "동해시", "삼척시", "속초시", "양구군", "양양군", "영월군"];
  var chungcheongbuk = ["시/군/구", "괴산군", "단양군", "보은군", "영동군"];
  var chungcheongnam = ["시/군/구", "계룡시", "공주시", "금산군", "논산시"];
  var jeollabuk = ["시/군/구", "고창시", "군산시", "김제시", "남원시"];
  var jeollanam = ["시/군/구", "강진군", "고흥군", "곡성군", "광양시", "구례군"];
  var gyeongsangbuk = ["시/군/구", "경산시", "경주시", "고령군", "구미시", "군위군", "김천시"];
  var gyeongsangnam = ["시/군/구", "거제시", "거창군", "고성군", "김해시", "남해군", "밀양시", "사청시", "산청군", "양산시", "의령군"];
  var jeju = ["시/군/구", "서귀포시", "제주시", "마라도", "가마도", "우도"];
  var sejong = ["시/군/구", "가람동", "고운동", "금남면", "나성동", "다정동", "대평동", "도담동"];
  var target = document.getElementById("location2");

  if (e.value == "시/도") var d = sido;
  else if (e.value == "서울특별시") var d = seoul;
  else if (e.value == "부산광역시") var d = busan;
  else if (e.value == "대구광역시") var d = daegu;
  else if (e.value == "인천광역시") var d = incheon;
  else if (e.value == "광주광역시") var d = gwangju;
  else if (e.value == "대전광역시") var d = daejeon;
  else if (e.value == "울산광역시") var d = ulsan;
  else if (e.value == "경기도") var d = gyeonggi;
  else if (e.value == "강원도") var d = gangwon;
  else if (e.value == "충청북도") var d = chungcheongbuk;
  else if (e.value == "충청남도") var d = chungcheongnam;
  else if (e.value == "전라북도") var d = jeollabuk;
  else if (e.value == "전라남도") var d = jeollanam;
  else if (e.value == "경상북도") var d = gyeongsangbuk;
  else if (e.value == "경상남도") var d = gyeongsangnam;
  else if (e.value == "제주특별자치도") var d = jeju;
  else if (e.value == "세종특별자치시") var d = sejong;

  target.options.length = 0;

  for (x in d) {
    var option = document.createElement("option");
    option.value = d[x];
    option.innerHTML = d[x];
    target.appendChild(option);
  }
}
