using System;

class Program {
  public static void Main (string[] args) {
      double startingNum = 100;
      double investment = startingNum;
      double totalGain = 0;
      double mainIndex = 0;
      double[] functionArray = {investment , totalGain};
      string userInput = "";
      

      


    while (mainIndex < 10) {
        
      Console.WriteLine("\n\n\nYear: " + (mainIndex + 1));
      Console.WriteLine("Available investments");
      Console.WriteLine("(1) Fly-By-Night Investments (FBN): high risk, high potential returns");
      Console.WriteLine("(2) Blue Chips INC. (CI): moderate risk, good potential yearly returns");
      Console.WriteLine("(3) Slow-And-Steady Corp. (SNS), mature industry stock: no risk but low returns");
      
        Console.Write("Stock selection: ");

        userInput = Console.ReadLine();

        
        if (userInput == "1") {
            
            functionArray = HighProb(functionArray);

            investment = functionArray[0];
            totalGain = functionArray[1];
            
        } else if (userInput == "2") {

            functionArray = MidProb(functionArray);

            investment = functionArray[0];
            totalGain = functionArray[1];
            
        } else if (userInput == "3") {

            functionArray = LowRisk(functionArray);

            investment = functionArray[0];
            totalGain = functionArray[1];
            
        }

        mainIndex++;

        
    }
    
      


      Console.WriteLine("\n\n\nOriginal investment: $" + Math.Round(startingNum, 2));
      Console.WriteLine("Current value: $" + Math.Round(investment, 2));
      Console.WriteLine("Return on investment: $" + Math.Round(totalGain, 2));

      
  }




    



  static double[]  HighProb(double[]  array) {

      double i = array[0];

      double totalGain = array[1];

      double  amountBefore = i;

      double  amountGain = 0;

      
    /////////////////////////////

      Random rand = new Random();

      int chance = rand.Next(0, 100);

          double  tempGain = 0;
          
         // Console.WriteLine(chance + " happening " + index + " time");

          

      if (chance >= 0 && chance <= 50) {

          double  chance2 = rand.Next(2, 20);

            tempGain = (i * (chance2/100));

         // Console.WriteLine(tempGain);

            i = i - tempGain;

            amountGain = amountGain - tempGain;

        //  Console.WriteLine("\n1");

            
          
      } else if (chance > 50 && chance <= 70) {

            // nothing happens

         // Console.WriteLine(tempGain);

         // Console.WriteLine("\n2");

          
      } else if (chance > 70 && chance <= 100) {

          double chance2 = rand.Next(5, 50);

          tempGain = i * (chance2/100);

         // Console.WriteLine(tempGain);

          i = i + tempGain;

          amountGain = amountGain + tempGain;

         // Console.WriteLine("\n3");


     }

        
          

        

         // Console.WriteLine("\nWent through loop " + index);
    

    // Console.WriteLine("\n\n\nOriginal investment: $" + Math.Round(amountBefore, 2));
    // Console.WriteLine("Current value: $" + Math.Round(i, 2));
    // Console.WriteLine("Return on investment: $" + Math.Round(amountGain, 2));
    
    Console.WriteLine("\nHigh risk investment");
    Console.WriteLine("Investment (start) $" + Math.Round(amountBefore, 2) +  " Investment (change) $" + Math.Round(amountGain, 2) +  " Investment (end) $" +  Math.Round(i, 2));

      totalGain = totalGain + amountGain;

      array[0] = i;
      array[1] = totalGain;
      


      
      return array;  
      
  }










    static double[]  MidProb(double[]  array) {

          

        double i = array[0];

        double totalGain = array[1];

          double  amountBefore = i;

          double  amountGain = 0;




          



          Random rand = new Random();

          int chance = rand.Next(0, 100);

              double  tempGain = 0;

             // Console.WriteLine(chance + " happening " + index + " time");



          if (chance >= 0 && chance <= 50) {

       
            // nothing happens


          } else if (chance > 50 && chance <= 75) {

              double chance2 = rand.Next(1, 6);

                tempGain = i * (chance2/100);

               // Console.WriteLine(tempGain);

                i = i + tempGain;

                amountGain = amountGain + tempGain;

               // Console.WriteLine("\n3");


          } else if (chance > 75 && chance <= 100) {

              double chance2 = rand.Next(1, 6);

              tempGain = i * (chance2/100);

             // Console.WriteLine(tempGain);

              i = i - tempGain;

              amountGain = amountGain - tempGain;

             // Console.WriteLine("\n3");


         }




            

             // Console.WriteLine("\nWent through loop " + index);
        
            Console.WriteLine("\nMedium risk investment");
        Console.WriteLine("Investment (start) $" + Math.Round(amountBefore, 2) +  " Investment (change) $" + Math.Round(amountGain, 2) +  " Investment (end) $" +  Math.Round(i, 2));


          totalGain = totalGain + amountGain;

          array[0] = i;
          array[1] = totalGain;


          return array;  

      }


    static double[] LowRisk(double[]  array) {

         

        double i = array[0];

        double totalGain = array[1];

          double  amountBefore = i;

          double  amountGain = 0;
                
                double tempGain = 0;

                tempGain = i * 0.015;

                amountGain = amountGain + tempGain;

                i = i + tempGain;

        
            Console.WriteLine("\nLow risk investment");
        Console.WriteLine("Investment (start) $" + Math.Round(amountBefore, 2) +  " Investment (change) $" + Math.Round(amountGain, 2) +  " Investment (end) $" +  Math.Round(i, 2));

        totalGain = totalGain + amountGain;

          array[0] = i;
          array[1] = totalGain;


        return array;
        
    }
    

    
}