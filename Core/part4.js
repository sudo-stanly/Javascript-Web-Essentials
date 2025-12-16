
function intro(){
    console.log("░░ ᚱᛖᛞᚨᚲᛏᛖᛞ ᛞᚨᛏᚨ ░░·░░ ᚠᚢᛏᚢᚱᛖ ᚢᚾᚲᛖᚱᛏᚨᛁᚾ [VOID] ░░ SYSTEM ░░ BINDING ░░ FAILED ░░ ☠ ᚱᛖᛞᚨᚲᛏᛖᛞ ᛞᚨᛏᚨ ░░·░░ ᚠᚢᛏᚢᚱᛖ ᚢᚾᚲᛖᚱᛏᚨᛁᚾ ░░");
    console.log("░▒▓█▌▐▌█▓▒░ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ ░▒▓█▌▐▌█▓▒░ ☠ ░▒▓█▌▐▌█▓▒░ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ ░▒▓█▌▐▌█▓▒░ ░▒▓█▌▐▌█▓▒░ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ ░▒▓█▌▐▌█▓▒░ ☠ ░▒▓█▌▐▌█▓▒░ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ Ɇ̸̛̛̈́̿̍̑̓͊̐̓̓̎̿̅̓͠͝ ░▒▓█▌▐▌█▓▒░");
}

let globalScope = " I am accessible anywhere";
function variableScope(){

    console.log(globalScope);

    let blockScope = "I am only accessible in this block";
    console.log(blockScope);

    function funcScope(){
        console.log(blockScope);
    }
    funcScope();

}
// console.log(blockScope); undefined
console.log(globalScope);



function destructuring(){

    let person = {
        firstName:"Linus",
        lastName:"Torvalds",
        country:"PH"
    };
    // let {firstName, lastName, country ="US"} = person;
    // console.log(firstName, lastName, country);

    function display(person){
        let {firstName, lastName, country ="US"} = person;
        console.log(firstName, lastName, country); 
    }
    display(person);

}

export {intro, variableScope, destructuring};