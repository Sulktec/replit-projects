import java.util.Scanner;

class Ex6_2MethodScope {

    public static void myMethod() {
        System.out.println("Hello world!");
    }

    public static void addTwo(int num1, int num2) {
        System.out.println(num1 + num2);
    }

    public static void run() {
        // code starts here
        Scanner myObj = new Scanner(System.in);

        int v1 = 6;
        int v2 = 8;
        int v3 = 5;

        if (v3 == 5) {
            addTwo(v1, v2);
        }

        // code ends here
    }// run

}// class