import pandas as pd

# PREPROCESSING
# 1. Transpose
df = pd.read_csv("exp1results.tsv", sep="\t", header=None).transpose()

# 2. Add column with section numbers
numberOfItems = 45 #TODO change
s = [[n]*5 for n in range(2,numberOfItems+2)]
s = [item for sublist in s for item in sublist] # flattening
sectionIds = [1] + s + [numberOfItems+2, numberOfItems+2]
df.insert(0, "Section", sectionIds)
df.rename(columns={0:"Question"}, inplace=True)

# 3. Change question strings to numbers
questions ={"How would you rate your knowledge of and familiarity with first-order logic?":0,
            "Is the translation correct?":1,
            "If your answer to the previous question was \"no\", explain why the translation is incorrect.":2,
            "Is the translation clear?":3,
            "Is the translation fluent?":4,
            "Do you have a suggestion for a better translation? If so, then write it down here.":5,
            "Give a general structured review of the strengths and weaknesses of the translation system. With which types of sentences does the system have difficulties? For which types of sentences do you believe the system performs sufficiently well?":6,
            "Do you have any final comments?":7
            }
df["Question"] = df["Question"].replace(
    to_replace=questions, value=None)

# 4. Change yes/no (question 1) to booleans 0/1
df[df["Question"]==1] = df[df["Question"]==1].replace(
    to_replace={"No": 0, "Yes": 1}, value=None)

df.to_csv(r'exp1results.csv', sep=',')



# ANALYSIS
# 1. Inter-rater reliability analyses for questions 1, 3 and 4 (correctness, 
# clarity and fluency), using Spearman correlation coefficient.
participants = range(1, len(df.columns) - 1)

#   Question 1
q1responses = [list(df[df["Question"]==1][p]) for p in participants]


#   Question 2
q2responses = [list(df[df["Question"]==2][p]) for p in participants]


#   Question 3
q3responses = [list(df[df["Question"]==3][p]) for p in participants]

# TODO Spearman because scale is ordinal? Otherwise, Pearson
