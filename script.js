/*var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	console.log("linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")");
    css.textContent = body.style.background + ";";
}

color2.addEventListener("input", setGradient);


color1.addEventListener("input", setGradient);*/



                       /*  TAKING GIVEN INPUT IS ABOVE FILE AND RANDOM INPUT BY CLICKING THE
                           BUTTON IS BELOW FILE*/

var body = document.getElementById("gradient");
function setGradient() {
	body.style.background = 
	"linear-gradient(to right, #" 
	+ (Math.random()*0xFFFFFF<<0).toString(16);
	+ ", #" 
	+ (Math.random()*0xFFFFFF<<0).toString(16); 
	+ ")";
}

var but=document.getElementById("rule");


but.addEventListener("click",function(){
	body.style.background = 
	"linear-gradient(to right, #" 
	+ (Math.random()*0xFFFFFF<<0).toString(16)
	+ ", #" 
	+ (Math.random()*0xFFFFFF<<0).toString(16) 
	+ ")";

	console.log("linear-gradient(to right, #" 
	+ (Math.random()*0xFFFFFF<<0).toString(16)
	+ ", #" 
	+ (Math.random()*0xFFFFFF<<0).toString(16) 
	+ ")");
	
});