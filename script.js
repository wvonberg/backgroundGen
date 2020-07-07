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
    var random1 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var random2 = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    color1.value = random1;
    color2.value = random2;
    setGradient();
}

genNew.addEventListener("click", generateColor);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
