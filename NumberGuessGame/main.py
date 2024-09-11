import random

# Generate a random number between 0 and 9
compMove = random.randint(0, 9)

# Start an infinite loop for user guesses
while True:
    # Prompt the user to guess a number and convert input to integer
    move = int(input("Guess a number: "))

    # Check if the guessed number matches the randomly generated number
    if move == compMove:
        print("YOU WON THE GAME!!!!!")
        break  # Exit the loop if the guess is correct
    else:
        print("Wrong Guess, Please guess another number: ")
