var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var b = document.querySelector("body");

// document.onload = function(){
// 		// css.innerHTML = "The colors are: "+ color1.value + " " + color2.value;

// 		alert("hey");
// };

// b.addEventListener("load", myFunction);


function myFunction() {
 css.textContent = "linear-gradient(to right, " 
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";
}
// function myFunction() {
//   document.getElementById("demo").innerHTML = "Iframe is loaded.";
// }
function setGradient(){
	body.style.background =
	 "linear-gradient(to right, " 
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";

	 	css.textContent = body.style.background + ";"
	 // colors();
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// function colors(){
// 	css.innerHTML = "The colors are: "+ color1.value + " " + color2.value;

// }


// color2.addEventListener("input", function(){
// 	// console.log(color2.value);
// 	body.style.background =
// 	 "linear-gradient(to right, " 
// 	 + color1.value 
// 	 + ", " 
// 	 + color2.value 
// 	 + ")";
// })














