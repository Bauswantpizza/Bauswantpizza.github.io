import random
words = [
    "macisbad",
    "word",
    "hacking",
    "dedsec",
    "backpack",
    "keyboard",
    "ebay",
    "fidget",
    "spinner",
    "amazon",
    "windows",
]

random.shuffle(words)
word = words[0]
solution = "_" * len(word)
tries = 10 * len(word)

while word != solution and tries != 0:
    guess = input("Guess a letter: ")


    for i in range (0, len(word)):
        if word[i] == guess:
            solution = list(solution)
            solution[i] = guess
            solution = "".join(solution)
        tries = tries - 1
    print(solution)
if solution == word:
    print("Correct")
    print("The word was", word)
else :
    print(word)
