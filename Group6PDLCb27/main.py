import time
import os

def pad0(str_n, _len=4):
    while len(str_n) < _len:
        str_n += "0"
    return str_n

def Main():
    try:
        print("---- [GWA Calculator] Program starting... ----")
        time.sleep(1)
        print("\033[92m---- Program has successfully started ----\033[0m")
        
        name = str()
        name = input("What is your name? ")
        
        grades, units = float(), float()
        numsubj = int()
        counter = int()
        
        counter = 0
        maxgradevalue = float()
        maxgradevalue = float("inf")
        maxgradename = str()

        smallestgradevalue = float()
        smallestgradename = str()
        
        numsubj = int(input("How many subjects do you have? "))
        grade, weight = float(), float()

        print(f"\n---- Inputting {name}'s Grades ----\n")
        
        while counter < numsubj:

            print(f"---- Subject #{counter+1} ----")
            
            name = input(f"What is the name of this subject? ")

            print("----")
            
            grade = float(input("What is your grade in said subject: "))
            grades += grade
            
            weight = float(input("What is the weight (# of units) of said subject: "))
            units += weight

            if grade > smallestgradevalue:
                smallestgradevalue = grade
                smallestgradename = name
                
            if grade < maxgradevalue:
                maxgradevalue = grade
                maxgradename = name

            counter += 1

        print(f"\n---- {name}'s Current GWA Status ----")

        print("Your GWA will be: " + pad0(str(grades/units), 5))
        print("Your highest grade in a subject is: " + str(maxgradename))
        print("---- With a grade of: " + pad0(str(maxgradevalue)))
        print("Your lowest grade in a subject is: " + str(smallestgradename))
        print("---- With a grade of: " + pad0(str(smallestgradevalue)))
    except Exception as e:
        print("\033[91m---- ERROR OCCURRED ----")
        print("This may be due to a wrong input.")
        print("This is the error: " + str(e).capitalize())
        print("Shall you try again? [y/n]:")
        choice = input().lower().strip()
        if choice == "y":
            Main()
        else:
            print("\033[92m We are very sorry for the inconvinience, have a nice rest of the day!")
            print("---- Program exiting... ----")
            time.sleep(0.5)
            print("---- Program successfully exited ----")
            return

Main()

print("\033[0m")
