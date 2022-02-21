"""Python script to combine generated source language (arg0) and 
target language (arg1) files into a csv file (arg2).

To run the script, do:
    >python makecsv.py <source-lang-file> <target-lang-file> <output-csv>"""

import sys
import pandas as pd
from itertools import groupby

(f_lat, f_eng, f_test) = sys.argv[1:]

# IMPORT FILE CONTENTS
with open(f_lat) as f:
    lat = f.read().splitlines() # list of strings
f.close()

with open(f_eng) as f:
    eng = f.read().splitlines() # list of strings
f.close()

eng = [list(g) for k,g in groupby(eng, key=lambda x: x != "") if k] #list of lists of strings
eng = [list(set(l)) for l in eng] # remove duplicate translations   

#set all lists of translation to length 10 (I don't expect more than 10 different tranlations)
def extend_n(l, n):
    l.extend([0] * n)
    return l[:n]
eng = [extend_n(l, 10) for l in eng] 

eng_1 = [l[0] for l in eng]
eng_2 = [l[1] for l in eng]
eng_3 = [l[2] for l in eng]
eng_4 = [l[3] for l in eng]
eng_5 = [l[4] for l in eng]
eng_6 = [l[5] for l in eng]
eng_7 = [l[6] for l in eng]
eng_8 = [l[7] for l in eng]
eng_9 = [l[8] for l in eng]
eng_10 = [l[9] for l in eng]

# EXPORT TO CSV
l = list(zip(lat, eng_1, eng_2, eng_3, eng_4, eng_5, eng_6, eng_7, eng_8, eng_9, eng_10)) # zip the two lists
df = pd.DataFrame(l, columns=["Latex formula", "English translation 1", 
                              "English translation 2", "English translation 3", 
                              "English translation 4", "English translation 5", 
                              "English translation 6", "English translation 7", 
                              "English translation 8", "English translation 9", 
                              "English translation 10"])
csv = df.to_csv(f_test, sep=',')

    

