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
        alert("Please enter your email and password");
    }
    else if (password.length < 8) {
        alert("Password must be at least 8 characters");
    }
    else {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        alert("Account registered successfully!");
        // Delay the redirection to allow time for localStorage operations
        setTimeout(function () {
            window.location.href = "../html/login.html";
        }, 1000); // You can adjust the delay as needed
    }
}
function initializeLogin() {
    var login_btn = document.getElementById("login");
    login_btn.addEventListener("click", validateForm);
}
initializeLogin();
