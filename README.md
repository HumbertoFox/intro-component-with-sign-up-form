# Frontend Mentor - Intro component with sign up form solution

Esta é uma solução para o [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). 
Os desafios do Frontend Mentor ajudam você a melhorar suas habilidades de codificação criando projetos realistas.

## Layout do projeto em tela de Desktop/Notebook/Tablet/Mobile.

<div align="center">

  <img src="https://github.com/HumbertoFox/repository/assets/126817628/82c81773-1936-4a3c-b501-abbb00dcd992" width="400px"/>

</div>

### O que aprendi

```Js
const infoMsg = ["First Name cannot be empty","Last Name cannot be empty",
                 "Looks like this is not on email", "Password cannot be empty" ];
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
```

### Construído com

- Marcação semântica HTML5
- Propriedades personalizadas CSS
- Caixa flexível
- Js

## Desenvolvido em:

<div>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="30px"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" width="30px"/>
</div>
