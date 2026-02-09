import math

number = 0
loopAmount = 500
# note factors don't include the number itself
factorArray = [1]
arrayNumberOutput = []
arrayFactorOutPut = []

# start if findFactors/////////////
def findFactors(num, array): 
    
    i = 2
    
    while i < num: 
      factor = num/i
      roundedFactor = math.floor(factor)

      if roundedFactor == factor:
          array.append(roundedFactor)
            
      i+=1
# end if findFactors///////////////




# start if addFactors/////////////
def addFactors(num, array):
    addedFactors = 0
    for i in array:
      addedFactors += i 

    if addedFactors == num & num != 1:
        return (str(num) + " is a perfect number")
    else:
        return (str(num) + " is not a perfect number")

# end if addFactors///////////////




# start if loop/////////////

def loop(numb, arrays, loopAmount, onlyPerfectNumber, textFile):
    i = 0;
    while i < loopAmount:
        findFactors(numb, arrays)

        printValue = addFactors(numb, arrays)
        temp = str(numb) + " is a perfect number"
        
        
        if (onlyPerfectNumber == True ):
            if printValue == temp:
             print("\n\n")
             print(addFactors(numb, arrays))
             print("\n")
             print(arrays)

             arrayNumberOutput.append(addFactors(numb, arrays)) 
             arrayFactorOutPut.append(arrays)
             
        elif (onlyPerfectNumber == False):
            print("\n\n")
            print(addFactors(numb, arrays))
            print("\n")
            print(arrays)

            arrayNumberOutput.append(addFactors(numb, arrays)) 
            arrayFactorOutPut.append(arrays)
        
        numb+=1
        arrays = [1]

        i+=1
    
    
    userInput = input("\n\npress a to write data to a file or nothing to not\n")

    
    if (userInput == "a"):
        f = open(textFile, "a")
        f.write("\n\n\nNumbers within " + str(loopAmount) + ":\n")
        i = 0
        while i < len(arrayNumberOutput):
            f.write("\n\n\n\n")
            f.write("   " + str(i+1) + ".   " + arrayNumberOutput[i])
            f.write("\n\n")
            f.write("        " + str(arrayFactorOutPut[i]))
            i+=1
        
        f.close()
        
    # loop(numb, arrays, loopAmount, onlyPerfectNumber, textFile)

# end if loop///////////////

# code under 


loop(number, factorArray, loopAmount, True, "output.txt")