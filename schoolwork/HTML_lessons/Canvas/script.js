// var c = document.getElementById('myCanvas');
// var ctx = c.getContext('2d'); //these first two lines make it happen, you have to make variables first...
// ctx.fillStyle = 'rgb(91, 38, 92)'; //filling the colour to rectangle and its size....
// ctx.fillRect(50, 50, 100, 100);
//
// ctx.moveTo (0, 0); //making the line..
// ctx.lineTo (200, 200);
// ctx.lineWidth = 3;
// ctx.stroke();
//
// ctx.moveTo (0, 200); //making the other line opposite..
// ctx.lineTo (200, 0);
// ctx.lineWidth = 3;
// ctx.stroke();
// ctx.fillRect(50, 50, 100, 100); //makes the square come on top...
//
// ctx.beginPath(); //making a triangle...
// ctx.moveTo (0, 0);
// ctx.lineTo (40,40);
// ctx.lineTo (0,80);
// ctx.fillStyle = 'rgb(149, 89, 150)';
// ctx.fill();
//
// ctx.beginPath(); //making a second triangle opposite...
// ctx.moveTo (200, 200);
// ctx.lineTo (160,160);
// ctx.lineTo (200,120);
// ctx.fillStyle = 'rgb(149, 89, 150)';
// ctx.fill();
//
// ctx.lineWidth = 1; //making a circle
// ctx.beginPath();
// ctx.arc(100, 100, 25, 0, 2 * Math.PI); // the last two numbers makes it circle..
// ctx.fillStyle = 'rgb(217, 73, 246)'; //filling color
// ctx.fill();
// ctx.stroke();
//
// ctx.font = "8px Arial"; //writing there...
// ctx.strokeText("Hello World", 80, 100);

//second canvas starts here
var cc = document.getElementById('myCanvas2'); //these first two lines make it happen, you have to make variables first...
var ctx = cc.getContext('2d');

ctx.shadowBlur = 20; //the shadow
ctx.shadowColor = "black";

var grd = ctx.createLinearGradient(0, 250, 0, 0); //sky is color gradient....you have to make variable first
grd.addColorStop(0, "rgb(156, 170, 180)");
grd.addColorStop(1, "lightblue");
ctx.fillStyle = grd; //the sky
ctx.fillRect(0, 0, 400, 150);

var grd = ctx.createLinearGradient(0, 0, 250, 0);
grd.addColorStop(0, "rgb(25, 167, 82)");
grd.addColorStop(1, "green");
ctx.fillStyle = grd; //the grass
ctx.fillRect(0, 150, 400, 200);

ctx.fillStyle = 'rgb(25, 141, 167)'; //house
ctx.fillRect(150, 80, 120, 100);

ctx.shadowBlur = 0; //this stops the shadowing
ctx.shadowColor = "";

ctx.fillStyle = 'rgb(225, 239, 242)'; //windows
ctx.fillRect(165, 100, 20, 30);
ctx.fillStyle = 'rgb(225, 239, 242)';
ctx.fillRect(235, 100, 20, 30);

ctx.fillStyle = 'rgb(66, 87, 92)'; //door
ctx.fillRect(200, 140, 20, 40);

ctx.beginPath(); //the roof
ctx.moveTo (290,90);
ctx.lineTo (210,40);
ctx.lineTo (130,90);
ctx.fillStyle = 'rgb(149, 89, 150)';
ctx.fill();

 //making a cloud
ctx.beginPath();
ctx.arc(290, 40, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'rgb(73, 178, 246)';
ctx.fill();

ctx.beginPath();
ctx.arc(310, 30, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'rgb(73, 178, 246)';
ctx.fill();

ctx.beginPath();
ctx.arc(330, 37, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'rgb(73, 178, 246)';
ctx.fill();

ctx.beginPath();
ctx.arc(320, 51, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'rgb(73, 178, 246)';
ctx.fill();

ctx.beginPath();
ctx.arc(303, 50, 15, 0, 2 * Math.PI);
ctx.fillStyle = 'rgb(73, 178, 246)';
ctx.fill();

 //the sun
ctx.beginPath();
ctx.arc(100, 45, 15, 0, 2 * Math.PI);
ctx.shadowBlur = 20; //the shadow
ctx.shadowColor = "orange";
ctx.fillStyle = 'rgb(246, 224, 73)';
ctx.fill();

ctx.beginPath(); //the ray up
ctx.moveTo (95, 25);
ctx.lineTo (100, 10);
ctx.lineTo (105, 25);
ctx.fillStyle = 'rgb(219, 143, 30)';
ctx.fill();

ctx.beginPath(); //the ray down
ctx.moveTo (95, 65);
ctx.lineTo (100, 80);
ctx.lineTo (105, 65);
ctx.fillStyle = 'rgb(219, 143, 30)';
ctx.fill();

ctx.beginPath(); //the ray left
ctx.moveTo (60, 45);
ctx.lineTo (80, 40);
ctx.lineTo (80, 50);
ctx.fillStyle = 'rgb(219, 143, 30)';
ctx.fill();

ctx.beginPath(); //the ray right
ctx.moveTo (140, 45);
ctx.lineTo (120, 40);
ctx.lineTo (120, 50);
ctx.fillStyle = 'rgb(219, 143, 30)';
ctx.fill();

//the trees
ctx.beginPath();
ctx.moveTo (130,180);
ctx.lineTo (70,130);
ctx.lineTo (10,180);
ctx.shadowBlur = 20;
ctx.shadowColor = "black";
ctx.fillStyle = 'rgb(57, 124, 33)';
ctx.fill();

ctx.beginPath();
ctx.moveTo (120,140);
ctx.lineTo (70,90);
ctx.lineTo (20,140);
ctx.fillStyle = 'rgb(57, 124, 33)';
ctx.fill();

ctx.beginPath();
ctx.moveTo (110,110);
ctx.lineTo (70,70);
ctx.lineTo (30,110);
ctx.fillStyle = 'rgb(57, 124, 33)';
ctx.fill();

ctx.beginPath(); //second tree
ctx.moveTo (410,180);
ctx.lineTo (350,130);
ctx.lineTo (290,180);
ctx.fillStyle = 'rgb(57, 124, 33)';
ctx.fill();

ctx.beginPath();
ctx.moveTo (400,140);
ctx.lineTo (350,90);
ctx.lineTo (300,140);
ctx.fillStyle = 'rgb(57, 124, 33)';
ctx.fill();

ctx.beginPath();
ctx.moveTo (390,110);
ctx.lineTo (350,70);
ctx.lineTo (310,110);
ctx.fillStyle = 'rgb(57, 124, 33)';
ctx.fill();

var moon = new Image(); //the moon
moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
ctx.drawImage(moon, 280, 15);
