
const list = document.querySelector(".list-container");
let LIST = [];
let DUPS = [];
function createList(){

    // prompt
    let user = prompt("Enter product, x to exit:");
    while(user!=="x" && user!==null){
        LIST.push(user);
        user = prompt("Enter product, x to exit:");
    }
    console.log(`${user} : ${LIST}\n`);
    for(const item of LIST){
        if(!DUPS.includes(item)){
            DUPS.push(item);
        }
    }
    console.log("Duplicate removed.");
    for(const dup of DUPS){
        console.log(`${dup}`);
    }

    // add list
    render();
    return;
}
const render = ()=>{
    list.innerHTML="";
    DUPS.forEach((item, index)=>{
        list.innerHTML+=`<li>${item} <button data-index=${index} type='button' onclick='removeList(${index}, "${item}")'>remove</button></li>`;
    });
};

function removeList(index, value){
    console.log(`removing list -> ${index} | ${value}`);
    DUPS.splice(index, 1);
    DUPS.innerHTML="";
    render();
    return;
}