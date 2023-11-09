const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const passwordInput = document.getElementById('password');
const confirmedPasswordInput = document.getElementById('confirmed-password');
const button = document.getElementById('submit-button');

function submitHandler() {
    event.preventDefault();
    if (passwordInput.value == confirmedPasswordInput.value) {
        const formInputs = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            password: passwordInput.value
        }
        const userInfo = document.querySelectorAll("input");
        userInfo.forEach(info => info.value="");
        console.log(formInputs);
    }
}

    button.addEventListener('click', submitHandler);