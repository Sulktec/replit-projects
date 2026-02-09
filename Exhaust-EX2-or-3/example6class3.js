class Corgi extends Dog{

    constructor(name, favouriteToy) {

        super(); // dog contructor doesn't take in any parameters so nothing goes in super.
        
        this.name = name;
        this.ft = favouriteToy;

        
    }

    bark() {

        print("yap")
    }
}