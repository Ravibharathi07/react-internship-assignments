"use strictc";

const removeObject = function(){
    this.arr1=[{
        name:"ravi",
        age:20,
        country:"india"
    },{
        name:"vicky",
        age:21,
        country:"india"
    }]
}

const person = new removeObject()
console.log(person)

removeObject.prototype.remove = function(){
    return this.arr1.filter(function(e){
        delete e.country;
        console.log(e)
    })

}



person.remove()