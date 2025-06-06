const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {    
    window.location.href = "beranda.html";
  } else {
    
  }
});

const loginForm = document.querySelector('.form-box.login form');
const registerForm = document.querySelector('.form-box.register form');

//LOGIN
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Login berhasil!');
            window.location.href = "dashboard.html";            
        })
        .catch((error) => {
            alert(error="the password is invalid or the user does not have a password.");
        });
});

//REGISTER
registerForm.addEventListener('submit', function(e) {
    e.preventDefault();    
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            alert('Registrasi berhasil!');            
        })
        .catch((error) => {
            alert(error="The email address is already in use by another account.");
        });
});