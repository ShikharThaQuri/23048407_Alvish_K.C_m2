var modal = document.getElementById("pop-up-feedback");

var btn = document.getElementById("subBtn");

var fname = document.getElementById("fname");
var email = document.getElementById("email");
var subject = document.getElementById("subject");
var message = document.getElementById("message");

var fnamep = document.getElementById("fnamep");
var emailp = document.getElementById("emailp");
var subjectp = document.getElementById("subjectp");
var messagep = document.getElementById("messagep");

btn.onsubmit = function (event) {
  event.preventDefault();

  checkValue(fname, fnamep);
  checkValue(email, emailp);
  checkValue(subject, subjectp);
  checkValue(message, messagep);

  if (
    !fname.value == "" &&
    !email.value == "" &&
    !subject.value == "" &&
    !message.value == ""
  ) {
    modal.style.display = "block";
    setTimeout(timeOut, 1500);

    btn.reset();
  }
};

function checkValue(valueName1, valueName2) {
  if (valueName1.value == "") {
    valueName2.style.opacity = "1";
  } else {
    valueName2.style.opacity = "0";
  }
}

function timeOut() {
  modal.style.display = "none";
  console.log("Hello World");
}
