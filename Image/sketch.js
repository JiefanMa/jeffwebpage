
let img;
let img2// 声明变量 'img'

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/2013_Fireworks_on_Eiffel_Tower_49.jpg/1024px-2013_Fireworks_on_Eiffel_Tower_49.jpg');
  img2 = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Groundfireworks-burning.jpg/800px-Groundfireworks-burning.jpg')
  // 加载图像



}

function draw() {
  // 在坐标(0, 0)，显示原图大小的图像
  image(img,0,0);
  // 在坐标(0, 高度/2)，显示一半原图大小的图像
  tint(255,0,200,120)
  
  image(img2, 10, 50, img.width / 2, img.height / 2);
}
