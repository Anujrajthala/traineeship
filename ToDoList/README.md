Python To-Do List App

Description
This is a simple command-line To-Do List application written in Python. It allows users to add tasks, view the list of tasks, and delete tasks by their index. The program runs in a loop, continuously accepting user input until the user chooses to exit.

Installation
Follow these steps to set up and run the project locally:

Clone the repository:
git clone https://github.com/yourusername/python-todo-list.git

Navigate to the project directory:
cd ToDoList

Run the Python script:
python main.py

If Python is not installed globally, you might need to use python3 instead of python:
python3 main.py

Usage
When you run the script, you'll be presented with a menu that allows you to perform the following actions:

Add Task: Enter a new task to add it to the list.
View Tasks: Display all tasks currently in the list, with their respective indices.
Delete Task: Remove a task from the list by specifying its index.
Exit: Exit the application.
Example
markdown
Copy code
1. Add Task
2. View Task
3. Delete Task
4. Exit
Enter the action index(1/2/3/4): 1
Enter the new task: Buy groceries

1. Add Task
2. View Task
3. Delete Task
4. Exit
Enter the action index(1/2/3/4): 2
1. Buy groceries

1. Add Task
2. View Task
3. Delete Task
4. Exit
Enter the action index(1/2/3/4): 3
Enter the index of the task you want deleted: 1
'Buy groceries' task has been deleted.


Features
Add Task: Allows the user to add a task to the list.
View Task: Displays the list of tasks with their respective indices.
Delete Task: Deletes a task based on its index.
Exit: Ends the program.


Technologies Used
Python