window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
  /**/

  /**/
  
  let result = document.querySelector(".pass_calculating_result span");
  let month, sex, ratio;

  document.getElementById("fader").addEventListener("change", function() {
    month = this.value
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
    let btn = document.querySelectorAll(`${parentSelector}`);
    btn.forEach(function (button) {
      button.addEventListener("click", function (e) {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
        } else {
          sex = e.target.getAttribute("id");
        }

        btn.forEach((elem) => {
          elem.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);
        calcTotal();
      });
    });
  }

  getStiticElement(
    ".pass_calculating_item_gender",
    "pass_calculating_item_active"
  );
  getStiticElement(
    ".pass_calculating_item_options",
    "pass_calculating_item_active"
  );


});


function outputUpdate(vol) {
  let output = document.querySelector("#volume");
  output.value = vol;
  output.style.left = vol - 20 + "px";
}
