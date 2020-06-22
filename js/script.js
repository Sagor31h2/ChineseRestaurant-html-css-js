//Nav blur
$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari

  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

//Partial load
(function (global) {

  var gw = {};

  var indexhtml = "partial/home.html"


  //function for insert html
  var insertHtml = function (selector, html) {
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  // Show loading icon inside element identified by 'selector'.
  var showLoading = function (selector) {
    var html = "<div class='text-center'>";
    html += "<img src='images/ajax-loader.gif'></div>";
    insertHtml(selector, html);
  };

  //On page load

  document.addEventListener("DOMContentLoaded", function (event) {
    //Load home page
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      indexhtml, function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);

  });

  //menu categories
  var menuhtml = "partial/menu/menuCategories.html"
  gw.loadMenu = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      menuhtml, function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);

  };

  //menu categories--breakfast
  var breakfast = "partial/menu/breakfast.html"
  gw.loadBreakfast = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      breakfast, function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);

  };

  //menu categories--Lunch
  var lunch = "partial/menu/lunch.html"
  gw.loadLunch = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      lunch, function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);

  };

  //menu categories--snacks
  var snacks = "partial/menu/snacks.html"
  gw.loadSnacks = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      snacks, function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);

  };

  //menu categories--snacks
  var dinner = "partial/menu/dinner.html"
  gw.loadDinner = function () {
    showLoading("#main-content");
    $ajaxUtils.sendGetRequest(
      dinner, function (responseText) {
        document.querySelector("#main-content").innerHTML = responseText;
      },
      false);

  };

  global.$gw = gw;

})(window);
