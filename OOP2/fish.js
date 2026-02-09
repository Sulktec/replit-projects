function fish(userChoicex, userChoicey){   // <- this is the class name, or template name
//^ the above is also the constructor. 

//to set the attributes of our template, use this._variable name_ 

        this.x = userChoicex; //creates a variable that will track x 
        this.y = userChoicey; 
  


// to create a method/function for the class, use this._function name_ 
//these are not static functions, so an object has to be created before we can use them 

    this.drawFish = function(){
        clear();
        background('lightSkyBlue');

        x = this.x;
        y = this.y;

        fill('green');
        ellipse(x,y,120,60);
        triangle(x+60,y,x+60+20,y-20, x+60+20,y+20);




    }




}