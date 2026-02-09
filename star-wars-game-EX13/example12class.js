
/*
1)OOP is a way to group related data and functions together
2) it also also a different way of thinking of code. 
    a)code isn't a series of instructions, it's objects
    interacting 
3) OOP promotes eaiser maintenance 

*/

class Pillar{
// a class acts as a template for a real life object
// a class abstracts key attributes of the real life object
// ex: might want to get attributes of a square like x,y,width,height

        constructor(userx,usery,width, height){ 
        //this is where the key attributes are set and created (happens ones)
            this.x = userx;
            this.y = usery;
            this.width = width;
            this.height = height;
        }

    /*
    note that these values are only changed
    when they are first set, or through 
    setter and getter methods 

    this promotes testability, and the ability 
    to "silo" code to a class. because setter and
    getter methods allow us the assumption that 
    the attributes will not change unexpectadely 
    */

    // ex: use setter and getter medthod so we know where values are getting trasnfered. Clears confusion and makes coding less tedious.

    drawSquare(a,b,c,d){ // <- has parameters, can be used stand alone 
        fill("blue");
        rect(a,b,c,d);
        // a stand alone function does not use class attributes
        // these do stuff not set or get values.
    }

    setCoords(x,y) { // don't need to know what this is set for
    // just know that it's called when needed
        // allows reuse of this function without making a new function.
        // better to create a general function then use parameters to make it specific to make coding easier.
        this.x = x;
        this.y = y;

        // this sets the value doesn't do anything. Allows to continue using the idea that we only use values that are setted.
    }


    renderShape(){ // <- no parameters will do something specific
        //can call methods from within the class
        // can also use attributes directly

        this.drawSquare(this.x, this.y, this.width, this.height);

        // these do stuff not set or get values.
    }

    
}

/*

if a class only contains it's own data attributes and methods that operate on attributes it limits errors to just that loaction making debugging more efficient.

*/