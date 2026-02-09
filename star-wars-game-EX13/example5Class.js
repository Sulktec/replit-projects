
//start with making the class skeleton: class classname{}
class fish
{

    constructor(userChoicex, userChoicey, size, hasBow){
        this.x = userChoicex;
        this.y = userChoicey;
        this.scale = size;
        this.bow = hasBow;  
    }


    drawFish(x,y,s)// <- notice that the method takes parameters, can be used standalone 
    {
        //body
        fill("white");
        ellipse(x,y,120*s,60*s);

        //tail
        triangle(x + (60*s), y, x + ((60 + 20)*s), y - (20*s), x + ((60 + 20)*s), y + 20*s);
    }// draw fish must be called within the class before a fish can be drawn 

    drawBow(bx,by,s){ // notice that the method takes parameters, can be used standalone
        fill('red');
        triangle(bx,by, bx+12*s,by-12*s, bx+12*s,by+12*s);
        triangle(bx,by, bx-12*s,by-12*s, bx-12*s,by+12*s); 
        circle(bx,by,8*s);
    }

    moveFish()
    {
        this.x = this.x - 2;
    }

    resetFish()
    {
        if(this.x < -300){
            this.x = 800;
        }
    }


    animateFish() //<- no parameters, does exactly what the name describes
    {
        //this method will combine several methods from the class
        this.moveFish();
        this.resetFish(); //<- can be helpful to keep calculations in same area
        this.drawFish(this.x,this.y,this.scale);
        if(this.bow === true){
            this.drawBow(this.x -(15*this.scale), this.y-(25*this.scale),this.scale)
            //^ reason why bow was added, is because fish in this world have bowss
        }


    }

    //setter and getter methods operate on fish attributes, so the methods should be in the fish class


    //to get the fish x value
    getFishX(){
        return this.x; 
    }

    /*
    the benefit of a setter or getter method is you can perform checks on the new data before setting it or sending it
    */
    //to set a value
    setFishy(userInput){ 
        if(userInput<600 && userInput > 0){
            this.y = userInput;       
        }   
    }

}