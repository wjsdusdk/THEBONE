var mySwiper = new Swiper("#section3 .swiper-container", {
  slidesPerView: 1, // 한 화면에 보여질 슬라이드 갯수 "auto"
  speed: 400, // 슬라이드 / 페이드 속도
  spaceBetween: 20, // 슬라이드 사이 간격
  loop: true, // 무한반복
  effect: "coverflow", // 전환 효과 "slide", "fade", "cube", "coverflow", "flip"
  /* autoplay: {
        delay: 1000, // 자동재생 지연시간
        disableOnInteraction: false,
    }, */
  centeredSlides: true, // 슬라이드 가운데 배치

  breakpoints: {
    // 반응형 슬라이드
    768: {
      // when window width is >= 768px
      slidesPerView: 1.5,
      spaceBetween: 50,
    },
    1000: {
      slidesPerView: 1.5,
      spaceBetween: 75,
    },
    1200: {
      slidesPerView: 1.7,
      spaceBetween: 100,
    },
    1400: {
      slidesPerView: 1.8,
      spaceBetween: 100,
    },
    1600: {
      slidesPerView: 1.9,
      spaceBetween: 100,
    },
    1800: {
      slidesPerView: 2,
      spaceBetween: 150,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  /* navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }, */
});

var mySwiper = new Swiper("#section6 .swiper-container", {
  slidesPerView: 1, // 한 화면에 보여질 슬라이드 갯수 "auto"
  speed: 400, // 슬라이드 / 페이드 속도
  spaceBetween: 0, // 슬라이드 사이 간격
  loop: true, // 무한반복
  direction: "vertical", // .swiper-container와 .swiper-container의 상위요소 모두에 height값 줘야함 (100% 줘도됨)
  autoplay: {
    delay: 2000, // 자동재생 지연시간
    disableOnInteraction: false,
  },
});

$(document).ready(function () {
  // section2 테스트 브랜드

  $("#section2 .tab").click(function () {
    $("#section2 .tab").removeClass("tab_current");
    $(this).addClass("tab_current");
  });

  $("#section2 .tab")
    .eq(0)
    .click(function () {
      $(".photo").css({ "background-image": "url(images/section2_01_p.png)" });
    }); // 해당 스크립트가 적용되는 html파일시점에서의 이미지 경로
  $("#section2 .tab")
    .eq(1)
    .click(function () {
      $(".photo").css({ "background-image": "url(images/section2_02_p.png)" });
    });
  $("#section2 .tab")
    .eq(2)
    .click(function () {
      $(".photo").css({ "background-image": "url(images/section2_03_p.png)" });
    });
  $("#section2 .tab")
    .eq(3)
    .click(function () {
      $(".photo").css({ "background-image": "url(images/section2_04_p.png)" });
    });
});

(function () {
  function init(item) {
    var items = item.querySelectorAll("li"),
      current = 0,
      autoUpdate = true,
      timeTrans = 4000;

    //create nav
    var nav = document.createElement("nav");
    nav.className = "nav_arrows";

    //create button prev
    var prevbtn = document.createElement("button");
    prevbtn.className = "prev";
    prevbtn.setAttribute("aria-label", "Prev");

    //create button next
    var nextbtn = document.createElement("button");
    nextbtn.className = "next";
    nextbtn.setAttribute("aria-label", "Next");

    //create counter
    var counter = document.createElement("div");
    counter.className = "counter";
    counter.innerHTML = "<span>1</span><span>" + items.length + "</span>";

    if (items.length > 1) {
      nav.appendChild(prevbtn);
      nav.appendChild(counter);
      nav.appendChild(nextbtn);
      item.appendChild(nav);
    }

    items[current].className = "current";
    if (items.length > 1) items[items.length - 1].className = "prev_slide";

    var navigate = function (dir) {
      items[current].className = "";

      if (dir === "right") {
        current = current < items.length - 1 ? current + 1 : 0;
      } else {
        current = current > 0 ? current - 1 : items.length - 1;
      }

      var nextCurrent = current < items.length - 1 ? current + 1 : 0,
        prevCurrent = current > 0 ? current - 1 : items.length - 1;

      items[current].className = "current";
      items[prevCurrent].className = "prev_slide";
      items[nextCurrent].className = "";

      //update counter
      counter.firstChild.textContent = current + 1;
    };

    item.addEventListener("mouseenter", function () {
      autoUpdate = false;
    });

    item.addEventListener("mouseleave", function () {
      autoUpdate = true;
    });

    setInterval(function () {
      if (autoUpdate) navigate("right");
    }, timeTrans);

    prevbtn.addEventListener("click", function () {
      navigate("left");
    });

    nextbtn.addEventListener("click", function () {
      navigate("right");
    });

    //keyboard navigation
    document.addEventListener("keydown", function (ev) {
      var keyCode = ev.keyCode || ev.which;
      switch (keyCode) {
        case 37:
          navigate("left");
          break;
        case 39:
          navigate("right");
          break;
      }
    });

    // swipe navigation
    // from http://stackoverflow.com/a/23230280
    item.addEventListener("touchstart", handleTouchStart, false);
    item.addEventListener("touchmove", handleTouchMove, false);
    var xDown = null;
    var yDown = null;
    function handleTouchStart(evt) {
      xDown = evt.touches[0].clientX;
      yDown = evt.touches[0].clientY;
    }
    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          /* left swipe */
          navigate("right");
        } else {
          navigate("left");
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }
  }

  [].slice.call(document.querySelectorAll(".cd-slider")).forEach(function (item) {
    init(item);
  });
})();
