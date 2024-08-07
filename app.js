const registrForm = document.querySelector(".form");
const password = registrForm.querySelector("#password");
const doublePassword = registrForm.querySelector("#password2");

function isPassword(e) {
    e.preventDefault();
    if (password.value !== doublePassword.value) {
        doublePassword.classList.add("error");
        doublePassword.nextElementSibling.classList.add("input_error_activ");
        return false;
    }
    this.submit();
}
registrForm.addEventListener("submit", isPassword);

