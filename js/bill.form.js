var modal = document.getElementById("pop-up-billForm");

var btn = document.getElementById("subBtn");

btn.onsubmit = function (event) {
  event.preventDefault();

  modal.style.display = "block";
  setTimeout(timeOut, 1500);

  btn.reset();
};

function timeOut() {
  modal.style.display = "none";
}
