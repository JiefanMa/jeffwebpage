let appleList = []
        let bananaList = []
        let xposList = []
        let yposList = []
        let yspeedList = []
        let sizeList = []
        let numofApples = 50
        let numofbanana = 50


        function preload() {
            for (let i = 0; i < numofApples; i = i + 1) {
                appleList[i] = loadImage('https://i.imgur.com/OUcFsTV.png')
            }
            for (let p = 0; p < numofbanana; p = p + 1) {
                bananaList[p] = loadImage('https://i.imgur.com/ue1vAgJ.png')
            }
        }
        function setup() {
            createCanvas(windowWidth, windowHeight);
            for (let i = 0; i < numofApples; i = i + 1) {
                yposList[i] = 0
                xposList[i] = random(0, width)
                yspeedList[i] = random(1, 5)
                sizeList[i] = random(20, 150)
            }
            for (let p = 0; p < numofbanana; p = p + 1) {
                yposList[p] = 0
                xposList[p] = random(0, width)
                yspeedList[p] = random(1, 5)

            }
        }

        function draw() {
            background(70, 180, 30)
            imageMode(CENTER)

            for (let i = 0; i < numofApples; i = i + 1) {
                image(appleList[i], xposList[i], yposList[i], sizeList[i], sizeList[i]);
                yposList[i] = yposList[i] + yspeedList[i];
                if (yposList[i] > 1000) {
                    yposList[i] = -20;
                }
            }
            for (let p = 0; p < numofbanana; p = p + 1) {
                image(bananaList[p], xposList[p], yposList[p], sizeList[p], sizeList[p]);
                yposList[p] = yposList[p] + yspeedList[p];
                if (yposList[p] > 1000) {
                    yposList[p] = -20;
                }
            }
        }
