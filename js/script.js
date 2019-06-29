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
  if (!checkIn.value || !checkOut.value || !adults.value) {
    evt.preventDefault();

    if (!checkIn.value) {
      checkIn.classList.add("error");
    }

    if (!checkOut.value) {
      checkOut.classList.add("error");
    }

    if (!adults.value) {
      adults.classList.add("error");
    }

    setTimeout(function () {
      checkIn.classList.remove("error");
      checkOut.classList.remove("error");
      adults.classList.remove("error");
    }, 900);
  }
});
