/*
Boolean Mouse Pressed

Bonus: In the folder “BooleanAndEventDrivenExamples”, modify the project named
“mousePressed_eventDriven to include a boolean variable that changes or toggles the circle’s color
when the mouse is clicked inside of the circle.

Code by Dawn C. Hayes March, 2017.
Modified by Luis Medina Triana
*/

function setup() {//function setup
  createCanvas(600, 600);// canvas is setup at 600 by 600px
}

function draw() {//function draw
  background(0);//background color
  stroke(255);//stroke color
  strokeWeight(4);//stroke weight
  noFill();//no fill color applied for handle
  
  if (mouseX > 300 && mouseX < 400 && mouseY > 200 && mouseY < 400) {// Bollean statement, mouse has to be pressed arround the coordinates
    if (mouseIsPressed) {//if mouse is pressed do the following
      background(148, 188, 252);//chaange background color
      fill(128, 64, 0);//fill door color
      rect(100, 100, 300, 500);//create door
      textSize(30);//applied text size
      text("welcome to TECHImpact",190,220);//write welcome message
    }
    fill(255,223,0);//fill with color the handle
  }
    ellipse(350, 350, 20, 20);//handle coordinates and dimensions
   
}