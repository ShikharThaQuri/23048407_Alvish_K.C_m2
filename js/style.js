var head = document.getElementById("header");
var bar = document.getElementById("fa-bar");
var closeBar = document.getElementById("close");

bar.onclick = function () {
  bar.style.display = "none";
  head.style.display = "block";
  closeBar.style.display = "block";
};

closeBar.onclick = function () {
  bar.style.display = "block";
  head.style.display = "none";
  closeBar.style.display = "none";
};
