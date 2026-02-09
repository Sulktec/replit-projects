let colorlist = ['gold', 'yellow', 'turquoise', 'red']
let centerCircle;
let centerStem;
let wheelObject;
let wheelObject2;
let wheelObject3;
let wheelObject4;
let wheelObject5;

function setup() {
      createCanvas(700, 700);
       angleMode(DEGREES);
       rectMode(CENTER);

      background('lightskyblue');

    centerCircle = new center(0,0,50, 'black');
    centerStem = new stem(0,200,20, 400, 'green');
    wheelObject = new wheel(9, 50, 0, 5, 2,5);
    wheelObject2 = new wheel(9, 50, 72, 5, 2,0);
    wheelObject3 = new wheel(9, 50, 72*2, 5, 2,3);
    wheelObject4 = new wheel(9, 50, 72*3, 5, 2,10);
    wheelObject5 = new wheel(9, 50, 72*4, 5, 2,2);
}

function draw() {
    background('lightskyblue');

    translate(width/2 -25 , height/2);

    noStroke();

    centerStem.makeStem();

    // fill("green");
    // rect(0, 200, 20, 400);

    centerCircle.makeCenter();

    wheelFunction()
}

function wheelFunction() {

    push()

    wheelObject.spinWheel()
    wheelObject2.spinWheel();
    wheelObject3.spinWheel();
    wheelObject4.spinWheel();
    wheelObject5.spinWheel();

    pop()


    
}