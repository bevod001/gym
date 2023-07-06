"use strict";

window.addEventListener("DOMContentLoaded", function () {
  var menu = document.querySelector(".menu"),
      menuItem = document.querySelectorAll(".menu_item"),
      hamburger = document.querySelector(".hamburger");
  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });
  menuItem.forEach(function (item) {
    item.addEventListener("click", function () {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
  /**/

  /**/

  var result = document.querySelector(".pass_calculating_result span");
  var month, sex, ratio;
  document.getElementById("fader").addEventListener("change", function () {
    month = this.value;
    calcTotal(month);
  });

  function calcTotal() {
    if (!sex || !ratio) {
      result.textContent = "____";
      return;
    }

    if (sex === "female") {
      result.textContent = 1000 * month * ratio;
    } else {
      result.textContent = 1500 * month * ratio;
    }
  }

  calcTotal();

  function getStiticElement(parentSelector, activeClass) {
    var btn = document.querySelectorAll("".concat(parentSelector));
    btn.forEach(function (button) {
      button.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
        } else {
          sex = e.target.getAttribute("id");
        }

        btn.forEach(function (elem) {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStiticElement(".pass_calculating_item_gender", "pass_calculating_item_active");
  getStiticElement(".pass_calculating_item_options", "pass_calculating_item_active");
});

function outputUpdate(vol) {
  var output = document.querySelector("#volume");
  output.value = vol;
  output.style.left = vol - 20 + "px";
}