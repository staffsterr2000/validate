"use strict";

var node= document.createTextNode("");
var time= document.createElement("p");
time.appendChild(node);
document.body.appendChild(time);

time.id= "timeParagraph";

function doubleNum(x) {
    if(x.toString().length == 1){
        return "0"+ x;
    }
    else {
        return x;
    }
}

function dateAndTime() {
    var d= new Date();

    var day= d.getDate();
      day= doubleNum(day);
    var month= d.getMonth()+1;
      month= doubleNum(month);
    var year= d.getFullYear();
      year= doubleNum(year);
    var hours= d.getHours();
      hours= doubleNum(hours);
    var minutes= d.getMinutes();
      minutes= doubleNum(minutes);
    var seconds= d.getSeconds();
      seconds= doubleNum(seconds);

    time.innerHTML= "DATE: "+ day+ "."+ month+ "."+ year+ "<br />"+
    "TIME: "+ hours+ ":"+ minutes+ ":"+ seconds;
}

setInterval(dateAndTime, 1000);
