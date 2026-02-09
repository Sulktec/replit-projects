/*
escape sequences

TL;DR printting forbidden characters
*/ 

public class Lesson3Ex6
{
    public static void main(String args[])
    {

    //ex 1 printing quotation parks. put a \ before the "
    String ex1 = "What \"is\" the right way?";
    System.out.println(ex1);

    //ex2 printing multiple lines in a single printstatement using \n
    String ex2 = "line 1 \nline2 \nline3";
    System.out.println(ex2);
        
    //ex3 printing \ by using two \\ in a print statement
    String ex3 = " this \\ is acutally \\\\ in the code file";
    System.out.println(ex3);

    //ex4 using \t for a tab
    String ex4 = "name\t\tAddress:";
    System.out.println(ex4);
    }
}
