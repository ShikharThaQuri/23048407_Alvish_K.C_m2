var modal = document.getElementById("myForm");
var btn = document.getElementById("volBtn");

var subModal = document.getElementById("pop-up-volunteerForm");
var submitBtn = document.getElementById("subBtn");

var span = document.getElementsByClassName("volClose")[0];

var fname = document.getElementById("fnamep");
var lname = document.getElementById("lnamep");
var email = document.getElementById("emailp");
var phoneno = document.getElementById("phonenop");
var saddress = document.getElementById("saddressp");
var city = document.getElementById("cityp");
var state = document.getElementById("statep");
var zip = document.getElementById("zipp");

var one = document.getElementById("fname");
var two = document.getElementById("lname");
var three = document.getElementById("email");
var four = document.getElementById("phoneno");
var five = document.getElementById("saddress");
var six = document.getElementById("city");
var seven = document.getElementById("state");
var eight = document.getElementById("zip");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

submitBtn.onsubmit = function (event) {
  event.preventDefault();

  checkValue(fname, one);
  checkValue(lname, two);
  checkValue(email, three);
  checkValue(phoneno, four);
  checkValue(saddress, five);
  checkValue(city, six);
  checkValue(state, seven);
  checkValue(zip, eight);

  if (
    !one.value == "" &&
    !two.value == "" &&
    !three.value == "" &&
    !four.value == "" &&
    !five.value == "" &&
    !six.value == "" &&
    !seven.value == "" &&
    !eight.value == ""
  ) {
    subModal.style.display = "block";
    setTimeout(timeOut, 1500);

    submitBtn.reset();
  }
};

function checkValue(valueName2, valueName1) {
  if (valueName1.value == "") {
    valueName2.style.opacity = "1";
  } else {
    valueName2.style.opacity = "0";
  }
}

function timeOut() {
  subModal.style.display = "none";
}
