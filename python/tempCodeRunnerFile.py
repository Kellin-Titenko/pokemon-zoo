import nltk
nltk.download('punkt')
from nltk.stem.porter import PorterStemmer

stemer = PorterStemmer()

def tokenize(sentance):
    return nltk.word_tokenize(sentance)

def stem(word):
    return stemer.stem(word.lower())

def bag_of_words(tokenized_sentance, all_words):
    pass


a = 'We accept VISA, Mastercard and Paypal'
print(a)
a = tokenize(a)
print(a)