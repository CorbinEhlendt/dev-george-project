const loginBtn = document.getElementById('login-btn');
const userNameSpan = document.getElementById('user-name');
const loginForm = document.getElementById('login-form');
const loginModalElement = document.getElementById('loginModal');
const loginModal = new bootstrap.Modal(loginModalElement);

let loggedIn = false;

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById('username').value.trim();
    if (usernameInput !== "") {
        loggedIn = true;
        userNameSpan.textContent = `Hello, ${usernameInput}`;
        loginBtn.textContent = 'Logout';
        loginBtn.removeAttribute('data-bs-toggle');
        loginBtn.removeAttribute('data-bs-target');
        loginModal.hide();
    }
});

loginBtn.addEventListener('click', () => {
    if (loggedIn) {
        loggedIn = false;
        userNameSpan.textContent = '';
        loginBtn.textContent = 'Login';
        loginBtn.setAttribute('data-bs-toggle', 'modal');
        loginBtn.setAttribute('data-bs-target', '#loginModal');
    }
});