import java.util.*;
/**
 * Write a description of class Generator here.
 *
 * Travis Peterson
 * 1/7/19
 */
public class Generator implements PrimeNumberGenerator
{
    public Boolean isPRime(int number)
    {
        boolean skip = false;
        if(number == 1)
        {
            return false;
        }
        for(int i = 2; i < (number/2)+1; i++)
        {
            if(number%i == 0)
            {
                skip = true;
            }
        }
        if(!skip)
        {
            return true;
        }
        return false;
    }
    
    public List<Integer> generate(int startingValue, int endingValue)
    {
        List<Integer> generatedList = new ArrayList<>(endingValue - startingValue + 1);
        for(int i = startingValue; i <= endingValue; i++)
        {
            if(isPRime(i))
            {
                generatedList.add(i);
            }
        }
        return generatedList;
    }
}
