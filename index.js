var sky = document.getElementById("sky");
var grass = document.getElementById("grass");
var lalibla = document.getElementById("lalibela");
var textLal = document.getElementById("text");

document.addEventListener("scroll", (e)=>{
    let value = window.scrollY
    // console.log((value));
    sky.style.top = (value / 5) + "px";
    grass.style.top = (value * 0.7) + "px";
    lalibla.style.top = (value * 0.5) + "px";
    textLal.style.top = (value * 0.7)+40+"px";
    
})