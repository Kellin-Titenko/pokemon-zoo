import nltk
# nltk.download('punkt')
from nltk.stem.porter import PorterStemmer
import numpy as np

stemer = PorterStemmer()

def tokenize(sentance):
    return nltk.word_tokenize(sentance)

def stem(word):
    return stemer.stem(word.lower())

def bag_of_words(tokenized_sentance, all_words):

    tokenized_sentance= [stem(w) for w in tokenized_sentance]
    bag = np.zeros(len(all_words), dtype=np.float32)
    for idx, w in enumerate(all_words):
        if w in tokenized_sentance: 
            bag[idx] = 1

    return bag






