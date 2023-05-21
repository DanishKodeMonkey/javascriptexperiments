/**
 * Canvas is an API, a means for drawing graphics
 *  commonly used for animations, games, and data visualization.
 */

//Imagine canvas, as the frame, and painting altogether
let canvas = document.getElementById("myCanvas");
//and context, as the paint, used to paint.
let context = canvas.getContext("2d");

//====DRAWING LINES===
//add some styling to the brush
context.strokeStyle = "white"
context.lineWidth = 10;

//bring out the brush.
context.beginPath();
//imagine moveTo as the act of placing the brush on the canvas
context.moveTo(0, 0);
//to move the brush, use lineTo
context.lineTo(250,250);
//another movement
context.lineTo(250,500);
//The brush is currently at 250,500. We gotta move it
context.moveTo(500,0);
context.lineTo(250,250);
//define what the paint looks like
context.stroke();

//Draw a triangle!
//start with styling
context.strokeStyle = "grey";
context.fillStyle="yellow";
context.lineWidth = 10;
//aand lets draw!
context.beginPath();
context.moveTo(250,0);
context.lineTo(0,250);
context.lineTo(500,250)
context.lineTo(250,0);
//Give the triangle a border
context.stroke();
//And fill the bad boy!
context.fill();

//And a rectangle!
context.fillStyle="red";
context.fillRect(0,0,250,250);
context.strokeStyle="darkgrey";
context.strokeRect(0,0,250,250);

//AAAND A CIIIRCLEEEE!
//(x,y,r,startAngle,endAngle,counterclockwise)
context.lineWidth = 10;
context.beginPath();
context.arc(250, 250, 200, 1, 2 * Math.PI, true);
context.stroke();

//DRAW TEXT LAST

context.font = "25px Mononoki Nerd Font"
context.fillStyle="black";
context.textAlign = "center";
context.fillText("DKM was here!", canvas.width/2, canvas.height/2)