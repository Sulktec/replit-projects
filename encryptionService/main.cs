using System;

class Program {
  public static void Main (string[] args) {

      string[] alphabet = {"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"};
    
      Console.WriteLine ("Please Enter in a message (NO NUMBERS)");
      Console.Write("Secret phrase: ");

      //Console.WriteLine(Array.IndexOf(alphabet, "B"));

      string secretPhrase = Console.ReadLine();

      Console.Write("Shift value: ");

      int shiftValue = Convert.ToInt32(Console.ReadLine());
      

      
      string encryptedPhrase = encrypt(secretPhrase, alphabet, shiftValue);

      
      string decryptedPhrase = decrypt(encryptedPhrase, alphabet, shiftValue);

      

      results(secretPhrase, encryptedPhrase, decryptedPhrase);
      
      
  }



    


    static string encrypt(string secretPhrase, string[] alphabet, int shiftValue) {

             int index = 0;
            string encryptedPhrase = "";


              // encrypter

            while (index < secretPhrase.Length) {




                  string currentAlphabet = "" + secretPhrase[index];

                  int characterFind = Array.IndexOf(alphabet, currentAlphabet.ToUpper());

                  // Console.WriteLine(characterFind);

                  if (characterFind >= 0) {

                  int newCharacterNum = characterFind + shiftValue;

                  if (newCharacterNum > 25) {

                        newCharacterNum = newCharacterNum - 26;





                  }

                  if (newCharacterNum < 0) {

                      newCharacterNum = 26 - (-newCharacterNum);

                  }

                  // Console.WriteLine(newCharacterNum);
                  // Console.WriteLine(alphabet[newCharacterNum]);


                encryptedPhrase = encryptedPhrase + alphabet[newCharacterNum];


                  } else {

                      encryptedPhrase = encryptedPhrase + secretPhrase[index];

                  }

                // Console.WriteLine(encryptedPhrase);


                index++;
            }

          return encryptedPhrase;
      }




    

        static string decrypt(string encryptedPhrase, string[] alphabet, int shiftValue) {

                int index2 = 0;

                string decryptedPhrase = "";

               while (index2 < encryptedPhrase.Length) {




                      string currentAlphabet = "" + encryptedPhrase[index2];

                      int characterFind = Array.IndexOf(alphabet, currentAlphabet);

                      // Console.WriteLine(characterFind);

                      if (characterFind >= 0) {

                      int newCharacterNum = characterFind - shiftValue;

                      if (newCharacterNum > 25) {

                            newCharacterNum = newCharacterNum - 26;





                      }

                      if (newCharacterNum < 0) {

                          newCharacterNum = 26 - (-newCharacterNum);

                      }

                      // Console.WriteLine(newCharacterNum);
                      // Console.WriteLine(alphabet[newCharacterNum]);


                          decryptedPhrase = decryptedPhrase + alphabet[newCharacterNum];


                      } else {

                          decryptedPhrase = decryptedPhrase + encryptedPhrase[index2];

                      }

                    // Console.WriteLine(encryptedPhrase);


                    index2++;
                }

            return decryptedPhrase;
        }


        static void results(string original, string encrypted, string decrypted) {

              Console.WriteLine("Original phrase: " + original);
              Console.WriteLine("Encrypted phrase: " + encrypted);
              Console.WriteLine("decrypted phrase: " + decrypted);
            
        }

    
}