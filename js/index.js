var modal = document.getElementById("pop-up-appointment");
var btn = document.getElementById("subBtn");

var fname = document.getElementById("fname");
var selectPet = document.getElementById("selectPet");
var petGender = document.getElementById("petGender");
var petIssue = document.getElementById("petIssue");
var email = document.getElementById("email");

var fnameP = document.getElementById("fnameP");
var selectPetP = document.getElementById("selectPetP");
var petGenderP = document.getElementById("petGenderP");
var petIssueP = document.getElementById("petIssueP");
var emailP = document.getElementById("emailP");

btn.onsubmit = function (event) {
  event.preventDefault();

  checkValue(fname, fnameP);
  checkValue(selectPet, selectPetP);
  checkValue(petGender, petGenderP);
  checkValue(petIssue, petIssueP);
  checkValue(email, emailP);

  if (
    !fname.value == "" &&
    !selectPet.value == "" &&
    !petGender.value == "" &&
    !petIssue.value == "" &&
    !email.value == ""
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
}
