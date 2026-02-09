/*
inside the hireachy, we will refer to the stuff higher up the chain as the "parent" class, 
and the stuff further down as the "child" class. 

a child class is a parent class if something else inherits from it.
*/

let base;
let bowser;

function setup() {
    angleMode(DEGREES);
    rectMode(CENTER);
    createCanvas(600, 600);
    background("lightSkyBlue");

    base = new Animal(5);
    bowser = new Dog();
    Ein = new Corgi("Ein", "book");
}

function keyPressed() {

    // base.eat();
    // base.sleep();
    // base.displayAge();

    bowser.bark();
    bowser.eat();
    bowser.sleep();
    bowser.displayAge();

    Ein.bark();

}

function draw() {



}

