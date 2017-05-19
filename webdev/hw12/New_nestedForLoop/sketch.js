/*  
nested loop that draws rectangles to the canvas. 

Code by Dawn C. Hayes March, 2017
Modified by Luis Medina Triana
*/


function setup() { // function setup
	createCanvas(600, 400);//canvas is setup at 600 by 400px.
	background(255, 255, 255);//background color
}

function draw() {// function draw
// 	strokeWeight(4);//stroke weight doesn't seem to affect the code.
	stroke(255);//stroke color

	for (var i = 0; i <= width; i += 80) { // for every i add 80. Spaces circles out. 
		for (var j = 0; j <= height; j += 80) { // for every j add 80. Spaces circles out.
			fill(mouseX, random(255), mouseY); // fill based on a random value and the mouse position
			ellipse(i, j, 50, 50);//ellipse coordinate
			
		}
	}
}