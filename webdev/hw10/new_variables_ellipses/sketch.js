/* 
Exxample that uses variables instead of hard-coded values.
Created by Dawn C. Hayes March 2017
Modified by Luis Medina Triana, May 2017 
*/

var circX; // delcared variable for circle x coordinate.
circX = 230; // assign a value to a variable. the name and value is determined by the creator. in this case, the value is 200.

var circY;   // delcared variable for circle y coordinate.
circY = 150; // assign a value to circleY. 

// var circStroke = 0; // assign a value to set the grayscale color for the circle's outline. 

var circR = 255; // r value for circle 1 background in an RGB format
var circG = 255; // g value for circle 1 background in an RGB format
var circB = 255; // b value for circle 1 background in an RGB format

var circH = 255; // h value for circle 2 background in an RGB format
var circS = 0; // s value for circle 2 background in an RGB format
var circV = 0; // v value for circle 2 background in an RGB format

var circSize = 50; // a value for the circle's width and height.

var canvR = 30; // r value for canvas background in an RGB format
var canvG = 158;// g value for canvas background in an RGB format
var canvB = 68;// b value for canvas background in an RGB format

var linX1;// delcared variable for line x1 coordinate.
linX1= 50;// assign a value to linX1. 

var linY1;// delcared variable for line y1 coordinate.
linY1=350;// assign a value to linY1. 

var linX2;// delcared variable for line x2 coordinate.
linX2=200;// assign a value to linX2. 

var linY2;// delcared variable for line y2 coordinate.
linY2=190;// assign a value to linY2. 

var lineStroke=4; // delcared variable for line stroke

function setup() { // set ups the canvas
	createCanvas(400, 400);// draw canvas at 400x400px
}


function draw() {// draws 
	background(canvR,canvG,canvB); // reffering to the variables canvR,canvG,canvB for the RGB value

	
	strokeWeight(lineStroke)//  reffering to the lineStroke variable
	stroke(lineStroke);//  reffering to the lineStroke variable
	line(linX1,linY1,linX2,linY2);//  reffering to the variables linX1,linY1,linX2,linY2
	
	
	noStroke();//  no stroke is applied to the circle 1
	fill(circR, circG, circB); // reffering to the variables circR, circG, circB for the RGB value

	ellipse(circX, circY, circSize, circSize); // reffering to the variables circX, circY, circSize, circSize for the ellipse coordinates and size value
	
	noStroke();//  no stroke is applied to the circle 2
	fill(circH, circS, circV); // reffering to the variables circH, circS, circV for the RGB value
	ellipse(circX + 50, circY - 75, circSize, circSize); // reffering to the variables circX, circY, circSize, circSize for the ellipse coordinates and size value and also updating the location
	
	

}