//initalizing
let ypos;
let ypos1;
let ypos2;
let ypos3;
let ypos4;
//reference location
let offset = 0.0;

function setup() {
  createCanvas(windowWidth, windowHeight);//length and width of canvas
  frameRate(1);
}
//balls assume random numbers along the height of canvas
//smaller offset ensures they are closely packed
function draw() {
  background(20,150,20);

  for(let i = 0;i < width; i = i + 20){
    ypos1 = noise(offset)*height;
    fill(0);
    circle(i,ypos1,20);
    offset = offset + 0.009;
  }

  for(let i = 0;i < width; i = i + 40){
    ypos2 = noise(offset)*height;
    fill(255,255,255);
    circle(i,ypos2,40);
    offset = offset + 0.009;
  }

  for(let i = 0;i < width; i = i + 10){
    ypos3 = noise(offset)*height;
    fill(0,0,255);
    circle(i,ypos3,10);
    offset = offset + 0.009;
  }

  for(let i = 0;i < width; i = i + 5){
    ypos4 = noise(offset)*height;
    fill(255,10,18);
    circle(i,ypos4,5);
    offset = offset + 0.009;
  }

  for(let i = 0;i < width; i = i + 60){
    ypos = noise(offset)*height;
    fill(127,127,128);
    circle(i,ypos,60);
    offset = offset + 0.009;
  }

}
