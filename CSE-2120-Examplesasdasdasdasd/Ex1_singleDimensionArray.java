import java.util.Scanner; // Import the Scanner class

class Ex1_singleDimensionArray{

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here
      

        // 3 ways to create but many more exist

        //declare and intialize in the same line
        String[] regularCarBrands = {"Ford", "Dodge", "Toyota", "Honda"};



        //create an empty array
        String[] toyotaModels = new String[4];
        toyotaModels[0] = "Corolla";
        toyotaModels[1] = "Rav 4";
        toyotaModels[2] = "Prius";



        // declare variable and initialize in 2 different lines
        String[] luxuryCarBrands; 
        
        luxuryCarBrands = new String[5];

        luxuryCarBrands[0] = "Mercedes";
        luxuryCarBrands[1] = "BMW";
        luxuryCarBrands[2] = "Lexus";
        luxuryCarBrands[3] = "Acura";
        luxuryCarBrands[4] = "Buick";


        System.out.println(toyotaModels[0]); // prints first element from the toyotaModels array

        toyotaModels[0] = "Camry";  // change the first element of the array to Camry

        System.out.println(toyotaModels[0]); //print first element again





        
        // code ends here
    }// run

}// class



/*

1) access the first and last element from each of regularCarBrands, toyotaModels, and luxuryCarBrands. 


2) access and print the middle value to the last value from each of regularCarBrands, toyotaModels, and luxuryCarBrands.

3) instead of hard coding the index values, derive them from the length of the array using .length 




*/