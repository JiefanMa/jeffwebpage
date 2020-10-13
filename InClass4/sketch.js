
let xposList = [100,500,1000,50,700];
let yposList = [100,500,300,60,70];
let sizeList = [50,20,100,60,120];

let xspeedList = [10,30,10,10,50];
let yspeedList = [10,10,10,40,50];

function setup() {
createCanvas(windowWidth,windowHeight);
}
function draw() {
  background(70,55,225);

for(let i = 0; i < xposList.length; i = i +1){
circle(xposList[i],yposList[i],sizeList[i]);

  xposList[i] = xposList[i] + xspeedList[i];
yposList[i] = yposList[i] + yspeedList[i];

if(xposList[i] > width){
xspeedList[i] = -xspeedList[i];
}
if(xposList[i] < 0){
  xspeedList[i] = -xspeedList[i];
}

if(yposList[i] > height){
yspeedList[i] = -yspeedList[i];
}
if(yposList[i] < 0){
  yspeedList[i] = -yspeedList[i];
}

}
}
