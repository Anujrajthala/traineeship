import json
import os

File_Path = 'blogposts.txt'
blogPosts = {}

def add_Posts():
    title,content = input("Enter the title and content for your new post: ").split(" ",1)
    id = int(max(blogPosts.keys(), default=0))+1
    blogPosts[id] = {'title': title, 'content': content}
    with open(File_Path,'w') as file:
        json.dump(blogPosts, file,indent=4)
    print("New Post added.")

def view_Posts():
    if not blogPosts:
        print("There are no posts available currently.")
    else:
        for id,post in blogPosts.items():
            print(f'ID: {id}\nTitle: {post['title']}\nContent: {post['content']}')

def del_Posts():
    id = input("Enter the id of the post you want deleted: ")
    if id in blogPosts.keys():
        blogPosts.pop(id)
        with open(File_Path, 'w') as file:
           json.dump(blogPosts,file,indent=4)
        print(f'Post with id of {id} deleted.')
    else:
        print("There is no post with this id.")

def edit_Posts():
    id = input("Enter the id of the post you want edited: ")
    if id in blogPosts.keys():
        choice = input("Enter what you want to change(title/content/both): ")

        if choice == 'title':
            title = input("Enter the new title: ")
            blogPosts[id]['title'] = title
        elif choice == 'content':
            content = input("Enter the new content: ")
            blogPosts[id]['content'] = content
        elif choice == 'both':
            title,content = input("Enter title and content: ").split(" ", 1)
            blogPosts[id] = {'title': title, 'content': content}
        else:
            print("Please enter a valid input.")
        with open(File_Path,"w") as file:
            json.dump(blogPosts,file,indent=4)

    else:
        print("There is no post with this id.")

while True:
    if  os.path.exists(File_Path) and os.path.getsize(File_Path)>0:
        with open(File_Path, 'r') as file:

            blogPosts = json.load(file)

    else:
        with open(File_Path, 'w') as file:
            print("File is currently empty: Please add some posts.")

    print("CLI Blog Site")
    choice = input("Add/View/Edit/Delete Posts(1/2/3/4) and enter 5 to exit: ")
    if choice == '1':
        add_Posts()

    elif choice == '5':
        break

    elif choice == '2':
        view_Posts()

    elif choice == '3':
        edit_Posts()

    elif choice == '4':
        del_Posts()
    else:
        print("Enter a valid input.")