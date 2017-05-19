/*
Create a code project that defines an object with at least one function. 

Code by Dawn C. Hayes March, 2017.
Typed by Luis Medina Triana
*/



var circle = {//object array for circle
	x: 200,// x coordinate
	y: 200,//y coordinate
	diam: 300,//circle size
	r: 247,// r value in RGB format
	g: 245,// g value in RGB format
	b: 225// b value in RGB format
}

var trian = {
  triX1: 280, //x1 coordinate for triangle
  triY1: 300, //y1 coordinate for triangle
  triX2: 200, //x2 coordinate for triangle
  triY2: 200, //y2 coordinate for triangle
  triX3: 200, //x3 coordinate for triangle
  triY3: 50, //y3 coordinate for triangle
  tricol: 60, //triangle color
  speed: 2, //speed
	
	display: function() {
		background(139,183, 60);// background color
	  noStroke();// no stroke applied to the circle
	  fill(this.r, this.g, this.b);// RGB color for cicle
	  ellipse(this.x, this.y, this.diam, this.diam);//circle coordinates and sizee
	  noStroke();// no stroke for triangle
    fill(this.tricol);//triangle color
    triangle(this.X1, this.Y1, this.X2, this.Y2, this.X3, this.Y3);// triangle coordinates
	},
	move: function() {
		this.x1 = this.x1 + this.speed;
		this.y1 = this.y1 + this.speed;
		this.y2 = this.y2 + this.speed;
	}
}
  
function setup() {//function set up
	  createCanvas(400, 400);// canvas is set up at 400 by 400 px
  }

function draw() {
	background(0);
	trian.move();
	trian.display();
}

  