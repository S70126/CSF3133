const signUpForm = document.getElementById('signUpForm');
const loginForm = document.getElementById('loginForm');

function switchToLogin() {
  signUpForm.style.display = 'none';
  loginForm.style.display = 'block';
}

function switchToSignUp() {
  loginForm.style.display = 'none';
  signUpForm.style.display = 'block';
}

function showError() {
  alert('An error occurred. Please try again later.');
}
