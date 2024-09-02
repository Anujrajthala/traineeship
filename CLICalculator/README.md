Python CLI Calculator
Description
This is a simple command-line calculator written in Python. It supports basic arithmetic operations, including addition, subtraction, multiplication, and division. The user can select an operation, input two numbers, and the calculator will output the result. The program continues running until the user chooses to exit.

Installation
Follow these steps to set up and run the project locally:

Clone the repository:
git clone https://github.com/Anujrajthala/traineeship.git

Navigate to the project directory:
cd CLICalculator

Run the Python script:
python main.py

If Python is not installed globally, you might need to use python3 instead of python:
python3 main.py

Usage
When you run the script, the calculator will prompt you to select an operation:
Select an Operation
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Choose an operation: Enter the number corresponding to the operation you want to perform (1, 2, 3, 4).
Input numbers: Enter the two numbers you wish to operate on.
View the result: The calculator will display the result of the operation.
To exit the calculator, select 5.

Example
Select an Operation
1. Add
2. Subtract
3. Multiply
4. Divide
5. Exit
Enter the selection(1/2/3/4/5)1
Enter the first number: 10
Enter the second number: 5
15.0

Features
Addition
Subtraction
Multiplication
Division
Continuous operation until the user opts to exit.

Known Issues
Ensure that the second number is not zero when performing division, as this will cause a division-by-zero error.

Technologies Used
Python
