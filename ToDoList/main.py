from operator import truediv

tasklist = []

def addTask():
    newtask = input("Enter the new task: ")
    print(f"{newtask} has been added to todo list.")
    tasklist.append(newtask)

def viewTask():
    if tasklist != []:
        for index,tasks in enumerate(tasklist):
            print(f"{index+1}. {tasks}")
    else:
        print('Tasks list is empty.')

def delTask():
    index = int(input("Enter the index of the task you  want deleted: "))
    print(f"'{tasklist[index-1]}' task has been deleted. ")
    del tasklist[index-1]


while True:
    print("/////////////")
    print("1.Add Task")
    print("2.View Task")
    print("3.Delete Task")
    print("4. Exit")
    action = input("Enter the action index(1/2/3/4): ")
    if action == '4':
        print('Exiting the To Do List....')
        break
    if action == '1':
        addTask()
    if action == '2':
        viewTask()
    if action == '3':
        delTask()

