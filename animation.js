"use strict";

let prevScript= document.getElementById("script");
prevScript[0].parentNode.removeChild(prevScript[0]);

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
            if(posX== 150)
                level= 1;
            break;
            }
        case 1: {
            posY++;
            box.style.top= posY+ "px";
            if(posY== 150)
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
            let answer= confirm("Another circle?");
            if(answer == true)
                level= 0;
            else
                clearInterval(call);
                square.style.visibility= "hidden";
                let nextScript= document.createElement("script");
                script.src= "choice.js";
                document.getElementsByTagName("body")[0].appendChild(script);
        }
    }
}

var call= setInterval(move, 5);
