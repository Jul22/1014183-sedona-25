var link = document.querySelector(".booking-search");

var form = document.querySelector(".booking-form");
var checkIn = form.querySelector("#check-in-date");
var checkOut = form.querySelector("#check-out-date");
var children = form.querySelector("#children");
var adults = form.querySelector("#adults");

form.classList.remove("booking-form-visible");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("booking-form-visible");
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !children.value ||!adults.value) {
    evt.preventDefault();
    form.classList.add("booking-error");
  }
});
