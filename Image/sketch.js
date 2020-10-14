
let firework1;
let firework2;

function preload(){
firework1 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2013_Fireworks_on_Eiffel_Tower_49.jpg/1024px-2013_Fireworks_on_Eiffel_Tower_49.jpg')
firework2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Groundfireworks-burning.jpg/800px-Groundfireworks-burning.jpg')

}

function setup() {
 createCanvas(windwowWidth, windowHeight);
 tint(255,255,255,127);
 image(firework1,100,200,firework1.width/2,firework1.height/2)
 tint(255,255,255,255);
 image(firework2,100,200,firework2.width/2,firework2.height/2)
}




function draw() {


}
