const selectInput = document.querySelectorAll('input');
const selectDivInfoError = document.getElementsByClassName('div-msg-error');
const infoMsg = ["First Name cannot be empty","Last Name cannot be empty",
                 "Looks like is not on email", "Password cannot be empty" ];
const infoPlaceHolder = ["First Name", "Last Name", "Email Address", "Password"];

function enviarChecar(){
    for (let index = 0; index < selectInput.length; index++) {
        if (selectInput[index].value === "") {
            selectInput[index].classList.add('error');
            selectInput[index].removeAttribute("placeholder");
            selectDivInfoError[index].style.display = "flex";
            selectDivInfoError[index].innerHTML = `<p class="p-msg-error">${infoMsg[index]}</p>`
            if(index === 2){
                selectInput[index].setAttribute("placeholder", "email@example/com");
            };
        } else {
            selectInput[index].classList.remove('error');
            selectInput[index].setAttribute("placeholder", `${infoPlaceHolder[index]}`);
            selectDivInfoError[index].style.display = "none";
        };
    };
};