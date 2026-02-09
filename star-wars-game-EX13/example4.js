//using the pattern discussed before

/*
benefit of arrays and OOP is you can create many copies or cookies without managing individual data

the code pattern is: 

    1)set up a variable to hold the array in state varaible area
    2) add to the array using push() based on some codition 
    3) use a loop to loop through the array and call the draw/animate method for each object

*/



let chance = [true,true,false] // for arrays, it can be helpful to do intialzation of an empty for a visual remind
// ^ probability can be modelled using an array, have the array hold the possible outcomes
// can randomly select an array element by using random(arrayName)

let school = []

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");
}

function keyPressed(){
    // everytime f is pressed, a new fish is drawn 
    if(keyCode === 70){
        // instead of using a variable to hold an object, arrays can hold many objects
        // syntax: arrayName.push(new classname(parameters))
        school.push(new fish(500,300,2,random(chance))) 
    }

    
}


function draw() {

    background("lightSkyBlue");

    for(let i = 0; i < school.length; i++){
        school[i].animateFish(); 
    }

}