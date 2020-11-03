let imgs = [];
//load img before the program runs
function preload() {
   imgs[0] = loadImage('https://i.imgur.com/Co34OXy.png')
   imgs[1]= loadImage('https://i.imgur.com/WWeMZFO.png')
   imgs[2]= loadImage('https://i.imgur.com/v6r3eoA.png')
   imgs[3]= loadImage('https://i.imgur.com/72mIk78.png')
}


function setup() {
createCanvas(windowWidth, windowHeight)
//If I take out noloop, it will show the picture automatically.
noLoop()


}

function draw(){
  background(200,100,100);
  //draw the img from the center of the page
imageMode(CENTER);
//store random image in a variable
let randoImg = random(imgs);
//it will choose random img
image(randoImg,width / 2, height / 2);



}
