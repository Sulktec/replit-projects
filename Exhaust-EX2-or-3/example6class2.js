//to make a child class of another class, use the extends word.
// when we extend something, we inherit all attributes and methods

class Dog extends Animal { // unlike real life a child class only 1 parent class.

    constructor() {

        super(10); // super in csontructor calls contructor from parent class
        /*
            ^^^^^
            put in arguments for the parent constructor or the program won't work properly

            constructor(age) { 
                this.age = age;

            }

            we must put super((any number)) or it'll not work properly
        */
    }

    bark() {

        print("woof")
    }
}