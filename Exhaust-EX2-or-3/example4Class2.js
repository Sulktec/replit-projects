class Emitter{

    constructor(x,y,heading){
        this.origin = createVector(x,y);
        this.heading = heading; //note that this is in radians 
        this.particles = [];

    }

    addParticle(){
        this.particles.push(new Exhaust(this.origin.x, this.origin.y, this.heading*180/PI));
    }

    run(){

        //creates a new particle as soon as run is called 
        this.particles.push(new Exhaust(this.origin.x, this.origin.y,this.heading*180/PI));

        //updates the paticle position and draws it
        for(let i = 0; i < this.particles.length;i++){
            this.particles[i].update();
            this.particles[i].show();
        }
        //removes dead particles
        if(this.particles.length > 0 && this.particles[0].isDead() === true){
            this.particles.shift();
        }

    }

    updatePosition(x,y){
        this.origin.x = + x;
        this.origin.y = y;
    }

    updateHeading(heading){
        this.heading = heading;
    }

    updateAll(x,y,heading){
        this.origin.x = + x;
        this.origin.y = y;
        this.heading = heading;
    }



}