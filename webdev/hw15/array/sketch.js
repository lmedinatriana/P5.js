/* 
 Creep Lyrics with sun animation 

Create a code project that uses an array to display shapes or text on the canvas.
Created by Luis Medina Triana
*/

  // var verse = ["Creep",
  //           "When you were here before", 
  //           "Couldn't look you in the eye", 
  //           "You're just like an angel", 
  //           "Your skin makes me cry",];


function setup() {// function setup
	createCanvas(800, 800);//canvas is setup at 800 by 800px


// 	for (i = 0; i < 5; i++) { 
// 		stroke(255);
// 		fill(255);
// 		textSize(20); 
// 		text(verse[i], i * 100 + 50, i * 60 + 50); 
//   }
}

  sun= {// sun array
    x:100,//x coordinate for sun
    y:350,//y coordinate for sun
    diam:100,//size value for sun
    xspeed: .5,//speed x value
    yspeed: .5,//speed y value
  }
  
  var verse = ["Creep",//lyrics array line 1
            "When you were here before", //lyrics array line 2
            "Couldn't look you in the eye", //lyrics array line 3
            "You're just like an angel", //lyrics array line 4
            "Your skin makes me cry",];//lyrics array line 5
  
  
function draw() {//function draw
  background(64, 183, 159);//background color
  	
  noStroke()//no stroke is applied to the sun
  fill(225,225,134);//sun color
  ellipse(sun.x, sun.y, sun.diam, sun.diam);//sun coordinates and size
  
  if (sun.x > 0 || sun.x < height && sun.y > 0 || sun.x < height) {//if statement
    sun.x = sun.x + sun.xspeed;// it makes sun move horizontally to the right
    sun.y = sun.y + sun.yspeed;//it makes sun move vertically downward
  }
  
  	for (i = 0; i < 5; i++) { //for statement for lyrics
		stroke(255);//stroke color
		fill(255);//text color
		textSize(20); //text size
		text(verse[i], i * 100 + 50, i * 100 + 80); //it makes text spread diagonally on the canvas
  }

}

