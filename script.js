var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var cssObj = window.getComputedStyle(body, null).getPropertyValue("background-image");
var genNew = document.getElementById("genNew");


css.textContent = cssObj;

function setGradient() {
  body.style.background =
    "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value
    + ")";
    css.textContent = body.style.background +";";
}

function generateColor() {
    var random1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    var random2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    color1.setAttribute("value", random1);
    color2.setAttribute("Value", random2);
    setGradient();
}

genNew.addEventListener("click", generateColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
