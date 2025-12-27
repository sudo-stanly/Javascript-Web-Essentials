
let message = document.querySelector(".message");
message.textContent="Hello, The content has been changed.";

function changeContent(){
    let message = document.querySelector(".messsage_content");
    message.textContent = "Hello, The content has been changed.";
    return;
}

function changeBackground(){
    let background = document.querySelector("body");
    background.style.backgroundColor = "red";
    return;
}

function changeTheme() {
    document.querySelector("body").classList.toggle("dark-theme");
    document.querySelector("article").classList.toggle("dark-theme");
    document.querySelector(".card").classList.toggle("dark-theme");
    return;
}