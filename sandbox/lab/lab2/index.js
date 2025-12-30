
const form = document.getElementById("form");
// const input = document.querySelector("input[type='text']");
const text_inputs = document.querySelectorAll("input[type='text']");
const message = document.querySelector(".message");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     if(input.value.trim() === ""){ message.innerText = "Form submission failed!!"; }
//     message.innerText = "Form submitted!";
// });
form.addEventListener("submit", (e) => {
    e.preventDefault();
    text_inputs.forEach((input)=>{
        if(input.value.trim() === ""){message.innerText = "Form submission failed!!";}
        else{ message.innerText = "Form submitted!"; }
    });
    return;
});