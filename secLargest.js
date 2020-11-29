"use strict";

const getSeclargest = function(arr){
    let largeNo = arr[0];
    let secLarge= arr[0];
    for(let i =0; i<arr.length; i++){
        if(arr[i]>largeNo){
            secLarge= largeNo;
            largeNo= arr[i];

        } 
        // else if(arr[i]>secLarge){
        //     secLarge=arr[i];
        // }
    }
    return secLarge;

}
console.log(getSeclargest([123,675,654,765,4]))
console.log(getSeclargest([3,4,5,7,19,20]))
console.log(getSeclargest([1,12,34,45,56,57]))
console.log(getSeclargest([20,30,40,50,60]))



 



