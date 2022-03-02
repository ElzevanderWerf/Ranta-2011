"""Replace the GGC symbols with common FOL symbols in a given CSV file with
GGC as source language:
    >python replaceSymbols.py <CSV-file>
"""
import sys
import pandas as pd

csv = sys.argv[1]

df = pd.read_csv(csv, header=0, error_bad_lines=False)
        
def replace_symbols(s):
    dct = {126:172,
       38:8743,
       124:8744,
       36:8594,
       64:8704,
       47:8707}
    return s.translate(dct)
        
df["Source language"] = df["Source language"].map(replace_symbols)

df.to_csv(csv, sep=',')