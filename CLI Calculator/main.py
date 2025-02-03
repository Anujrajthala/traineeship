def add(x,y):
    return x+y

def subtract(x,y):
    return x-y

def multiply(x,y):
    return x*y

def divide(x,y):
    return x/y

while True:
    print("Select an Operation")
    print("1. Add")
    print("2.Subtract")
    print("3.Multiply")
    print("4.Divide")
    print("5.Exit")
    selection = input("Enter the selection(1/2/3/4/5)")

    if selection == '5':
        print("Exiting the calculator....")
        break
    else:
        if selection in ['1','2','3','4']:
            num1 = float(input('Enter the first number: '))
            num2 = float(input('Enter the second number: '))
            if selection == '1':
                print(f"{add(num1,num2)}")

            elif selection == '2':
                print(f"{multiply(num1,num2)}")

            elif selection == '3':
                print(f"{multiply(num1, num2)}")

            elif selection == '4':
                print(f"{divide(num1,num2)}")

        else:
            print("Please input valid operation.")