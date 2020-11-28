"use strict";


const randomNumber = function(start,end){
    let numberBe = Math.floor(Math.random()*end)+ start;
    return numberBe;

}
const theNumberIs = randomNumber(100000,999999);
console.log(theNumberIs)