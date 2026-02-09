class Animal { // parent class. basic stuff. stuff every animal must have. Child classes inherit this classes properites

    constructor(age) { // we can ser age at time of creation
        this.age = age;
        
    }

    // the design consideration for what goes into a base/parent class is the code is general, and used by stuff further the chain/hirearchry

    //make 2 methods, eat and sleep, because all animals eat and sleep. Code will be reused.


    eat() {

        print("yum");
    }

    sleep(){

        print("zzzzzzzzzzzz")
    }

    displayAge() {

        print(this.age)
    }
}