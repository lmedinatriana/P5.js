/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if else control structures) in the draw() loop.
Created by Dawn C. Hayes March 2017.
Typed by Luis Medina Triana
*/

function setup() {
	createCanvas(600, 400);
	background(0, 64, 135);
}

function draw() {
	strokeWeight(4);
	stroke(255);

	for (var i = 0; i <= width; i += 60) { 
		for (var j = 0; j <= height; j += 60) { 
			fill(mouseX, random(255), mouseY); 
			rect(i, j, 35, 35); 
		}
	}
}