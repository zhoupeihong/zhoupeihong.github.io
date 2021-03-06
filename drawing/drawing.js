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
    ctx.fillRect(20*unit,10*unit,10*unit,10*unit);
    ctx.fillRect(30*unit,10*unit,10*unit,10*unit);
    ctx.fillRect(60*unit,10*unit,10*unit,10*unit);
    ctx.fillRect(70*unit,10*unit,10*unit,10*unit);
    ctx.fillRect(10*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(40*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(50*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(80*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(10*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(80*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(10*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(80*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(20*unit,50*unit,10*unit,10*unit);
    ctx.fillRect(70*unit,50*unit,10*unit,10*unit);
    ctx.fillRect(30*unit,60*unit,10*unit,10*unit);
    ctx.fillRect(60*unit,60*unit,10*unit,10*unit);
    ctx.fillRect(40*unit,70*unit,10*unit,10*unit);
    ctx.fillRect(50*unit,70*unit,10*unit,10*unit);
    // Change color of fill
    drawRuler(10);
    ctx.fillStyle = "red"
    ctx.fillRect(20*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(30*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(60*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(70*unit,20*unit,10*unit,10*unit);
    ctx.fillRect(20*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(30*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(40*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(50*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(60*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(70*unit,30*unit,10*unit,10*unit);
    ctx.fillRect(20*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(30*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(40*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(50*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(60*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(70*unit,40*unit,10*unit,10*unit);
    ctx.fillRect(30*unit,50*unit,10*unit,10*unit);
    ctx.fillRect(40*unit,50*unit,10*unit,10*unit);
    ctx.fillRect(50*unit,50*unit,10*unit,10*unit);
    ctx.fillRect(60*unit,50*unit,10*unit,10*unit);
    ctx.fillRect(40*unit,60*unit,10*unit,10*unit);
    ctx.fillRect(50*unit,60*unit,10*unit,10*unit);
}