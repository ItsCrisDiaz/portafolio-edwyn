//Burger button animation

const forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

const hamburgers = document.querySelectorAll(".hamburger");
if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.classList.toggle("is-active");
      },
      false
    );
  });
}

//Menu toggle

function changeClass() {
  let siteNav = document.getElementById("burgerMenu");
  let blackSpace = document.getElementById("blackSpace");
  siteNav.classList.toggle("menu-open");
  blackSpace.classList.toggle("menu-open");
}

const menuOptions = document.querySelectorAll(".burger-menu");

function removeMenu(menuOptions) {
  let blackSpace = document.getElementById("blackSpace");
  let siteNav = document.getElementById("burgerMenu");
  let hamburgers = document.getElementById("hamburger");
  siteNav.classList.toggle("menu-open");
  blackSpace.classList.toggle("menu-open");
  hamburgers.classList.toggle("is-active");
}
