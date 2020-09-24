function setup() {
  // put setup code here
createCanvas(windowWidth,windowHeight);
background(0,0,225);
// three-digit hexadecimal RGB notation
for (let counter=0; counter < height;counter = counter + 2){
let xlen = random(0,width/2);
strokeWeight(3);
let rcol = random(0,255)
let gcol = random(0,255)
let bcol = random(0,255)
stroke(rcol,gcol,bcol)
line(0,counter,xlen,counter)

}

}






function draw() {
  for (let counter=0; counter < width;counter = counter + 15){
  let rcol = random(0,255)
  let gcol = random(0,255)
  let bcol = random(0,255)
  fill(rcol,gcol,bcol)
    rect(counter,5,20)
    circle(counter,counter,20)
    square(5,counter,20)
}
}
