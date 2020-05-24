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
  sect1.scrollIntoView();
  alert("Web is under development. Thank you for your understanding");
});

pButton.addEventListener("click", function () {
  sect2.scrollIntoView();
  alert("Web is under development. Thank you for your understanding");
});
