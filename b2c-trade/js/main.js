window.addEventListener("DOMContentLoaded", function () {
  // 상단 뉴스 영역 /////////////////////////////////////////////////////////////////////////////////////////
  var news_right_content = document.querySelector(".news-right-content");
  var li = news_right_content.getElementsByTagName("li");
  var li_num = li.length;
  //console.log(li_num);

  for (var i = 0; i < li_num; i++) {
    var li_width = li[i].offsetWidth;
    var li_style = window.getComputedStyle(li[i]);
    var li_margin = li_style.getPropertyValue("margin-right").match(/\d+/);
  } //// for 문 //////

  var news_right_width = (parseInt(li_width) + parseInt(li_margin)) * li_num;
  console.log("총넓이" + news_right_width);
  // 크기 변경
  news_right_content.style.width = news_right_width + 200 + "px";

  // 즐겨찾기 버튼 /////////////////////////////////////////////////////////////////////////////////////////
  var star_icon = document.getElementsByClassName("star-icon-btn");
  var star_num = star_icon.length;
  // console.log(star_num);

  for (var i = 0; i < star_num; i++) {
    star_icon[i].addEventListener("click", function () {
      //console.log("Dddd");
      this.querySelector(".star-icon").classList.toggle("active");
    }); /////label[0].getAttribute("aria-checked")==="true"//// click ////////////
  } ///// for 문 /////

  // 즐겨찾기 더보기 버튼 /////////////////////////////////////////////////////////////////////////////////////////
  var fav = document.querySelector(".fav");
  var fav_about = document.querySelector(".fav-about");

  fav_about.addEventListener("click", function () {
    fav.classList.toggle("active");
    fav_about.classList.toggle("active");
  }); ///////// click ////////////

  // 거래진행 팝업 //////////////////////////////////////////////////////////
  var buy_btn = document.querySelector(".buy-btn");
  var sell_btn = document.querySelector(".sell-btn");
  var trade_btn = document.querySelectorAll(".trade-btn");

  // 팝업 열기
  buy_btn.addEventListener("click", function () {
    document.querySelector(".trade-popup-wrap").style.display = "block";
  }); ///////// click ////////////////

  sell_btn.addEventListener("click", function () {
    document.querySelector(".trade-popup-wrap").style.display = "block";
  }); ///////// click ////////////////

  // 팝업 닫기
  for (var i = 0; i < trade_btn.length; i++) {
    trade_btn[i].addEventListener("click", function () {
      document.querySelector(".trade-popup-wrap").style.display = "none";
    }); ///////// click ////////////////
  }

  // 코인정보 팝업 //////////////////////////////////////////////////////////
  var coin_info_more = document.querySelector(".coin-info-more");
  var coin_info_close = document.querySelector(".coin-info-close");

  // 팝업 열기
  coin_info_more.addEventListener("click", function () {
    document.querySelector(".coin-info-popup-wrap").style.display = "block";
  }); ///////// click ////////////////

  // 팝업 닫기
  coin_info_close.addEventListener("click", function () {
    document.querySelector(".coin-info-popup-wrap").style.display = "none";
  }); ///////// click ////////////////

  // 검색창 텍스트 지우는 버튼 나오게 /////////////////////////////////////////
  var search_reset = document.querySelector(".search-reset");
  var search_value = document.querySelector(".search-value");

  // 버튼 나오게..
  search_value.addEventListener("focus", function () {
    search_reset.style.display = "block";
  }); //////// focus //////////

  // 버튼 클릭시 텍스트 지워지게
  search_reset.addEventListener("click", function () {
    search_value.value = "";
    search_reset.style.display = "none";
  }); ////////// click /////////////////

  // 테이블 소트 이미지 회전 ///////////////////////////////////////////////////////////////////////////////////////////
  var table_tit = document.querySelector(".table-tit");
  var table_th = table_tit.getElementsByTagName("th");
  var table_th_num = table_th.length;
  //console.log(table_th_num);

  for (var i = 0; i < table_th_num; i++) {
    table_th[i].addEventListener("click", function () {
      this.querySelector(".sort-icon").classList.toggle("active");
    }); /////////// click /////////////////
  } /////// for 문 //////////////

  // 푸터 클릭시 아이콘 돌아가게 /////////////////////////////////////////////////////////////////////////////////////////
  document
    .querySelector(".footer-middle-list")
    .addEventListener("click", function () {
      document.querySelector(".round-btn").classList.toggle("active");
    });

  // 모바일 메뉴
  var menu_btn = document.querySelector(".menu-btn");
  var menu_page = document.querySelector(".menu-page");
  var menu_close_btn = document.querySelector(".menu-close-btn");
  var gnb_left = document.querySelector(".gnb-left");
  var gnb_right = document.querySelector(".gnb-right");
  var menu_wrap = document.querySelector(".menu-wrap");

  // active 추가
  document.querySelector(".menu-btn").addEventListener("click", function () {
    menu_btn.classList.add("active");
    menu_close_btn.classList.add("active");
    menu_page.classList.add("active");
    gnb_left.classList.add("active");
    gnb_right.classList.add("active");
    menu_wrap.classList.add("active");
  });

  // active 제거
  document
    .querySelector(".menu-close-btn")
    .addEventListener("click", function () {
      menu_btn.classList.remove("active");
      menu_close_btn.classList.remove("active");
      menu_page.classList.remove("active");
      gnb_left.classList.remove("active");
      gnb_right.classList.remove("active");
      menu_wrap.classList.remove("active");
    });
});

function radio_click() {
  var radio_btn = document.querySelector(".buy-sell-radio");
  console.log(radio_btn);
  var label = radio_btn.getElementsByTagName("label");
  console.log(label);

  if (label[1].getAttribute("aria-checked") === "true") {
    // 지정가일 경우 멘트 안보이게
    document.querySelector(".buy-sell-least").style.display = "none";
    // 지정가일 경우 li 보이게
    document.querySelector(".buy-sell-price-act").style.display = "block";
  } else if (label[0].getAttribute("aria-checked") === "true") {
    // 시장가일 경우 멘트 보이게
    document.querySelector(".buy-sell-least").style.display = "block";
    // 시장가일 경우 li 안보이게
    document.querySelector(".buy-sell-price-act").style.display = "none";
  }
} /////// function ////////////////

function radio_click2() {
  var radio_btn = document.querySelectorAll(".buy-sell-radio");
  console.log(radio_btn[1]);
  var label = radio_btn[1].querySelectorAll("label");
  console.log("라벨2" + label);

  if (label[1].getAttribute("aria-checked") === "true") {
    // 지정가일 경우 멘트 안보이게
    document.querySelectorAll(".buy-sell-least")[1].style.display = "none";
    // 지정가일 경우 li 보이게
    document.querySelectorAll(".buy-sell-price-act")[1].style.display = "block";
  } else if (label[0].getAttribute("aria-checked") === "true") {
    // 시장가일 경우 멘트 보이게
    document.querySelectorAll(".buy-sell-least")[1].style.display = "block";
    // 시장가일 경우 li 안보이게
    document.querySelectorAll(".buy-sell-price-act")[1].style.display = "none";
  }
} /////// function ////////////////
