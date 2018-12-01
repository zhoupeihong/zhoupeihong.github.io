var canvas;
var ctx;
var unit = 100;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // drawRuler(1);
    // Frame
    ctx.fillRect(4*unit,0*unit,4*unit,unit);
    ctx.fillRect(2*unit,1*unit,2*unit,unit);
    ctx.fillRect(8*unit,1*unit,2*unit,unit);
    ctx.fillRect(1*unit,2*unit,unit,2*unit);
    ctx.fillRect(10*unit,2*unit,unit,2*unit);
    ctx.fillRect(0*unit,4*unit,unit,4*unit);
    ctx.fillRect(11*unit,4*unit,unit,4*unit);
    ctx.fillRect(5*unit,5*unit,2*unit,unit);
    ctx.fillRect(1*unit,6*unit,unit,unit);
    ctx.fillRect(4*unit,6*unit,unit,unit);
    ctx.fillRect(7*unit,6*unit,unit,unit);
    ctx.fillRect(10*unit,6*unit,unit,unit);
    ctx.fillRect(2*unit,7*unit,3*unit,unit);
    ctx.fillRect(7*unit,7*unit,3*unit,unit);
    ctx.fillRect(1*unit,8*unit,unit,2*unit);
    ctx.fillRect(5*unit,8*unit,2*unit,unit);
    ctx.fillRect(10*unit,8*unit,unit,2*unit);
    ctx.fillRect(2*unit,10*unit,2*unit,unit);
    ctx.fillRect(8*unit,10*unit,2*unit,unit);
    ctx.fillRect(4*unit,11*unit,4*unit,unit);
    // Light Red
    ctx.fillStyle = "D3332F"
    ctx.fillRect(4*unit,unit,unit,unit);
    ctx.fillRect(2*unit,2*unit,2*unit,unit);
    ctx.fillRect(5*unit,2*unit,unit,unit);
    ctx.fillRect(2*unit,3*unit,unit,unit);
    ctx.fillRect(6*unit,3*unit,2*unit,2*unit);
    ctx.fillRect(1*unit,4*unit,unit,2*unit);
    ctx.fillRect(2*unit,4*unit,2*unit,3*unit);
    ctx.fillRect(4*unit,5*unit,unit,unit);
    // Dark Red
    ctx.fillStyle = "92281F"
    ctx.fillRect(5*unit,unit,3*unit,unit);
    ctx.fillRect(6*unit,2*unit,4*unit,unit);
    ctx.fillRect(8*unit,3*unit,2*unit,4*unit);
    ctx.fillRect(5*unit,4*unit,unit,unit);
    ctx.fillRect(10*unit,4*unit,unit,2*unit);
    ctx.fillRect(7*unit,5*unit,unit,unit);
    // White Red
    ctx.fillStyle = "DA797B"
    ctx.fillRect(4*unit,2*unit,unit,unit);
    ctx.fillRect(3*unit,3*unit,unit,unit);
    ctx.fillRect(5*unit,3*unit,unit,unit);
    ctx.fillRect(4*unit,4*unit,unit,unit);
    // White
    ctx.fillStyle = "FFFFFF"
    ctx.fillRect(4*unit,3*unit,unit,unit);
    ctx.fillRect(5*unit,6*unit,unit,unit);
    ctx.fillRect(unit,7*unit,unit,unit);
    ctx.fillRect(2*unit,8*unit,3*unit,unit);
    ctx.fillRect(2*unit,9*unit,5*unit,unit);
    // Gray
    ctx.fillStyle = "BBBBBB"
    ctx.fillRect(6*unit,7*unit,unit,unit);
    ctx.fillRect(10*unit,7*unit,unit,unit);
    ctx.fillRect(7*unit,8*unit,3*unit,unit);
    ctx.fillRect(8*unit,9*unit,2*unit,unit);
    ctx.fillRect(4*unit,10*unit,4*unit,unit);
}