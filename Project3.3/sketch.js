let x_coordinate = 500.0;
let plot_x = 0.0;


function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {

    // Get noise with x coordinate
    x_noise = noise(x_coordinate) * 30;

    // Plot the point with random noise
    strokeWeight(10);
    point(plot_x, x_noise);

    // Increment the x coordinate
    x_coordinate++;

    // Increase the x coordinate
    // for plotting
    plot_x++;
}
