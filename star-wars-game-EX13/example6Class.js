

class Walker{

    constructor(){
        this.x = 300; // this starts the object in the centre of the screen 
        this.y = 300;
        this.pathX = ["left", "left", "right"];
        this.pathY = ["up", "up", "down"];


        
    }


    show(){ // show goes in the walker class, because is operates on the walker x,y data 

        // our walker will be a small circle
        fill("gold");
        circle(this.x,this.y,8);  

        /*
        notice the method takes no parameters, all data is pulled from a global context within the class

        so the function is meant to be used as is by the user. 
        */
        
    }

    step(){
        let choice = floor(random(4)); // say we have 4.999, floor will round that to 4
        // random(4) will give a number between 0,3.99999
        //floor(random(4)) will give 0,1,2,3
        //random() produces a uniform distrubution 
        // the probabilities are attached to the object because they are object data


        // probability = event/total outcomes 
        if(choice === 0){ // event = number being 0, total outcomes is 0,1,2,3. probability = 1/4
            this.x ++;
        }

        else if(choice === 1){
            this.x --;
        }

        else if(choice === 2){
            this.y++;
        }

        else{
            this.y--;
        }       
    }

    step2(){// will show method 1 of non uniform distribution 
    // using an array. Non uniform distribution will bias a choice by giving more events 

        let choice = ["left", "left", "right"];
    
        if(random(choice) === "left"){
            this.x--;
        }
    
        if(random(choice) === "right"){ // random(choice) will pick one of the 3 elements randomly in a uniform distribution
            this.x++;
        }

        
    }



    step3(){// will show method 1 of non uniform distribution 
    // using an array. Non uniform distribution will bias a choice by giving more events 

        if(random(this.pathX) === "left"){
            this.x--;
        }

        if(random(this.pathX) === "right"){ // random(choice) will pick one of the 3 elements randomly in a uniform distribution
            this.x++;
        }

        if(random(this.pathY) === "up"){
            this.y--;
        }

        if(random(this.pathY) === "down"){ // random(choice) will pick one of the 3 elements randomly in a uniform distribution
            this.y++;
        }
    }


    collisionCheck(){

        if(this.x < 200){
            this.pathX = ["right","right","right","left"];
        }


        if(this.y < 200){
            this.pathY = ["up","down","down","down"];
        }
        
    }
    
    
} 