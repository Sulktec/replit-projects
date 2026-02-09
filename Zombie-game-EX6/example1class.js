//a helper class groups together relevant methods, AKA they do something similiar
/*
Methods of a helper class can be accessed without creating an object, known as static methods

in this example, the collisions class can contain collisions functions to detect: 
    1)circle, circle collisions
    2) rect rect collisions
    3) circle rect collisions

*/

class Collisions{

    constructor(){
        
    }

    //the static keyword makes the method a static method, can be called without an object of the class
    static collisionCheck(x1,y1,r1, x2,y2,r2){  // these are properties of 2 different circles

        //this return function will use one point of entry, one point of exit
        //following this is not mandatory 

        //first thing, create the varaiable to be returned 
        let result = false; 

        // to calculate collision, need distance between centre of circles
        let centreDistance = dist(x1,y1, x2,y2); //x1,y1 is the centre of circle 1, x2,y2 is center of circle 2

        //2nd thing needed, find total radii of both circles
        let totalRadius = r1+r2;


        //last step, compare the two values
        if(totalRadius > centreDistance){
            result = true;
        }


        //second thing, near the end bracket, return result
        return result;
        // return functions are used to get information out of a function, due to scope, 
        //others functions can't see result of calc
    }
}