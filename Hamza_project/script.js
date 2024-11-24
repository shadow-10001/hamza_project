// script.js

// Update Footer with Current Date and Time
const footerDateTime = document.getElementById("footer-datetime");
function updateFooterDateTime() {
  const now = new Date();
  footerDateTime.textContent = `Last updated: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
}

// Update on Load and Every Minute
updateFooterDateTime();
setInterval(updateFooterDateTime, 60000);
