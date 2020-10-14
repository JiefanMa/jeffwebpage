
let firework1;


function preload(){
firework1 = loadImage('https://cdn2.creativecirclemedia.com/crawfordsville/original/20200702-164537-new_firework.tif.jpg')


}

function setup() {
 createCanvas(windwowWidth, windowHeight);
 tint(255,0,255)
 image(firework1,100,200,firework1.width/3,firework1.height/3)

}




function draw() {

tint(255,0,255)
image(firework1,100,200,firework1.width/3,firework1.height/3)
}
