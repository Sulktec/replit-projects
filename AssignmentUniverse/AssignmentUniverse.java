import java.util.Scanner; // Import the Scanner class

class AssignmentUniverse {

    public static void run() {
        Scanner myObj = new Scanner(System.in);
        int centrex = 4;
        int centrey = 4;

        String[] row1 = { "#", "#", "#", "#", "#", "#", "#", "#", "#" };
        String[] row2 = { "#", "@", "@", "@", "@", "@", "@", "@", "#" };
        String[] row3 = { "#", "@", "f", "f", "f", "f", "f", "@", "#" };
        String[] row4 = { "#", "@", "f", "g", "g", "g", "f", "@", "#" };
        String[] row5 = { "#", "@", "f", "g", "C", "g", "f", "@", "#" };
        String[] row6 = { "#", "@", "f", "g", "g", "g", "f", "@", "#" };
        String[] row7 = { "#", "@", "f", "f", "f", "f", "f", "@", "#" };
        String[] row8 = { "#", "@", "@", "@", "@", "@", "@", "@", "#" };
        String[] row9 = { "#", "#", "#", "#", "#", "#", "#", "#", "#" };


        String[][] universe = { row1, row2, row3, row4, row5,row6, row7, row8, row9};        // my solution 



        printUniverse(universe);

        System.out.println("How many layers do you want to prints Min: 0, Max: 4");
        System.out.println("0 = C, 1 = g, 2 = f, 3 = @, 4 = #");

        int userChoice = myObj.nextInt();



        printCertainSectionOfUniverse(universe,centrex,centrey,userChoice);

    }// run



    public static void printUniverse(String[][] column){

        int indexColumn = 0;
        int indexRow = 0;

        while (indexColumn < column.length) {

            String append = "";


            while(indexRow < column[indexColumn].length){
                append = append + column[indexColumn][indexRow];
                indexRow++;
            }//end inner while
            System.out.println(append);
            indexRow = 0;
            indexColumn++;
        }//end outer while

    }



    public static void printCertainSectionOfUniverse(String[][] column, int centrex, int centrey, int layerDepth){

         Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default

        int offsetx = -layerDepth;
        int offsety = layerDepth;

        int indexColumn = centrey + offsetx;
        int indexEnd = centrey + offsety;


        int indexRow = centrex + offsetx;
        int indexRowEnd = centrey + offsety;

        while (indexColumn <= indexEnd) {

            String append = "";


            while(indexRow <= indexRowEnd){
                append = append + column[indexColumn][indexRow];
                indexRow++;

                // System.out.println(" a this point append contains " + append);
                // System.out.println(" a this point we are in column[" + indexColumn + "]"  + "[" + indexRow + "]");
                // System.out.println(" press enter to continue");
                // String unusedVariable = myObj.nextLine();

            }//end inner while
            System.out.println(append);
            indexRow = centrex + offsetx;
            indexColumn++;
        }//end outer while

        myObj.close();
    }









}// class