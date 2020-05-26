const hButton = document.getElementById("HomeButton");
const aButton = document.getElementById("AboutButton");
const pButton = document.getElementById("ContactButton");
const sect1 = document.querySelector(".blank");
const sect2 = document.querySelector(".blank2");

hButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
  alert("Web is under development. Thank you for your understanding");
});

aButton.addEventListener("click", function () {
  setTimeout(sect1.scrollIntoView(), 100);
  alert("Web is under development. Thank you for your understanding");
});

pButton.addEventListener("click", function () {
  setTimeout(sect2.scrollIntoView(), 100);
  alert("Web is under development. Thank you for your understanding");
});

const hamburgerHandler = function () {
  const hamburgerBtn = document.querySelector(".hamburger");
  const menu = document.querySelector(".navbar");

  hamburgerBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
    hamburgerBtn.classList.toggle("active");
  });
};

const init = function () {
  // console.log("Hello Perfect Island");
  hamburgerHandler();
};

init();
