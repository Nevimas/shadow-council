document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Ověření přihlašovacích údajů
    if (username === 'admin' && password === 'n$gC8rj!3Xp@4Vz2') {
        window.location.href = 'dashboard.html'; // Přesměrování na úvodní stránku po úspěšném přihlášení
    } else {
        document.getElementById('error-message').textContent = 'Incorrect username or password!';
    }
});
