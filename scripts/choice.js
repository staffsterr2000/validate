"use strict";

var thisScript= document.getElementsByTagName("script");
if(thisScript[0].id != "first") {
  var thisScript= document.getElementById("nextMajor");
  thisScript.parentNode.removeChild(thisScript.previousSibling);
}

function include(url) {
  var includeScript= document.createElement("script");
  includeScript.src= url;
  includeScript.id= "nextMinor";
  document.getElementsByTagName("body")[0].appendChild(includeScript);
  // document.body.appendChild(includeScript);
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
