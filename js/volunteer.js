var modal = document.getElementById("myForm");
var btn = document.getElementById("volBtn");

var subModal = document.getElementById("pop-up-volunteerForm");
var submitBtn = document.getElementById("subBtn");

var span = document.getElementsByClassName("volClose")[0];

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

submitBtn.onsubmit = function (event) {
  event.preventDefault();

  subModal.style.display = "block";
  setTimeout(timeOut, 1500);

  submitBtn.reset();
};

function timeOut() {
  subModal.style.display = "none";
}
