// Set the date of the event (year, month (0-11), day, hour, minute, second)
const eventDate = new Date('2025-01-31T23:59:59').getTime();

// Update the countdown every second
const countdownTimer = setInterval(function() {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the remaining time until the event
  const distance = eventDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown timer
  document.getElementById('timer').innerHTML = `
    ${days}d ${hours}h ${minutes}m ${seconds}s
  `;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(countdownTimer);
    document.getElementById('timer').innerHTML = 'Event has ended!';
  }
}, 1000);
