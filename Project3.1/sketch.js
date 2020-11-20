//starting reference
let offset = 0.0;


function setup() {
  createCanvas(windowWidth, windowHeight);//width and height of canvas
  noLoop();
}

function draw() {
  background(10,110,110);//background color of canvas


  stroke(69);  //darker color
    for (let i = 0; i < width; i = i + 1){

    let lineh = height - noise(offset)*222;
    line(i,height,i,lineh);
    offset = offset + 0.005;
      }

  stroke(47);
    for (let i = 0; i < width; i = i + 1){

    let lineh = height - noise(offset)*397;
    line(i,height,i,lineh);
    offset = offset + 0.005;
      }

  stroke(33);//ligher color
    for (let i = 0; i < width; i = i + 1){

    let lineh = height - noise(offset)*477;
    line(i,height,i,lineh);
    offset = offset + 0.004;
      }

}
