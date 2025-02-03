from datetime import datetime
import csv

class Expense:
    def __init__(self,amount,category,date,description):
        self.amount = amount
        self.category = category
        self.date = date
        self.description = description

    def __str__(self):
        return f"{self.date.strftime('%Y-%m-%d')}:{self.category}-${self.amount:.2f}({self.description})"

#Add a new expenses
def add_expense(expenses,amount,category,date,description=""):
    expense = Expense(amount,category,date, description)
    expenses.append(expense)
    print("Expense added successfully")

#View all expenses
def view_expenses(expenses):
    if not expenses:
        print("No expenses recorded")
        return
    for exp in expenses:
        print(exp)

def calculate_total(expenses):
    return sum(exp.amount for exp in expenses)

def view_by_categoryy(expenses,category):
    filtered = [exp for exp in expenses if exp.category == category]
    view_expenses(filtered)

def save_to_file(expenses,filename = "expenses.csv"):
    with open(filename,mode = 'w', newline="")as file:
        writer = csv.writer(file)
        writer.writerow(["Amount","Category","Date","Description"])
        for exp in expenses:
            writer.writerow([exp.amount,exp.category,exp.date.strftime("%Y-%m-%d"),exp.description])
    print(f"Expenses saved to {filename}")

def load_from_file(filename="expenses.csv"):
    expenses = []
    try:
        with open(filename,mode='r')as file:
            reader = csv.DictReader(file)
            for row in reader:
                expenses.append(Expense(float(row["Amount"]),row["Category"],datetime.strptime(row["Date"],"%Y-%m-%d") ,row["Description"]))
    except FileNotFoundError:
        print("No existing expense file found.Starting fresh.")
    return expenses

def main():
    expenses = load_from_file()

    while True:
        print("\nExpense Tracker")
        print("1. Add Expense")
        print("2. View All Expenses")
        print("3. View Expenses by Category")
        print("4. Calculate Total Expenses")
        print("5. Save and Exit")

        choice= input("Choose an option(1-5): ")

        if choice == '1':
            amount = float(input("Enter amount: "))
            category = input("Enter category (e.g. Food, Travel): ")
            date = datetime.strptime(input("Enter date (YYYY-MM-DD): "),  "%Y-%m-%d")
            description = input("ENter description(optional): ")
            add_expense(expenses, amount, category, date, description)
        elif choice =="2":
            view_expenses(expenses)
        elif choice == "3":
            category = input("Enter category: ")
            view_by_categoryy(expenses,category)
        elif choice =="4":
            total = calculate_total(expenses)
            print(f"Total Expenses: ${total:.2f}")
        elif choice == "5":
            save_to_file(expenses)
            print("Exiting the tracker. Goodbye!")
            break
        else:
            print("Invalid choice.Please try again.")
if __name__ == "__main__":
    main()