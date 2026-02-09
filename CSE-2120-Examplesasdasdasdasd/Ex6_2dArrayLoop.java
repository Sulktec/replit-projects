import java.util.Scanner; // Import the Scanner class

class Ex6_2dArrayLoop {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here


        String[] regularCarBrands = {"Ford", "dodge", "totoya", "honda"};

        
        String[] toyotaModels = new String[4]; 
        //String[] toyotaModels = {"corolla", "Rav 4", "Prius", "4Runner"}; 
        toyotaModels[0] = "corolla";
        toyotaModels[1] = "Rav 4";
        toyotaModels[2] = "Prius";
        toyotaModels[3] = "4Runner";

        
        String [] luxuryCarBrands;
        //String[] luxuryCarBrands = {"Mercedes", "BMW", "Lexus", "Acura"};
        luxuryCarBrands = new String[4];
        luxuryCarBrands[0] = "Mercedes";
        luxuryCarBrands[1] = "BMW";
        luxuryCarBrands[2] = "Lexus";
        luxuryCarBrands[3] = "Acura";   



        String[][] allBrands = {regularCarBrands,toyotaModels,luxuryCarBrands};

        String[] temp = allBrands[0];
        System.out.println(temp[0]);



        
        System.out.println(allBrands[0][0]);
        System.out.println(allBrands[0][1]);
        System.out.println(allBrands[0][2]);
        System.out.println(allBrands[0][3]);

        
        System.out.println(allBrands[1][0]);
        System.out.println(allBrands[1][1]);
        System.out.println(allBrands[1][2]);
        System.out.println(allBrands[1][3]);

        System.out.println(allBrands[2][0]);
        System.out.println(allBrands[2][1]);
        System.out.println(allBrands[2][2]);
        System.out.println(allBrands[2][3]);







        // my solution 
        int index1 = 0;
        int index2 = 0;

        while(index1 < allBrands.length) {

            while(index2 < allBrands[index1].length){
    
                System.out.println(allBrands[index1][index2]);
                index2++;
            }
            index1 ++; 
            index2 = 0; // removing index 2 could be a good bug hunt in the future 
        }
        

        // code ends here
    }// run

}// class