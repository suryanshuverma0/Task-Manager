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
    alert("Please enter your email and passwowrd");
  }

  const storedEmail = localStorage.getItem("email");
  const storedPassword = localStorage.getItem("password");

  if (storedEmail === email && storedPassword === password) {
    alert("Login success!");
    window.location.href = "../index.html";
  } else {
    alert("Login failure!");
  }
}
function initializeLogin() {
  const login_btn = document.getElementById("login") as HTMLButtonElement;
  login_btn.addEventListener("click", validateForm);
}

initializeLogin();
