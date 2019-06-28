var bookingLink = document.querySelector(".booking-search");
var bookingForm = document.querySelector(".booking-form");
var checkIn = document.querySelector("#check-in-date");
var checkOut = document.querySelector("#check-out-date");
var adults = document.querySelector("#adults");

bookingForm.classList.add("hidden");

bookingLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingForm.classList.toggle("hidden");
  bookingForm.classList.toggle("opening");
})

bookingForm.addEventListener("submit", function (evt) {
  if (!checkIn.value || !checkOut.value || !adults) {
    evt.preventDefault();
    bookingLink.addEventListener("click", function (evt) {
      evt.preventDefault();
    });
    checkIn.classList.add("error");
    checkOut.classList.add("error");
    adults.classList.add("error");
  }
});
