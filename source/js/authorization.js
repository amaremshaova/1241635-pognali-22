const authorizationButton = document.querySelector(".authorization-form__submit-button");
const authorizationEmail = document.querySelector(".authorization-form__email-input");
const authorizationForm = document.querySelector(".authorization-form");


let authorizationIsStorageSupport = true;

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    authorizationIsStorageSupport = false;
}

authorizationForm.addEventListener("submit", function (evt) {
    if (!authorizationEmail.value) {
        evt.preventDefault();
        authorizationEmail.value="";
        authorizationEmail.classList.remove("authorization-form__email-input--error");
        authorizationEmail.classList.add("authorization-form__email-input--error");
        authorizationEmail.value="Введите e-mail";
    } else {
        if (authorizationIsStorageSupport) {
            localStorage.setItem("email", authorizationEmail.value);
        }
    }
});
