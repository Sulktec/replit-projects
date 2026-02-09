class BirdObject {

    constructor(x,y,w,hi,he,img,ex) {

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = hi;
        this.health = he;
        this.image = img;
        this.explosion = ex;
        this.playerAlive = true; 
        
    }

    setCoords(mX, mY) {

        this.x = this.x + mX;
        this.y = this.y + mY;
        
    }

    getX() {


        return this.x;
    }

    getY() {


        return this.y;
    }

    setHealth(v) {

        this.health = this.health + v;
    }

    healthCheck() {

        if (this.health <= 0) {

            this.image = this.explosion
            this.playerAlive = false;
        }
        
    }

    getLife() {


        return this.playerAlive;
    }


    getHealth() {


        return this.health;
    }

    bird() {

        image(this.image,this.x, this.y, this.width, this.height);
        
    }
    

    render() {

        this.bird();
        
    }

    
}

class Projectile {

    constructor(x,y,w,h,s) {

        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.speed = s;
    }

    setCoord(x,y) {

        this.x = x;
        this.y = y;
        
    }

    drawProjectile() {

        fill("grey")
        rect(this.x, this.y, this.width, this.height);
        
    }

    moveProjectile() {
    
        this.x = this.x + this.speed;
        
    }

    render() {

        this.drawProjectile();
        this.moveProjectile();
        
    }
    
}