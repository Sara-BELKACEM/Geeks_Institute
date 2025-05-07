#Exercise1:
3 <= 3 < 9        
#True

3 == 3 == 3
#True

bool(0)
#False

bool(5 == "5")
#False

bool(4 == 4) == bool("4" == "4")
#True

bool(bool(None))
#False

x = (1 == True)
y = (1 == False)
a = True + 4
b = False + 10

print("x is", x)
print("y is", y)
print("a:", a)
print("b:", b)
#x is True
#y is False
#a: 5  (True = 1)
#b: 10 (False = 0)



#Exercise2:
longest = ""
while True:
    sentence = input("Type the longest sentence you can without using the letter 'A': ")
    if "a" in sentence.lower():
        print("Oops! The letter 'a' is not allawed.")
    elif len(sentence) > len(longest):
        longest = sentence
        print("Good job! That's the longest sentence so far.\n")  
    else:
        print("Good try, but not longer than before. Try again!\n")




#Exercise3:
paragraph = """Time management is the ability to use one's time effectively or productively.
            It is essential for success in both personal and professional life. 
            People who manage their time well can accomplish more in less time,
            reduce stress, and achieve their goals more efficiently."""
           
num_caracters = len(paragraph)     

words = paragraph.split()
num_words = len(words)

num_sentences = paragraph.count(".") + paragraph.count("!") + paragraph.count("?")

#Help with AI:
unique_words = set(word.strip('.,!?').lower() for word in words)
num_unique_words = len(unique_words)

print(f"Number of characters: {num_caracters}")
print(f"Number of words: {num_words}")
print(f"Number of sentences: {num_sentences}")
print(f"Number of unique words: {num_unique_words}")

