"use strict"

const currentDay = new Date();
const neededDay = new Date(2020,11,25,0);
const day = 1000*60*60*24
 const calcDay = function (){
     const diff = neededDay.getTime()-currentDay.getTime();
     const final = Math.floor( diff/day);
     return final
 }
  console.log(calcDay())
