const container = document.querySelector(".container");
const btnSignIn = document.querySelector("#btn-sign-in");
const btnSignUp = document.querySelector("#btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
})
