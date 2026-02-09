// do not make the file name the same as the class name


// to make the class, use the class keyword followed by name
class fish 
{
// a class has a contructor, this initizializes the attributes 
// every class needs this, common OOP convention 

   

    
    /* this is the basic skeleton of a constructor
    constructor() <- can put variable so user can set attributes during creation
    {
        //attributes are created in here, ex this.age creates an age attribute 
    }
    */

    constructor(x,y,colour){
        this.fishX = x;  // generally good to have different names for attributes and variables
        //want to avoid this.x = x
        this.fishY = y;
        this.fishColour = colour;
    }

    /*
        skeleton of a class method
        methodName(){
        
        }
    */

    drawFish()
    {
        let x = this.fishX;
        let y = this.fishY;
        
        fill(this.fishColour);
        ellipse(this.fishX,this.fishY,120,60);
        triangle(x+60,y, x+80,y-20, x+80,y+20);
    }
    
}