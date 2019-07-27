"use strict";

var arr= ["https://vsrap.ru/wp-content/uploads/2019/07/190710-asap-rocky-cs-1155a_b81df229242a83edfb5737d24882bcb9.jpg",
"https://tonedeaf.thebrag.com/wp-content/uploads/2019/02/travis-scott.jpg",
"https://upload.wikimedia.org/wikipedia/commons/0/0c/Stas_Baretsky.jpg"];

var i= 0;

var image= document.getElementById("slideImage");
image.src= arr[i];

function prev() {
        i--;
        if(i< 0){i= arr.length-1;}
        image.src= arr[i];
}

function next() {
        i++;
        if(i >= arr.length){i= 0;}
        image.src= arr[i];
}
