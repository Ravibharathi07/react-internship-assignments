"use strict";


const stringSpacing = function(str){
    this.name=str;
    

}
const p1= new stringSpacing("ravibharathi",2000)

console.log(p1)

stringSpacing.prototype.spacing = function(){
    console.log(this.name.split("").join(" "));


    

}


    
    

p1.spacing();







 
 