/* 
Example that reverses drawn shapes across the canvas/window using variables, incrementors and conditional logic (if statement) in the draw() loop.
Created by Dawn C. Hayes March 2017. 
Modified by Luis Medina Triana
*/

var circX=200;// x coordinate for circle
var circY=200;// y coordinates for circle

var circStroke=125;//stroke for circle

var circR= 55;// r value for circle in RGB format
var circG=135;// g value for circle in RGB format
var circB=225;// b value for circle in RGB format

var circSize= 75;// circle size

var recX=100;// x coordinate for rectangle 
var recY=300;// y coordinate for rectangle 

var recStroke=35;//rectangle stroke

var recCol=250;//rectangle color

var recSize=75;//rectangle size

var canvBG;// canvas background

var canvR=50;// r value for canvas background in RGB format
var canvG=66;// g value for canvas background in RGB format
var canvB=150;// b value for canvas background in RGB format

var speed= 1;//speed

var triX1=350;//x1 coordinate for triangle
var triY1=350;//y1 coordinate for triangle

var triX2=100;//x2 coordinate for triangle
var triY2=20;//y2 coordinate for triangle

var triX3=100;//x3 coordinate for triangle
var triY3=75;//y3 coordinate for triangle

var tricol=60;//triangle color

function setup() {//setup funtion
  createCanvas(400,400)// canvas is set up at 400 by 400px
}

function draw() {//draw function
  background(canvR, canvG, canvB);//background color in RGB format
  
  stroke(circStroke);//circle stroke
  fill(circR,circB,circG);//circle color
  
  // stroke(circStroke);
  ellipse(circX,circY,circSize,circSize);// circle coordinates
  ellipse(circX+50,circY-75,circSize,circSize);//upper circle coordinates
  // fill(circR,circG,circB,135);
  
  circX= circX+speed;//circle animation
  
  stroke(recStroke);//rectangle stroke
  fill(recCol);//rectangle color
  rect(recX,recY,recSize,recSize+80);//rectangle coordinates
  
  recY= recY-speed;//rectangle animation
  
  noStroke();// no stroke for triangle
  fill(tricol);//triangle color
  triangle(triX1, triY1, triX2, triY2, triX3, triY3);// triangle coordinates
  
  triX1= triX1-speed;// triangle animation
  
  if(circX>width || circX<0) {// if statement: if circX coordinate is bigger than width and circX is less than 0.
    speed = speed*-1;//then speed is equal to speed times -1. reverse motion
  }
}