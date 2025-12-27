
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
    let article = document.querySelectorAll("article");
    article.forEach(article=>{
        article.classList.toggle("dark-theme");
    });
    let card = document.querySelectorAll(".card");
    card.forEach(card => {
        card.classList.toggle("dark-theme");
    });
    return;
}

function changeSelectedElements(){
    let texts = document.querySelectorAll(".text");
    texts.forEach((text) => {
        text.classList.add("background");
    });
    return;
}

function changeSelectedElements2() {
    let nodeList = document.querySelectorAll(".span-tag");
    nodeList[0].classList.add("background");
    return;
}

function checkElementsLength(){
    let nodeList = document.querySelectorAll(".span-tag2");
    let demo = document.getElementById("demo");
    demo.innerHTML = `The length is: ${nodeList.length}`;
    demo.classList.add("background");
    return;
}

function changeAllElements(){
    let nodeList = document.querySelectorAll("div > p");
    for(let i=0; i < nodeList.length; i++){
        nodeList[i].style.backgroundColor="red";
        nodeList[i].style.color = "white";
    }
    return;
}

function changeAllElements() {
    let nodeList = document.querySelectorAll("h3, span");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.backgroundColor = "red";
        nodeList[i].style.color = "white";
    }
    return;
}