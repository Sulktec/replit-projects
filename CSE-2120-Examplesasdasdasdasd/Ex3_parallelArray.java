import java.util.Scanner; // Import the Scanner class

class Ex3_parallelArray {

    public static void run() {
        Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
        // code starts here


       /* Parallel arrays come in handy when data regarding different characteristics of the same subject of interest needs to be stored and accessed efficiently. */


        


            String[] carModel = {"F 150", "Corolla Hybrid", "Jeep Wrangler", "Porsche Cayenne"};
            double[] fuelEconomy = {12 ,3.8, 15, 10};  //units in l/100km
            int[] retailPrice = {70000, 32000, 60000, 300000};


            System.out.println("the model: " + carModel[0] );
            System.out.println("fuel economy: " + fuelEconomy[0] + " l/100km");
            System.out.println(" retail price is" + retailPrice[0]);

        
        // code ends here
    }// run

}// class