document.getElementById("registrationForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous errors
  document.querySelectorAll(".error").forEach((e) => (e.textContent = ""));

  let isValid = true;

  // Get form values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const message = document.getElementById("message").value.trim();

  // Name validation
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    document.getElementById("emailError").textContent = "Email is required.";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    document.getElementById("passwordError").textContent = "Password is required.";
    isValid = false;
  } else if (password.length < 6) {
    document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Confirm password validation
  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
    isValid = false;
  } else if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").textContent = "Message cannot be empty.";
    isValid = false;
  }

  // If all validations pass
  if (isValid) {
    alert("Form submitted successfully!");
    document.getElementById("registrationForm").reset();
  }
});
