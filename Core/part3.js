
export default class Core{
    constructor(){ }

    intro(){
        console.log("womp womp");
    }

    func1(){
        
        // JSON
        let json = '{"name":"Linus", "age":45, "os":"Linux"}';
        // json strings -> object
        let obj = JSON.parse(json);
        console.log(obj);
        console.log(obj.name); // access object property with dot notation

        // json object -> string
        let string = JSON.stringify(obj);
        console.log(string);


        
    }
}