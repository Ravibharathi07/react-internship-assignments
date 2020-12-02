"use strict";

   const findingSpecific = function( ){
       this.arr1=[{
           name:"ravi",
           age:20
       },{
           name:"vicky",
           age:21
       }]
   }
 const p1 = new findingSpecific()
 console.log(p1)


 findingSpecific.prototype.befindobject=function(){
     
  let [n1,n2] =this.arr1
  console.log(n1.name,n2.name)

 



      
 
    
 }
 
 

 

 
 
 p1.befindobject()