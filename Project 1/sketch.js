        let points = [];
        let colors = [];

        var selected = [25, 25];
        function setup() {
            createCanvas(600, 600);
            rectMode(CENTER);
            background(100);
//I use Push  because it can add one or more elements to the end of an array and return a new length.
            for (let i = 25; i < width; i += 50) {
                for (let j = 25; j < height; j += 50) {
                    colors.push(color(random(255), random(255), random(255)));
                    points.push([i, j]);
                }
            }

        }

        function draw() {
//This means when the distance between the mouse and the square less than 25, the squre will be filled with white.
//and when choose the square by the mouse, the square will be filled with white.
//I searched in the Internet. I know that we need to use what we learned. But I try to make the work be better.
//so I mixed the tings what I learned with the searched information.
            for (let i = 0; i < colors.length; i++) {
                fill(colors[i]);
                //Judge mouse passing
                let dis = dist(mouseX, mouseY, points[i][0], points[i][1]);
                if (dis < 25) {
                    fill(255);
                }
                //Judge whether it is selected or not
                if (points[i][0] == selected[0] && points[i][1] == selected[1]) {
                    fill(255);
                }
                rect(points[i][0], points[i][1], 50, 50);
            }
            //Click to change the selected square
            if (mouseIsPressed) {
                for (let i = 0; i < colors.length; i++) {
                    let dis = dist(mouseX, mouseY, points[i][0], points[i][1]);
                    if (dis < 25) {
                        selected = points[i];
                    }
                }
            }
//selected function is the variable name. I mixed "if" funtion with selected funtion(which I searched)
            if (keyIsPressed&keyCode === 38) {
                //up
                selected[1] -= 50;
                if (selected[1] < 0) {
                    selected[1] += 600;
                }
            }
            if (keyIsPressed&keyCode === 39) {
                //right
                selected[0] += 50;
                if (selected[0] > 600) {
                    selected[0] -= 600;
                }
            }
            if (keyIsPressed&keyCode === 40) {
                //down
                selected[1] += 50;
                if (selected[1] > 600) {
                    selected[1] -= 600;
                }
            }
            if (keyIsPressed&keyCode === 37) {
                //left
                selected[0] -= 50;
                if (selected[0] < 0) {
                    selected[0] += 600;
                }
            }
        }
