import java.util.Scanner;

class Ex6_1MethodLocationRevisted {


    public static void myMethod(){
        System.out.println("Hello world!");    
    }


    public static void addTwo(int num1, int num2) {
        System.out.println(num1 + num2);
    }



    
    public static void run(){
    //code starts here
        Scanner myObj = new Scanner(System.in);

        myMethod();
        addTwo(7, 6);

        
    //code ends here
    }//run

}//class