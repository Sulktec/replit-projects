import java.util.Scanner; // Import the Scanner class

class Ex2_MultidimensionalArray { //AKA tables



    

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here



        String[] regularCarBrands = {"Ford", "Dodge", "Toyota", "Honda"};


        String[] toyotaModels = new String[4];
        toyotaModels[0] = "Corolla";
        toyotaModels[1] = "Rav 4";
        toyotaModels[2] = "Prius";
        toyotaModels[3] = "Tacoma";


        
        String[] luxuryCarBrands; 
        
        luxuryCarBrands = new String[4];

        luxuryCarBrands[0] = "Mercedes";
        luxuryCarBrands[1] = "BMW";
        luxuryCarBrands[2] = "Lexus";
        luxuryCarBrands[3] = "Acura";




        
        //Nested array

        String[][] combinedArrays = {regularCarBrands, toyotaModels, luxuryCarBrands};


        //to access an element, go step by step 
        String[] temp = combinedArrays[1];
        String model = temp[2]; 

        System.out.println(model);

        //or print from the array directly
        System.out.println(temp[2]);
        

        //or all at once

        System.out.println(combinedArrays[1][2]);

        //to change an element 

        temp = combinedArrays[1];
        model = temp[2]; 
        temp[2] = "Mustang"; //replaces temp[2]

        //or all at once
        combinedArrays[1][2] = "Mustang";


        


        
        // code ends here
    }// run

}// class



/*
print everything manually in combinedArrays starting from combinedArrays[0][0]


*/