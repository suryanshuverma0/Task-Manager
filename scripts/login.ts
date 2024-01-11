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
