    import java.util.Scanner; // Import the Scanner class

    class Workspace {

        public static void run() {
            Scanner myObj = new Scanner(System.in); // used for Input/Output, included by default
            // code starts here

            String[] row1 = { "#", "#", "N", "#", "#" };
            String[] row2 = { "#", " ", " ", " ", "#" };
            String[] row3 = { "#", " ", "P", "T", "#" };
            String[] row4 = { "#", " ", " ", " ", "#" };
            String[] row5 = { "#", "#", "#", "#", "#" };

            String[][] column = { row1, row2, row3, row4, row5 };        // my solution 

            int playerx = 2;
            int playery = 2;

            int index1 = 0;
            int index2 = 0;

            while(index1 < column.length) {

                while(index2 < column[index1].length){

                    System.out.print(column[index1][index2]);
                    index2++;
                }
                System.out.println();

                index1 ++; 
                index2 = 0;
            }




    // code ends here
        }// run

    }// class