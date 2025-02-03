questions = ["1. What is the capital of France?\n   a) Berlin\n   b) Madrid\n   c) Paris\n   d) Rome\n",
             "2. What is 2 + 2?\n   a) 3\n   b) 4\n   c) 5\n d) 6\n",
             "3. Which planet is known as the Red Planet?\n   a) Earth\n   b) Mars\n   c) Jupiter\n   d) Saturn\n",
             "4. Who wrote 'Romeo and Juliet'?\n   a) Charles Dickens\n   b) Mark Twain\n   c) William Shakespeare\n",
             "5. What is the largest ocean on Earth?\n   a) Atlantic Ocean\n   b) Indian Ocean\n   c) Arctic Ocean\n   d) Pacific Ocean\n"]

answers = ["c","b","b","c","d"]
score = 0
for index,question in enumerate(questions):
        ans = input(f"{question}(a/b/c/d)")
        if ans == answers[index]:
                print("You are correct")
                score += 1
        else:
                print("You are incorrect.")



print(f"The final score is {score}/5")