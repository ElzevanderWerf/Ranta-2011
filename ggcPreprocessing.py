"""Python script to extract all correct formulas from the Grade Grinder
Corpus, with several preprocessing steps."""

import pandas as pd
import re

# Open GGC as DataFrame
ggc_df = pd.read_csv("translationcorpus-1.0.1.csv", 
                     header=0, 
                     error_bad_lines=False)

# Take the canonical form of the formulas that were correct, 
# and remove duplicates (dict.fromkeys() is used for keeping the order):
formulas = list(dict.fromkeys(ggc_df[(ggc_df["status"] == "correct")]["canonical"]))

# Remove NaNs
formulas = [f for f in formulas if not(pd.isnull(f))] 

# Remove formulas with these specific characters or strings
ignore = ["=", "<", ">", "^", "+", "*", "%", "is", "not", "equivalent", 
          ".", "\"", "\\", "0", "1", "2", "3", "4", "5", ":"]
formulas = [f for f in formulas if not any(s in f for s in ignore)]

# Remove formulas with 3-place predicates, e.g. Between(a,b,c)
formulas = [f for f in formulas if re.search(r'\([a-z]+,[a-z]+,[a-z]+\)', f) == None]

# Remove formulas with 4-place predicates, e.g. Gave(a,b,c,d)
formulas = [f for f in formulas if re.search(r'\([a-z]+,[a-z]+,[a-z]+,[a-z]+\)', f) == None]

#put spaces before and after the given characters ,|&$()@/~
formulas = [re.sub(re.compile(r'([,|&$()@/~])'), " \\1 ", f) for f in formulas]
#remove double spaces
formulas = [re.sub(' +', ' ', f) for f in formulas]
#remove beginning and end spaces
formulas = [f[1:] if f[0]==' ' else f for f in formulas]
formulas = [f[:-1] if f[-1]==' ' else f for f in formulas]

#remove formulas longer than a 100 characters (cannot be parsed by GF)
formulas = [f for f in formulas if len(f)<100]

# Write formulas to file with newlines
with(open(r'ggc-formulas.tmp', 'w')) as f:
    f.write('\n'.join(formulas))
f.close()


