/* 
Setting order. 
Created by Luis Medina Triana, May 2017
*/


var a = 0;//Variables declared within setup() are not accessible within other functions, including draw().
// setup() takes care of initializing the program and runs once.
function setup() {//The function is called once when the program starts. It defines initial environment.  
  createCanvas(500, 500);// the createCanvas() function sets canvas size
  background(250);//the background() function sets a white background
  noStroke();//the noStroke() function does not draw a stroke/outline around shapes

}
// draw() takes care of items that are repeated until the canvas or browser window is closed. Animations can be set within the draw() loop
function draw() {// curly brackets contain a series of statements aka "lines of code".
  
  c = color(50, 55, 100);  // Create a color for 'c'
  fill(c);  // Use color variable 'c' as fill color
  rect(a++%width, 10, 2, 80);// Draw upper rectangle
 
  fill(color(0,70,0));//fills shape with color
  ellipse(a++%width, 200, 80, 80);// Draw circle

}