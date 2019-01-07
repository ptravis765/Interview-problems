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
    public static boolean isInteger(Object object)
    {
        if(object instanceof Integer)
        {
            return true;
        }else{
            String string = object.toString();
            try{
                Integer.parseInt(string);
            }catch(Exception e){
                return false;
            }
        }
        return true;
    }
    public static void mainTest()
    {
        String number;
        int num1;
        int num2;
        boolean cont = false;
        Scanner scanner= new Scanner(System.in);
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        System.out.print("Enter the first number: ");
        number = scanner.next();
        cont = isInteger(number);
        if(cont){
            num1 = Integer.parseInt(number);
        }else{
            while(cont == false)
            {
                System.out.print("You must enter a number: ");
                number = scanner.next();
                cont = isInteger(number);
            }
            num1 = Integer.parseInt(number);
        }
        
        
        System.out.println();
        System.out.print("Enter the second number: ");
        number = scanner.next();
        cont = isInteger(number);
        if(cont){
            num2 = Integer.parseInt(number);
        }else{
            while(cont == false)
            {
                System.out.print("You must enter a number: ");
                number = scanner.next();
                cont = isInteger(number);
            }
            num2 = Integer.parseInt(number);
        }
        
        
        
        if(num1 > num2)
        {
            int tmp = num2;
            num2 = num1;
            num1 = tmp;
        }
        
        
        System.out.println("We will be looking at values between " + num1 + " and " + num2); 
    }
}
