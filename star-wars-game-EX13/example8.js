/*
this example will demonstrate the following:

    push()
    pop()
    shift()

    

*/
//the array is delcared and initialized with 4 values
let array1 = [25,26,27,28];

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    //initial details: 
    print("array length is: " + array1.length); //arrayName.length will return the number of elements inside of the array
    print("the array contains: ");
    print(array1);
}


function keyPressed(){


    if(keyCode === 70){ //f is 70, will demonstrate push()
        //add a random value to the end of the array 
        //syntax: arrayName.push(thing to be pushed)
        array1.push(3);
    }


    
    if(keyCode === 71){// g is 71, will demonstrate pop()
        //syntax: arrayName.pop();
        array1.pop();
    }

    if(keyCode === 68){ // d is 68, will demonstrate shift()
        //syntax: arrayName.shift();
        array1.shift();
    }


    //initial details: 
    print("array length is: " + array1.length); //arrayName.length will return the number of elements inside of the array
    print("the array contains: ");
    print(array1);

}

function draw() {




}