// Set the date for New Year's Eve
const countDownDate = new Date("Dec 31, 2023 23:59:59").getTime();

// Update the countdown every second
const countdownFunction = setInterval(function() {

  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countDownDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown in separate elements for days, hours, minutes, and seconds
  document.getElementById("days").innerHTML = days + "d";
  document.getElementById("hours").innerHTML = hours + "h";
  document.getElementById("minutes").innerHTML = minutes + "m";
  document.getElementById("seconds").innerHTML = seconds + "s";

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("days").innerHTML = "0d";
    document.getElementById("hours").innerHTML = "0h";
    document.getElementById("minutes").innerHTML = "0m";
    document.getElementById("seconds").innerHTML = "0s";
    document.getElementById("countdown").innerHTML = "HAPPY NEW YEAR!";
  }
}, 1000);
