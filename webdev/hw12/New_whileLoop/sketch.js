/*
Uses while() and for loop() to draw rectangles to the canvas on the y axis.
Created by Dawn C. Hayes March 2017. 
Modified by Luis Medina
*/


function setup() {// function setup
	createCanvas(600, 400);// canvas is setup at 600 by 400px.
}

function draw() {// function draw
	background(255,255,255);//bakground color
	
//while statement
		
	var y = 0;// variable for y coordinate
	while (y <= height) {// while statement: y is less/equal to height
		stroke(0);//stroke value
		fill(255,50,30);// fill color
		rect(200, y, 80, 50);// rectangle coordiantes and size
		y = y + 30;//rectagle y coordinate moves 30px
	}

//for statement
	for (y = 0; y <= height; y += 50) {//y equal to 0; and y is less/equal to the height; and add 50px to y.
		stroke(255);//stroke color
		fill(0);//fill color
		ellipse(300, y, 50, 50);//ellipse coordinates
	}
	
	var x = 0;//var coordinate for x
	while (x <= width) {//while statement
		stroke(0);//stroke 
		fill(255);// fil color
		triangle(x, 200, 80, 50);// triangle coordinates
		x = x + 30;//add 30px to x
	}

	for (x = 0; x <= width; x += 50) {//for statement x equal to 0; x is less/equal to width; and add 50px to x.
		stroke(255);//stroke value
		fill(0);//fill color
		rect(x, 300, 50, 50);//rectangle coordinates
	}
	
}