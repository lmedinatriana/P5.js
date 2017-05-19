/* 
Modify an existing code project that uses objects (at least one). What is different from other code
projects? How do you access the object’s properties in the rest of the code?

the structure of a bat
Created by Luis Medina Triana May 2017. 

*/

var lwing={// object array for left wing
  x1:0,// x1 coordinate for left wing
  y2:120,// y1 coordinate for left wing
  x2:120,// x2 coordinate for left wing
  y2:0,// y2 coordinate for left wing
  x3:160,// x3 coordinate for left wing
  y3:140// y3 coordinate for left wing
}

var body={// object array for body
  x:200,// x coordinate for ellipse
  y:200,//y coordinate for ellipse
  diam:250//size value for ellipse
}

function setup() {
 createCanvas(400, 400); // the createCanvas() function sets canvas size
}

function draw() {
  triangle(lwing.x1, lwing.y2, lwing.x2, lwing.y2, lwing.x3, lwing.y3);//left wing
  triangle(400, 120, 280, 0, 260, 140);//right wing
  
  ellipse(body.x, body.y, body.diam);// the body of the insect is the biggest shape and its located in the middle of the canvas
  line(160, 320, 160, 380);//left foot
  line(240, 320, 240, 380);//right foot
  
  ellipse(200, 200, 160, 160);// the face of the insect is set in the middle of the body
  ellipse(200, 230, 160, 130);// Nose
  ellipse(200, 260, 110, 60);// the face of the insect is set in the middle of the body
 
  ellipse(120, 180, 110, 110);// the left eye
  ellipse(120, 180, 110, 50);// the inside left eye
  
  ellipse(280, 180, 110, 110);// the right eye
  ellipse(280, 180, 110, 50);// the inside right eye
  
}