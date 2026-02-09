class Emitter{

    constructor(x,y){
        this.origin = createVector(x,y);
        this.particles = [];
        
    }

    addParticle(){
        this.particles.push(new Exhaust(this.origin.x, this.origin.y));
    }

    run(){

        //creates a new particle as soon as run is called 
        this.particles.push(new Exhaust(this.origin.x, this.origin.y));

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


    
}