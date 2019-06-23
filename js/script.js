var link = document.querySelector(".booking-search");

var script = document.querySelector(".booking-form");
var checkIn = script.querySelector("#check-in-date");
var checkOut = script.querySelector("#check-out-date");
var children = script.querySelector("#children");
var adults = script.querySelector("#adults");

script.classList.remove("booking-form-visible");

link.addEventListener("click", function(evt) {
  evt.preventDefault();
  script.classList.toggle("booking-form-visible");
});

script.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !children.value ||!adults.value) {
    evt.preventDefault();
    script.classList.add("booking-error");
  }
});
