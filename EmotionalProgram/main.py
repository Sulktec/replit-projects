negations = [
    "no",
    "not",
    "never",
    "none",
    "nobody",
    "nothing",
    "nowhere",
    "can't",
    "cannot",
    "don't",
    "do not",
    "won't",
    "will not",
    "isn't",
    "is not",
    "aren't",
    "are not",
    "didn't",
    "did not"
]

# positive_adjectives = [
#     "nice", "good", "happy", "kind", "fun", "sweet", "cute", "friendly", 
#     "smart", "cool", "brave", "strong", "pretty", "bright", "warm", 
#     "best", "shiny", "awesome", "loving", "funny", "gentle", "fast", 
#     "cheerful", "glad", "helpful", "big", "soft", "clean", "safe", 
#     "calm", "playful", "silly", "lucky", "honest", "healthy", "proud", 
#     "polite", "perfect", "exciting", "joyful", "great", "amazing", 
#     "creative", "generous", "caring", "fantastic", "peaceful", "wise", 
#     "artistic", "wonderful", "beautiful", "grateful", "gentle", 
#     "thoughtful", "radiant", "supportive", "patient", "charming", 
#     "enthusiastic", "vibrant", "imaginative", "adventurous", 
#     "energetic", "delightful", "loyal", "trusting", "careful", 
#     "encouraging", "outgoing", "special", "talented", "understanding", 
#     "fabulous", "kind-hearted", "hardworking", "lovable", "sparkly", 
#     "unique"
# ]


positive_adjectives = [
    "happy", "nice", "kind", "funny", "brave", "strong", "sweet", "smart",
    "good", "silly", "cute", "friendly", "helpful", "loving", "gentle", "fun",
    "cheerful", "playful", "quick", "clean", "bright", "calm", "curious", "busy",
    "proud", "cool", "warm", "joyful", "safe", "healthy", "polite", "clever",
    "excited", "charming", "amazing", "great", "fantastic", "super", "wonderful",
    "awesome", "beautiful", "cute", "energetic", "glowing", "lucky", "smiling",
    "thankful", "peaceful", "caring"
]

# negative_adjectives = [
#     "mean", "bad", "sad", "angry", "yucky", "scary", "ugly", "boring", 
#     "silly", "stupid", "lazy", "messy", "rude", "greedy", "loud", 
#     "rough", "nasty", "grumpy", "sneaky", "dirty", "crying", "mad", 
#     "weak", "sick", "crazy", "foolish", "jealous", "bitter", "lousy", 
#     "fussy", "selfish", "unhappy", "clumsy", "whiny", "noisy", 
#     "pushy", "weird", "awful", "stinky", "naughty", "worried", 
#     "gross", "shy", "hateful", "dull", "dumb", "upset", "lying", 
#     "unkind", "frowning", "hurtful", "tired", "hurt", "rotten", 
#     "gloomy", "unfair", "helpless", "unclean", "uncool", "fearful", 
#     "miserable", "painful", "spiteful", "stubborn", "troubled", 
#     "unfriendly", "harsh", "cruel", "heartless", "mischevious", 
#     "untrusting", "angered", "thoughtless", "sour", "foul", 
#     "impolite", "unloved", "lonely", "terrible", "horrible", "bully", 
#     "grumpy", "moody", "mad", "suck", "worst"
# ]


negative_adjectives = [
    "mean", "bad", "ugly", "stupid", "lazy", "dumb", "fat", "slow", "smelly", "gross", 
    "yucky", "naughty", "dirty", "clumsy", "annoying", "bossy", "greedy", "rude", "silly", 
    "crybaby", "whiny", "fussy", "stinky", "scary", "sneaky", "pushy", "weak", "loud", 
    "jealous", "grumpy", "messy", "noisy", "hurtful", "bitter", "rough", "dark", "sharp", 
    "sour", "cold", "hard", "tired", "hungry", "thirsty", "sick", "hurt", "sticky", 
    "itchy", "boring", "selfish", "cheeky", "idiot", "suck"
]


# program will ask for a statement about it from you.

# user responds with a statement

# If statement has negative, program responds sadly. If positve statement then program responds happily.
# If a statement has both positive and negative statement or has none, then they will respond with a neutral statement. It also does this if there is a word that isn't in its vocabulary.

# If an opposite statement like not is used before a negative or positive words it's meaning becomes opposite. (ex: if it says you're not nice)

# Code starts below \/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ 

#program asks for a statment from the user
print("Note: this programs mental age is 3 years old")
print("\n\nHi, can you say somthing about me?")

#user responds with a statment
userInput = input("\nYour response: ")

#Program asses statment

# first split all words and store into an array
inputArray = (userInput.casefold()).split();

# See if statment negation word

statementScore = 0; # > 0 means positive statent. < 0 means negative statement. = 0 means neutral statement.
negationsValue = 1; # 1 means no negation -1 means yes negation.

# loop inputArray array. In that array loop  negation. Loop pos and neg words in neg for loop.

# negation value will flip its meaning. When neg or pos statement hits negattion value will flip it and then reset back to 1.


for y in inputArray:
    for x in negations:
        # start here
        if y == x.casefold() and negationsValue == 1:
            negationsValue = -1;
        
    for a in positive_adjectives:
        # start here
        
        if y == a.casefold():
            # when word is good then we will add statementScore by (1*negationsValue)
            statementScore = statementScore + (1*negationsValue)
            # reset negation value because the negation has already been used on the word.
            negationsValue = 1;

    for b in negative_adjectives:
        # start here
        # when word is good then we will add statementScore by (-1*negationsValue)
        if y == b.casefold():
            statementScore = statementScore + (-1*negationsValue)
            # reset negation value because the negation has already been used on the word.
            negationsValue = 1;

print("\n\n")

if statementScore == 0:
    print("Um, okay? I'm confused")
elif statementScore > 0:
    print("Thank you! :)")
elif statementScore < 0:
    print("You're very mean! :(")