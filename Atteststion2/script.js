const from = document.querySelector(".registration-form");

const email = document.querySelector("#email")
const password = document.querySelector("#password")
const repeatPassword = document.querySelector("#repeat-password")

const emailError = document.querySelector(".email-error")
const passwordError = document.querySelector(".password-error")
const repeatPasswordError = document.querySelector(".repeat-password-error")

from.onsubmit = () => {
    console.log(repeatPassword);
    if (email.value === "") {
        emailError.innerHTML = "Поле обязательно для заполнения";
        email.style["border-color"] = "#ee2424"
    } else if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value.toLowerCase())) {
        emailError.innerHTML = "Email введён некорректно";
        email.style["border-color"] = "#ee2424"
    } else {
        emailError.innerHTML = "";
        email.style["border-color"] = "#787878"
    }

    if (password.value === "") {
        passwordError.innerHTML = "Поле обязательно для заполнения";
        password.style["border-color"] = "#ee2424"
    } else if (password.value.length < 8) {
        passwordError.innerHTML = "Пароль должен содержать не меньше 8 символов";
        password.style["border-color"] = "#ee2424"
    } else {
        passwordError.innerHTML = "";
        password.style["border-color"] = "#787878"
    }

    if (repeatPassword.value === "") {
        repeatPasswordError.innerHTML = "Поле обязательно для заполнения"; 
        repeatPassword.style["border-color"] = "#ee2424"
    } else if (password.value !== repeatPassword.value) {
        repeatPasswordError.innerHTML = "Пароли не совпадают"; 
        repeatPassword.style["border-color"] = "#ee2424"
    } else {
        repeatPasswordError.innerHTML = "";
        repeatPassword.style["border-color"] = "#787878"
    }

    return false;    
}

