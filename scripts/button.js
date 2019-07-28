"use strict";

var i= 0;

function button() {
    i++;
    var n= Math.ceil(Math.random()*100);
    var node= document.createTextNode(i+ " number: \""+ n+ "\"; ");
    var p= document.createElement("p");
    p.style.display= "inline";
    p.appendChild(node);
    document.body.appendChild(p);
}
