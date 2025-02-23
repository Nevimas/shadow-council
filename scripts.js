const adminUsername = "admin";
const adminPassword = "heslo123";

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const adminPanel = document.getElementById("admin-panel");
    const loginContainer = document.getElementById("login-container");

    if (username === adminUsername && password === adminPassword) {
        errorMessage.style.display = "none";
        adminPanel.style.display = "block";
        loginContainer.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}
