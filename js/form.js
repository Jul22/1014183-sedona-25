var link = document.querySelector(".booking-search");
var popup = document.querySelector(".booking-form-visible");
var form = document.querySelector(".booking-form");
var checkIn = form.querySelector("#check-in-date");
var checkOut = form.querySelector("#check-out-date");
var children = form.querySelector("#children");
var adults = form.querySelector("#adults");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.toggle("booking-form-visible");
});

form.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !children.value ||!adults.value) {
    evt.preventDefault();
    form.classList.add("booking-error");
  }
});
