"use strict";

var prevScript= document.getElementsByTagName("script");

if(prevScript.id != "first"){
  prevScript[0].parentNode.removeChild(prevScript[0]);
}

function include(url) {
  let script= document.createElement("script");
  script.src= url;
  document.getElementsByTagName("body")[0].appendChild(script);
  // document.body.appendChild(script);
}

do {
  var noError= true;
  var choice= prompt("1. Animation;\n2. Time;\n3. Button;\n4. Form;\n5. Exit.");
  switch (choice) {
    case "1": {
      include("animation.js");
      break;
    }
    case "2": {
      include("time.js");
      break;
    }
    case "3": {
      include("button.js");
      break;
    }
    case "4": {
      include("form.js");
      break;
    }
    case "5": {
      break;
    }
    default: {
      alert("Error!");
      noError= false;
      break;
    }
  }
}
while(noError == false);
