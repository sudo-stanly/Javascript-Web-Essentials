
export default class Core {
    constructor(){
        this.variable = 123   
    }

    intro(){
        console.log("There is no \"hello world\", only - bugs and coffee -.")
    }

    func1(){

        // declaring variable
        let num = 2;          // let is public scope
        const number = 5;     // const is when a variable cannot be redeclared
        var num2 = 2;         // var is old

        console.log(number ** num / num2, (num > num2) ? true : false)
    }

    func2(){

        // data types
        let str = "Hello, World!";
        let num = 0;
        let floatNum = 1.1;

        console.log(`string:\t${str}\nnumber:\t${num}\nfloat:\t${floatNum}`);


        // logical reasoning
        str = "I am a string" + 12345;
        console.log(`This will convert the number into a string since in js the "+" operator concatonates a string if the first or second operand is a string if both is a number it adds both operands that is a number\nbut since the first operand is a string and the second operand is a number it will join as a string.\nexample: ${str}`);


        // type casting
        let num1 = "8";
        let num2 = "32";
        console.log(`\nwe can use type casting to convert a value to a specific datatype like adding string numbers.\nexample: Number("${num1}") + Number("${num2}") = ${Number(num1) + Number(num2)}`);


        // there are several data types in js
        let dt = null;               // null
        dt = "";                    // string
        dt = 123;                    // numnber
        dt = 123456789123456;        // bigInt
        dt = true;                   // boolean
        dt = [];                // array
        // dt = { key : value }  ;      // object
        dt = new Date()   ;          // class object
        dt = undefined;


        // null data type represents absence of a value in a variable or if a variable is empty
        // string represents represents sequences of characters
        // number is a datatype in javascript that represents integer or floating number, in js numbers are always stored as floating point
        // bigInt represents large numbers
        // boolean represents if value is true or false
        // an array is a data type that stores values or elements
        // an object is a key : value pair data type
        // date is a class object
        // undefined represents an empty value of a variable


        // booleans

        // non-empty string is True
        let txt = "Hello";
        console.log(`Everything is a boolean.\n[ Non-empty String ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);


        // empty string is False
        txt = "";
        console.log(`[ Empty String ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);


        // non zero number is true
        txt = 1;
        console.log(`[ Number > 0 ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);


        // zero number is false
        txt = 0;
        console.log(`[ Number == 0 ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);

        // null is false
        txt = null;
        console.log(`[ Null ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);

        // undefined is false
        txt = undefined;
        console.log(`[ Undefined ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);

        // true is 1
        txt = true;
        console.log(`[ Undefined ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);

        // false is 0
        txt = false;
        console.log(`[ Undefined ]\t'${txt}' -> ${typeof(txt)} : ${Boolean(txt)}`);
    }

    func3(){
        
        // operators
        console.log(32 + 8);
        console.log(32 - 8);
        console.log(32 * 8);
        console.log(32 ** 8);

        // pemdas
        console.log( (10 - 10) + 10 - 5 / 2);

        // pemdas can also be applied for boolean
        console.log( (true && false) || true);


        // asignment
        let num = 0; // assigned value
        num = 5; // reassignment

        num += 5;// add
        num -= 2; // subtract
        console.log(num);

        num++ //increment
        console.log(num);
        num-- //deecrement
        console.log(num);

        

        // condition
        let c = 5 < 10 && ("20" === "20"); // The strict equality operator performs a strict comparison, meaning it checks both the value and the type of the operands
        console.log(c);

        c = 20 == "20"; // The equality operator performs a loose comparison, meaning it coerces operands to a common type before comparing their values.
        console.log(c);


        if(5 > 10){
            console.log("Hello")
        }
        console.log("No")


        console.log(this.variable)
    }

    func4(){

        // let str = "apple"
        // let list = []
        // list.push(str)
        
        // console.log(list)

        const LIST = [];
        const DUPS = [];

        while (true){
            const user = prompt("| x to exit | Enter an item: ");

            if(!user){ continue };         
            if(user.toLowerCase() === 'x'){ break };

            LIST.push(user);
        }

        for(const item of LIST){
            if(!DUPS.includes(item)){
                DUPS.push(item);
            }
        }
        for(const i in DUPS){
            console.log(DUPS[i]);
        }

        
            
            


    }

    func5(){

        const user = {
            name : "Linus Torvalds",
            age : 42,
            distros : ["Ubuntu", "Arch", "Fedora", "ParrotOS", "Debian", "Kali"]
        }
        for (const [key, value] of Object.entries(user)){ 
            if (!(value instanceof Array)) {
                console.log(`${key}:\t${value}`);
            }else{
                console.log(`${key}:`);
                for (const item of value) {
                    console.log(`\t- ${item}`);
                }
            }
        }
    }

    func6(){

        const f = (a, b) => a * b;
        console.log(f(10, 20))
        
    }

    func7(){

        // array methods

        let languages = ["Javascript", "C++", "Java", "Python", "Go", "Php", "mySQL"];
        console.log("ARRAY:");
        for(const [index, value] of languages.entries()){
            console.log(`\t[${index + 1}] : ${value}`);
        }

        let backend = ["Php", "mySQl", "DJango", "Flask"]
        for(const index in backend){
            console.log(`[${Number(index) + 1}] : ${backend[index]}`);
        }


        let ages = [20, 25, 30, 35, 40];
        const result = ages.filter(age => age >= 18);
        console.log(result);

        let adults = [];
        for(let age of ages){
            if(age >= 18){
                adults.push(age);
            }
        }
        for(let adult of adults){
            console.log(`ADULT: ${adult}`);
        }


        let people = ["Mark Zuckerburg", "Linus Torvalds", "Van Rossum"];
        console.log("PEOPLE:");
        people.forEach((PEOPLE)=>{
            console.log(`\t${PEOPLE}`);
        })


        let numbers = [8, 16, 24, 32, 40, 48];
        let rest = numbers.map(number => number * 10);
        console.log(rest);

        for(let num of numbers){
            console.log(num * 10);
        }



        let palindrome = ["level", "radar", "civic", "madam", "racecar", "deified", "noon", "rotor", "kayak", "refer"];
        console.log(`current: ${palindrome}`)
        let removeIndex = palindrome.indexOf("kayak")
        let remove = palindrome.splice(removeIndex, 1);
        console.log(`removed: ${remove}\nupdated: ${palindrome}`)

    }
}