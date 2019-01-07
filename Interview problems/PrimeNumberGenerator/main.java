import java.io.*;
import java.util.*;
//import java.util.StringTokenizer;
//import java.util.Scanner;
/**
 * Write a description of class main here.
 *
 * Travis Peterson
 * 1/7/19
 */
public class main
{
    public static void mainTest()
    {
        int num1;
        int num2;
        boolean cont = false;
        Scanner scanner= new Scanner(System.in);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Enter the first number: ");
        if(scanner.hasNextInt())
        {
            num1 = scanner.nextInt();
        }else{
            while(!scanner.hasNextInt())
            {
               System.out.println(); 
               System.out.print("You must enter a number: ");
               num1 = scanner.nextInt();
            }
        }
        System.out.print("Enter the second number: ");
        num2 = scanner.nextInt();
        
    }
}
