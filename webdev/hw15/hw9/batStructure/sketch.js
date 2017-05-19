/* 
Basic batStructure
the structure of a bat
Created by Luis Medina Triana May 2017. 

*/

function setup() {
 createCanvas(400, 400); // the createCanvas() function sets canvas size
}

function draw() {
  triangle(0, 120, 120, 0, 160, 140);//left wing
  triangle(400, 120, 280, 0, 260, 140);//right wing
  
  ellipse(200, 200, 250, 250);// the body of the insect is the biggest shape and its located in the middle of the canvas
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