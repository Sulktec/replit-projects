let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let walker;

function setup() {
  createCanvas(700, 700);
  background(255);

    walker = new Walker();
}

function draw() {
      walker.setterStep(mouseX, mouseY);
      walker.step();
      walker.show();
 
}