document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents form submission

  var emailInput = document.querySelector('input[name="email"]');
  var email = emailInput.value.trim();

  // Regular expression pattern for email validation
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   if (emailPattern.test(email)) {
     document.body.innerHTML = `<div style="display:flex; align-items:center;
      justify-content:center;"><h1>Thank you for subscribing!</h1></div>`;     
  } else {
    alert('Invalid email address. Please enter a valid email.');
    emailInput.focus();
  }
});



