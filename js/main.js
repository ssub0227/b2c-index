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

  // 테이블 즐겨찾기 버튼 /////////////////////////////////////////////////////////////////////////////////////////
  var star_icon = document.getElementsByClassName("star-icon-btn");
  var star_num = star_icon.length;
  // console.log(star_num);

  for (var i = 0; i < star_num; i++) {
    star_icon[i].addEventListener("click", function () {
      //console.log("Dddd");
      this.querySelector(".star-icon").classList.toggle("active");
    }); ///////// click ////////////
  } ///// for 문 /////

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

  // 테이블 높이 지정 ///////////////////////////////////////////////////////////////////////////////////////////
  var tbody = document.querySelector("tbody");
  var table = document.querySelector(".market-table");
  var table_tr = table.getElementsByTagName("tr");
  var table_tr_num = table_tr.length;
  console.log(table_tr_num);

  for (var i = 0; i < table_tr_num; i++) {
    var tr_h = table_tr[i].offsetHeight;
  } //// for 문 //////
  console.log(tr_h);

  var table_height = parseInt(tr_h) * 9;
  console.log("테이블 높이" + table_height);
  // 크기 변경
  tbody.style.height = table_height + "px";

  // 푸터 클릭시 아이콘 돌아가게 /////////////////////////////////////////////////////////////////////////////////////////
  document
    .querySelector(".footer-middle-list")
    .addEventListener("click", function () {
      document.querySelector(".round-btn").classList.toggle("active");
    });

  // 모바일 메뉴 ///////////////////////////////////////////////////////////////////////////////////////
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
