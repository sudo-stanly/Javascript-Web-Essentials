
export default class Dom{
    constructor(){
        this.message = "The content has been changed.";
        this.color="blue";
        this.color2="red";
    }
    changeContent(classId){
        let x = document.querySelector(classId);
        if(x){ x.textContent=this.message; }
        return x;
    }
    
    
    
}