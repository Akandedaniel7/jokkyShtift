function togglePasswordVisibility() {
    let passwordInput = document.getElementById("password");
    let toggleButton = document.getElementById("toggleButton");

    if(passwordInput.type === "password" ) {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    }else {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
}