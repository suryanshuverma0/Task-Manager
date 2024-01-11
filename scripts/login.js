function togglePassword() {
    var passwordInput = document.getElementById("password");
    var password = passwordInput.value;
    var toggleButton = document.getElementById('toggle');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
    }
    else {
        passwordInput.type = 'password';
        toggleButton.innerHTML = '<i class="fas fa-eye"></i>';
    }
}
