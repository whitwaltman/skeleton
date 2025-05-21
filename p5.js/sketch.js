function setup() {
    createCanvas(600, 600);
    // creates a square shape with a thin black border around the canvas
    square(0, 0, 600); // x, y, size
    // start with the mouse coordinates outside of the canvas so it doesn't render a circle on setup
    mouseX = -300;
    mouseY = -300;
}

function draw() {
    // background('magenta');
    // textSize(40);
    // text('Hello, world!', 40, 360);

    // when mouse button is pressed, circles turn black
    if (mouseIsPressed === true) {
        fill(0);
    } else {
        fill(255);
    }

    // white circles drawn at mouse position
    circle(mouseX, mouseY, 100);
}
