const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const confirmedPassword = getElementById('confirmed-password');
const button = document.getElementById('submit-button');

function submitHandler() {
    console.log(firstName.value);
}

button.addEventListener('click', submitHandler);