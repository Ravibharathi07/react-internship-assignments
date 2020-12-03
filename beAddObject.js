"use strict";

const addObject = function(){
    this. arr1=[{
        name:"ravi",
        age:20
    },{
        name:"vicky",
        age:21
    }]

}
 const person = new addObject()

  console.log(person)
  

  addObject.prototype.beAddObject= function(){
          return this.arr1.map(function(e){
             e.country="india";
            console.log(e)

            })
        
        
        }

 

person.beAddObject()

