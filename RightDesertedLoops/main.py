def menu ():
        print("your options are:")
        print("forward")
        print("backward")
        print("left")
        print("right")
        print("type exit to quit the game")
        print("type the direction you would like to move: ")
        print(" ")


room = "start"
userChoice = "NA"
hasItem = "false"

print("\n\n")

print("You are looking for something inside the house")

print ("\n\n")

print("the game ends when you find what you are looking for")

print ("\n\n")

while userChoice != "exit":
    if room == "start":
        
        print ("\n\n")

        print("You are standing outside")
        print("There is a door to your front")
        print("There is nothing to you back")
        print("There is nothing to your left")
        print("There is nothing to you right")
        print("There is nothing to pick up")

        print("\n\n")

        menu()
                
        userChoice = input("type the action you would like to take:")

        if userChoice == "forward":
            room = "lobby"
            print("You have entered the house, you are now in the lobby")

        elif userChoice == "exit":
            print("User has quit the game")

        else:
            print("You remain where you are")

    elif room == "lobby":

        print("\n\n")

        print ("You are in the lobby")
        print("there is nothing to your front")
        print("there a door to your back")
        print("there is a door to your left")
        print("there is a door to your right")
        print("there is nothing to pick up in the room")

        print("\n")

        menu()

        userChoice = input("Type the action you would like to take:")

        if userChoice == "backward":
            room = "start"
            print("You have left the house, you are now at the start")

        elif userChoice == "right":
            room = "Dining Room"
            print("You chose the door on the right, you are now in the Dining Room")

        elif userChoice == "left":
            room = "parlour"
            print ("You chose the door on the left, so you are now in the parlour")

        elif userChoice == "exit":
            print ("User has quit the game")

        else: 
            print ("You remain where you are!")

    if room == "parlour":

        print ("n\n")

        print("you are in the parlour")
        print("there is nothing to your front")
        print("there is nothing to your back")
        print("there is nothing to your left")
        print("there is a door to your right")
        print("there is nothing to pick up in the room")

        print("\n")

        menu()

        userChoice = input("Type the action you would like to take:")
        
        if userChoice == "backward":
            room = "parlour"
            print("you remain where you are")

        elif userChoice == "right":
            room = "lobby"
            print("You chose the door on the right, you have returned to the lobby")

        elif userChoice == "left":
            room = "parlour"
            print("You remain where you are")

        elif userChoice == "exit":
            print("User has exit the game")
            
        else:
            print ("You remain where you are")

        

    elif room == "Dining Room":
        
        print("\n\n")
        print("you are in the Dining Room")
        print("there is nothing to your front")
        print("there is nothing to your back")
        print("there is a door to your left")
        print("there is nothing to your right")
        print("there is nothing to pick up in the room")

        print("\n")

        menu()

        userChoice = input("type the action you would like to take:")

        if userChoice == "backward":
            room = "Dining Room"
            print ("You remain where you are")
            

        elif userChoice == "right":
            room = "Dining Room"
            print ("You remain where u are")

        elif userChoice == "left":
            room = "lobby"
            print ("You take the door on the left, You are back in the lobby")

        elif userChoice == "exit":
            print("User has quit the game")

        else: 
            print ("You remain where you are")


        



        
        if hasItem == "true":
            userChoice = "exit"
            print("YOU HAVE WON !!!!")