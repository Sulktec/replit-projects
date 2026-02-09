import java.util.Scanner; // Import the Scanner class

class Ex7_AppendingStrings {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here

        String temp = "";

        String temp2 = "h";

        String temp3 = "i";

        temp = temp + temp2;
        System.out.println(temp);
        temp = temp + temp3;

        System.out.println(temp);

        temp = temp + "s";

        System.out.println(temp);

        String[] row1 = { "#", "#", "N", "#", "#" };

        temp = temp + row1[0];
        System.out.println(temp);
        temp = temp + row1[1];
        System.out.println(temp);
       


        // code ends here
    }// run

}// class
