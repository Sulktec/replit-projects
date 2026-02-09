using System;

class Program {
  public static void Main (string[] args) {
      //
    Console.WriteLine("This program will simulate the storage/representation of a floating point (range of -123456789 to +123456789)");
    Console.Write("Enter a number to store: ");

     int userInput = Convert.ToInt32(Console.ReadLine());

      int originalNumber = userInput;
        //
      
    

      
      //
      int signBit = signBitFunction(originalNumber);
      //


      
      
        //
       int originalNumberLength = originalNumber.ToString().Length - signBit;

       string mantissa = mantissaFunction(originalNumber, signBit, originalNumberLength);
      //
      

      
        //    
        int exponent = originalNumberLength - 5;
      //

    
    //
      string numberString = originalNumber.ToString();
      string restoredNumber = restoredNumberFunction(originalNumberLength, signBit,  numberString,  exponent, originalNumber);
    //


      //
      printResults(originalNumber,signBit,mantissa,exponent,restoredNumber);
      //
      
  }




    

    static int signBitFunction(int number) {
          
        int signBit = 0;
          if (number < 0) {

            signBit = 1;

          } 
        
        return signBit;
    }









    

    static string mantissaFunction(int number, int signBit, int originalNumberLength) {

          string mantissa = "";

            if (signBit == 1) {

                int tempNum = number*-1;

                mantissa = tempNum.ToString();

            } else {

                mantissa = number.ToString();

                }
    



         while (mantissa.Length < 5) {

                mantissa = mantissa + "0";

         }

            if (mantissa.Length > 5) {

                int index = 0;
                string newMantissa = "";

                  while (index < 5) {

                newMantissa = newMantissa + mantissa[index];

                      index++;

                  }

                mantissa = newMantissa;

            }
        

        return mantissa;
    }

















    

    static string restoredNumberFunction(int originalNumberLength, int signBit, string numberString, int exponent, int originalNumber) {

        string restoredNumber = "";

        if (originalNumberLength > 5) {

                int index = 0;

              while (index < 5 + signBit) {

                    restoredNumber = restoredNumber + numberString[index];

                  index++;

              }

              int index2 = 0;

              while (index2 < exponent) {

                    restoredNumber = restoredNumber + "0";

                  index2++;

              }

          } else {

              restoredNumber = originalNumber.ToString();

          }



       
        return restoredNumber;
    }


















    


    static void printResults(int originalNumber, int signBit, string mantissa, int exponent, string restoredNumber) {

        Console.WriteLine("\nOriginal Number: " + originalNumber  +  " | Sign bit as: " + signBit + " | Mantissa: " + mantissa + " | Exponent: " + exponent + " | Restored number: " + restoredNumber);
        
    }


    
}