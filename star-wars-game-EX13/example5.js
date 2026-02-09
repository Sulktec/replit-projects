//using the pattern discussed before

/*
    up to this point, once the object has been created
    its attributes don't change

    they can be changed using setter and getter methods
        #for a video game context, updating health or stamina of your character
        (elden)

*/


//create a varaible to track state, in this case an object
let ourFish;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    // to create a new object follow variable = new objectname(arguments)
    ourFish = new fish(800, 300, .8, true)
}

function keyPressed(){
    // everytime f is pressed, a new fish is drawn 
    if(keyCode === 70){
        // using this keycode, change the fishY value when f is pressed 

        //to call a method from an object, it goes: objectVariableName.methodName(parameters)
        ourFish.setFishy(500);
    }


}


function draw() {

    background("lightSkyBlue");
    ourFish.animateFish();


}