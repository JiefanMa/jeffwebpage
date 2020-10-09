
let xposList = [100,500,1000,1200,1500];
let yposList = [400,300,600,800,900];
let yspeedList = [10,20,10,20,10];

function setup() {
createCanvas(windowWidth,windowHeight);

}




function draw() {

  background(70,55,225);

for(let i = 0; i < xposList.length; i = i +1){

circle(xposList[i],yposList[i],50);

yposList[i] = yposList[i] + yspeedList[i];

if(yposList[i] > height){
yspeedList[i] = -yspeedList[i];
}
if(yposList[i] < 0){
  yspeedList[i] = -yspeedList[i];
}
}

}
