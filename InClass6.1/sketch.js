let img;

function preload() {
   img = loadImage('https://i.imgur.com/0PSBwrg.jpg')

}


function setup() {
createCanvas(windowWidth, windowHeight)
background(20,200,200)




}

function draw(){
  img.loadPixels();

  for(let x = 0; x < img.width; x = x + 10){
    for(let y = 0; y < img.height; y = y + 10){
      let i = ( x+ y * img.width)*4

      let pixr = img.pixels[i+0]
      let pixg = img.pixels[i+1]
      let pixb = img.pixels[i+2]
      let pixa = img.pixels[i+3]

      fill(pixr,pixg,pixb,pixa)
      circle(x,y,10)
    }
  }



}
