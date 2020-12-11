
var rain = [];
var rainingNow = false;
var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (i = 0; i < 100; i++) {
    rain[i] = new Rain(random(50, windowWidth), random(0, -8000));
  }
}

function draw() {
  background(bgcolor);
  ground();

  if (rainingNow == true) {
    //background(100);
    for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  }
}

function ground() {

  fill(170, 150, 146, 240);
  rect(0, 530, windowWidth, 530);
}

function Rain(x, y) {
  this.x = x;
  this.y = y;
  this.length = 15;
  this.r = 0;
  this.opacity = 200;

  this.dropRain = function() {
    noStroke();
    fill(255);

    ellipse(this.x, this.y, 3, this.length);
    this.y = this.y + 6
    if (this.y > 540) {
      this.length = this.length - 5;
        }
    if (this.length < 0) {
      this.length = 0;
    }
  }

  this.splash = function() {
    strokeWeight(2);
    //stroke(245, 200/frameCount);
    stroke(245, this.opacity);
    noFill();
    if (this.y > 540) {
      ellipse(this.x, 550, this.r * 2, this.r / 2);
      this.r++;
      this.opacity = this.opacity - 10;

      //keep the rain dropping
      if (this.opacity < 0) {
        this.y = random(0, -100);
        this.length = 15;
        this.r = 0;
        this.opacity = 200;
      }
    }
  }
}

function mousePressed() {
    rainingNow = true;
    bgcolor = (100, 100, 100);
}


var bgcolor = (100, 100, 100);

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgcolor);

  ground();
  fill(170, 150, 146, 240);
  rect(0, 530, windowWidth, 530);

  if (mousePressed == false) {
      for (i = 0; i < rain.length; i++) {
      rain[i].dropRain();
      rain[i].splash();
    }
  } else {
    drawSun();
      }

      fill(60, 145, 57);
	ellipse(50, 580, 1000, 600);

  fill(69, 168, 66);
  ellipse(450, 600, 1900, 400);
}

function ground() {
  //noStroke();
  fill(170, 150, 146, 240);
  rect(0, 730, windowWidth, 730);
}

function mousePressed() {
    rainingNow = false;
  bgcolor = (160, 209, 230);
}

function drawSun() {

  fill(245, 187, 87);
    stroke(245, 187, 87);
    push();
    translate(100, 80);
    rotate(radians(frameCount / 2));
    ellipse(0, 0, 60, 60);
    line(0, -60, 0, -40);
    line(0, 40, 0, 60);
    line(-45, -45, -30, -30);
    line(45, -45, 30, -30);
    line(-60, 0, -40, 0);
    line(40, 0, 60, 0);
    line(-45, 45, -30, 30);
    line(45, 45, 30, 30);
    pop();
    noFill();
}
