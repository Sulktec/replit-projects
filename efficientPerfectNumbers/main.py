# find prime numbers

n = 0


while n<14:
    
    for i in range(1,n):
        if n%i==0:
            prime=False
            print(str(n) + " is " + str(prime))
        else: 
            prime=True
            print(str(n) + " is " + str(prime))
    n=n+1

p = 3
nOne = 2**(p-1)
nTwo = ((2**p) - 1)
print(nOne)
print(nTwo)
print(nOne * nTwo)