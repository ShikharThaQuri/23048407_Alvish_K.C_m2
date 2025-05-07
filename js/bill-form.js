var modal = document.getElementById("pop-up-billForm");

var btn = document.getElementById("subBtn");

var fname = document.getElementById("fname");
var esewa = document.getElementById("esewa");
var email = document.getElementById("email");
var country = document.getElementById("country");
var address = document.getElementById("address");
var city = document.getElementById("city");
var state = document.getElementById("state");
var zip = document.getElementById("zip");

var fnamep = document.getElementById("fnamep");
var esewap = document.getElementById("esewap");
var emailp = document.getElementById("emailp");
var countryp = document.getElementById("countryp");
var addressp = document.getElementById("addressp");
var cityp = document.getElementById("cityp");
var statep = document.getElementById("statep");
var zipp = document.getElementById("zipp");

btn.onsubmit = function (event) {
  event.preventDefault();

  checkValue(fname, fnamep);
  checkValue(esewa, esewap);
  checkValue(email, emailp);
  checkValue(country, countryp);
  checkValue(address, addressp);
  checkValue(city, cityp);
  checkValue(state, statep);
  checkValue(zip, zipp);

  if (
    !fname.value == "" &&
    !esewa.value == "" &&
    !email.value == "" &&
    !country.value == "" &&
    !address.value == "" &&
    !city.value == "" &&
    !state.value == "" &&
    !zip.value == ""
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
