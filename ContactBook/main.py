import json

# Initialize an empty dictionary to store contacts
contactbook = {}

while True:
    # Display menu options and get user choice
    choice = input("Add/Edit/Search Contacts (1/2/3): ")

    # Option 1: Add or edit a contact
    if choice == '1':
        try:
            # Prompt user for new contact name and number
            newName, newNo = input("Enter the new contact (name & contact no): ").split()
            # Check if both values are provided
            if not newName or not newNo:
                raise ValueError("Both name and contact number must be provided.")
        except ValueError as e:
            # Handle the error if the input is invalid
            print(f'Error: {e}, Please input two values')
        else:
            # Add or update the contact in the dictionary
            contactbook[newName] = newNo
            # Open the file in write mode and save the updated contactbook
            with open("contacts.txt", "w") as file:
                json.dump(contactbook, file, indent=4)
            print("Contact has been created.")

    # Option 2: Edit an existing contact
    if choice == '2':
        editChoice = input("Enter if you want to edit name or contact no (name/no): ")

        if editChoice == 'name' or editChoice == 'no':
            # Open the file in read and write mode
            with open("contacts.txt", "r+") as file:
                fileContactBook = json.load(file)

                # Editing name
                if editChoice == 'name':
                    try:
                        oldName, newName = input("Enter old Name and new Name: ").split()
                        if not oldName or not newName:
                            raise ValueError("Both old name and new name must be provided.")
                    except ValueError as e:
                        print(f'Error: {e}, Please input two values')
                    else:
                        # Update contact name if it exists
                        if oldName in fileContactBook:
                            fileContactBook[newName] = fileContactBook.pop(oldName)
                        else:
                            print("That name does not exist in the contact.")

                # Editing contact number
                if editChoice == 'no':
                    try:
                        Name, newNo = input("Enter Name and new number: ").split()
                        if not Name or not newNo:
                            raise ValueError("Both name and new number must be provided.")
                    except ValueError as e:
                        print(f'Error: {e}, Please input two values')
                    else:
                        # Update contact number if the name exists
                        if Name in fileContactBook:
                            fileContactBook[Name] = newNo
                        else:
                            print("That name does not exist in the contact.")

                # Move the file pointer to the beginning and truncate the file to remove old content
                file.seek(0)
                file.truncate()
                # Write the updated contactbook to the file
                json.dump(fileContactBook, file, indent=4)

        else:
            print("Enter correct input and try again")

    # Option 3: Search for a contact
    if choice == '3':
        searchedContact = input("Enter the contact name you want to search: ")

        # Open the file in read mode
        with open("contacts.txt", "r") as file:
            fileContactBook = json.load(file)
            # Search for the contact in the contactbook
            if searchedContact in fileContactBook:
                print(f'Name: {searchedContact} Contact no: {fileContactBook[searchedContact]}')
            else:
                print("Contact could not be found.")

    # Ask user if they want to continue or exit
    continueChoice = input("Do you want to do anything else (y/n): ")
    if continueChoice == 'n':
        break
