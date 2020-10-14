
let firework1;
let firework2;

function preload(){
firework1 = loadImage('https://cdn2.creativecirclemedia.com/crawfordsville/original/20200702-164537-new_firework.tif.jpg')
firework2 = loadImage('https://gray-koln-prod.cdn.arcpublishing.com/resizer/HDkeCkKcXHLiBlhTME2c_38CFTo=/1200x675/smart/cloudfront-us-east-1.images.arcpublishing.com/gray/TELKJAXWINHLPJC5HJRN4ZGQLQ.jpg')

}

function setup() {
 createCanvas(windwowWidth, windowHeight);
 tint(255,0,255,)
 image(firework1,100,200,firework1.width/3,firework1.height/3)
image(firework2,100,200,firework2.width/3,firework2.height/3)
}




function draw() {


}
