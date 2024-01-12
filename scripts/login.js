function togglePassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    var toggleButton = document.getElementById("toggle");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
    else {
        passwordInput.type = "password";
        toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
}
function validateForm() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    if (!email || !password) {
        alert("Please enter your email and passwowrd");
    }
    var storedEmail = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");
    if (storedEmail === email && storedPassword === password) {
        alert("Login success!");
        window.location.href = "../index.html";
    }
    else {
        alert("Login failure!");
    }
}
function initializeLogin() {
    var login_btn = document.getElementById("login");
    login_btn.addEventListener("click", validateForm);
}
initializeLogin();
