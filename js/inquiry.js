function setSido() {
  var getUrl = "https://theborndb.theborn.co.kr/wp-json/api/get_region/?parent=9";
  var temp = "";
  var request = $.ajax({
    url: getUrl,
    type: "GET",
    data: "",
    dataType: "json",
  });

  request.done(function (data) {
    var totalcnt = data.length;

    $("select[name='form_local1']").html('<option value="" value="" selected="selected" disabled="disabled">지역선택</option>');

    if (totalcnt > 0) {
      for (var i = 0; i < totalcnt; i++) {
        temp = temp + '<option value="' + data[i].term_id + '">' + data[i].name + "</option>";
      }

      $("select[name='form_local1']").children("option").after(temp);
    }
  });

  request.fail(function (XHR, textStatus) {
    // alert("Request failed : " + textStatus);
  });
}

function setGugun(varParent) {
  // console.log("gugun"+varParent);
  var getUrl = "https://theborndb.theborn.co.kr/wp-json/api/get_region/?parent=" + varParent;
  var temp = "";
  var request = $.ajax({
    url: getUrl,
    type: "GET",
    data: "",
    dataType: "json",
  });

  request.done(function (data) {
    var totalcnt = data.length;

    $("select[name='form_local2']").html('<option value="" value="" selected="selected" disabled="disabled">시/구선택</option>');

    //세종시는 구가 없어 임의로 추가
    if (parseInt(varParent, 10) == 34) {
      temp = temp + '<option value="">전체</option>';
      $("select[name='form_local2']").children("option").after(temp);
    } else {
      if (totalcnt > 0) {
        for (var i = 0; i < totalcnt; i++) {
          temp = temp + '<option value="' + data[i].term_id + '">' + data[i].name + "</option>";
        }

        $("select[name='form_local2']").children("option").after(temp);
        $("select[name='form_local2']").next("label").text("시/구선택");
      }
    }
  });

  request.fail(function (XHR, textStatus) {
    // alert("Request failed : " + textStatus);
  });
}

//주소 셋팅
function addressSetting(data) {
  // console.log(data);
  var zonecode = data.zonecode; // 우편번호
  var sido = data.sido; // 시/도
  var sigungu = data.sigungu; // 시/구/군
  var roadAddress = data.roadAddress; // 도로명 주소
  var jibunAddress = data.jibunAddress; // 지번 주소
  var autoJibunAddress = data.autoJibunAddress; // 지번 주소 : 검색 결과가 여러개일 경우 나옴
  var buildingName = data.buildingName; // 빌딩 이름

  if (buildingName != "") {
    buildingName = " (" + buildingName + ")";
  }

  /* 주소 분리 */
  roadAddress = roadAddress.replace(sido + " ", "");
  roadAddress = roadAddress.replace(sigungu + " ", "");
  jibunAddress = jibunAddress.replace(sido + " ", "");
  jibunAddress = jibunAddress.replace(sigungu + " ", "");
  autoJibunAddress = autoJibunAddress.replace(sido + " ", "");
  autoJibunAddress = autoJibunAddress.replace(sigungu + " ", "");

  $("#form_store_post").val(zonecode);
  if (jibunAddress != "") {
    $("#store_adr1").val(sido + " " + sigungu + " " + jibunAddress + buildingName);
  } else {
    $("#store_adr1").val(sido + " " + sigungu + " " + autoJibunAddress + buildingName);
  }

  $("#store_adr2").focus();
}

function finish(varArg) {
  // if(varArg=="s"){alert('창업문의가 등록되었습니다. 담당자 확인 후 연락 드리겠습니다.');}
  // top.location.reload();

  if (varArg == "s") {
    top.location.href = "/m/inquiry_fin.php";
  } else {
    top.location.reload();
  }
}

function dim_allOff() {
  $(".dim-all").css("display", "none");
}

window.addEventListener("message", function (event) {
  if (event.data.from == "child") {
    if (event.data.type == "show") {
      showLoadingDialog();
    } else if (event.data.type == "hide") {
      dim_allOff();
    }
  }

  if (event.data.obj != "") {
    var domObj = eval("$('input[name=" + event.data.obj + "]')");
    domObj.focus();
  }
});

$("document").ready(function () {
  setSido();

  // country selectbox
  $("#request_country").on("change", function () {
    $("#request_brand").val("");

    $("#request_brand1").parent().children("label").text("브랜드를 선택해주세요.");
    $("#request_brand2").parent().children("label").text("브랜드를 선택해주세요.");

    if ($("#request_country option:selected").val() == "1") {
      $("#request_brand1").css("display", "");
      $("#form_cellphpone1").css("display", "");
      $("#form_cellphpone_empty").css("display", "none");

      $("#request_brand2 option:eq(0)").attr("selected", "selected");
      $("#request_brand2 option:eq(0)").prop("selected", "selected");
      $("#request_brand2").css("display", "none");
      $("#form_cellphpone2").css("display", "none");
      $("#agree1").css("width", "50%");
      $("#agree2").css("display", "");

      $("#form_block2_1").css("display", "");
      $("#form_block2_2").css("display", "");
      $("#form_block2_3").css("display", "");

      $("#form_block2_1_2").css("display", "none");
    } else {
      $("#request_brand1 option:eq(0)").attr("selected", "selected");
      $("#request_brand1 option:eq(0)").prop("selected", "selected");
      $("#request_brand1").css("display", "none");
      $("#form_cellphpone1").css("display", "none");
      $("#form_cellphpone_empty").css("display", "");

      $("#form_block2_1").css("display", "none");
      $("#form_block2_2").css("display", "none");
      $("#form_block2_3").css("display", "none");

      $("#form_block2_1_2").css("display", "");

      $("#agree1").css("width", "100%");
      $("#agree2").css("display", "none");
      $("#request_brand2").css("display", "");
      $("#form_cellphpone2").css("display", "");
    }
  });

  // brand selectbox
  $("#request_brand1").on("change", function () {
    $("#request_brand").val($("#request_brand1 option:selected").val());
  });

  // brand selectbox
  $("#request_brand2").on("change", function () {
    $("#request_brand").val($("#request_brand2 option:selected").val());
  });

  // local selectbox
  $("select[name='form_local1']").on("change", function () {
    setGugun($("select[name='form_local1'] option:selected").val());
  });

  // only number
  $("input[name=request_cellphone2]").on("keyup change", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );

    if ($(this).val().length > 3) {
      $(this).val($(this).val().slice(0, 4));
      $("input[name=request_cellphone3]").focus();
    }
  });

  // only number
  $("input[name=request_cellphone3]").on("keyup change", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9]/g, "")
    );

    if ($(this).val().length > 3) {
      $(this).val($(this).val().slice(0, 4));
      $("input[name=form_email1]").focus();
    }
  });

  // only number&hyphen
  $("input[name=request_cellphone1]").on("keyup change", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9-]/g, "")
    );
  });

  // only number&hyphen
  $("input[name=request_cellphone21]").on("keyup change", function () {
    $(this).val(
      $(this)
        .val()
        .replace(/[^0-9-]/g, "")
    );

    if ($(this).val().length > 29) {
      $(this).val($(this).val().slice(0, 30));
      $("input[name=form_email1]").focus();
    }
  });

  // store addr
  $("input[name='store_field']").on("click", function () {
    if ($("input[name='store_field']:checked").val() == "Y") {
      $("#form_block2_3").css("display", "block");
    } else {
      $("#form_block2_3").css("display", "none");
    }
  });

  // store addr input
  $(".post-btn").on("click", function () {
    openDaumZipAddress();
  });

  // email - domain setting
  $("#form_email_domain").on("change", function () {
    $("input[name=form_email2]").val($("#form_email_domain option:selected").val());
    // $("#form_email_domain option:eq(0)").attr('selected', false);
  });

  // values checked
  $("#btn_submit").on("click", function () {
    var valCountry = $("#request_country option:selected").val();

    // 입력값 체크 - 국내/회외 구분하여 체크
    var form_email1 = trim($("input[name=form_email1]").val());
    var form_email2 = trim($("input[name=form_email2]").val());
    var form_email = form_email1 + "@" + form_email2;

    if (valCountry == "2") {
      if ($("#request_brand2 option:selected").val() == "") {
        alert("브랜드를 선택해 주세요.");
        $("#request_brand2").focus();
        return;
      }
      if ($("#request_name").val() == "") {
        alert("이름을 입력해 주세요.");
        $("#request_name").focus();
        return;
      }
      if ($("#request_cellphone21").val() == "") {
        alert("휴대폰번호를 입력해 주세요.");
        $("#request_cellphone21").focus();
        return;
      }
      if (form_email1 == "" || form_email2 == "") {
        alert("이메일을 입력해 주세요.");
        $("input[name=form_email1]").focus();
        return;
      }

      if ($("#bi_place11").val() == "") {
        alert("국가를 입력해 주세요.");
        $("#bi_place11").focus();
        return;
      }
      if ($("#bi_place12").val() == "") {
        alert("지역을 입력해 주세요.");
        $("#bi_place12").focus();
        return;
      }

      if ($("input[name='person_field']:checked").val() != "1") {
        alert("개인정보의 수집 및 이용 목적에 동의해 주세요.");
        $("input[name='person_field']:eq(0)").focus();
        return;
      }

      $("#request_cellphone").val($("#request_cellphone21").val());
    } else if (valCountry == "1") {
      var tel1 = trim($("#request_cellphone1 option:selected").val());
      var tel2 = trim($("#request_cellphone2").val());
      var tel3 = trim($("#request_cellphone3").val());
      var telFull1 = tel1 + "" + tel2 + "" + tel3;
      var telFull2 = tel1 + "-" + tel2 + "-" + tel3;
      $("#request_cellphone").val(telFull2);

      if ($("#request_brand1 option:selected").val() == "") {
        alert("브랜드를 선택해 주세요.");
        $("#request_brand1").focus();
        return;
      }
      if ($("#request_name").val() == "") {
        alert("이름을 입력해 주세요.");
        $("#request_name").focus();
        return;
      }
      if (telFull1.length < 10) {
        alert("휴대폰번호를 입력해 주세요.");
        $("#request_cellphone2").focus();
        return;
      }
      if (form_email1 == "" || form_email2 == "") {
        alert("이메일을 입력해 주세요.");
        $("input[name=form_email1]").focus();
        return;
      }
      if ($("#form_local1 option:selected").val() == "") {
        alert("지역을 선택해 주세요.");
        $("#form_local1").focus();
        return;
      }
      if ($("#form_local1 option:selected").val() != "34" && $("#form_local2 option:selected").val() == "") {
        alert("구를 선택해 주세요.");
        $("#form_local2").focus();
        return;
      }

      if ($("input[name='store_field']:checked").val() == "Y") {
        if ($("#form_store_post").val() == "") {
          alert("점포 주소를 입력해 주세요.");
          $(".post-btn").focus();
          return;
        }
      }

      if ($("input[name='person_field']:checked").val() != "1") {
        alert("개인정보의 수집 및 이용 목적에 동의해 주세요.");
        $("input[name='person_field']:eq(0)").focus();
        return;
      }
      if ($("input[name='marketing_field']:checked").val() == "" || typeof $("input[name='marketing_field']:checked").val() == "undefined") {
        alert("정보제공 및 마케팅 용도로의 이용의 동의여부를 선택해 주세요.");
        $("input[name='marketing_field']:eq(0)").focus();
        return;
      }

      $("#form_local1_kr").val($("#form_local1 option:selected").text());
      $("#form_local2_kr").val($("#form_local2 option:selected").text());
    }

    $(".dim-all").css("display", "block");
    document.frmInquiry.target = "xframes";
    document.frmInquiry.action = "/inquiry/inquiryProc.php"; // 기존 창업상담 저장 파일 공통 사용
    document.frmInquiry.submit();
  });

  // cancle
  $("#btn_cancle").on("click", function () {
    finish("");
  });
});
