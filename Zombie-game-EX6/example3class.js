class OurSquare{

    constructor(x,y,w,h,colour){
        //instead of this.x, this.y, we will create a vector
        this.position = createVector(x,y); 
        //this creates a vector object, and stores it in the attribute position
        /*
        when a shape is created using our square, our square also creates a vector                 object for itself
        */
        this.velocity = createVector(0,0);
        this.width = w;
        this.height = h;
        this.colour = colour;
        
    }


    drawOurSquare(){
        fill(this.colour);
        rect(this.position.x, this.position.y, this.width, this.height);
        //look at the syntax for using vector values
        //syntax: vectorVariableName.x  or .y to get the relevant x or y values 
    }

    applyForce(appliedVector){ // appliedVector is expecting a 2d vector to be passed in 
        // can see the benefit of vectors, instead of adding to separate x,y varaibles
        //you just add 2 vectors together 
        
        this.velocity.add(appliedVector);
        
    }

    updatePosition(){
        this.position.add(this.velocity);
    }

    
}