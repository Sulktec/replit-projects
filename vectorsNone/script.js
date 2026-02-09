let colorlist = ['gold', 'yellow', 'turquoise', 'red']

function setup() {
  createCanvas(600, 600);

    object = new Circle(100,400,50,3,5);
  
}

function draw() {

    clear();
    background('lightskyblue')
    object.render();
}



/*

*/