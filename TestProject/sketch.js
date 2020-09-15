
let xpos = 0;
let ypos = 0;

let xpos2 = 150;
let ypos2 = 75;

function setup() {
  // put setup code here
createCanvas(500,500);
// three-digit hexadecimal RGB notation

angleMode(DEGREES);
}




function draw() {
  background('#fae');
  // integer RGBA notation
noStroke();
  fill('rgba(0,255,0, 0.25)');
  circle(100,100,70);
push();
  rotate(30);
  noStroke();
fill(color(0, 0, 255));
rect(0, 0, 60, 60);
pop();
push();
rotate(15);
rect(300,60, 60);
rect(200,60, 60);
pop();

push();
translate(400,0)
rotate(45);
rect(0,60, 60);
pop();
// R, G & B integer values
fill(255, 204, 0);
rect(xpos,ypos,50)
xpos = xpos + 4
ypos = ypos + 3

rect(xpos-100,ypos+100,50)

circle(xpos2,ypos2,60);
xpos2 = xpos2 + 3
ypos2 = ypos2 + 3


















}
