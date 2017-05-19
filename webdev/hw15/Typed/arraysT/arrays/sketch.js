/* 
demonstrates color array. 
Code by Dawn C. Hayes March, 2017.
Typed by Luis Medina Triana
*/


var playlist = ["Spoken For", "Beautiful", "Flawless", "The Generous Mr. Lovewell", "So Long Self", "Greater", "Welcome To The New", "I Can Only Imagine"];


function setup() {
	createCanvas(1200, 800);
	background(255, 0, 0);

	for (i = 0; i < 8; i++) { 
		stroke(255);
		fill(255);
		textSize(38); 
		text(playlist[i], i * 100 + 50, i * 100 + 50); 
  }
}

function draw() {

}

