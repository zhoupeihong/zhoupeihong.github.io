var canvas;
var ctx;
var unit = 30;

window.onload = init;

function init() {
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");
    // drawRuler(3);
    // Frame
    ctx.fillRect(6*unit,0*unit,6*unit,unit);
    ctx.fillRect(5*unit,1*unit,unit,unit);
    ctx.fillRect(12*unit,1*unit,unit,unit);
    ctx.fillRect(14*unit,1*unit,2*unit,unit);
    ctx.fillRect(4*unit,2*unit,unit,3*unit);
    ctx.fillRect(13*unit,2*unit,unit,unit);
    ctx.fillRect(16*unit,2*unit,unit,unit);
    ctx.fillRect(15*unit,3*unit,unit,2*unit);
    ctx.fillRect(3*unit,5*unit,unit,2*unit);
    ctx.fillRect(14*unit,5*unit,unit,4*unit);
    ctx.fillRect(9*unit,6*unit,unit,2*unit);
    ctx.fillRect(12*unit,6*unit,unit,2*unit);
    ctx.fillRect(4*unit,7*unit,unit,2*unit);
    ctx.fillRect(17*unit,7*unit,unit,unit);
    ctx.fillRect(7*unit,8*unit,unit,unit);
    ctx.fillRect(15*unit,8*unit,2*unit,unit);
    ctx.fillRect(18*unit,8*unit,2*unit,unit);
    ctx.fillRect(5*unit,9*unit,unit,unit);
    ctx.fillRect(8*unit,9*unit,4*unit,unit);
    ctx.fillRect(13*unit,9*unit,unit,unit);
    ctx.fillRect(19*unit,9*unit,unit,3*unit);
    ctx.fillRect(4*unit,10*unit,unit,unit);
    ctx.fillRect(6*unit,10*unit,unit,unit);
    ctx.fillRect(12*unit,10*unit,unit,unit);
    ctx.fillRect(2*unit,11*unit,2*unit,unit);
    ctx.fillRect(7*unit,11*unit,5*unit,unit);
    ctx.fillRect(1*unit,12*unit,unit,2*unit);
    ctx.fillRect(13*unit,12*unit,6*unit,unit);
    ctx.fillRect(12*unit,13*unit,unit,4*unit);
    ctx.fillRect(0*unit,14*unit,unit,4*unit);
    ctx.fillRect(5*unit,14*unit,unit,4*unit);
    ctx.fillRect(3*unit,15*unit,unit,unit);
    ctx.fillRect(4*unit,15*unit,unit,4*unit);
    ctx.fillRect(8*unit,17*unit,unit,unit);
    ctx.fillRect(13*unit,17*unit,unit,unit);
    ctx.fillRect(1*unit,18*unit,3*unit,unit);
    ctx.fillRect(7*unit,18*unit,unit,unit);
    ctx.fillRect(9*unit,18*unit,unit,unit);
    ctx.fillRect(14*unit,18*unit,unit,3*unit);
    ctx.fillRect(3*unit,19*unit,unit,unit);
    ctx.fillRect(6*unit,19*unit,unit,4*unit);
    ctx.fillRect(10*unit,19*unit,unit,4*unit);
    ctx.fillRect(unit,20*unit,2*unit,unit);
    ctx.fillRect(15*unit,20*unit,unit,unit);
    ctx.fillRect(0*unit,21*unit,unit,unit);
    ctx.fillRect(16*unit,21*unit,unit,unit);
    ctx.fillRect(0*unit,22*unit,6*unit,unit);
    ctx.fillRect(11*unit,22*unit,6*unit,unit);
    // Hair
    ctx.fillStyle = "FCF782"
    // ctx.fillStyle = "#c981ef"
    ctx.fillRect(6*unit,1*unit,6*unit,unit);
    ctx.fillRect(5*unit,2*unit,8*unit,unit);
    ctx.fillRect(14*unit,2*unit,2*unit,unit);
    ctx.fillRect(5*unit,3*unit,10*unit,unit);
    ctx.fillRect(5*unit,4*unit,2*unit,unit);
    ctx.fillRect(11*unit,4*unit,4*unit,unit);
    ctx.fillRect(5*unit,5*unit,unit,unit);
    ctx.fillRect(6*unit,1*unit,6*unit,unit);
    // Face
    ctx.fillStyle = "F4E9D8"
    ctx.fillRect(7*unit,4*unit,4*unit,unit);
    ctx.fillRect(4*unit,5*unit,unit,2*unit);
    ctx.fillRect(6*unit,5*unit,8*unit,unit);
    ctx.fillRect(5*unit,6*unit,4*unit,2*unit);
    ctx.fillRect(10*unit,6*unit,2*unit,2*unit);
    ctx.fillRect(13*unit,6*unit,unit,2*unit);
    ctx.fillRect(5*unit,8*unit,2*unit,unit);
    ctx.fillRect(8*unit,8*unit,6*unit,unit);
    ctx.fillRect(6*unit,9*unit,2*unit,unit);
    ctx.fillRect(12*unit,9*unit,unit,unit);
    ctx.fillRect(7*unit,10*unit,5*unit,unit);
    // Left Hand
    ctx.fillRect(17*unit,8*unit,unit,4*unit);
    ctx.fillRect(18*unit,9*unit,unit,3*unit);
    // Right Hand
    ctx.fillRect(1*unit,16*unit,3*unit,2*unit);
    // Left Arm
    ctx.fillStyle = "87AAE8"
    ctx.fillRect(14*unit,9*unit,3*unit,3*unit);
    ctx.fillRect(13*unit,10*unit,unit,2*unit);
    // Right Arm
    ctx.fillRect(4*unit,11*unit,2*unit,unit);
    ctx.fillRect(2*unit,12*unit,5*unit,unit);
    ctx.fillRect(2*unit,13*unit,4*unit,unit);
    ctx.fillRect(1*unit,14*unit,4*unit,unit);
    ctx.fillRect(1*unit,15*unit,2*unit,unit);
    // Body
    ctx.fillRect(12*unit,12*unit,unit,unit);
    ctx.fillRect(6*unit,13*unit,3*unit,3*unit);
    ctx.fillRect(10*unit,13*unit,2*unit,3*unit);
    // Right Leg
    ctx.fillRect(6*unit,17*unit,2*unit,unit);
    ctx.fillRect(5*unit,18*unit,2*unit,unit);
    // Left Leg
    ctx.fillRect(9*unit,17*unit,4*unit,unit);
    ctx.fillRect(10*unit,18*unit,4*unit,unit);
    // Decorate
    ctx.fillStyle = "FDFBA4"
    ctx.fillRect(5*unit,10*unit,unit,unit);
    ctx.fillRect(6*unit,11*unit,unit,unit);
    ctx.fillRect(12*unit,11*unit,unit,unit);
    ctx.fillRect(7*unit,12*unit,5*unit,unit);
    ctx.fillRect(9*unit,13*unit,unit,3*unit);
    ctx.fillRect(6*unit,16*unit,6*unit,unit);
    // Right Foot
    ctx.fillStyle = "CC736C"
    ctx.fillRect(4*unit,19*unit,2*unit,unit);
    ctx.fillRect(3*unit,20*unit,3*unit,unit);
    ctx.fillRect(1*unit,21*unit,5*unit,unit);
    // Left Foot
    ctx.fillRect(11*unit,19*unit,3*unit,3*unit);
    ctx.fillRect(14*unit,21*unit,2*unit,unit);
}