 import java.util.Scanner; // Import the Scanner class

class Ex4_1dArrayLoop {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here


        
        String[] toyotaModels = new String[4];
        //String[] toyotaModels = {};
        toyotaModels[0] = "corolla";
        toyotaModels[1] = "Rav 4";
        toyotaModels[2] = "Prius";
        toyotaModels[3] = "4Runner";

        
        System.out.println(toyotaModels[0]);
        System.out.println(toyotaModels[1]);
        System.out.println(toyotaModels[2]);
        System.out.println(toyotaModels[3]);

        
        int index = 0;
        while(index < 4){
            System.out.println(toyotaModels[index]);
            index++; 
        }




        
        // code ends here
    }// run

}// class