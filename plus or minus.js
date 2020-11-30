"use strict";

const findSign = function(x,y,z){
    if(x>0 && y>0 && z>0){
        console.log(alert("Hi all"))
    } else if(x>0 && y>0 && z<0) {
        console.log(alert("this is minus,(-)"))
    }
        else if(x>0 && y<0 && z>0){
            console.log(alert("this is minus(-)"))
        } else if (x<0 && y>0 && z>0){
            console.log(alert("this is minus(-)"))
        }

    }

console.log(findSign(-1,6,3))