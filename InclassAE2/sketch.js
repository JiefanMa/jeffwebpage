var obj = {};
        var xSize = 5;
        var ySize = 5;
        function setup() {
            frameRate(40);
            createCanvas(windowWidth, windowHeight);
            obj = {
                x: random(width),
                y: random(height),
                r: 30
            }
        }

        function draw() {
            background(20,233,255);
            fill(203,20,255);
            ellipse(obj.x, obj.y, obj.r * 2);
            obj.x += xSize;
            obj.y += ySize;
            if (obj.x < 30 || obj.x > width - 30) {
                xSize = -xSize;
            }
            if (obj.y < 30 || obj.y > height - 30) {
                ySize = -ySize;
            }
        }


        function mousePressed() {
            var dis = dist(obj.x, obj.y, mouseX, mouseY);
            if (dis < 30) {
                obj.x = random(width);
                obj.y = random(height);
            }
        }
