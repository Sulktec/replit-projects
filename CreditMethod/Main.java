import java.util.Scanner; // Import the Scanner class
class Main {


    
    
    public static void foodMenu() {
    System.out.println("\n\nPlease choose from the following:");
    System.out.println("\nHotdog\nPizza\nPoutine");
  
  }


    public static int foodChoice(String choice) {

        int newPurchase = 0;
        
        if (choice.equals("Pizza")) {
        System.out.println("\nthe Pizza is $3");

            newPurchase = 3;

      } else if (choice.equals("Hotdog")) {
        System.out.println("\nthe Hotdog is $2");

            newPurchase = 2;        

      } else if (choice.equals("Poutine")) {
        System.out.println("\nthe Poutine is $4");

            newPurchase = 4;        


      } else if (choice.equals("k")) {
      } else {
        System.out.println("\nsorry, we don’t carry that.");
      }
    

    return newPurchase;
        
    }
    

    
    
  public static void endValues(double finalAmount, double sales) {
    double average = 0;

    if (finalAmount > 0) {
      average = (double) finalAmount / sales;
    }

    int roundedTotalSales = (int) Math.round(finalAmount);

    System.out.println("\ntotal sales: $" + roundedTotalSales + " Average value: $" + average);

      
  }


    
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);

    // global variables
    String endOfDay = "k";
    double totalSales = 0;
    double salesAmount = 0;
    String userInput = "";

    System.out.println("Press k to end the day");
    System.out.println("");

    // loop

    while (!(endOfDay.equals(userInput))) {
      
        foodMenu();

        userInput = myObj.nextLine();

        int newSale = foodChoice(userInput);

        totalSales = totalSales + newSale;

        if (newSale > 0) {
            salesAmount++;
        }

      }

      

    // end

    endValues(totalSales, salesAmount);

    myObj.close();
  }
}