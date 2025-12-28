
let message = document.querySelector(".message");
message.textContent="Hello, The content has been changed.";

function changeContent(){
    let message = document.querySelector(".message_content");
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

// textContent returns the content as it is from html mock up, ignores any styled or hidden texts.
function changeTextContent(){
    let text = document.querySelector(".sample-text");
    text.style.backgroundColor="red";
    text.style.color = "white";
    text.textContent="This is a text.";
    console.log(text);
    return;
}

//(This ignores HTML elements including with a invisible text).
// function changeInnerText() {
//     let text = document.querySelector("nav");
//     text.style.backgroundColor = "red";
//     text.style.color = "white";
//     text.innerText = "This is a text.";
//     console.log(text);
//     return;
// }

// // ()
// function changeInnerHTML() {
//     let text = document.querySelector("nav");
//     text.style.backgroundColor = "red";
//     text.style.color = "white";
//     text.innerText = "This is a text.";
//     console.log(text);
//     return;
// }
function showHiddenText(){
    let text = document.querySelector(".hidden-text");
    if(!text){ console.error("Class not found!"); }
    text.style.backgroundColor = "red";
    text.style.color = "white";
    text.style.visibility = "visible";
    document.getElementById("showHiddenBtn").style.display="none";
    console.log(text);
    return;
}

const langList = document.querySelector(".languages-list");
function updateContent(x){
    langList.innerHTML="";
    switch(x){
        case 'innerHTML':
            document.getElementById("text-description").innerText="innerHTML returns a string format since it recognizes the tag and formatting.";
            langList.innerHTML=`
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Ruby</li>
            `;
            console.log(langList);
            break;
        case 'innerText':
            document.getElementById("text-description").innerText="innerText ignores the tag and renders it as a string.";
            langList.innerText = `
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Ruby</li>
            `;
            console.log(langList);
            break;
        case 'textContent':
            document.getElementById("text-description").innerText="textContent also ignores the tag and renders it as a string but ignores whitespaces and breaking lines.";
            langList.textContent = `
                <li>JavaScript</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Ruby</li>
            `;
            console.log(langList);
            break;
        default:
            console.error("invalid parameter.");
    }
    return;
}
