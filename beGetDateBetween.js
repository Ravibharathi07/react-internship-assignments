"use strict";
 const beGetDate= function(){

 }
 const person = new beGetDate()
 console.log(person)
 beGetDate.prototype.findDate= function(){
    var  getDates = function(startDate, endDate) {
        var dates = [],
            currentDate = startDate,
            addDays = function(days) {
              var date = new Date(this.valueOf());
              date.setDate(date.getDate() + days);
              return date;
            };
        while (currentDate <= endDate) {
          dates.push(currentDate);
          currentDate = addDays.call(currentDate, 1);
        }
        return dates;
      };
      
      // Usage
      var dates = getDates(new Date(2020,11,2), new Date(2020,11,4));                                                                                                           
      dates.forEach(function(date) {
        console.log(date)
      });
 }
 person.findDate()