import java.util.Scanner; // Import the Scanner class
class Credit {
    public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);


        // global variables
        String endOfDay = "k";
        String userInput = "";
        double totalSales = 0;
        double averageSales = 0;
        double salesAmount = 0;


        System.out.println("Press k to end the day");
        System.out.println("");



        // loop
        
        while (!(endOfDay.equals(userInput))) {



            System.out.println("\n\nPlease choose from the following:");
            System.out.println("\nHotdog\nPizza\nPoutine");

            userInput = myObj.nextLine();

            if (userInput.equals("Pizza")) {

                System.out.println("\nthe Pizza is $3");

                totalSales = totalSales + 3;

                salesAmount = salesAmount + 1;


            } else if (userInput.equals("Hotdog")) {

                System.out.println("\nthe Hotdog is $2");

                totalSales = totalSales + 2;

                salesAmount = salesAmount + 1;

            } else if (userInput.equals("Poutine")) {

                System.out.println("\nthe Poutine is $4");

                totalSales = totalSales + 4;

                salesAmount = salesAmount + 1;

            } else if (userInput.equals("k")) {


            } else {


                System.out.println("\nsorry, we don’t carry that.");


            }


        }

        
        
        
        // end
        
        if (totalSales > 0) {
            averageSales = (double) totalSales / salesAmount;
        }

        int roundedTotalSales = (int) Math.round(totalSales);

        System.out.println("\ntotal sales: $" + roundedTotalSales + " Average value: $" + averageSales);



    }
}