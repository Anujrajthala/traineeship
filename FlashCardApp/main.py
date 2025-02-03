import os
import json
flashCards = {}

FILE_PATH  = 'flashcard.json'

def loadcards():
    if os.path.exists(FILE_PATH) and os.path.getsize(FILE_PATH):
        with open(FILE_PATH,'r') as file:
            return json.load(file)
    else:
        print("There are no flashcards right now.")
        return {}

def add_flashcards():
        question = input("Enter the question: ")
        answer = input("Enter the answer: ")
        id = int(max(flashCards.keys(), default=0))+1
        flashCards[str(id)] = {'question': question, 'answer': answer }
        with open(FILE_PATH,'w') as file:
            json.dump(flashCards,file,indent=4)
            print("Flashcard added successfully")

def view_flashcards():
    if not flashCards:
        print("There are no flash cards.")
    else:
        for id ,card in flashCards.items():
                print(f"{id}\n Questions: {card['question']}\n Answers: {card['answer']}")

def quiz_mode():
    score = 0
    for flashcard in flashCards:
        print(flashCards[flashcard]['question'])
        answer = input("Enter the answer: ")
        if answer.lower() == flashCards[flashcard]['answer'].lower():
            print("You answered correctly.")
            score +=1
        else:
            print("Incorrect!!!!")
    print(f"Your final score is {score}")

def del_flashcards():
    id = input("Please enter the id of flashCard that you want to delete: ")
    del flashCards[id]

    with open(FILE_PATH,'w') as file:
        json.dump(flashCards,file, indent=4)
        print("FlashCard deleted successfully")

def main():
    global flashCards
    flashCards = loadcards()
    while True:
        print("Flashcard App")
        print("1. Add Flashcard")
        print("2. View Flashcards")
        print("3. Quiz Mode")
        print("4. Delete Flashcard")
        print("5. Exit")

        choice = input("Enter your choice (1-5): ")
        if choice == '5':
            print("Exited.....")
            break
        if choice == '1':
            add_flashcards()
        if choice == '2':
            view_flashcards()
        if choice == '3':
            quiz_mode()
        if choice == '4':
            del_flashcards()


if __name__ == "__main__":
    main()