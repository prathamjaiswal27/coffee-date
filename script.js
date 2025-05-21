// script.js
document.addEventListener('DOMContentLoaded', () => {
  const yesButton = document.getElementById('yesb');
  const message   = document.getElementById('message');

  if (!yesButton) {
    console.error('⚠️ Could not find element with id="yesb"');
    return;
  }
  if (!message) {
    console.error('⚠️ Could not find element with id="message"');
    return;
  }

  yesButton.addEventListener('click', () => {
    message.textContent = "Yay! 🥰 You're the best!";
    message.style.opacity = '1';
  });
});
