function togglePassword() {
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const password = passwordInput.value;

  const toggleButton = document.getElementById("toggle") as HTMLInputElement;

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
  }
}

function validateForm() {
  const emailInput = document.getElementById("email") as HTMLInputElement;
  const email = emailInput.value;
  const passwordInput = document.getElementById("password") as HTMLInputElement;
  const password = passwordInput.value;

  if (!email || !password) {
    alert("Please enter your email and password");
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters");
  } else {
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);
    alert("Account registered successfully!");

    // Delay the redirection to allow time for localStorage operations
    setTimeout(() => {
      window.location.href = "../html/login.html";
    }, 1000); // You can adjust the delay as needed
  }
}

function initializeLogin() {
  const login_btn = document.getElementById("login") as HTMLButtonElement;
  login_btn.addEventListener("click", validateForm);
}

initializeLogin();
