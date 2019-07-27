"use strict";

var square= document.getElementById("square");
var box= document.getElementById("box");
square.style.visibility= "visible";

var posX= 0;
var posY= 0;
var level= 0;

function move() {
    switch(level){
        case 0: {
            posX++;
            box.style.left= posX+ "px";
            if(posX== 450)
                level= 1;
            break;
            }
        case 1: {
            posY++;
            box.style.top= posY+ "px";
            if(posY== 450)
                level= 2;
            break;
            }
        case 2: {
            posX--;
            box.style.left= posX+ "px";
            if(posX== 0)
                level= 3;
            break;
            }
        case 3: {
            posY--;
            box.style.top= posY+ "px";
            if(posY== 0)
                level= 4;
            break;
            }
        case 4: {
            var answer= confirm("Another circle?");
            if(answer == true)
                level= 0;
            else {
                clearInterval(call);
            }
        }
    }
}

var call= setInterval(move, 10);
