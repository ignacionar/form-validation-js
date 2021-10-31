// SELECCION DE ELEMENTOS HTML

const form = document.querySelector("#form");
const username = form.querySelector("#username");
const email = form.querySelector("#email");
const password = form.querySelector("#password");
const password2 = form.querySelector("#password2");
const h2 = document.querySelector("#header2");

// AL TOCAR EL BOTÓN OCURRE:
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkRequired([username, email, password, password2])
    checkLength(username, 8, 16)
    checkLength(password, 8, 16)
    checkPasswordMatch(password, password2)
    checkEmail(email)
})

const showError = (input, mensaje) => {
    const formControl = input.parentElement; // DIV FORM-CONTROL
    const showh2 = h2.parentElement; 
    
    formControl.classList.add("error") // DIV FORM-CONTROL .ERROR
    showh2.classList.add("error") 
    const small = formControl.querySelector("small")
    small.innerText = mensaje;
}

const showSuccess = (input) => {
    const formControl = input.parentElement;
    const showh2 = h2.parentElement;
    formControl.className = "form-control success"
    showh2.className = "text-container"
}

const checkRequired = (inputArr = []) => {
    if (inputArr.length === 0) {
        return;
    }
    
    inputArr.forEach((input) => {
        if  (input.value.trim() === "") {
            showError(input, "Enter this field")
            return;
        }
        showSuccess(input);
    })
}

const checkLength = (input, min, max) => {
    if (input.value.length < min) {
        showError(input, `It must contain at least ${min} caracters`)
    } else if (input.value.length >  max) {
        showError(input, `It must contain less than ${max} caracters`)
    }
}
//                          PSWRD1  PSWRD2
const checkPasswordMatch = (input1, input2) => {
    input1.value !== input2.value ? showError(input2, "The passwords don't match") : "";
}
//                  EMAIL
const checkEmail = (input) => {
    const re = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    } else { //   EMAIL     MENSAJE
        showError(input, "Unvalid email")
    }                   
}