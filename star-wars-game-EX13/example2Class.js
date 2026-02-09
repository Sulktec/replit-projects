

class fish
{

/*
    classes act as a way to group relevant information and functionality together

    1) class methods generally operate on data that the class holds

    notes: 
    class methods can use other class methods

    The "main" file acts as a "world" and interacts with the objects through the methods
*/


    constructor(userChoiceX, userChoiceY, size, fishSpeed){
        this.x = userChoiceX;
        this.y = userChoiceY;
        this.scale = size; 
        this.speed = fishSpeed; // make a new this.speed to add speed control to fish
    }

    //draw fish is included because you need x,y, scale to drawl the fish
    //draw fish follows the rule of thumb that class methods operate on attributes
    drawFish(x,y,s)
    {
        //body
        fill("green");
        ellipse(x,y,120*s,60*s);

        //tail
        triangle(x + (60*s), y, x + ((60 + 20)*s), y - (20*s), x + ((60 + 20)*s), y + 20*s);
    }// draw fish must be called within the class before a fish can be drawn 


    animateFish() // <- parameters determine how methods are used. no paramerets = idiot proofing
    { // with the newfunctions, can call them in animation sequence 

        //update the position 
        this.moveFish();
        //check boundaries
        this.resetFish();
        
        //to draw the fish, call drawFish function, but need to use this. 
        this.drawFish(this.x,this.y,this.scale);
        
    }

    moveFish(){ // <- left blank, only does 1 thing, moveFish
        this.x = this.x-2; 
    } // every method should only 1 thing

    
    resetFish(){
        if(this.x< -100){
            this.x = 800;
        }
    }


    
}