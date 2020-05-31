const hButton = document.getElementById("HomeButton");
const aButton = document.getElementById("AboutButton");
const pButton = document.getElementById("ContactButton");
const sect1 = document.querySelector(".blank");
const sect2 = document.querySelector(".blank2");

// hButton.addEventListener("click", function () {
//   window.scrollTo(0, 0);
//   alert("Web is under development. Thank you for your understanding");
// });

// aButton.addEventListener("click", function () {
//   sect1.scrollIntoView();
//   alert("Web is under development. Thank you for your understanding");
// });

// pButton.addEventListener("click", function () {
//   sect2.scrollIntoView();
//   alert("Web is under development. Thank you for your understanding");
// });

const hamburgerHandler = function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".navbar");

  hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });
};

// Smooth Scrolling to cross platform by javascript
const smoothScroll = function () {
  console.log("Smooth Scrolling by Javascript");

  document.querySelectorAll("nav a").forEach(function (anchor, index) {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const getHash = anchor.getAttribute("href");
      window.scrollTo({
        top: document.querySelector(getHash).offsetTop,
        left: 0, // We don't need scroll left
        behavior: "smooth",
      });
      history.pushState(null, null, getHash);
      alert("Web is under development. Thanks for your understanding.");
    });
  });
};

const init = function () {
  // console.log("Hello Perfect Island");
  hamburgerHandler();
  smoothScroll();
};

init();
