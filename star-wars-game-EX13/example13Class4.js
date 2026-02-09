class Collision {

    constructor() {


    }

    static shipCollision(x1,y1,r1,x2,y2,r2) {

        let result = false;

        let distanceBetweenPoints = dist(x1,y1,x2,y2); 

        let totalRadius = r1 + r2;

        if(totalRadius > distanceBetweenPoints){
            result = true;
        }

        return result;

    }


    static enemyCollision(x1,y1,r1,x2,y2,r2) {
        
        let result = false;

        let distanceBetweenPoints = dist(x1,y1,x2,y2); 

        let totalRadius = r1 + r2;

        if(totalRadius > distanceBetweenPoints){
            result = true;
        }

        return result;

    }

}