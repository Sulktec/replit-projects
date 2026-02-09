class ExampleMethod{

/*
Cover:
1) general form 
2) order of execution/flow: show how stuff can be moved
*/






    
 



    static void greetingMessage() {
        System.out.println("Hello world!");
    }

    static void farewellMessage() {

        System.out.println("Goodbye World!");
        
    }

     
    
    static void printString(String kool) {

        System.out.println(kool);
        
    }

    static void addition(int num2, int num1, int num3) {

    System.out.println("the sum is " + ((int)num1 + num3 + num2));
        
    }



       public static void run(){
    //code starts here
        
        greetingMessage();
        System.out.println("");
        farewellMessage();

        printString("hello");

        addition(5,7,10);
    //code ends here
    }//run

    
    
    

}//class


/*
exercise: 

create another method. place it in various areas of the code
*/