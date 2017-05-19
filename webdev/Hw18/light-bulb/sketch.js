/*
Created by PD
Modified by Luis and Hernan

Driver Luis Medina
Typer Herna Murcia

Partner with one person. Select a role of typer or driver. In 30 minutes create a code project that incorporates all of the concepts and elements learned to date.Use comments to describe the process and credit the creators/roles.rainch roles. Create a new project and repeat the process.Prepare a presentation that teaches the class a particular concept learned using your pair project to demonstrate programming principles. Code must be unique and mostly original. Use supporting resources including Wordpress or Canva to create a compelling presentation.Each team member must lead the talk for the project where they served as driver. 
*/

function setup() { //funtion setup
  createCanvas(600, 600); //create canvas at 600 by 600px
}

rain={
    x:300,
    y:300,
    diam:1,
  }
  
on={
    x:300,
    y:500,
    diam:10,
  }
  
moon={
    x:300,
    y:100,
    diam:120,
  }
  

function draw() { //function draw
  background(0); //background color
  stroke(255); //stroke color
  strokeWeight(3), // stroke weight
    noFill(); // no fill color

  var value = 0; // var value


  if (mouseX > 290 && mouseX < 310 && mouseY > 490 && mouseY < 510) { //if statement coordinates between 290-310 horizontally and 320-330 vertically
    if (mouseIsPressed) { //mouse is pressed do this
      background(204, 255, 255); //background color
      fill(random(255), random(255), random(255)); // fill color random

    }

  }
  noStroke(); //nostroke 
  ellipse(moon.x, moon.y, moon.diam); //ellipse coordinates and size

  fill(random(250))
  rect(on.x, on.y, on.diam, on.diam);
  rect(rain.x + random(255), rain.y - random(255), rain.diam, rain.diam + random(255));
  rect(rain.x - random(255), rain.y - random(255), rain.diam, rain.diam + random(255));
  rect(rain.x + random(255), rain.y + random(255), rain.diam, rain.diam - random(255));
  rect(rain.x - random(255), rain.y - random(255), rain.diam, rain.diam + random(255));
  rect(rain.x + random(255), rain.y + random(255), rain.diam, rain.diam - random(255));
  rect(rain.x + random(255), rain.y - random(255), rain.diam, rain.diam + random(255));
}