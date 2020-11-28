"use strict";

const  br= ["Chrome","firefox","Safari","Opera","MSIE","Trident","Edge"];
let b = []
let  ua = navigator.userAgent;

for (let i=0; i<br.length; i++){
    if(ua.indexOf(br[i]) >-1){
        b=br[i];
        break;

    }
}
if (b=="MSIE"|| b=="Trident"||b=="Edge"){
    b="Internet Explorer";
}
console.log(b)






 