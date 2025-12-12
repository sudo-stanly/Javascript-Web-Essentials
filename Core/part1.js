
export default class Core {
    // constructor(){
        
    // }

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
}
