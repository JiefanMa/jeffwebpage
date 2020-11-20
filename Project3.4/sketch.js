//declaration of variables angleM and offsetM
let angleM;
let offsetM;

function setup() {
  //setting Canvas background color, dimensions and angle unit
  createCanvas(windowWidth, windowHeight);
  background(150,90,90);
  noStroke();
  angleMode(DEGREES);
  offsetM = 0.0;
  noLoop();//used in this case to avoid distortion

}

function draw() {

  //spacing between individual rectangles is 110 for both width and height of canvas
      for(let i = 0;i < width; i = i + 110){
      for(let j = 0;j < width; j = j + 110){

  //save and transform reactangle drawing
      push();
      translate(i,j);

   //reactangles are aligned through an angle of 360 degrees upon refreshig the code

      angleM = noise(offsetM)*360
      rotate(angleM);
      fill(0,0,100,100);
      rect(0, 0, 40, 80);
      offsetM = offsetM + 0.01;

      pop();

    }
  }


}
