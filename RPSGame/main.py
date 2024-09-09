import random

# List of possible moves for the game
moves = ['rock', 'paper', 'scissor']

# Start an infinite loop to keep the game running until the user decides to exit
while True:
    # Get the user's move and convert it to lowercase for uniformity
    usermove = input("Enter your move (Rock/Scissor/Paper): ").lower()

    # Randomly select a move for the computer
    compmove = random.choice(moves)

    # Display the computer's move
    print(compmove)

    # Determine the outcome based on user and computer moves
    if (usermove == 'rock' and compmove == 'scissor'):
        outcome = 'You Win'
    if (usermove == 'rock' and compmove == 'paper'):
        outcome = 'You Lose'
    if (usermove == 'rock' and compmove == 'rock'):
        outcome = 'Game Draw'

    if (usermove == 'scissor' and compmove == 'scissor'):
        outcome = 'Game Draw'
    if (usermove == 'scissor' and compmove == 'paper'):
        outcome = 'You Win'
    if (usermove == 'scissor' and compmove == 'rock'):
        outcome = 'You Lose'

    if (usermove == 'paper' and compmove == 'scissor'):
        outcome = 'You Lose'
    if (usermove == 'paper' and compmove == 'paper'):
        outcome = 'Game Draw'
    if (usermove == 'paper' and compmove == 'rock'):
        outcome = 'You Win'

    # Check if the user wants to exit the game
    if (usermove == 'exit'):
        break

    # Display the outcome of the game
    print(outcome)
