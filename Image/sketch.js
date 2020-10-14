
let firework1;
let firework2;

function preload(){
firework1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Groundfireworks-burning.jpg/800px-Groundfireworks-burning.jpg')
firework2 = loadImage('https://en.wikipedia.org/wiki/Fireworks#/media/File:2013_Fireworks_on_Eiffel_Tower_49.jpg')

}

function setup() {
 createCanvas(windwowWidth, windowHeight);
 tint(255,255,255,127)
 image(firework1,100,200,firework1.width/3,firework1.height/3)
 tint(255,255,255,255)
 image(firework2,100,200,firework2.width/3,firework2.height/3)
}




function draw() {


}
