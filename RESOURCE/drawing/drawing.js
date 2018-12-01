// Variable
// var x = 0;

// Constant
// const y = 0;

var canvas;
var ctx;
// ctx = context
var unit = 10;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // Filling a rectangle
    ctx.fillRect(0,0,100,100);
    // Change color of fill
    drawRuler(10);
    ctx.fillStyle = "aqua"
    ctx.fillRect(unit,unit,10*unit,10*unit);
}