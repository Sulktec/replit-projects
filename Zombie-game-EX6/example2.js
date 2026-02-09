//array lab 



let array1 = [];
let array2 = [];

let accumulator1 = 0
let accumulator2 = 0

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");


    print("array1 contains: ");
    print(array1);

    print("array2 contains: ");
    print(array2);
}


function keyPressed(){


    if(keyCode === 70){ //f is 70, will demonstrate push()

        array1.push(accumulator1);
        accumulator1++; 
    }

    if(keyCode === 72){ //h, will demonstrate push()

        array2.push(accumulator2);
        accumulator2++; 
    }


    if(keyCode === 65){ //a is 65, will splice array 1
        let choice =  Number(prompt("enter index to remove from array 1"))
        array1.splice(choice,1)
    }

    if(keyCode === 83){ //a is 65, will splice array 2
        let choice =  Number(prompt("enter index to remove from array 2"))
        array2.splice(choice,1)

    }
    

    //initial details: 

    print("array 1 contains: ");
    print(array1);

    print("array 2 contains: ");
    print(array2);

}

function draw() {




}