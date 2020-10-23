let img;

function preload() {
   img = loadImage('https://i.imgur.com/0PSBwrg.jpg')

}


function setup() {
createCanvas(windowWidth, windowHeight)
image(img,0,0)
partImage = get(120,300,150,150);
background(20,200,200)



}

function draw(){


for(let i = 0; i < width; i = i + 150){
for(let j = 0; j < height; j = j +150){
  image(partImage,i+random(1,5),j+random(1,5));
}


}



}
