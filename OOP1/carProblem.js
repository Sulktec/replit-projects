let carOne;

function setup() {
  createCanvas(600, 600);
  background('lightSkyBlue');
    carOne = new carTemplate(300,300,100,50,5);

}

function draw() {

    clear();
    background('lightSkyBlue');

    carOne.drawCar();
    carOne.moveCar();
    carOne.resetCar();

}

