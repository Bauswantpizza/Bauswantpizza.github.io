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
tries = 10

while word != solution and tries != 0:
    guess = input("Guess a letter: ")
    print(solution)
    for i in range (0, len(word)):
        if word[i] == guess:
            solution = list(solution)
            solution[i] = guess
            solution = "".join(solution)
        else:
            tries = tries - 1
print("Correct")
print("The word was", word)
