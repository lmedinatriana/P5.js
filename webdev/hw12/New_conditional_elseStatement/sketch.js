/* 
Created by Dawn C. Hayes March 2017. 
Modified by Luis Medina Triana

Note: Code crashes after 10 seconds. 
*/

var circX = 200;//circle x coordinate
var circY = 200;//circle y coordinate
var circStroke = 125;//circle stroke
var circR = 40;//circle r value in RGB format
var circG = 70;//circle g value in RGB format
var circB = 0;//circle b value in RGB format
var circSize = 100;//circle size value
var recX = 100;//rectangle x coordinate
var recY = 300;//rectangle y coordinate
var recStroke = 35;//rectangle stroke
var recCol = 60;//rectangle color
var recSize = 75;// rectangle size
var canvBG = 225;//canvas background
var speed = 20;//speed variable
var alph = 125; // a fourth value in color, fill and background can set the alpha (opacity and transparency).



function setup() {
	createCanvas(400, 400);//canvas set at 400x400px
}


function draw() {
	background(canvBG);//background color
	stroke(circStroke);//stroke for circle
	fill(circR, circG, circB, alph);////fill color in RGB format for circle
	stroke(circStroke);//stroke for circle
	ellipse(circX, circY, circSize, circSize);//fill coordinates and size for circle
	ellipse(circX + 50, circY - 75, circSize, circSize);//fill coordinates and size for circle
	fill(circR, circG, circB, 135);//fill color in RGB format for circle

	stroke(recStroke);//stroke for rectangle
	fill(recCol);// fill color for rectangle
	rect(recX, recY, recSize, recSize);//coordinates for rectangle

	circX = circX + speed;//coordinate for circX
	recY = recY - speed; //coordinate for recY

	if (circX < width) {//circles will change size and location

		circSize += 0.5; // circle size will increase by 0.5 through each loop.

	} else {

		if (circX > width) { //if statement: if circleX is bigger than width
			speed = speed * -1; // then speed equal to speed times -1. which reverse the direction of x.
			circSize *= -1; // then circSize equal to circleSize time -1. circle size will decrease by number multiplied by -1 through each loop.

		}

	}

  	if (recY < height) {//square will change size, but eventually will disaappear

		recSize += 0.2; // rectangle size will increase by 0.2 through each loop.

	} else {

		if (recY > height) {
			speed = speed * -1; // reverse direction of y.
			recSize *= -3; // rectangle size will decrease by number multiplied by -3 through each loop.

		}

	}
}