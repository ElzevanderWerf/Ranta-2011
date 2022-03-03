"""Extract some useful values from the results of experiment 1. There is one
TSV file per response."""

import pandas as pd

responses = 1  # number of responses, TODO change

DFs = [pd.read_csv("1." + str(i) + ".tsv", sep="\t", header=0) for i in range(1,responses+1)]

questions ={1:"What is your gender?",
            2:"How old are you?",
            3:"How would you rate your knowledge of and familiarity with first-order logic?",
            4:"Is the translation correct?",
            5:"If your answer to the previous question was \"no\", explain why the translation is incorrect.",
            6:"Is the translation clear?",
            7:"Is the translation fluent?",
            8:"Do you have a suggestion for a better translation? If so, then write it down here.",
            9:"Give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well?",
            10:"Do you have any final comments?"
            }

# Gender
genders = [df.at[0, questions[1]] for df in DFs]

# Age
ages = [df.at[0, questions[2]] for df in DFs]

# Experience
experiences = [df.at[0, questions[3]] for df in DFs]

# Correctness?

# Clarity
clarities = [df.at[0, questions[6]] for df in DFs] 
#will this return multiple values bc multiple columns have this name?

# Fluency
fluencies = [df.at[0, questions[7]] for df in DFs] 
#will this return multiple values bc multiple columns have this name?